export function handleCommand(cmd: string) {
  if (cmd === "init") {
    console.log("Initializing SHIPLY workspace...");
  } else if (cmd === "deploy") {
    console.log("Deploying workflow...");
  } else {
    console.log("Available commands: init, deploy");
  }
}
