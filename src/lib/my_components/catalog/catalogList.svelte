<script>
    import cakeMock from "$lib/mocks/cakeData.js";
    import Swiper from "swiper";
    import {onMount} from "svelte";
    import CatalogItem from "./catalogItem.svelte";

    let cake = cakeMock.cake;

    onMount(() => {
        new Swiper(".catalog-list", {
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
                    slidesPerView: 5,
                },
            },
        });
    });
</script>

<h1 id="catalog-title" class="header-text content-center text-center unselectable">Trending</h1>
<div class="catalog-list swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
    <div class="swiper-wrapper" aria-live="polite">
        {#each cake as item,i}
            <CatalogItem item={item} key={i}/>
        {/each}
    </div>
</div>

<style lang="scss">
  @use '$lib/variable' as v;

  .catalog-list {
    background-color: v.$background;
    padding: 0 1em;
  }

  #catalog-title {
    padding-top: v.$large-size;
    font-size: v.$font-size-large;
    font-family: "Quicksand", sans-serif;
  }

</style>