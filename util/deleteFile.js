const fs = require("fs");

exports.deleteFile = (file) => {
  if (file && fs.existsSync(file.path)) {
    fs.unlinkSync(file.path);
  }
};

exports.deleteVideo = (files) => {
  debugger;
  files.forEach((item) => this.deleteFile(item));
};
