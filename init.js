import fs from "fs";

export function initProject(name = "shiply-project") {
  fs.mkdirSync(name, { recursive: true });
  console.log("🚢 SHIPLY project initialized:", name);
}
