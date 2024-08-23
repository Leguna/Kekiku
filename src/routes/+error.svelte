<script>
	import { page } from '$app/stores';
</script>

<div
	id="error-div"
	class="container-fluid items-center justify-items-center text-center flex place-content-center mt-4"
>
	<!-- Error	Icon -->
	<i id="icon-error" class="fa-regular fa-face-frown"></i>
	<div class="mx-4"></div>
	<div>
		<h1 id="title" class="pt-2">Sorry!</h1>
		<h1 id="error-message" class="">{$page.status} {$page.error.message}</h1>
		<div class="mt-4"></div>
		<a id="back-to-home-btn" href="/" class="btn p-2">Back to Home</a>
	</div>
</div>

<style lang="scss">
	@use '$lib/variable' as v;

	#icon-error {
		font-size: 12rem;
		line-height: 1;
	}
	@media (max-width: v.$breakpoint-md) {
		#icon-error {
			font-size: 8rem;
		}
		#error-div{
			flex-direction: column;
		}
	}

	#error-div {
		color: v.$darkBlue;
		height: 60vh;
	}


	#title {
		font-size: 3em;
	}

	#error-message {
		font-size: 2em;
	}

	#back-to-home-btn {
		background-color: v.$darkBlue;
		color: white;
	}
</style>
