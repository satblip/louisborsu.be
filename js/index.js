 define(['jquery', 'hammer', 'bootstrap', 'setup', 'resize-text', 'bar-chart', 'donut-chart', 'progress-chart', 'jquery-color', 'portfolio', 'ticker', 'contact'], function($, Hammer) {
//	define(['min'], function($, Hammer) { 
	$(function() {
		window.Hammer = Hammer;

		// Get Page title regarding language
		var getPageTitle = function(){
			if (lang == "fr"){
				return "Louis Borsu - Développeur polyvalent";
			} else if (lang == "nl"){
				return "Louis Borsu - Veelzijdige Developer";
			} else {
				return "Louis Borsu - Versatile Developer";
			}
		};

		// Get language from Browser
		var lang;
		var browserLang = navigator.language || navigator.userLanguage;
		if (browserLang == "fr" || browserLang == "en" || browserLang == "nl"){
			lang = browserLang;
		} else {
			lang = "en";
		}

		// language Switcher
		function switchLanguage(element,language){
			changeLanguage(language);
			element.parent().parent().find('.lang').removeClass('active');
			element.parent().addClass('active');
			ga('send', 'event', 'lang', language);
			$('.span-text').resize();
			lang = language;
			$('body').data('lang', language);
			document.title = getPageTitle();
		}

		// Primary Color
		var primaryColor = $.Color($('.nav-toggle').css('background-color'));


		
		// Nav Settings Color
		var navSettings = {
				navPosition: 'top',
				offCanvasAnimation: 'rotate-reveal',
				verticalNavWidth: '220px',
				verticalNavShowIcons: true,
				navScrollingAnimationDuration: 300,
			},

			welcomeSettings = {
				fixFirstSection: true,
			},

			barChartSettings = {
				labelFontColor: primaryColor.toHexString(),
				labelFontSize: 12,
				labelFontWeight: 400,
				defaultBarFillColor: primaryColor.transition('#ffffff', 0.85).toHexString(),
				barVerticalSpacing: 3,
			},

			donutChartSettings = {
				paddingLeft: 150,
				labelFontSize: 12,
				labelFontWeight: 700,
				labelFontColor: '#666',
				arcStrokeColor: '#fff',
				arcStrokeWidth: 3,
				defaultArcFillColor: primaryColor.toHexString(),
				arcInnerRadiusPercent: 0,
				showLabel: true,
				showPercentage: false,
				heightToWidthRatio: 1/2,
			},

			progressChartSettings = {
				defaultColor: primaryColor.toHexString(),
				labelFontColor: '#666',
				labelWidth: 60,
			},

			portfolioSettings = {
				heightToWidthRatio: 3/4,
				minThumbnailWidth: 220,
				itemDetailsDropCap: true,
				animationDuration: 230,
				autoScroll: true,
			};

		// Setup
		$('body').setup($.extend({}, navSettings, welcomeSettings));

		// Charts
		$('.bar-chart').barChart(barChartSettings);
		$('.progress-chart').progressChart(progressChartSettings);
		$('.donut-chart').donutChart(donutChartSettings);

		// Portfolio
		$('#portfolio').portfolio(portfolioSettings);

		// Resize text
		setTimeout(function(){
			$('.span-text').resizeText();
			$('.ticker').ticker();

			// Preloader
			$(document).ready(function () {
				$('.preloader').animate({
					opacity: 0},
					400, function() {
					$(this).hide();
				});
			});
		}, 200);

		// Lang EN
		$('#lang_en').on('click', function(){
			switchLanguage($(this),'en');
		});

		// Lang FR
		$('#lang_fr').on('click', function(){
			switchLanguage($(this),'fr');
		});

		// Lang NL
		$('#lang_nl').on('click', function(){
			switchLanguage($(this),'nl');
		});

		// Force language on load
		ga('send', 'event', 'auto_lang', lang);
		switchLanguage($('#lang_'+lang),lang);

		// Change page title regarding language
		document.title = getPageTitle();

	});
});