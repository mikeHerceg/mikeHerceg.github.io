console.log('Thanks for checking out my log.')

const getHeaderHeight = () => {
    return document.querySelector('.sticky-header').clientHeight;
}

const adjustBodyForNav = () => {
    const headerHeight =  getHeaderHeight();
    if(headerHeight > 200){
        return adjustBodyForNav()

    }
    const main = document.getElementsByTagName('main')[0];
    main.style.marginTop = (headerHeight + 32) +'px';
}

const smoothScroll = (e) => {
    e.preventDefault()
    const targetId = e.target.href.split('#')[1]
    const targetElement =  document.getElementById(targetId);
    targetElement.offsetTop = 0;
    window.scrollTo({
        top: targetElement.offsetTop - getHeaderHeight(),
        left:0,
        behavior: 'smooth'
    })
    console.log(targetElement.offsetTop)    
}

const addEventsHandlers = () => {
    const internalLinks = document.querySelectorAll("a[href^='#']")
    internalLinks.forEach(link=>{
        link.addEventListener('click', e => smoothScroll(e))
    })
}

addEventsHandlers();
adjustBodyForNav();