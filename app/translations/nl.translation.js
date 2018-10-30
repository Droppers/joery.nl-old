angular.module('blogApp').config(['$translateProvider', function($translateProvider) {
	$translateProvider.translations('nl', {
		"global": {
			"name": "Joery Droppers"
		},

		"navigation": {
			"home": "Home",
			"about": "Over mij",
			"blog": "Blog",
			"portfolio": "Portfolio"
		},
		
		"home": {
			"introduction": {
				"title": "Hoi, ik ben Joery",
				"description": "Ik ben een web- en applicatieontwikkelaar!",
				"about_me": "Meer over mij"
			},
			"latest_projects": {
				"title": "Mijn projecten",
				"description": "Een overzicht van de laaste websites en software die door mij gemaakt zijn!"
			}
		},
		
		"about": {
			"story": {
				"title": "Over mij",
				"content": "Hier moet ik (ooit) informatie over mijzelf schrijven, als ik tijd heb.\n\n## Markdown test\n\n**Strong** TEST."
			},	
			"skills": "Vaardigheden",
			"work_experience": "Werkervaring",
			"education": "Opleidingen",
			"download_resume": "Download CV"
		},
		
		"blog": {
			"search_posts": "Zoeken naar berichten",
			"categories": "Categorieën",
			"tags": "Tags"
		},
		
		"portfolio": {
			"project_type": "Project categorie"
		},
		
		"footer": {
			"quick_access": "Snelle toegang",
			"latest_posts": "Laatste berichten",
			"popular_tags": "Populaire tags"
		},
		
		"more_information": "Meer informatie",
		"read_more": "Lees meer",

		"category": "Categorie",
		"tag": "Tag",
		"search": "Zoeken",

		"filter": {
			"category": "Categorie",
			"tag": "Tag",
			"search": "Zoek term"
		},

		"categories": {
			"post": {
				"test": "Test categorie",
				"stage": "Stage berichten"
			},
			"project": {
				"website": "Website",
				"software": "Software"
			}
		},

		"no_search_results": "Helaas, er zijn geen resultaten gevonden.",
		
		"date": {
			"months": {
				"0": "Januari",
				"1": "Februari",
				"2": "Maart",
				"3": "April",
				"4": "Mei",
				"5": "Juni",
				"6": "Juli",
				"7": "Augustus",
				"8": "September",
				"9": "Oktober",
				"10": "November",
				"11": "December"
			},
			"strings": {
				"wordSeparator": "",
				"prefixAgo": "",
				"prefixFromNow": "",
				"suffixAgo": " geleden",
				"suffixFromNow": "vanaf nu",
				"seconds": "minder dan een minuut",
				"minute": "ongeveer een minuut",
				"minutes": "{{minutes}} minuten",
				"hour": "ongeveer een uur",
				"hours": "ongeveer {{hours}} uren",
				"day": "een dag",
				"days": "{{days}} dagen",
				"month": "ongeveer een maand",
				"months": "{{months}} maanden",
				"year": "ongeveer een jaar",
				"years": "{{years}} jaren"
			}
		},

		"error": {
			"404": {
				"title": "Pagina niet gevonden",
				"description": "Deze pagina bestaat niet (meer)."
			}
		}
	});
}]);