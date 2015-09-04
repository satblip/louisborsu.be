require.config({
	paths: {
		'jquery': "jquery",
		'bootstrap': "bootstrap",
		'd3': 'd3',
		'jquery-color': 'jquery-color',
		'pace': 'pace.min',
		'async': 'async',
		'url': 'url.min',
		'colorbox': 'jquery.colorbox-min',
		'get-scrollbar-width': 'jquery.getscrollbarwidth',
		'modernizr': 'modernizr.custom.min',
		'hammer': 'hammer'
	},
	shim: {
		'bootstrap': ['jquery'],
		'd3': {
			exports: 'd3'
		},
		'jquery-color': ['jquery'],
		'get-scrollbar-width': ['jquery'],
		'setup': ['jquery','bootstrap','get-scrollbar-width','modernizr'],
		'resize-text': ['jquery'],
		'bar-chart': ['jquery', 'd3'],
		'donut-chart': ['jquery', 'd3'],
		'progress-chart': ['jquery'],
		'portfolio': ['jquery','url'],
        'colorbox': ['jquery'],
		'css-book': ['jquery', 'hammer'],
		'ticker': ['jquery'],
        'google-maps': ['jquery', 'async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false'],
		'contact': ['jquery']
	},
    waitSeconds: 120
});

requirejs(['js/index.js']);

