(function(){
  var paragraphs = truncPerf.benchmark.options.paragraphs;
  var lines =      truncPerf.benchmark.options.lines;
  var characters = truncPerf.benchmark.options.characters;

  var $container = $('.paragraph-container');
  for (var p = 0; p < paragraphs; p++) {
    var paragraph = "";
    for (var l = 0; l < lines; l++) {
      var line = "";
      for (var c = 0; c < characters; c++) {
        line += "z";
      }
      paragraph += line + "\n";
    }
    var $paragraph = $("<p class='truncate-me'></p>").text(paragraph);
    $container.append($paragraph);
  }
})();
