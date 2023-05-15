const path = require("path");
const fs = require("fs");

// Changes build folder from `public` to `build`.
// See https://github.com/gatsbyjs/gatsby/issues/18975#issuecomment-591403950 for more details.

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.rmdirSync(path.join(__dirname, "build"), { recursive: true });
    fs.renameSync(
      path.join(__dirname, "public"),
      path.join(__dirname, "public_dev")
    );
  }
};

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "build"));
  fs.renameSync(
    path.join(__dirname, "public_dev"),
    path.join(__dirname, "public")
  );
};
