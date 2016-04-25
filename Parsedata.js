var results = null;
var template = '' +
    '<div class="row spacing">' +
	 '<div class="col-md-8 col-xs-12 quote" id="quote-comp">$quote$</div>' +
	 '<div class="col-md-1 col-xs-1 tilde">~</div>' +
	 '<div class="col-md-3 col-xs-11 quote" id="contributor-name">$contributor$</div>' +
    '</div>';

function getQuoteHTML(quote) {
	return template.replace('$quote$', quote[0])
	               .replace('$contributor$', quote[1]);
}

var config = {
	download: true,
	delimiter: '\t',
	skipEmptyLines: true,
	complete: function (results) {
		var arrayLength= results.data.length;
		var html = '';
		for (var i=0; i < arrayLength; i++) {
		    html += getQuoteHTML(results.data[i]);
		}

		var quoteContainer = document.getElementById('foo-bar');
    	quoteContainer.innerHTML = html;

	},
	error: function (err) {
		console.error("Error while downloading file: ", err);
	}
};
Papa.parse("Sxotes.tsv", config);
// setTimeout(function() { data = "bar"; }, 0);
// console.log("Data: ", );
