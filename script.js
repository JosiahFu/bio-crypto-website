const headerTitle = document.getElementById('title');
const titleTestLarge = document.getElementById('title-test-large');
const titleTestSmall = document.getElementById('title-test-small');
const sidebar = document.getElementById('sidebar');

document.getElementById('header').style.backgroundPositionY = document.documentElement.scrollTop / 2 + 'px';

const navClick = (link, target) => {
    for (let j of document.getElementsByClassName('selected')) {
        j.classList.remove('selected');
    }
    link.classList.add('selected');
    // const target = document.getElementById(target.getAttribute('target'));
    window.scrollTo({
        top: target.offsetTop - titleTestSmall.clientHeight - 20,
        behavior: "smooth"
    });
};

['h2', 'h3'].forEach(e => {
    for (let i of document.getElementsByTagName(e)) {
        i.classList.add('heading');
    }
});

for (let i of document.getElementsByClassName('heading')) {
    const nav = document.createElement('div');
    nav.appendChild(document.createTextNode(i.innerText));
    // nav.setAttribute('target', i.id);
    nav.classList.add('nav');
    if (i.tagName == 'H3') {
        nav.classList.add('subheading');
    }
    nav.addEventListener('click', () => navClick(nav, i));
    sidebar.appendChild(nav);
}

const updateScrolling = () => {
    if (document.documentElement.scrollTop > window.innerHeight - (titleTestLarge.clientHeight + 20)) {
        headerTitle.classList.add('stick');
        headerTitle.style.top = '';
    } else {
        headerTitle.classList.remove('stick');
        headerTitle.style.top = (window.innerHeight + document.documentElement.scrollTop - titleTestLarge.clientHeight) / 2 + 'px';
    }
    if (document.documentElement.scrollTop + titleTestSmall.clientHeight > window.innerHeight) {
        sidebar.classList.add('stick');
        sidebar.style.top = titleTestSmall.clientHeight + 'px';
    } else {
        sidebar.classList.remove('stick');
    }
    document.getElementById('header').style.backgroundPositionY = document.documentElement.scrollTop / 2 + 'px';
};

document.addEventListener('scroll', updateScrolling);

updateScrolling();