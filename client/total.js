const {
  makeMenuListHTML,
  makeMenuBodyHTML,
} = require("../client/Menu/MakeMenuHTML.js");
const {
  makeShowCafeBodyHTML,
  makeHashTagListHTML,
  makeCafeListHTML,
  makeBeforeSelectCafeHTML,
  makeWhatSelectHTML,
  makeSelectCafeHTML,
} = require("../client/ShowCafe/MakeShowCafeHTML.js");

module.exports = {
  makeMenuListHTML,
  makeMenuBodyHTML,
  makeShowCafeBodyHTML,
  makeHashTagListHTML,
  makeCafeListHTML,
  makeBeforeSelectCafeHTML,
  makeWhatSelectHTML,
  makeSelectCafeHTML,
  makeBodyHTML: function (body) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>카페가네</title>
      <link href="../Menu/Menu.css" rel="stylesheet">
      <link href="../ShowCafe/ShowCafe.css" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet">
      <script defer src="../Menu/Menu.js"></script>
      <script defer src="../ShowCafe/ShowCafe.js"></script>
    </head>
    <body>
      ${body}
    </body>
    </html>
    `;
  },
};