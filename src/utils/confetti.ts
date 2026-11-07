import confetti from 'canvas-confetti';
import { soundService } from '../services/speechService';

// Kid-friendly joyful color palettes
const CELEBRATION_COLORS = [
  '#ec4899', // Hot Pink
  '#f43f5e', // Rose
  '#f59e0b', // Amber
  '#fbbf24', // Golden Star
  '#10b981', // Emerald
  '#06b6d4', // Cyan
  '#6366f1', // Indigo
  '#8b5cf6', // Purple
];

const GOLDEN_STAR_COLORS = [
  '#fbbf24', // Gold
  '#f59e0b', // Deep Amber
  '#fde047', // Light Gold
  '#fb7185', // Soft Rose
  '#ffffff', // White Spark
];

/**
 * Trigger celebration confetti when completing an exercise.
 * Scales intensity based on score:
 * - 100%: Spectacular double-cannon fireworks + golden star explosion + fanfare
 * - >= 75%: High-energy rainbow burst + chime
 */
export function triggerExerciseConfetti(scorePercent: number): void {
  if (typeof window === 'undefined') return;

  if (scorePercent === 100) {
    // 100% Perfect Score: Double Cannon Fireworks + Fanfare
    soundService.playFanfare();

    // Cannon 1: Left
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 70,
      origin: { x: 0.05, y: 0.7 },
      colors: CELEBRATION_COLORS,
      shapes: ['star', 'circle'],
      scalar: 1.2,
      zIndex: 9999,
    });

    // Cannon 2: Right
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 70,
      origin: { x: 0.95, y: 0.7 },
      colors: CELEBRATION_COLORS,
      shapes: ['star', 'circle'],
      scalar: 1.2,
      zIndex: 9999,
    });

    // Center burst with golden stars 200ms later
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { x: 0.5, y: 0.55 },
        colors: GOLDEN_STAR_COLORS,
        shapes: ['star'],
        scalar: 1.4,
        zIndex: 9999,
      });
    }, 200);

    // Follow-up sparkle rain
    setTimeout(() => {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { x: 0.5, y: 0.4 },
        colors: CELEBRATION_COLORS,
        shapes: ['circle', 'square'],
        scalar: 0.9,
        zIndex: 9999,
      });
    }, 450);
  } else if (scorePercent >= 75) {
    // Great Score (>= 75%): Colorful celebration blast
    confetti({
      particleCount: 75,
      spread: 85,
      origin: { x: 0.5, y: 0.65 },
      colors: CELEBRATION_COLORS,
      shapes: ['star', 'circle'],
      scalar: 1.1,
      zIndex: 9999,
    });
  }
}

/**
 * Triggered when a star milestone is achieved (e.g., reaching 50, 100, 150, 200 stars)
 */
export function triggerStarMilestoneConfetti(currentStars: number): void {
  if (typeof window === 'undefined') return;

  soundService.playFanfare();

  // Burst of golden stars shooting up from bottom
  confetti({
    particleCount: 80,
    angle: 90,
    spread: 100,
    origin: { x: 0.5, y: 0.8 },
    colors: GOLDEN_STAR_COLORS,
    shapes: ['star'],
    scalar: 1.5,
    zIndex: 9999,
  });

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0.2, y: 0.7 },
      colors: CELEBRATION_COLORS,
      shapes: ['star', 'circle'],
      scalar: 1.1,
      zIndex: 9999,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 0.8, y: 0.7 },
      colors: CELEBRATION_COLORS,
      shapes: ['star', 'circle'],
      scalar: 1.1,
      zIndex: 9999,
    });
  }, 220);
}

/**
 * Triggered when a new badge/achievement is unlocked
 */
export function triggerBadgeUnlockedConfetti(): void {
  if (typeof window === 'undefined') return;

  soundService.playFanfare();

  confetti({
    particleCount: 90,
    spread: 120,
    origin: { x: 0.5, y: 0.5 },
    colors: CELEBRATION_COLORS,
    shapes: ['star', 'circle', 'square'],
    scalar: 1.3,
    zIndex: 10000,
  });
}

/**
 * Triggered when a child finishes a game or gets a high streak (e.g. 5x streak)
 */
export function triggerGameVictoryConfetti(): void {
  if (typeof window === 'undefined') return;

  soundService.playFanfare();

  confetti({
    particleCount: 60,
    angle: 60,
    spread: 60,
    origin: { x: 0.1, y: 0.65 },
    colors: CELEBRATION_COLORS,
    shapes: ['star', 'circle'],
    zIndex: 9999,
  });

  confetti({
    particleCount: 60,
    angle: 120,
    spread: 60,
    origin: { x: 0.9, y: 0.65 },
    colors: CELEBRATION_COLORS,
    shapes: ['star', 'circle'],
    zIndex: 9999,
  });
}
