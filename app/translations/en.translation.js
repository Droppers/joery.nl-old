angular.module('blogApp').config(['$translateProvider', function($translateProvider) {
	$translateProvider.translations('en', {
		"global": {
			"name": "Joery Droppers"
		},

		"navigation": {
			"home": "Home",
			"about": "About",
			"blog": "Blog",
			"portfolio": "Portfolio"
		},
		
		"home": {
			"introduction": {
				"title": "Hey, I am Joery",
				"description": "I am a web- and software developer!",
				"about_me": "More about me"
			},
			"latest_projects": {
				"title": "My projects",
				"description": "A list of websites and software made by me"
			}
		},
		
		"about": {
			"story": {
				"title": "About me",
				"content": "Information about me probably\n\n## Markdown test\n\n**Strong** also works, cool that markdown actually works. The only thing I need to do is, write actual content."
			},	
			"skills": "Skills",
			"work_experience": "Work experience",
			"education": "Education",
			"download_resume": "Download CV"
		},
		
		"blog": {
			"search_posts": "Search for posts",
			"categories": "Categories",
			"tags": "Tags"
		},
		
		"portfolio": {
			"project_type": "Project category"
		},
		
		"footer": {
			"quick_access": "Quick access",
			"latest_posts": "Latest posts",
			"popular_tags": "Popular tags"
		},
		
		"more_information": "More information",
		"read_more": "Read more",

		"category": "Category",
		"tag": "Tag",
		"search": "Search",

		"filter": {
			"category": "Category",
			"tag": "Tag",
			"search": "Search term"
		},

		"category": {
			"post": {
				"test": "Test category",
				"stage": "Stage posts"
			},
			"project": {
				"website": "Website",
				"software": "Software"
			}
		},

		"no_search_results": "Sorry, no results were found.",
		
		"date": {
			"months": {
				"0": "January",
				"1": "February",
				"2": "March",
				"3": "April",
				"4": "May",
				"5": "June",
				"6": "July",
				"7": "August",
				"8": "September",
				"9": "October",
				"10": "November",
				"11": "December"
			},
			"strings": {
				"wordSeparator": "",
				"prefixAgo": "",
				"prefixFromNow": "",
				"suffixAgo": " ago",
				"suffixFromNow": "from now",
				"seconds": "less than a minute",
				"minute": "about a minute",
				"minutes": "{{minutes}} minutes",
				"hour": "about an hour",
				"hours": "about {{hours}} hours",
				"day": "a day",
				"days": "{{days}} days",
				"month": "about a month",
				"months": "{{months}} months",
				"year": "about a year",
				"years": "{{years}} years"
			}
		},

		"error": {
			"404": {
				"title": "Page not found",
				"description": "This page does not exist (anymore)."
			}
		}
	});
}]);