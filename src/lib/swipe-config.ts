/**
 * Swipe card configuration constants
 * Physics and threshold settings for the card swipe interactions
 */

// Spring physics configurations
export const SPRING_CONFIG = {
  drag: { damping: 25, stiffness: 200 },      // Responsive during drag
  snapBack: { damping: 30, stiffness: 300 },  // Quick snap back
  exit: { damping: 30, stiffness: 300 },      // Fast exit for snappy feel
};

// Swipe thresholds
export const SWIPE_THRESHOLD = 100;
export const VELOCITY_THRESHOLD = 500;
