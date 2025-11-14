import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "knowledge.json");
fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

export function readKB() {
  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function writeKB(items) {
  fs.writeFileSync(DB_PATH, JSON.stringify(items, null, 2), "utf-8");
}

export function addKnowledge(item) {
  const items = readKB();
  items.push({ ...item, createdAt: new Date().toISOString() });
  writeKB(items);
}
