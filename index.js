const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

// sourceFile = excel sheet, put the absolute or relative path to the excel file there
const data = excelToJson({
    sourceFile: "./sheet.xlsx",
});

let tableStr =
    "<table class=\"content-table\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th>Rank</th>\n" +
    "      <th>User Name</th>\n" +
    "      <th>Timing</th>\n" +
    "      <th>Score</th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n";

tableStr = data["Sheet1"].reduce((resultStr, currentVal) => {
    return resultStr + "    <tr>\n" + `      <td>${currentVal["A"]}</td>\n` + `      <td>${currentVal["B"]}</td>\n` + `      <td>${currentVal["C"]}</td>\n` + `      <td>${currentVal["D"]}</td>\n` + "    </tr>\n";
}, tableStr);

tableStr +=
    "  </tbody>\n" +
    "</table>"

fs.writeFile("./output.html", tableStr, err => {
    if(err) {
        console.log(err);
    }
});
