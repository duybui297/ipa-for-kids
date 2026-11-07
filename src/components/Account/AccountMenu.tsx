import React, { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { Cloud, CloudOff, LogOut, Mail, X, Loader2 } from 'lucide-react';
import { supabase, getAuthRedirectUrl } from '../../lib/supabase';
import type { SyncStatus } from '../../hooks/useCloudSync';

interface AccountMenuProps {
  session: Session | null;
  status: SyncStatus;
  onSignOut: () => void;
}

const STATUS_LABEL: Record<SyncStatus, string> = {
  disabled: '',
  signed_out: '',
  loading: 'Đang tải tiến độ…',
  saving: 'Đang lưu…',
  synced: 'Đã lưu lên mây',
  error: 'Chưa lưu được, sẽ thử lại',
};

export const AccountMenu: React.FC<AccountMenuProps> = ({ session, status, onSignOut }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  if (status === 'disabled') return null;

  if (!session) {
    return (
      <>
        <button
          onClick={() => setIsLoginOpen(true)}
          className="flex items-center gap-1.5 bg-sky-50 hover:bg-sky-100 px-3 py-1.5 rounded-2xl border-2 border-sky-200 text-xs font-bold text-sky-700 transition-colors cursor-pointer"
          title="Phụ huynh đăng nhập để lưu tiến độ của bé lên mây"
        >
          <CloudOff className="w-4 h-4" />
          <span className="hidden sm:inline">Lưu tiến độ</span>
        </button>
        {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
      </>
    );
  }

  const isBusy = status === 'loading' || status === 'saving';
  return (
    <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-2xl border-2 border-emerald-200 text-xs font-bold text-emerald-800">
      {isBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Cloud className="w-4 h-4" />}
      <span className="hidden md:inline max-w-[160px] truncate" title={session.user.email ?? ''}>
        {STATUS_LABEL[status] || session.user.email}
      </span>
      <button
        onClick={onSignOut}
        className="ml-1 p-0.5 rounded-full hover:bg-emerald-100 cursor-pointer"
        title="Đăng xuất"
        aria-label="Đăng xuất"
      >
        <LogOut className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

const LoginModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [isBusy, setIsBusy] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase || !email.trim()) return;
    setIsBusy(true);
    setErrorMessage('');
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: getAuthRedirectUrl() },
    });
    setIsBusy(false);
    if (error) {
      setErrorMessage(`Không gửi được email: ${error.message}`);
      return;
    }
    setStep('code');
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    const token = code.replace(/\D/g, '');
    if (token.length < 6) {
      setErrorMessage('Mã gồm 6 chữ số, bố mẹ kiểm tra lại giúp nhé.');
      return;
    }
    setIsBusy(true);
    setErrorMessage('');
    const { error } = await supabase.auth.verifyOtp({ email: email.trim(), token, type: 'email' });
    setIsBusy(false);
    if (error) {
      setErrorMessage('Mã không đúng hoặc đã hết hạn. Bấm "Gửi lại mã" để nhận mã mới.');
      return;
    }
    onClose(); // onAuthStateChange sẽ tự cập nhật trạng thái đăng nhập
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border-4 border-sky-200 relative animate-scale-up"
      >
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 id="login-modal-title" className="text-lg font-bold text-slate-800 mb-1">
          ☁️ Lưu tiến độ của bé
        </h3>

        {step === 'email' ? (
          <>
            <p className="text-xs text-slate-500 mb-4">
              Dành cho phụ huynh: nhập email để nhận mã đăng nhập 6 số. Sao, huy hiệu và điểm bài tập sẽ được giữ
              lại trên mọi thiết bị. Không cần mật khẩu.
            </p>
            <form onSubmit={handleSendCode} className="flex flex-col gap-3">
              <label className="relative">
                <span className="sr-only">Email phụ huynh</span>
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email.phuhuynh@gmail.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-sky-400 focus:outline-hidden text-sm"
                />
              </label>
              {errorMessage && <p className="text-xs text-rose-600">{errorMessage}</p>}
              <button
                type="submit"
                disabled={isBusy}
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white font-bold rounded-2xl text-sm transition-colors cursor-pointer"
              >
                {isBusy ? 'Đang gửi…' : 'Gửi mã đăng nhập'}
              </button>
            </form>
          </>
        ) : (
          <>
            <p className="text-xs text-slate-500 mb-4">
              Đã gửi mã tới <strong className="text-slate-700">{email}</strong>. Nhập mã 6 số trong email (hoặc bấm
              link trong email nếu có).
            </p>
            <form onSubmit={handleVerifyCode} className="flex flex-col gap-3">
              <input
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                placeholder="••••••"
                aria-label="Mã đăng nhập 6 số"
                className="w-full px-3 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-sky-400 focus:outline-hidden text-center text-2xl tracking-[0.5em] font-black"
                autoFocus
              />
              {errorMessage && <p className="text-xs text-rose-600">{errorMessage}</p>}
              <button
                type="submit"
                disabled={isBusy}
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white font-bold rounded-2xl text-sm transition-colors cursor-pointer"
              >
                {isBusy ? 'Đang kiểm tra…' : 'Đăng nhập'}
              </button>
              <div className="flex justify-between text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setStep('email');
                    setCode('');
                    setErrorMessage('');
                  }}
                  className="text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  ← Đổi email
                </button>
                <button
                  type="button"
                  onClick={handleSendCode}
                  disabled={isBusy}
                  className="text-sky-600 hover:text-sky-800 font-bold cursor-pointer"
                >
                  Gửi lại mã
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
