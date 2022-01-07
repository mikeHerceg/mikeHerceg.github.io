console.log('Thanks for checking out my log.')

const adjustBodyForNav = () => {
    const headerHeight =  document.querySelector('.sticky-header').clientHeight;
    const main = document.getElementsByTagName('main')[0];
    main.style.marginTop = (headerHeight + 32) +'px';
    console.log(main)
}

adjustBodyForNav()