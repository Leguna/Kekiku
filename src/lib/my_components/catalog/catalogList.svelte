<script>
    import cakeMock from "$lib/mocks/cakeData.js";
    import Swiper from "swiper";
    import {onMount} from "svelte";
    import IntlCurrencyFormat from "$lib/utils/currency.js";

    let cake = cakeMock.cake;

    onMount(() => {
        new Swiper(".catalog-list", {
            slidesPerView: 5,
            pagination: {
                el: ".swiper-pagination-catalog",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1440: {
                    slidesPerView: 4,
                },
            },
        });
    });
</script>

<div class="catalog-list swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
    <div class="swiper-wrapper" aria-live="polite">
        {#each cake as item,i}
            <div class="swiper-slide catalog-item" class:swiper-slide-active={i === 0} role="group"
                 aria-label="{item.name}">
                <img src={item.image} alt="cake"/>
                <p>{item.name}</p>
                <p>{IntlCurrencyFormat(item.price*10000)}</p>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
  @use '$lib/variable' as v;

  .catalog-list{
    background-color: #f1f1f1;
    padding: 0 1em;
  }

  .catalog-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: v.$padding-large;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: v.$large;
  }
</style>