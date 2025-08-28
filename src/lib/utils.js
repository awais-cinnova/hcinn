import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function getInitials(name) {
  if (!name) return '';
  const parts = name.trim().split(' ');
  const initials = parts.slice(0, 2).map(word => word.charAt(0).toUpperCase());
  return initials.join('');
}