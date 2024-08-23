<script>
	import { onMount } from 'svelte';

	function acceptCookies() {
		localStorage.setItem('cookiesAccepted', 'true');
	}

	function learnMore() {
		localStorage.setItem('cookiesAccepted', 'false');
		window.location.href = '/cookies';
	}

	function showCookies() {
		const cookiesBtn = document.getElementById('cookies-btn');
		cookiesBtn.click();
	}
	onMount(() => {
		const cookiesAccepted = localStorage.getItem('cookiesAccepted');
		if (cookiesAccepted !== 'true') {
			showCookies();
		}
	});
</script>


<div id="cookies-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-cookies">
	<img src="/images/cookie.png" alt="cookie" />
</div>

<!-- Off canvas-->
<div class="offcanvas offcanvas-bottom place-content-center container-fluid align-items-center text-center" tabindex="-1"
		 id="offcanvas-cookies"
		 style="max-height: 4rem;"
		 aria-labelledby="offcanvasTopLabel">
	<div class="flex align-items-center m-2">
		<p>We use cookies to improve your website experience</p>
		<div class="ml-2">
			<button on:click={acceptCookies}
							type="button" class="btn btn-primary" data-bs-dismiss="offcanvas">OK, Thanks
			</button>
			<button on:click={learnMore}
							type="button" class="btn btn-secondary" data-bs-dismiss="offcanvas">Learn More
			</button>
		</div>
	</div>
</div>

<style lang="scss">
  @use '$lib/variable' as v;

  #cookies-btn {
		opacity: 0.7;
    z-index: 99;
    border: 2px solid black;
    border-radius: 50%;
    background-color: v.$lightLightBlue;
    padding: 4px;
    position: fixed;
    bottom: 16px;
    left: 16px;
    width: 42px;
    object-fit: cover;
  }
</style>