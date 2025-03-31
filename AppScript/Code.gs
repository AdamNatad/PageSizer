function onOpen() {
  DocumentApp.getUi().createMenu("Adam Natad - Custom Page Sizer")
    .addItem('Start', 'openSizeDialog')
    .addItem('Guide', 'showGuideDialog')
    .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function openSizeDialog() {
  const html = HtmlService.createHtmlOutputFromFile('PageSizeDialog')
    .setWidth(450)
    .setHeight(600);
  DocumentApp.getUi().showModalDialog(html, "Adam Natad - Custom Page Sizer");
}

function showSuccessDialog() {
  const html = HtmlService.createHtmlOutputFromFile('SuccessDialog')
    .setWidth(300)
    .setHeight(170);
  DocumentApp.getUi().showModalDialog(html, 'Page Applied');
}

function showGuideDialog() {
  const html = HtmlService.createHtmlOutputFromFile('GuideDialog')
    .setWidth(600)
    .setHeight(530);
  DocumentApp.getUi().showModalDialog(html, 'Guide for Adam Natad - Custom Page Sizer');
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
