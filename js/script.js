const input = document.querySelector("input");
const output = document.querySelector("img#output");

document.querySelector("button").addEventListener("click", function() {
  QRCode.toDataURL(input.value, function(err, url) {
    if (err) {
      output.src = "";
      return console.error(err);
    }
    output.src = url;
  });
});