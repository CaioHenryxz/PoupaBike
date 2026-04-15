export function getWhatsAppLink(message: string) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}
