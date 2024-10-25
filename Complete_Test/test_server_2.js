var XLSX = require("xlsx");
var request = require("request");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Modified SharePoint direct download link
var link = "https://grendenecombr-my.sharepoint.com/personal/fernandes_gomes_grendene_com_br/_layouts/15/download.aspx?share=ERCGDW604NlGj6nFyQgAkjcBkAkGGTw8Jx8I-_WnGTwCrQ";

//ERCGDW604NlGj6nFyQgAkjcBkAkGGTw8Jx8I-_WnGTwCrQ?e=reDetK
request({ url: link, encoding: null }, function (err, resp, body) {
  if (err) {
    console.error("Error downloading file:", err);
    return;
  }

  // Read the downloaded XLSX file
  try {
    var workbook = XLSX.read(body, { type: "buffer" });

    // Get the first sheet name
    var sheetName = workbook.SheetNames[0];

    // Get the first sheet
    var sheet = workbook.Sheets[sheetName];

    // Convert sheet to JSON
    var data = XLSX.utils.sheet_to_json(sheet);

    // Print the contents of the sheet
    console.log("Sheet Data:", data);
  } catch (error) {
    console.error("Error processing the Excel file:", error);
  }
});
