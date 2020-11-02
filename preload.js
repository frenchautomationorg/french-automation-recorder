if ( typeof module === "object" && typeof module.exports === "object" ) {
  	// set jQuery in `module`
  	module.$ = module.jQuery = module.exports;
} else {
  	// set jQuery in `window`
	window.$ = window.jQuery = module.exports;
}
