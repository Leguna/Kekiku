<script>
    import {onMount} from "svelte";
    import ChefItem from "./chefItem.svelte";
    import chefData from "$lib/mock/chefData.js";
    import Swiper from "swiper";

    onMount(() => {
        new Swiper(".chef-list", {
            spaceBetween: 40,
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

<div class="bg-white">
    <h1 id="chef-title" data-aos="fade-in" class="header-text content-center text-center">Our Chefs</h1>
    <div class="p-8 chef-list swiper-initialized swiper-horizontal swiper-backface-hidden">
        <div class="swiper-wrapper" aria-live="polite">
            {#each chefData as item,i}
                <ChefItem item={item} i={i}/>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
  @use '$lib/variable' as v;

  .chef-list {
    overflow: hidden;
  }

  #chef-title {
    color: v.$primary;
  }

</style>