jQuery('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="prevArrow"></button>',
    nextArrow: '<button type="button" class="nextArrow"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
jQuery(document).ready(function() {

  const defaultSelect = () => { 
    const element = document.querySelector('.custom_select');
    const choices = new Choices(element, {
      searchEnabled: false
    });
  }
  defaultSelect()

  window.addEventListener('scroll', () => {
    let scrY = window.scrollY
    let winY = window.innerHeight
    let header = $('header')[0]

    if(scrY >= winY - 1){
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
    
});

  jQuery('.menu').on('click', function(e) {
    if(e.target.classList.contains('menu__link')){
      jQuery('.menu__link').each((i, el) => { 
        el.classList.remove('menu__link-active')
      })
      e.target.classList.add('menu__link-active');
      let activLi = e.target.innerHTML
      jQuery('.menu__link').each((i, el) => { 
        if(el.innerHTML === activLi){
          el.classList.add('menu__link-active')
        }
      })
    }
  })

  //   jQuery('.menu').on('click', function(e) {
  //   if(e.target.classList.contains('menu__link')){
  //     jQuery('.menu__link').each((i, el) => { 
  //       el.classList.remove('menu__link-active')     
  //       e.target.classList.add('menu__link-active');
  //       console.log(e.target.classList.contains('menu__link-active'))
  //       console.log(e.target)
  //     })
  //   }
  // })
  
})


