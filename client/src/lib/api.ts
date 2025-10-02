export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";
export async function getHealth(): Promise<{ status: string }> { const res = await fetch(`${API_BASE}/api/health`, { cache: "no-store" }); if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); }
export async function listEvents(): Promise<Array<{ id: string; name: string; date: string; track: string; classNames: string[] }>> { const res = await fetch(`${API_BASE}/api/events`, { cache: "no-store" }); if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); }
