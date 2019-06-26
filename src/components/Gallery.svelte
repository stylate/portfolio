<script>
    import { mobileCheck } from './core/Mobile.js'
    export let data = {
        id: "",
        number: null,
        text: null
    };

    function getImage(folder, index) {
        return "https://alans-photos.s3-us-west-1.amazonaws.com/" + folder + "/" + index.toString() + ".jpg";
    }

    let isMobile = mobileCheck();
</script>

<style src="../styles/Gallery.scss">
</style>

{#if !isMobile && data.text}
    {#each data.number as index}
        <img alt="" class="loading" style="margin-left: 31%; margin-top: 6.5%; padding: 10px;" src={getImage(data.id, index)}/>
    {/each}
{:else}
    {#each data.number as index}
        <img alt="" class="loading" src={getImage(data.id, index)}/>
    {/each}
{/if}

{#if data.text}
    {#each data.text as blurb}
        <p>{blurb}</p>
    {/each}
{/if}

