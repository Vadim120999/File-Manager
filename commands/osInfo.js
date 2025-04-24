import os from "os";

export function getOsInfo(option) {
  switch (option) {
    case "--cpus":
      console.log(`CPU Info:`, os.cpus());
      break;
    case "--homedir":
      console.log(`Home Directory: ${os.homedir()}`);
      break;
    case "--username":
      console.log(`Username: ${os.userInfo().username}`);
      break;
    case "--arch":
      console.log(`Architecture: ${os.arch()}`);
      break;
    default:
      console.log("Invalid OS option");
  }
}
