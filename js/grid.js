$(function() {

  var grid = {
    gutter: 1,
    breakpoints: {
      desktop: 1200,
      tablet: 800,
      mobile: 500
    }
  };

  var setGrid = function() {


    $.each($('[nm]'), function(i) {
      var i = i + 1,
          g = $(this).attr('g');

      if($(window).width() > grid.breakpoints.desktop) {

        document.styleSheets[0].addRule('[nm]', 'margin-left: -'+ (grid.gutter / 2) +'rem; margin-right: -'+ (grid.gutter / 2) +'rem');
        $('[d]').ready(function() {
          document.styleSheets[0].addRule('[d]', 'margin-left: '+ (grid.gutter / 2) +'rem; margin-right: '+ (grid.gutter / 2) +'rem');
        });
        $.each($('[d]'), function(i) {
          document.styleSheets[0].addRule('[d]:nth-child('+ (i + 1) +')', 'width: calc('+ (eval($(this).attr('d')) * 100) + '% - '+ grid.gutter +'rem)');
        });

        if(g !== '') {
          document.styleSheets[0].addRule('[nm]', 'margin-left: -'+ (g / 2) +'%; margin-right: -'+ (g / 2) +'%');
          $('[d]').ready(function() {
            document.styleSheets[0].addRule('[d]', 'margin-left: '+ (g / 2) +'%; margin-right: '+ (g / 2) +'%');
          });
          $.each($('[d]'), function(i) {
            document.styleSheets[0].addRule('[d]:nth-child('+ (i + 1) +')', 'width: '+ ((eval($(this).attr('d')) * 100) - (g)) + '%');
          });
        }

      } else if($(window).width() > grid.breakpoints.tablet) {

        document.styleSheets[0].addRule('[nm]', 'margin-left: -'+ (grid.gutter / 2) +'rem; margin-right: -'+ (grid.gutter / 2) +'rem');
        $('[t]').ready(function() {
          document.styleSheets[0].addRule('[t]', 'margin-left: '+ (grid.gutter / 2) +'rem; margin-right: '+ (grid.gutter / 2) +'rem');
        });
        $.each($('[t]'), function(i) {
          document.styleSheets[0].addRule('[t]:nth-child('+ (i + 1) +')', 'width: calc('+ (eval($(this).attr('t')) * 100) + '% - '+ grid.gutter +'rem)');
        });

        if(g !== '') {
          document.styleSheets[0].addRule('[nm]', 'margin-left: -'+ (g / 2) +'%; margin-right: -'+ (g / 2) +'%');
          $('[t]').ready(function() {
            document.styleSheets[0].addRule('[t]', 'margin-left: '+ (g / 2) +'%; margin-right: '+ (g / 2) +'%');
          });
          $.each($('[t]'), function(i) {
            document.styleSheets[0].addRule('[t]:nth-child('+ (i + 1) +')', 'width: '+ ((eval($(this).attr('t')) * 100) - (g)) + '%');
          });
        }

      } else {

        document.styleSheets[0].addRule('[nm]', 'margin-left: -'+ (grid.gutter / 2) +'rem; margin-right: -'+ (grid.gutter / 2) +'rem');
        $('[m]').ready(function() {
          document.styleSheets[0].addRule('[m]', 'margin-left: '+ (grid.gutter / 2) +'rem; margin-right: '+ (grid.gutter / 2) +'rem');
        });
        $.each($('[m]'), function(i) {
          document.styleSheets[0].addRule('[m]:nth-child('+ (i + 1) +')', 'width: calc('+ (eval($(this).attr('m')) * 100) + '% - '+ grid.gutter +'rem)');
        });

        if(g !== '') {
          document.styleSheets[0].addRule('[nm]', 'margin-left: -'+ (g / 2) +'%; margin-right: -'+ (g / 2) +'%');
          $('[m]').ready(function() {
            document.styleSheets[0].addRule('[m]', 'margin-left: '+ (g / 2) +'%; margin-right: '+ (g / 2) +'%');
          });
          $.each($('[m]'), function(i) {
            document.styleSheets[0].addRule('[m]:nth-child('+ (i + 1) +')', 'width: '+ ((eval($(this).attr('m')) * 100) - (g)) + '%');
          });
        }

      }
    });

  }

  setGrid();

  var didResize = false;
  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      didResize = false;
      setGrid();
    }
  }, 500);

});
