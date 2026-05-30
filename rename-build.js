import fs from "fs-extra";

async function run() {
  await fs.copy("dist/index.html", "dist/index.php");
  if (fs.existsSync("api")) {
        fs.cpSync("api", "dist/api", { recursive: true });
    } 

  fs.copyFileSync(".htaccess", "dist/.htaccess");

  // optional: delete original HTML
  await fs.remove("dist/index.html");
  console.log("✔ Build converted to index.php");
}

run();