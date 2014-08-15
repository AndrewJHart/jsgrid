$(function() {


  var gutter = 2,
      parser = new UAParser(),
      browser = parser.getBrowser();

  $.each($('[desktop]'), function(i) {


    if(browser.name === 'Firefox') {
      document.styleSheets[0].insertRule('[desktop]:nth-child('+ (i + 1) +') { width: '+ eval($(this).attr('desktop')) * 100 + '%', 0);
    } else {
      document.styleSheets[0].addRule('[desktop]:nth-child('+ (i + 1) +')', 'width: '+ eval($(this).attr('desktop')) * 100 + '%'); // works in ie8+
    }


  });

  $('[desktop]').ready(function() {
    if(browser.name === 'Firefox') {
      document.styleSheets[0].insertRule('[desktop] { margin-right: '+ gutter +'rem', 0);
      document.styleSheets[0].insertRule('[desktop]:last-child { margin-right: 0', 0);
    } else {
      document.styleSheets[0].addRule('[desktop]', 'margin-right: '+ gutter + 'rem');
      document.styleSheets[0].addRule('[desktop]:last-child', 'margin-right: 0');
    }
  });


});
