var app = angular.module('PaidItApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config([
	"$routeProvider",
	"$locationProvider",
	function ($routeProvider, $locationProvider) {
		$routeProvider.when("/", {
			templateUrl: "views/index.html",
		}).otherwise({
			templateUrl: "views/404.html"
		});

		$locationProvider.html5Mode(false).hashPrefix("!");

	}
]);