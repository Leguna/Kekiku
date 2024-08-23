<script>
	import CookiesPage from '$lib/my_components/cookies/cookiesPage.svelte';
	import webConfig from '$lib/index.js';
</script>

<CookiesPage email={webConfig.contact.email} />