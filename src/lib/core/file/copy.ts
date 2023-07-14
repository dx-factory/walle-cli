import * as fs from "fs";

export default function loadTemplate(templatePath: string, newFilePath: string, modifications?: any) {
  fs.copyFile(templatePath, newFilePath, (err) => {
    if (err) {
      console.error("An error occurred while copying the template:", err);
      return;
    }

    console.log("New file created successfully!");

    fs.readFile(newFilePath, "utf8", (err, data) => {
      if (err) {
        console.error("An error occurred while reading the new file:", err);
        return;
      }

      // Modify the content of the new file as needed
      console.log(data);

      const modifiedContent = data.replace(modifications.ref, modifications.value);

      console.log(modifiedContent);

      fs.writeFile(newFilePath, modifiedContent, "utf8", (err) => {
        if (err) {
          console.error("An error occurred while modifying the new file:", err);
          return;
        }
        console.log(templatePath, newFilePath);

        console.log("New file modified successfully!");
      });
    });
  });
}
