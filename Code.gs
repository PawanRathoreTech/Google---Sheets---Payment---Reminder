function sendPaymentReminders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    var name = data[i][1];
    var email = data[i][2];
    var amount = data[i][3];
    var dueDate = data[i][4];

    if (email && email.toString().trim() !== "") {
      var subject = "Payment Reminder";

      var message =
        "Dear " + name + ",\n\n" +
        "Your Installment amount of RS " + amount +
        " is Pending till Date " + dueDate + ".\n" +
        "Please pay your installment ASAP to avoid unwanted charges.\n\n" +
        "Regards,\n" +
        "Pawan Rathore";

      MailApp.sendEmail(email, subject, message);
    }
  }

  SpreadsheetApp.getUi().alert("All reminder emails sent!");
}
