<script>
    export let item;
    export let i;
</script>

<a class="card swiper-slide chef-item" href="/chef/{item.username}">
    <div class="card swiper-slide chef-item" style="--image: url({item.image})" class:swiper-slide-active={i === 0}
         role="group"
         aria-label="{item.name}">
        <div class="chef-list-horizontal-info">
            <p>{item.specialty}</p>
            <h2>{item.name}</h2>
        </div>
    </div>
</a>

<style lang="scss">
  @use '$lib/variable' as v;

  .card {
    cursor: pointer;
  }

  .chef-item {
    justify-content: end;
    max-width: 24rem;
    background: var(--image);
    background-size: cover;
    background-position: center;
    text-align: center;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.1);
    border-radius: v.$large;
    min-height: 24em;
    align-content: end;
  }

  .chef-list-horizontal-info {
    background: white;
    padding: v.$medium;
    border-radius: 0 0 v.$large v.$large;
    scale: 1.01;
    translate: 0 2px;

    h2 {
      font-size: v.$font-size-medium;
      font-family: "Quicksand", sans-serif;
      color: v.$primary;
    }

    p {
      font-size: v.$font-size-small;
      font-family: "Quicksand", sans-serif;
      color: v.$primary;
    }
  }

</style>