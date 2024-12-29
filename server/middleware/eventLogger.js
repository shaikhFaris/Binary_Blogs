import fs from "fs";
import * as fsPromises from "node:fs/promises";
import path from "node:path";

const __dirname = import.meta.dirname;

const reqLogger = async (logMsg) => {
  if (!fs.existsSync(path.resolve(__dirname, "..", "logs")))
    await fsPromises
      .mkdir(path.resolve(__dirname, "..", "logs"))
      .then(() => console.log("logs directory created sucessfully\n"))
      .catch((e) => {
        console.log("falied to create logs directory\n" + e);
        return;
      });

  try {
    await fsPromises.appendFile(
      path.resolve(__dirname, "..", "logs", "reqLogs.txt"),
      logMsg
    );
  } catch (error) {
    console.log(error);
  }
};

const reqLogger_middleware = (req, res, next) => {
  const dateTime = new Date().toUTCString();
  const logMsg = `${dateTime}\t${req.ip}\t${req.method}\t${req.headers.origin}\t${req.url}\n`;
  reqLogger(logMsg);
  console.log(`${req.method}\t${req.headers.origin}\t${req.url}`);
  next();
};

export { reqLogger_middleware };
