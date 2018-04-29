angular.module('showcaseApp', []);

GameListController.$inject = ['$scope'];

angular.module('showcaseApp').controller('GameListController', GameListController);

function GameListController($scope) {
    $scope.games = [
        {
            name: 'Jason',
            title: 'Half-Blood',
            path: 'half-blood',
            avatar: 'jasons-avatar-398x398.png',
            tagline: 'Half angel, half demon.'
        },
        {
            name: 'Ivan',
            title: 'Bezerk',
            path: 'bezerk',
            avatar: 'ivanj-avatar-398x398.png',
            tagline: 'Fight for your honor.'
        },
        {
            name: 'Elesvan',
            title: 'Save the Bananas',
            path: 'save-the-bananas',
            avatar: 'elesvanp-avatar-597x597.jpg',
            tagline: 'Help Little Wu save the bananas.'
        },
        {
            name: 'Caleb',
            title: 'We\'re Not Dead',
            path: 'were-not-dead',
            avatar: 'calebt-avatar-398x398.png',
            tagline: 'What if zombies were not dead in the first place.'
        },
        {
            name: 'Alejandro',
            title: 'Monopoly Massacre',
            path: 'monopoly-massacre',
            avatar: 'alejandrog-avatar-398x398.png',
            tagline: 'Help Elena return the moon to fantastic times.'
        },
        {
            name: 'Lachlan',
            title: 'Escape the Storm',
            path: 'escape-the-storm',
            avatar: 'lachlanp-avatar-597x597.png',
            tagline: 'Escape the storm to stay alive.'
        },
        {
            name: 'Tinn',
            title: 'To Return Home',
            path: 'to-return-home',
            avatar: 'tinnp-avatar-398x398.png',
            tagline: 'Guide Captain K on his journey home.'
        }
  ];
}
