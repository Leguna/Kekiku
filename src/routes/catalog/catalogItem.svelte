<script>
    import IntlCurrencyFormat from "$lib/utils/currency.js";
    import MainButton from "$lib/my_components/core/button/mainButton.svelte";

    export let item;
    export let i;

</script>
<div class="swiper-slide catalog-item" class:swiper-slide-active={i === 0} role="group"
     aria-label="{item.name}">
    <div class="catalog-card card flex text-center">
        <img src={item.image} alt="cake"/>
        <div class="flex-auto cake-item">
            <p id="cake-{item.id}" class="cake-item-text pt-2">{item.name}</p>
        </div>
        <div class="add-card-btn pt-2">
            <p class="price-tag">{IntlCurrencyFormat(item.price * 10000)}</p>
            <MainButton text="Add to Cart" type="button">
                <i class="fa-solid fa-plus"></i>
            </MainButton>
        </div>
    </div>
</div>


<style lang="scss">
  @use '$lib/variable' as v;

  .catalog-item {
    display: flex;
    flex-direction: column;
    max-width: 24rem;
  }

  .catalog-card {
    height: 30em;
    justify-content: space-between;
    flex-direction: column;
    border-radius: v.$large-size;
    transition: .2s ease;
  }

  .catalog-card:hover {
    scale: 1.01;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    transition: .2s ease;
  }

  .cake-item {
    align-content: center;
    padding: 0 v.$small-size;
  }

  .cake-item-text {
    align-content: center;
    font-size: v.$font-size-medium;
    font-family: "Quicksand", sans-serif;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: v.$large-size v.$large-size 0 0;
  }

  .add-card-btn {
    place-content: flex-end;
    margin: v.$small-size v.$medium-size;
  }

  .price-tag {
    font-size: v.$font-size-small;
    font-family: "Roboto", sans-serif;
    padding: v.$font-size-medium;
  }

</style>