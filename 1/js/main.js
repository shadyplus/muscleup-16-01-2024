$(document).ready(function ($) {
  const $status = $(".slider_text");
  const $slickElement = $(".slider");

  const $status2 = $(".slider_text2");
  const $slickElement2 = $(".slider2");

  $slickElement.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      let i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + "/" + slick.slideCount);
    }
  );

  $slickElement2.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      let i = (currentSlide ? currentSlide : 0) + 1;
      $status2.text(i + "/" + slick.slideCount);
    }
  );



  let gadgetCarousel = $(".carousel");

  gadgetCarousel.each(function () {
    if ($(this).is(".slider")) {
      $slickElement.slick({
        infinite: true,
        autoplay: false,
        dots: false,
        arrows: true,
        fade: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".arrow-prev"),
        nextArrow: $(".arrow-next"),
      });
    } else if ($(this).is(".slider2")) {
      $slickElement2.slick({
        infinite: true,
        autoplay: false,
        dots: false,
        arrows: true,
        fade: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".arrow-prev2"),
        nextArrow: $(".arrow-next2"),
      });
    } else {
      $(this).slick();
    }
  });

  function getMinutesToTomorrow() {
    let now = new Date();

    // завтрашняя дата
    let tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );

    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000 / 60); // преобразуем в минуты
  }

  const timer0 = document.querySelector(".timer0");
  const timer1 = document.querySelector(".timer1");

  timer0.dataset.minutesLeft = getMinutesToTomorrow();
  timer1.dataset.minutesLeft = getMinutesToTomorrow();

  $(function () {
    $(".timer").startTimer({}).trigger("start");
  });

  $(".spinner").click(function () {
    $("html, body").animate(
      {
        scrollTop: parseInt($(".toForm").offset().top),
      },
      2000
    );
  });
});

(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(81641548, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});