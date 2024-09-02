<script>

    let width = 0;
    const year = new Date().getFullYear();
</script>

<!-- Newsletter -->
<div bind:clientWidth={width} class="bg-gray-100 bg-polka-dot" style="position: relative;">
    <div class="container mx-auto py-16">
        <div class="flex justify-center">
            <div class="w-3/4 max-w-lg">
                <h2 class="text-2xl font-bold text-center">Subscribe to our newsletter</h2>
                <p class="text-center mt-2">Get the latest news and updates from us</p>
                <form action="#" method="POST">
                    {#if width > 768}
                        <div class="hide-on-tab flex items-center mt-8">
                            <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autocomplete="email"
                                    class="w-full py-2 px-4 rounded-l-md"
                                    placeholder="Enter your email address"
                            />
                            <button type="submit" class="my-button text-white py-2 px-4 rounded-r-md">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    {:else}
                        <div class="flex items-center show-on-tab mt-4" style="font-size: 14px">
                            <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autocomplete="email"
                                    class="w-full py-2 px-2 rounded-l-md text-center"
                                    placeholder="Enter your email address"
                            />
                            <button type="submit" class="bg-blue-500 text-white my-2 py-2 px-4 rounded container-fluid">
                                <i class="fas fa-paper-plane"></i> Send
                            </button>
                        </div>
                    {/if}
                </form>
            </div>
        </div>
    </div>
</div>
<!-- Back To Top -->
<button
        class="size-full bg-gray-150 hover:bg-gray-300 transition text-black py-3 px-4"
        on:click={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }}
>
    Back to top
    <i class="fas fa-arrow-up ml-2"></i>
</button>
<!-- Footer -->
<footer class="bg-gray-800 text-white">
    <div class="container-md mx-auto py-8">
        <div class="flex justify-center">
            <div class="container-fluid">
                <div id="parent-footer" class="flex justify-between">
                    <div>
                        <h2 class="text-2xl font-bold">Kekiku</h2>
                        <p class="mt-2">
                            Cake shop that provides various types of cakes for your special moments.
                        </p>
                    </div>
                    <div class="mx-4 my-2"></div>
                    <div class="">
                        <h2 class="text-2xl font-bold">Links</h2>
                        <ul class="mt-2">
                            <li><a class="hover:underline no-underline" href="/">Home</a></li>
                            <li><a class="hover:underline no-underline" href="/about">About</a></li>
                            <li><a class="hover:underline no-underline" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="mx-4 my-2"></div>
                    <div>
                        <h2 class="text-2xl font-bold">Social</h2>
                        <ul class="mt-2">
                            <li><a class="hover:underline no-underline" href="/">Facebook</a></li>
                            <li><a class="hover:underline no-underline" href="/">Twitter</a></li>
                            <li><a class="hover:underline no-underline" href="/">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-8 text-center">
                    <p>&copy; {year} Kekiku. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
  @use '$lib/variable' as v;
  input[type='email'] {
    border: 1px solid #d1d5db;
    background-color: rgba(255, 255, 255, 0.46);
  }

  @media (max-width: v.$breakpoint-md) {
    #parent-footer {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
