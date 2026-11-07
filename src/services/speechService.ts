// US Speech Synthesis & Web Audio Sound Effects Service

const PREFERRED_VOICE_HINTS = ['Natural', 'Google', 'Samantha', 'Zira'];

class SoundService {
  private audioCtx: AudioContext | null = null;
  private cachedVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    // Chrome nạp danh sách giọng đọc bất đồng bộ: getVoices() trả về [] ở lần gọi đầu.
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.addEventListener?.('voiceschanged', () => {
        this.cachedVoice = null;
      });
    }
  }

  private pickUsVoice(): SpeechSynthesisVoice | null {
    if (this.cachedVoice) return this.cachedVoice;
    const voices = window.speechSynthesis.getVoices();
    const isUs = (v: SpeechSynthesisVoice) => /^en[-_]US$/i.test(v.lang);
    this.cachedVoice =
      voices.find((v) => isUs(v) && PREFERRED_VOICE_HINTS.some((hint) => v.name.includes(hint))) ||
      voices.find(isUs) ||
      voices.find((v) => v.lang.toLowerCase().startsWith('en')) ||
      null;
    return this.cachedVoice;
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {
        // Trình duyệt chặn autoplay cho tới khi bé chạm vào trang
      });
    }
    return this.audioCtx;
  }

  // Play standard US English speech using browser SpeechSynthesis
  speakUS(text: string, rate: number = 0.9, pitch: number = 1.05): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        resolve();
        return;
      }

      window.speechSynthesis.cancel(); // Stop any pending speech

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate; // slightly slower for clear kid phonics
      utterance.pitch = pitch; // slightly warm/friendly pitch
      utterance.lang = 'en-US';

      // Ưu tiên giọng en-US chất lượng cao nếu máy có
      const usVoice = this.pickUsVoice();

      if (usVoice) {
        utterance.voice = usVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    });
  }

  // Play a pair of words with comparison pause
  async speakPair(wordA: string, wordB: string, rate: number = 0.8) {
    await this.speakUS(wordA, rate);
    await new Promise((r) => setTimeout(r, 600));
    await this.speakUS(wordB, rate);
  }

  // --- Web Audio Synthetic SFX (Guaranteed zero latency, 100% offline & reliable) ---

  playPop() {
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  playChime() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime + index * 0.08;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    });
  }

  playOmNomChomp() {
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Crunch bite 1
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.13);

    // Follow-up happy chirp
    setTimeout(() => {
      this.playPop();
    }, 120);
  }

  playWrongBoing() {
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.linearRampToValueAtTime(200, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  playError() {
    this.playWrongBoing();
  }

  playAirStop() {
    const ctx = this.getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // Quick burst then abrupt silence
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(160, now);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.setValueAtTime(0.0, now + 0.05); // sharp cut

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // Triumphant fanfare for excellent scores (100% or big milestones)
  playFanfare() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    // Triad arpeggio with celebratory final chord: C5 - E5 - G5 - C6 - E6
    const fanfareNotes = [
      { freq: 523.25, time: 0, dur: 0.12 },
      { freq: 659.25, time: 0.1, dur: 0.12 },
      { freq: 783.99, time: 0.2, dur: 0.14 },
      { freq: 1046.5, time: 0.32, dur: 0.35 },
      { freq: 1318.5, time: 0.32, dur: 0.35 }
    ];

    const now = ctx.currentTime;
    fanfareNotes.forEach(({ freq, time, dur }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startAt = now + time;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startAt);

      gain.gain.setValueAtTime(0.25, startAt);
      gain.gain.exponentialRampToValueAtTime(0.001, startAt + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startAt);
      osc.stop(startAt + dur + 0.05);
    });
  }
}

export const soundService = new SoundService();
