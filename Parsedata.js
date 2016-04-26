var results = null;


var template = ''+
'<blockquote>' +
'<p class="quote" id="quote-comp">$quote$</p>' +
'<footer class="quote" id="contributor-name">said to $contributor$</footer>' +
'</blockquote>';

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
