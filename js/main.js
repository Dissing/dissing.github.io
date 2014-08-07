function emailButton() {
    if (document.getElementById("email-window").className === "email-window-hide") {
        document.getElementById("email-window").className = "email-window-show";
    } else {
        document.getElementById("email-window").className = "email-window-hide";
    }
}

var client = new ZeroClipboard(document.getElementById("clipboard-button"));

client.on( "ready", function( readyEvent ) {

  client.on( "copy", function( event ) {
    mail = "moc.gnissidessal@em";
    event.clipboardData.setData('text/plain',mail.split("").reverse().join(""));
  });

});
