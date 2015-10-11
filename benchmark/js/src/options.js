(function() {
  var queryString = window.location.search.substring(1);
  var optionPairs = queryString.split("&");
  var options = {};
  $.each(optionPairs, function(i, optionPair) {
    var key = optionPair.split("=")[0];
    var val = optionPair.split("=")[1];
    options[key] = val;
  });

  console.log("Options: " + JSON.stringify(options));
  truncPerf.benchmark.options = options;
})();
