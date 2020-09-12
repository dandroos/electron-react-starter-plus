const { shell, Menu } = require("electron");
module.exports = (app, win) => {
  const clickHandler = (e) => {
    switch (e.id) {
      case "exit":
        app.quit();
        break;
      case "open-link":
        shell.openExternal(e.url);
        break;
      case "toggle-dev-tools":
        win.webContents.toggleDevTools();
        break;
      default:
        break;
    }
  };

  return Menu.buildFromTemplate([
    {
      label: "Main",
      submenu: [
        {
          label: "Visit GitHub repo",
          click() {
            clickHandler({ id: "open-link", url: "https://github.com" });
          },
        },
        {
          label: "Toggle dev tools",
          accelerator: "CommandOrControl+Shift+I",
          click() {
            clickHandler({ id: "toggle-dev-tools" });
          },
        },
        { type: "separator" },
        {
          label: "Exit",
          accelerator: "CommandOrControl+Q",
          click() {
            clickHandler({ id: "exit" });
          },
        },
      ],
    },
    {
      label: "Documentation",
      submenu: [
        {
          label: "Electron",
          click() {
            clickHandler({
              id: "open-link",
              url: "https://electronjs.org/docs",
            });
          },
        },
        {
          label: "React",
          click() {
            clickHandler({
              id: "open-link",
              url: "https://reactjs.org/docs/getting-started.html",
            });
          },
        },
        {
          label: "React-Redux",
          click() {
            clickHandler({
              id: "open-link",
              url: "https://react-redux.js.org/introduction/quick-start",
            });
          },
        },
        {
          label: "Material-UI",
          click() {
            clickHandler({ id: "open-link", url: "https://material-ui.com" });
          },
        },
        {
          label: "Material Design Icons",
          click() {
            clickHandler({
              id: "open-link",
              url: "https://materialdesignicons.com/",
            });
          },
        },
        {
          label: "Framer Motion",
          click() {
            clickHandler({
              id: "open-link",
              url: "https://www.framer.com/api/motion/",
            });
          },
        },
        {
          label: "NeDB",
          click() {
            clickHandler({
              id: "open-link",
              url: "https://github.com/louischatriot/nedb",
            });
          },
        },
      ],
    },
  ]);
};
