<script>
	export let carouselData;
</script>

<div id="hero" class="d-block w-100">
	<img
		src="{carouselData.image}"
		alt="hero" />
	<div id="carousel-">
		<h1>{carouselData.title}</h1>
		<p>{carouselData.description}</p>
	</div>
</div>
