<script>
    import Meta from '$lib/my_components/meta.svelte';
    import Hero from '$lib/my_components/hero/hero.svelte';
    import Catalog from './catalog/catalogList.svelte';
    import ChefList from './chef/chefList.svelte';
    import Subscription from './subscription/subscription.svelte';
</script>

<Meta title="Kekiku | Home"/>
<Hero/>
<Catalog/>
<ChefList/>
<!--<Subscription/>-->

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