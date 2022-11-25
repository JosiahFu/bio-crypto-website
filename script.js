window.onscroll = () => {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight - document.getElementById('title').clientHeight - 40) {
        document.getElementById('title').classList.add('stick');
    } else {
        document.getElementById('title').classList.remove('stick');
    }
    document.getElementById('header').style.backgroundPositionY = document.documentElement.scrollTop / 2 + 'px';
};