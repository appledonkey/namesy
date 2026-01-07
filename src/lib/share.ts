import { haptics } from "./haptics";
import { toast } from "./notify";

/**
 * Copy text to clipboard
 * @returns true if successful
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!text.trim()) return false;

  try {
    await navigator.clipboard.writeText(text);
    haptics.save();
    toast.success("Copied to clipboard");
    return true;
  } catch {
    toast.error("Failed to copy");
    return false;
  }
}

/**
 * Share a name using Web Share API or fallback to clipboard
 * @returns true if shared/copied successfully
 */
export async function shareName(fullName: string): Promise<boolean> {
  if (!fullName.trim()) return false;

  haptics.tap();

  const shareData = {
    title: "namesy",
    text: `What do you think of the name "${fullName}"?`,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return true;
    } else {
      // Fallback to clipboard
      return copyToClipboard(fullName);
    }
  } catch (err) {
    // User cancelled share
    if ((err as Error).name === "AbortError") {
      return false;
    }
    toast.error("Failed to share");
    return false;
  }
}
