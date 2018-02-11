angular.module('blogApp').controller('AboutCtrl', ["$translate", "PageService", "BreadcrumbService", "WorkExperience", "EducationExperience", "Skill", function ($translate, PageService, BreadcrumbService, WorkExperience, EducationExperience, Skill) {
    var vm = this;

    vm.experiences = {
        work: [],
        education: []
    };

    BreadcrumbService.set([
        { text: 'navigation.about', state: 'main.about' }
    ]);

    vm.loadExperiences = function() {
        var finishedCount = 0;

        WorkExperience.getAll(function(result) {
            vm.experiences.work = result.experiences;

            if(finishedCount == 1)
                PageService.setFinished();

            finishedCount++;
        });

        EducationExperience.getAll(function(result) {
            vm.experiences.education = result.experiences;

            if(finishedCount == 1)
                PageService.setFinished();

            finishedCount++;
        });
    };

    vm.loadSkills = function() {
        Skill.getSkills(function(result) {
            vm.skills = result.skills;
        });
    };

    vm.loadSkills();
    vm.loadExperiences();
}]);