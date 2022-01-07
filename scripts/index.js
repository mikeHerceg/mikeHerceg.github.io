console.log('Thanks for checking out my log.')

const adjustBodyForNav = () => {
    const headerHeight =  document.querySelector('.sticky-header').clientHeight;
    const main = document.getElementsByTagName('main')[0];
    main.style.marginTop = (headerHeight + 32) +'px';
}

const smoothScroll = (e) => {
    e.preventDefualt()
    
//todo
}

adjustBodyForNav()