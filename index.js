'use strict';
angular.module('myApp',
		[
			"ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"uk.ac.soton.ecs.videogular.plugins.cuepoints",
		]
	)
	.controller('HomeCtrl',
		["$sce", function ($sce) {
			this.config = {
				preload: "none",
				sources: [
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
				],
				theme: {
					url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
				},
				plugins: {
					controls: {
						autoHide: true,
						autoHideTime: 5000
					},
					cuepoints: {
						theme: {
							url: "bower_components/videogular-cuepoints/cuepoints.css",
						},
						points: [
							{ time: 18 },
							{ time: 60 },
						],
					},
				}
			};
		}]
	);
