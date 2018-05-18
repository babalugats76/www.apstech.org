angular.module('showcaseApp', []);

GameListController.$inject = ['$scope'];

angular.module('showcaseApp').controller('GameListController', GameListController);

function GameListController($scope) {
    $scope.games = [
        {
            name: 'Ivan',
            title: 'Bezerk',
            path: 'bezerk',
            avatar: 'ivanj-avatar-398x398.png',
            tagline: 'Fight for your honor'
        },
        {
            name: 'Caleb',
            title: 'Millennium Ship',
            path: 'millennium-ship',
            avatar: 'calebt-avatar-398x398.png',
            tagline: 'Fly or die...'
        },
        {
            name: 'Tinn',
            title: 'To Return Home',
            path: 'to-return-home',
            avatar: 'tinnp-avatar-398x398.png',
            tagline: 'Guide Captain K on his journey home'
        }
  ];
}
