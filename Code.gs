//https://www.bpwebs.com/pull-data-from-google-sheets-to-html-table/

function doGet() {
  var template = HtmlService.createTemplateFromFile('Index')
  return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  var spreadSheetId = "1dat4QYQGmHf42ZCkfX5bcKHxCtE-zQjG3ZsFe7LS7Oo"; //CHANGE
  var dataRange     = "Psalms!A2:E"; //CHANGE

  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;

  return values;
}

//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
