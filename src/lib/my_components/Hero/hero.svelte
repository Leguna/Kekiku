<script>
    import Swiper from "swiper";
    import {onMount} from "svelte";

    onMount(() => {
        let swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });
</script>
<div>
    <div class="swiper mySwiper swiper-initialized swiper-horizontal swiper-backface-hidden">
        <div class="swiper-wrapper" id="swiper-wrapper-ccfd4fa4b5bca9cd" aria-live="polite"
             style="transition-duration: 0ms; transform: translate3d(-1058px, 0px, 0px); transition-delay: 0ms;">
            <div class="swiper-slide swiper-slide-prev" style="width: 1058px;" role="group" aria-label="1 / 9">Slide 1</div>
            <div class="swiper-slide swiper-slide-active" style="width: 1058px;" role="group" aria-label="2 / 9">Slide 2
            </div>
            <div class="swiper-slide swiper-slide-next" style="width: 1058px;" role="group" aria-label="3 / 9">Slide 3</div>
            <div class="swiper-slide" style="width: 1058px;" role="group" aria-label="4 / 9">Slide 4</div>
            <div class="swiper-slide" style="width: 1058px;" role="group" aria-label="5 / 9">Slide 5</div>
            <div class="swiper-slide" style="width: 1058px;" role="group" aria-label="6 / 9">Slide 6</div>
            <div class="swiper-slide" style="width: 1058px;" role="group" aria-label="7 / 9">Slide 7</div>
            <div class="swiper-slide" style="width: 1058px;" role="group" aria-label="8 / 9">Slide 8</div>
            <div class="swiper-slide" role="group" aria-label="9 / 9" style="width: 1058px;">Slide 9</div>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
</div>

<style lang="scss">
  @use '$lib/variable' as v;

  #hero {
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>