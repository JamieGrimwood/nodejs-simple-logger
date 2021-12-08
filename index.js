const { yellow, red, green } = require("chalk");

exports = {
  Info: data => {
    console.log(`[INFO] ${data}`);
  },
  
  Warn: data => {
    console.log(yellow("[WARN] ") + data);
  },
  
  Error: data => {
    console.log(red("[ERROR] ") + data);
  },

  Success: data => {
    console.log(green("[SUCCESS] ") + data);
  }
}
