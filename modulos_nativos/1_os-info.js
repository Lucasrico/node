const os = require("node:os");
console.log("OS: ", os.platform());
console.log("CPUs: ", os.cpus());
console.log("arch :", os.arch());
console.log("Memoria libre: ", os.freemem() / 1024 / 1024);
console.log("uptime: ", os.uptime() / 60 / 60 / 24);