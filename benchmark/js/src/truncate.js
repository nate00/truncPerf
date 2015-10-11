switch (truncPerf.benchmark.options.lib) {
  case 'trunk8':
    truncPerf.benchmark.truncate = function(els, lines, options) {
      $(els).trunk8({lines: lines});
    };
    break;
  case 'clamp':
    truncPerf.benchmark.truncate = function(els, lines, options) {
      els.forEach(function(el) {
        $clamp(el, {clamp: lines, useNativeClamp: false});
      });
    };
    break;

  // TODO: Standardize these
  case 'truncate.js':
    // Requires options.lineHeight
    truncPerf.benchmark.truncate = function(els, lines, options) {
      $(els).truncate({
        lines: lines,
        // TODO: Add this option
        lineHeight: options.lineHeight
      });
    };
    break;
  case 'autoellipsis':
    // Fits size of container
    truncPerf.benchmark.truncate = function(els, lines, options) {
      $(els).ellipsis();
    };
  case 'jquery-truncate':
    // TODO: what does this one do?
    truncPerf.benchmark.truncate = function(els, lines, options) {
      $(els).truncate({
        multiline: false
      });
    };
  case 'dotdotdot':
    // Requires options.height (or fits size of container)
    truncPerf.benchmark.truncate = function(els, lines, options) {
      $(els).dotdotdot({
        // TODO: Add this option
        height: options.height
      });
    };
  default:
    console.log("Which truncation library?");
    console.log(truncPerf.benchmark.options.lib);
    break;
}
