module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,css,js,txt,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};