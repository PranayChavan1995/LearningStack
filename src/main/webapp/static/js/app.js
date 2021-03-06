'use strict';

var App = angular.module('myApp', [ 'ui.router', 'ngMaterial', 'ngMessages',
		'ng.httpLoader', 'angular-loading-bar', 'ngAnimate' ]);
App.value('restUrl', this.window.location.protocol + '//'
		+ this.window.location.hostname + ':' + this.window.location.port
		+ '/LearningStack/');

App.directive("fileread", [ function() {
	return {
		scope : {
			fileread : "="
		},
		link : function(scope, element, attributes) {
			element.bind("change", function(changeEvent) {
				scope.$apply(function() {
					scope.fileread = changeEvent.target.files[0];
					// or all selected files:
					// scope.fileread = changeEvent.target.files;
				});
			});
		}
	}
} ]);

App.config([
		'$stateProvider',
		'$urlRouterProvider',
		'$locationProvider',
		'$sceProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider,
				$sceProvider) {

			$sceProvider.enabled(false);
			
			$urlRouterProvider.otherwise("/")
			
			$stateProvider.state('logout', {
				url : "/logout",
				templateUrl : 'index/logout',
				controller : "CommonController as cCctr"
			})
			
			$stateProvider.state('home', {
				params : {},
				templateUrl : function($stateParams) {
					return 'index/home';
				},
				controller : "CommonController as cCctr",
			})
			
			$stateProvider.state('home.homepage', {
				url : "/",
				params : {},
				templateUrl : function($stateParams) {
					return 'index/homepage';
				},
				controller : "CommonController as cCctr",
			})
			$locationProvider.html5Mode(true);

		} ]);

App.config([ 'httpMethodInterceptorProvider',
		function(httpMethodInterceptorProvider) {
			// ...
			httpMethodInterceptorProvider.whitelistLocalRequests();
			// ...
		} ])