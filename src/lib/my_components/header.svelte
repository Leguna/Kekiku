<script>
    import {slide} from 'svelte/transition';
    import {onMount} from 'svelte';

    let prevScrollY = 0;
    let showInfo = true;
    let infoClosed;
    let headerEl;
    let headerHeight;
    let width;

    function removeInfo() {
        infoClosed = true;
        showInfo = window.scrollY < prevScrollY;
    }

    function handleScroll() {
        if (infoClosed) return;
        showInfo = window.scrollY < prevScrollY;
        prevScrollY = window.scrollY;
    }

    onMount(() => {
        width = window.innerWidth;
        headerHeight = headerEl;
        // Add Listener for search
        let allSearchInput = document.querySelectorAll('input[type="search"]');
        for (let i = 0; i < allSearchInput.length; i++) {
            allSearchInput[i].addEventListener('keypress', function (event) {
                let searchValue = allSearchInput[i].value;
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if (searchValue === '' || searchValue === undefined) return;
                    document.location.href = `/search?v=${searchValue}`;
                }
            });
        }
    });


</script>

<svelte:window on:scroll={handleScroll}/>

<header>
    {#if showInfo}
        <div class="flex"
             transition:slide={{ duration: 200 }}>
            <p id="info-header"
               class="flex-auto items-center p-2">Kekiku web in development, some features may not work
                properly</p>
            <button on:click={removeInfo} class="pr-4 pb-2 pt-2" style="color:white;">X</button>
        </div>
    {/if}

    <nav bind:clientHeight={headerHeight}>
        <div class="flex items-center">
            <!--  Nav Button	-->
            <div class="flex-1 show-on-tab text-left ml-8">
                <button id="nav-button" class="btn m-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <!--	Logo  -->
            <div class="flex-0 show-on-tab m-0.5">
                <a href="/">
                    <img class="logo-header-center-tab" src="/brand-name.png" alt="">
                </a>
            </div>
            <div class="flex-1 mr-8">
            </div>
        </div>
        <div class="hide-on-tab flex">
            <ul class="flex-1 items-center ml-16 mt-0 mb-0 hide-on-tab" style="margin-bottom: 0;">
                <li><a href="/products">ORDER</a></li>
                <li><a href="/about">VISIT US</a></li>
                <li><a href="/contact">CONTACT</a></li>
            </ul>
            <!--  Logo  -->
            <div class="flex-0 h-16">
                <a class="hide-on-tab" href="/">
                    <img class="logo-header-center" src="/favicon.png" alt="">
                </a>
            </div>
            <!--	Search icon, cart and login icon-->
            <ul class="items-center flex-1 justify-end mr-16 mb-0 mt-0 hide-on-tab" style="margin-bottom: 0;">
                <li>
                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" class="hover-text"
                            href="/search" style="padding: 0; margin: 0;">
                        SEARCH
                    </button>
                </li>
                <div class="offcanvas offcanvas-top" style="max-height: 10rem" tabindex="-1" id="offcanvasTop"
                     aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasTopLabel">Cari</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        {#if width > 768}
                            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input id="search-input" type="search" class="form-control" placeholder="Search..."
                                       aria-label="Search">
                            </form>
                        {/if}
                    </div>
                </div>
                <li class=""><a href="/login">LOGIN</a></li>
            </ul>
        </div>
    </nav>
    <nav class="navbar w-0 h-0 p-0">
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
             aria-labelledby="offcanvasNavbarLabel">
            <ul class="offcanvas-header ml-4 mr-4">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </ul>
            <hr style="border-bottom: 1px solid gray">
            <menu class="p-4">
                <li>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input id="search-input" type="search" class="form-control" placeholder="Search..."
                               aria-label="Search">
                    </form>
                </li>
                <li><a class="btn container-fluid" href="/">Home</a></li>
                <li><a class="btn container-fluid" href="/order">Order</a></li>
                <li><a class="btn container-fluid" href="/visit">Visit Us</a></li>
                <li><a class="btn container-fluid" href="/contact">Contact</a></li>
                <li><a class="btn container-fluid" href="/login">Login</a></li>
            </menu>
        </div>
    </nav>
</header>
<div id="after-header" style="height: {headerHeight}px;"></div>


<style lang="scss">
  @use '$lib/variable' as v;

  @media (max-width: v.$breakpoint-md) {
  }

  header {
    z-index: 10;
    background-color: v.$darkBlue;
    color: white;
    text-align: center;
    font-weight: bold;
    position: fixed;
    width: 100%;
    transition: 0.2s;
    top: 0;
  }

  header p {
    text-align: center;
  }

  .logo-header-center-tab {
    width: 100px;
  }

  .logo-header-center {
    background: white;
    padding: 1em;
    border-radius: 2em;
    width: 100px;
  }

  nav {
    background: white;
  }

  nav ul {
    min-height: 64px;
    display: flex;
    list-style: none;
    padding: 0;
  }

  nav ul li {
    text-align: center;
    margin-right: 1rem;
  }

  nav ul li a {
    color: black;
    text-decoration: none;
  }

  nav ul li a:hover {
    color: v.$lightBlue;
    text-decoration: underline;
  }

  @media (max-width: v.$breakpoint-md) {
    .hide-on-tab {
      display: none;
    }
    #info-header {
      margin: 0;
      font-size: 0.8em;
    }
  }
</style>