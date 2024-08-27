<script>
	import Meta from '$lib/my_components/meta.svelte';
    import Hero from '$lib/my_components/hero/hero.svelte';
    import Catalog from '$lib/my_components/catalog/catalogList.svelte';
</script>

<Meta title="Kekiku | Home" />
<Hero/>
<Catalog/>

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