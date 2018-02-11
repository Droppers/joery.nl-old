angular.module('blogApp').factory('TimeAgoService', ["$translate", function($translate) {
	return {
		toWords: function(input, allowFuture) { 
			var nowTime = (new Date()).getTime();
			var date = (new Date(input)).getTime();
			allowFuture = allowFuture || false;
			
			var dateDifference = nowTime - date;
			var words;
			
			var seconds = Math.abs(dateDifference) / 1000;
			var minutes = seconds / 60;
			var hours = minutes / 60;
			var days = hours / 24;
			var years = days / 365;
			
			var separator = $translate.instant('date.strings.wordSeparator') === undefined ?  " " : $translate.instant('date.strings.wordSeparator');

			var prefix = $translate.instant('date.strings.prefixAgo');
			var suffix = $translate.instant('date.strings.suffixAgo');

			if (allowFuture) {
				if (dateDifference < 0) {
					prefix = $translate.instant('date.strings.prefixFromNow');
					suffix = $translate.instant('date.strings.suffixFromNow');
				}
			}

			words = seconds < 45 && $translate.instant('date.strings.seconds') ||
			seconds < 90 && $translate.instant('date.strings.minute') ||
			minutes < 45 && $translate.instant('date.strings.minutes', { hours: Math.round(minutes) }) ||
			minutes < 90 && $translate.instant('date.strings.hour') ||
			hours < 24 && $translate.instant('date.strings.hours', { hours: Math.round(hours) }) ||
			hours < 42 && $translate.instant('date.strings.day') ||
			days < 30 && $translate.instant('date.strings.days', { days: Math.round(days) }) ||
			days < 45 && $translate.instant('date.strings.month') ||
			days < 365 && $translate.instant('date.strings.months', { months: Math.round(days / 30) }) ||
			years < 1.5 && $translate.instant('date.strings.year') ||
			$translate.instant('date.strings.years', { years: Math.round(years) });

			
			prefix.replace(/ /g, '');
			words.replace(/ /g, '');
			suffix.replace(/ /g, '');
			
			return prefix+' '+words+' '+suffix+' '+separator;
		}
	};
}]);