var ghpages = require('gh-pages');
ghpages.publish('docs', function(err) {
	console.log(err)
});
