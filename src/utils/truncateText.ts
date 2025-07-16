export function truncateText(text, limit = 65) {
  if (typeof text !== "string") return "";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}
