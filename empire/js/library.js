
var gitalk = new Gitalk({
    clientID: '8f83e94dd09c1ee7464e',
    clientSecret: 'ae8de165df8fca3923fc256077f13e9d63bbf8e7',
    repo: 'hikarry.github.io',
    owner: 'HiKarry',
    admin: ['HiKarry'],
    id: location.pathname,
    distractionFreeMode: false,
});
gitalk.render('gitalk-container');

// Hide h1
var h1 = document.getElementsByTagName('h1')[0];
if (h1 != null) {
    h1.parentNode.removeChild(h1);
}

// Set title
function setTitle(title) {
    var titleElement = document.getElementsByTagName('title')[0];
    if (titleElement != null) {
        titleElement.text = title;
    }
}

