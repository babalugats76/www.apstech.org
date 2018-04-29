var disqus_config = function () {
    this.page.url = "http://www.apstech.org/", this.page.identifier = "gameshowcase18"
};
! function () {
    var e = document,
        t = e.createElement("script");
    t.src = "//www-apstech-org.disqus.com/embed.js", t.setAttribute("data-timestamp", +new Date), (e.head || e.body).appendChild(t)
}();
;
angular.module('showcaseApp', []);

GameListController.$inject = ['$scope'];

angular.module('showcaseApp').controller('GameListController', GameListController);

function GameListController($scope) {
    $scope.games = [
        {
            name: 'Jason',
            title: 'Half-Blood',
            path: 'half-blood',
            avatar: 'jasons-avatar-WxH.png',
            tagline: 'Half angel, half demon.'
        },
        {
            name: 'Ivan',
            title: 'Bezerk',
            path: 'bezerk',
            avatar: 'ivanj-avatar-WxH.png',
            tagline: 'Fight for your honor.'
        },
        {
            name: 'Elesvan',
            title: 'Save the Bananas',
            path: 'save-the-bananas',
            avatar: 'elesvanp-avatar-WxH.png',
            tagline: 'Help Little Wu save the bananas.'
        },
        {
            name: 'Caleb',
            title: 'We\'re Not Dead',
            path: 'were-not-dead',
            avatar: 'calebt-avatar-WxH.png',
            tagline: 'What if zombies were not dead in the first place.'
        },
        {
            name: 'Alejandro',
            title: 'Monopoly Massacre',
            path: 'monopoly-massacre',
            avatar: 'alejandrog-avatar-WxH.png',
            tagline: 'Help Elena return the moon to fantastic times.'
        },
        {
            name: 'Lachlan',
            title: 'Escape the Storm',
            path: 'escape-the-storm',
            avatar: 'lachlanp-avatar-WxH.png',
            tagline: 'Escape the storm to stay alive.'
        },
        {
            name: 'Tinn',
            title: 'To Return Home',
            path: 'to-return-home',
            avatar: 'tinnp-avatar-WxH.png',
            tagline: 'Guide Captain K on his journey home.'
        }
  ];
}
;
(function () {
    var qs, js, q, s, d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = 'typef_orm',
        b = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
    if (!gi.call(d, id)) {
        js = ce.call(d, 'script');
        js.id = id;
        js.src = b + 'share.js';
        q = gt.call(d, 'script')[0];
        q.parentNode.insertBefore(js, q)
    }
    id = id + '_';
    if (!gi.call(d, id)) {
        qs = ce.call(d, 'link');
        qs.rel = 'stylesheet';
        qs.id = id;
        qs.href = b + 'share-button.css';
        s = gt.call(d, 'head')[0];
        s.appendChild(qs, s)
    }
})()
