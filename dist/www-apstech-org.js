var disqus_config = function () {
    this.page.url = "http://www.apstech.org/index.html", this.page.identifier = "gameshowcase"
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
};
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
