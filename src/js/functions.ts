const getHeaderHeight = () => {
    return document?.querySelector('.sticky-header')?.clientHeight || 0;
}

const adjustBodyForNav:any = () => {
    const headerHeight =  getHeaderHeight() || 0;
    if(headerHeight > 200){
        return adjustBodyForNav();
    }
    const main = document.getElementsByTagName('main')[0];
    main.style.marginTop = (headerHeight + 32) +'px';
}

const smoothScroll = (e:any) => {
    e.preventDefault()
    const targetId = e.target.href.split('#')[1]
    const targetElement =  document.getElementById(targetId);
   // targetElement.offsetTop = 0;
    window.scrollTo({
        top: targetElement?.offsetTop || 0 - getHeaderHeight(),
        left:0,
        behavior: 'smooth'
    });
}

const addEventsHandlers:()=>void = () => {
    const internalLinks = document.querySelectorAll("a[href^='#']")
    internalLinks.forEach(link=>{
        link.addEventListener('click', e => smoothScroll(e));
    });
}
export {
    addEventsHandlers,
    adjustBodyForNav,
}