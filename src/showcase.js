angular.module('showcaseApp', []);

GameListController.$inject = ['$scope'];

angular.module('showcaseApp').controller('GameListController', GameListController);

function GameListController($scope) {
	$scope.games = [
        {
            name: 'Auja',
            title: 'Save Sebastian',
            path: 'save-sebastian',
            avatar: 'aujap-avatar-398x398.png',
            tagline: 'Help Luna, the cute and adorable alien, overcome tough obstacles while on a mission to save her brother, Sebastian.'
        },
        {
            name: 'Donovan',
            title: 'Alien Underground',
            path: 'alien-underground',
            avatar: 'donovanf-avatar-398x398.png',
            tagline: 'Journey through ancient underground ruins and compete to see how high a score you can get.'
        },
        {
            name: 'Soraya',
            title: 'My B.F.F. Rescuer',
            path: 'my-bff-rescuer',
            avatar: 'sorayap-avatar-398x398.png',
            tagline: 'Help save Ava\'s beloved animals: Jumbo, Ding-Dong, Gabby, and Su-lin.'
        }
  ];
}