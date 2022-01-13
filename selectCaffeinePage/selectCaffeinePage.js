module.exports = {
  HTML: function (caffeinList) {
    return `
      <!DOCTYPE html>
        <html lang="en">

        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <body>
          ${caffeinList}
          </body>
        </head>
        <body>
        </body>
      </html>
    `;
  },

  IsCaffeinHtml: function () {
    return `
    
    `;
  },
  CoffeeListHtml: function (coffeeList) {
    return ``;
  },
  CaffeineMenu: function (caffeineList) {
    const hashTagClicked = "";
    return `
    ${caffeineList.map(
      (caffeine) =>
        "<button>" +
        "<a href=" +
        `/${coffee}?coffee=${coffee}>` +
        `${coffee}</a></button>`
    )}
  `;
  },
  DetailCoffeeHtml: function (params) {
    return `
    <h1>${params}</h1>
    `;
  },
  HashTag: function () {
    return ``;
  },
};
