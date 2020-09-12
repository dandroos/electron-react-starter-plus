const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const menu = require("./electron/menu");
const db = require("./electron/neDB");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    title: "electron-react-starter-plus",
  });

  // and load the index.html of the app.
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  win.on("page-title-updated", (evt) => {
    evt.preventDefault();
  });
  win.webContents.toggleDevTools();
  Menu.setApplicationMenu(menu(app, win));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
//
ipcMain.on("add-user-story", (e, { description }) => {
  e.preventDefault();
  const doc = {
    story: description,
    created_at: new Date(),
  };
  db.insert(doc, (err, newDoc) => {
    // TODO: error handling
    return;
  });
});

ipcMain.on("remove-story", (e, { id }) => {
  e.preventDefault();
  db.remove({ _id: id });
});

ipcMain.handle("request-user-stories", (e) => {
  return new Promise((res, rej) => {
    db.find({}, (err, docs) => {
      if (err) rej(err);
      docs.sort((a, b) => {
        return b.created_at - a.created_at;
      });
      res(docs);
    });
  });
});
