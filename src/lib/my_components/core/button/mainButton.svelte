<script>
    export let text = 'Button';
    export let type = 'button';
    export let disabled = false;
    export let onClick = () => {
        console.log('Button clicked');
    }
</script>

<button class="btn" {type} {disabled} on:click={onClick}>
    <slot/>
    {text}
</button>

<style lang="scss">
  @use '$lib/variable' as v;

  .btn {
    padding: v.$small-size v.$large-size;
    margin-bottom: v.$small-size;
    font-size: v.$font-size-small;
    font-family: "Quicksand", sans-serif;
    color: white;
    border: none;
    border-radius: v.$large-size;
    cursor: pointer;
    background-color: v.$primary;
    transition: .3s ease-out;
  }

  .btn:hover {
    background-color: v.$primary-light;
    background-position: 200% 200%;
    transition: .3s ease-out;
  }

  .btn:active {
    color: lightgrey;
  }

</style>