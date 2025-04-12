const { spawn } = require("child_process");
const waitOn = require("wait-on");

// 1. run Vite dev serve  (React)
const viteProcess = spawn("yarn", ["vite"], {
  // cwd: "./src", // nếu index.html nằm trong ./src
  stdio: "inherit",
  shell: true,
});

// 2. wait for Vite to start
waitOn({ resources: ["http://localhost:5173"] })
  .then(() => {
    spawn("yarn", ["start"], {
      stdio: "inherit",
      shell: true,
    });
  })
  .catch((err) => {
    console.error("Failed to wait for Vite to start:", err);
    process.exit(1);
  });
