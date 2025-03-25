function onOpen() {
  DocumentApp.getUi().createMenu("Adam Natad - Page Sizer")
    .addItem('Set Page Size + Margins', 'openSizeDialog')
    .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function openSizeDialog() {
  const html = HtmlService.createHtmlOutputFromFile('PageSizeDialog')
    .setWidth(450)
    .setHeight(600);
  DocumentApp.getUi().showModalDialog(html, "Adam Natad - Page Sizer");
}

function setCustomPageSizeAndMargins(data) {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  const factor = data.unit === 'cm' ? 28.3465 : 72;

  const widthPts = data.width * factor;
  const heightPts = data.height * factor;

  const marginTop = data.marginTop * factor;
  const marginBottom = data.marginBottom * factor;
  const marginLeft = data.marginLeft * factor;
  const marginRight = data.marginRight * factor;

  body.setPageWidth(widthPts);
  body.setPageHeight(heightPts);
  body.setMarginTop(marginTop);
  body.setMarginBottom(marginBottom);
  body.setMarginLeft(marginLeft);
  body.setMarginRight(marginRight);
}
