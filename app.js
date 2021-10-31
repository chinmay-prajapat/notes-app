const fs = require("fs");
fs.writeFileSync("notes.text", `this nodejs project\n`);
fs.appendFileSync("notes.text", `my name is chinmay\n`);
