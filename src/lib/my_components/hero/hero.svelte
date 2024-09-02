<script>
    import Swiper from 'swiper';

    import {onMount} from "svelte";
    import heroDataHome from "$lib/mock/heroDataHome.js";
    import 'swiper/css/autoplay';

    onMount(() => {
        new Swiper('.home-hero-swiper', {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-core-next',
                prevEl: '.swiper-core-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    });
</script>

<div class="swiper home-hero-swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
    <div class="swiper-wrapper" aria-live="polite">
        {#each heroDataHome as heroData,i}
            <div class="swiper-slide" data-swiper-autoplay="2000" class:swiper-slide-active={i===0}
                 role="group" aria-label="">
                <img src={heroData.image} alt="hero"/>
                <div class="carousel-box">
                    <div id="carousel-{i}" class="carousel-caption">
                        <h1>{heroData.title}</h1>
                        <p>{heroData.description}</p>
                        <a href={heroData.link} class="btn my-button">Learn More</a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
</div>

<style lang="scss">
  @use '$lib/variable' as v;

  .swiper-slide {
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.60);
    border-radius: v.$large-size;
    padding: v.$large-size;
    position: absolute;
    top: 30%;
    left: 30%;
    align-content: center;
    max-width: 30rem;
    transform: translate(-50%, -15%);
    text-align: center;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  h1 {
    filter: blur(0);
    -webkit-filter: blur(0);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  .carousel-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    background-color: #007bff;
    color: white;
    border-radius: 0.25rem;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: v.$breakpoint-md) {
    .carousel-caption {
      width: 80%;
      padding: v.$large-size;
      left: 50%;
      transform: translate(-50%, -10%);

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
</style>