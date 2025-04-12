const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const waitOn = require("wait-on");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720, //16:9
   
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // use loadURL to run dev mode with Vite
  mainWindow.loadURL("http://localhost:5173");

  // 🛠 open devtools if you need
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
