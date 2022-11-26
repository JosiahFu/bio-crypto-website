const headerTitle = document.getElementById('title');
window.onscroll = () => {
    headerTitle.style.fontSize = '4em';
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight - (headerTitle.clientHeight + 20)) {
        headerTitle.classList.add('stick');
        headerTitle.style.top = '';
    } else {
        headerTitle.classList.remove('stick');
        headerTitle.style.top = (window.innerHeight + document.documentElement.scrollTop) / 2 + 'px';
    }
    headerTitle.style.fontSize = '';
    document.getElementById('header').style.backgroundPositionY = document.documentElement.scrollTop / 2 + 'px';
};