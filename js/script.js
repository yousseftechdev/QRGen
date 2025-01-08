const input = document.querySelector("input");
const output = document.querySelector("img#output");
const colorInput = document.querySelector("#color");
const sizeInput = document.querySelector("#size");
const downloadButton = document.querySelector("#download");
const bgColorInput = document.querySelector("#bgColor");


// document.querySelector("button").addEventListener("click", function() {
//   const options = {
//     color: {
//       dark: colorInput.value,
//       light: "#FFFFFF"
//     },
//     width: parseInt(sizeInput.value)
//   };

//   QRCode.toDataURL(input.value, options, function(err, url) {
//     if (err) {
//       output.src = "";
//       return console.error(err);
//     }
//     output.src = url;
//     downloadButton.href = url;
//     downloadButton.style.display = "block";
//   });
// });

input.addEventListener("keyup", function() {
  const options = {
    color: {
      dark: colorInput.value,
      light: bgColorInput.value
    },
    width: parseInt(sizeInput.value)
  };

  QRCode.toDataURL(input.value, options, function(err, url) {
    if (err) {
      output.src = "";
      return console.error(err);
    }
    output.src = url;
    downloadButton.href = url;
    downloadButton.style.display = "block";
  });
});