angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
	
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	.state('Lemler.araKabul', {
		url : '/arac-kabul',
		views : {
			'side-menu21' : {
				templateUrl : 'templates/araKabul.html',
				controller : 'araKabulCtrl'
			}
		}
	})

	.state('Lemler.LemDetaylar', {
		url : '/islem-detay',
		views : {
			'side-menu21' : {
				templateUrl : 'templates/LemDetaylar.html',
				controller : 'LemDetaylarCtrl'
			}
		}
	})

	.state('Lemler', {
		url : '/side-menu-islemler',
		templateUrl : 'templates/Lemler.html',
		abstract : true
	})

	.state('oturumA', {
		url : '/oturum-ac',
		templateUrl : 'templates/oturumA.html',
		controller : 'oturumACtrl'
	})

	$urlRouterProvider.otherwise('/oturum-ac')

});
