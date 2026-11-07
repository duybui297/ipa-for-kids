import { useEffect, useRef, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { ProgressSnapshot, isAppProgress, isMascotId } from '../types/progress';
import { isNumberRecord } from './usePersistentState';
import { mergeSnapshots, snapshotsEqual } from '../utils/progressMerge';

export type SyncStatus = 'disabled' | 'signed_out' | 'loading' | 'saving' | 'synced' | 'error';

const TABLE = 'learning_progress';
const SAVE_DEBOUNCE_MS = 1500;

interface RemoteRow {
  progress: unknown;
  exercise_best_stars: unknown;
  mascot: unknown;
}

function parseRemote(row: RemoteRow, fallback: ProgressSnapshot): ProgressSnapshot {
  return {
    progress: isAppProgress(row.progress) ? row.progress : fallback.progress,
    exerciseBestStars: isNumberRecord(row.exercise_best_stars) ? row.exercise_best_stars : {},
    mascot: isMascotId(row.mascot) ? row.mascot : fallback.mascot,
  };
}

/**
 * Đồng bộ tiến độ với Supabase khi phụ huynh đăng nhập.
 * - Lúc đăng nhập: tải dữ liệu cloud, gộp với dữ liệu trên máy (không mất thành tích), áp dụng vào app.
 * - Sau đó: mỗi khi tiến độ thay đổi, lưu lên cloud (debounce).
 */
export function useCloudSync(snapshot: ProgressSnapshot, applySnapshot: (next: ProgressSnapshot) => void) {
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<SyncStatus>(supabase ? 'signed_out' : 'disabled');
  const snapshotRef = useRef(snapshot);
  snapshotRef.current = snapshot;
  const hydratedUserRef = useRef<string | null>(null);
  const lastSavedRef = useRef<ProgressSnapshot | null>(null);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession));
    return () => data.subscription.unsubscribe();
  }, []);

  const save = async (userId: string, data: ProgressSnapshot) => {
    if (!supabase) return;
    setStatus('saving');
    const { error } = await supabase.from(TABLE).upsert({
      user_id: userId,
      progress: data.progress,
      exercise_best_stars: data.exerciseBestStars,
      mascot: data.mascot,
      updated_at: new Date().toISOString(),
    });
    if (error) {
      console.error('Lưu tiến độ lên Supabase thất bại', error);
      setStatus('error');
      return;
    }
    lastSavedRef.current = data;
    setStatus('synced');
  };

  // Tải + gộp dữ liệu khi có phiên đăng nhập mới
  const userId = session?.user.id ?? null;
  useEffect(() => {
    if (!supabase) return;
    if (!userId) {
      hydratedUserRef.current = null;
      lastSavedRef.current = null;
      setStatus('signed_out');
      return;
    }
    if (hydratedUserRef.current === userId) return;

    let cancelled = false;
    setStatus('loading');
    (async () => {
      const { data, error } = await supabase
        .from(TABLE)
        .select('progress, exercise_best_stars, mascot')
        .eq('user_id', userId)
        .maybeSingle();
      if (cancelled) return;
      if (error) {
        console.error('Tải tiến độ từ Supabase thất bại', error);
        setStatus('error');
        return;
      }
      const local = snapshotRef.current;
      const merged = data ? mergeSnapshots(local, parseRemote(data as RemoteRow, local)) : local;
      hydratedUserRef.current = userId;
      if (!snapshotsEqual(merged, local)) applySnapshot(merged);
      await save(userId, merged);
    })();

    return () => {
      cancelled = true;
    };
    // Chỉ chạy lại khi đổi tài khoản; applySnapshot từ App luôn dùng setState nên an toàn
  }, [userId]);

  // Lưu lên cloud mỗi khi tiến độ thay đổi
  useEffect(() => {
    if (!supabase || !userId || hydratedUserRef.current !== userId) return;
    if (lastSavedRef.current && snapshotsEqual(lastSavedRef.current, snapshot)) return;
    const timer = setTimeout(() => {
      void save(userId, snapshot);
    }, SAVE_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [snapshot, userId]);

  const signOut = async () => {
    await supabase?.auth.signOut();
  };

  return { session, status, signOut, isEnabled: supabase !== null };
}
