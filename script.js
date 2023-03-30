const ibutton = document.querySelector('.background2 i');
console.log(ibutton);
function putarVideo() {
    var videoku = document.getElementById('video');

    if(videoku.paused) {
        videoku.play();
        ibutton.classList.remove('fa-play-circle');
        ibutton.classList.add('fa-pause-circle');   
        setTimeout(() => {
            $('.canva button').css({
                'display': 'none',
            })
      
            $('.animation').css({
              'display': 'none',
            })
        }, 2000);
    }
    else {
        videoku.pause();
        ibutton.classList.remove('fa-pause-circle');
        ibutton.classList.add('fa-play-circle');   
        setTimeout(() => {
            $('.canva button').css({
                'display': 'none',
            })
      
            $('.animation').css({
              'display': 'none',
            })
        }, 2000);
        
    }
        
}

const input = document.querySelector('.menu-toggle input');
const menu = document.querySelector('.topbar ul');

input.addEventListener('click', function() {
    menu.classList.toggle('slide');
})

$('.char').each((index, item) => {
    item.dataset.aos="fade-up";
    item.dataset.aosDelay = index * 200;
})

$('.whatsapp').each((index, item) => {
    item.dataset.aos = "fade-right"; 
    item.dataset.aosDelay = index * 200; 
})


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 150, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  $(".canva").on('click', function() {
      $('.canva button').css({
          'display': 'flex',
      })

      $('.animation').css({
        'display': 'flex',
      })
  })