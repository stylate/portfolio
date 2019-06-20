<script>
    import { mobileCheck } from './core/Mobile.js'
    export let data = {
        id: "",
        number: 0,
        text: null
    };

    function getImage(folder, index) {
        return "https://alans-photos.s3-us-west-1.amazonaws.com/" + folder + "/" + index.toString() + ".jpg";
    }
</script>

<style src="../styles/Gallery.scss">
</style>

{#if !data.text}
    <h2>Previous / Next</h2>
{/if}

{#each data.number as index}
    <img alt="" src={getImage(data.id, index)}/>
{/each}

{#if data.text}
    {#each data.text as blurb}
        <p>{blurb}</p>
    {/each}
{/if}
