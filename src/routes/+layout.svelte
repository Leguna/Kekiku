<script>
    export const prerender = true;
    import "../app.css";
    import Header from '../lib/my_components/header.svelte';
    import Meta from '$lib/my_components/meta.svelte';
    import Footer from '$lib/my_components/footer.svelte';
    import Cookies from '$lib/my_components/cookies/cookies.svelte';

    import AOS from 'aos';
    import 'aos/dist/aos.css';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    import {onMount} from "svelte";
    import {Navigation, Pagination} from "swiper/modules";
    import Swiper from "swiper";

    onMount(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-in-out',
            offset: 100,
        });
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
        });
    });

    import('$lib/styles.scss');
    import('$lib/assets/fontawesome/css/all.css');
    import('$lib/assets/fontawesome/js/all.js');

    let title = 'Kekiku';
</script>

<svelte:head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap"
          rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>

    <link rel="icon" type="image/png" href="/favicon.png"/>
    <Meta {title}></Meta>
</svelte:head>

<Header/>
<slot>
</slot>
<Footer/>
<Cookies/>
