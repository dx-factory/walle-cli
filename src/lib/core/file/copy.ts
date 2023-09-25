import * as fs from "fs";

export default function loadTemplate(templatePath: string, newFilePath: string, modifications?: { ref: string | RegExp; value: string }) {
  console.log({ templatePath, newFilePath, modifications });

  fs.copyFile(templatePath, newFilePath, (err) => {
    if (err) {
      return;
    }

    fs.readFile(newFilePath, "utf8", (err, data) => {
      if (err) {
        return;
      }

      // Modify the content of the new file as needed

      const modifiedContent = data.replace(modifications.ref, modifications.value);

      fs.writeFile(newFilePath, modifiedContent, "utf8", (err) => {
        if (err) {
          console.error("An error occurred while modifying the new file:", err);
          return;
        }
      });
    });
  });
}
