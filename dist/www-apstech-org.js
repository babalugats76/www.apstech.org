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
