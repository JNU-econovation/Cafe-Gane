module.exports = {
  Start: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>카페가네</title>
        <link href="../startPage/startPage.css" rel="stylesheet">
        <script src="../startPage/fullpage.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
      </head>
      
      <body>
        <div class="header">
          <a href="./startpage.html">
            <img class="mainlogo" src="../image/mainlogo.png">
          </a>
        </div>
        <div id="full-page">
      
      
          <div class="section s0">
            <div class="content">
            <div class="wrap">
              <p id="dynamic" class="lg-text">
              </p>
              <p class="sm-text">
                당신에게 카페를 선물합니다.
              </p>
            
              <div class="startback">
                <span class="start">
                  <a href="../selectPage1/selectPage1.html" style="text-decoration: none; color: white;">
                    START
                  </a>
      
                </span>
              </div>
              
            </div>
            
              <img class="illustrate" src="../image/mainillustrate.png" >
        
          </div>
          </div>
      
          <div class="section s1">
            <h2>
              카페가네 기획 소개
            </h2>
            <h3>
              음료를 기반으로 카페를 찾아주는 웹페이지
            </h3>
          </div>
      
          <div class="section s2">
            <h2>
              김가네 소개
            </h2>
          </div>
      
        </div>
      
        <script src="./startPage.js">
        </script>
        <script>
          new fullpage('#full-page', {
            licenseKey: '',
            sectionsColor: ['rgb(173, 162, 152)', 'rgb(87, 74, 65)', 'rgb(125, 121, 118)'],
            navigation: true,
            navigationTooltips: ['StartPage', 'About', 'About2'],
            scrollingSpeed: 1500,
            onLeave: function (origin, destination, direction) {
              if (origin.index == 1) {
                $('.s1 h3').hide();
              }
            },
            afterLoad: function (origin, destination, direction) {
              if (destination.index == 1) {
                $('.s1 h3').show();
              }
            }
          });
        </script>
      </body>
  
  </html>`,
};