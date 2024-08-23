<script>
	import Meta from '$lib/my_components/meta.svelte';
    import Hero from '$lib/my_components/Hero/hero.svelte';
</script>

<Meta title="Kekiku | Home" />
<Hero/>

<style lang="scss">
  @use '$lib/variable' as v;

  div {
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>