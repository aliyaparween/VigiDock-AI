import api from "./api";

export async function createScan(payload) {
  const { data } = await api.post("/scans", payload);
  return data;
}

export async function getScans() {
  const { data } = await api.get("/scans");
  return data;
}

export async function getScan(scanId) {
  const { data } = await api.get(`/scans/${scanId}`);
  return data;
}