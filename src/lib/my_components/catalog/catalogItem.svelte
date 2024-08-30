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
        <p id="cake-{item.id}" class="cake-item pt-2">{item.name}</p>
        <p>{IntlCurrencyFormat(item.price * 10000)}</p>
        <div class="add-card-btn pt-2">
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
    justify-content: center;
    align-items: center;
    padding: v.$large-size;
  }

  .catalog-card {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    border-radius: v.$large-size;
    transition: .2s ease;
  }
  .catalog-card:hover{
    scale: 1.01;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    transition: .2s ease;
  }

  .cake-item {
    font-size: v.$font-size-medium;
    font-family: "Quicksand", sans-serif;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: v.$large-size v.$large-size 0 0;
  }

  .add-card-btn {
    margin: v.$small-size v.$medium-size;
  }

</style>