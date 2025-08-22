export function getRelativeTime(timestamp: string): string {
  const now = new Date();
  const date = new Date(timestamp);
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);

  if (diffSec < 60) return "Hace un instante";
  if (diffMin < 60) return `Hace ${diffMin} minuto${diffMin > 1 ? "s" : ""}`;
  if (diffHour < 24) return `Hace ${diffHour} hora${diffHour > 1 ? "s" : ""}`;
  if (diffDay < 30) return `Hace ${diffDay} día${diffDay > 1 ? "s" : ""}`;
  return `Hace ${diffMonth} mes${diffMonth > 1 ? "es" : ""}`;
}
