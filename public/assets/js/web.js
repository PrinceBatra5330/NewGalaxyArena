$('.partner').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerpadding:'0px',
    slidesToScroll: 2,
    
    responsive: [

      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: '0px',
        }
      },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      centerMode: true,
      centerPadding: '10px',
    }
  },
  {
    breakpoint: 990,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      centerMode: true,
      centerPadding: '0px',
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
    }
  }
]
});

$('.zoning-gymslider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: 0,
      dots: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '0px',
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            
          }
        }
      ]
    });