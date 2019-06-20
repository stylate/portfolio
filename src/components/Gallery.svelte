<script>
    import { mobileCheck } from './core/Mobile.js'
    export let data = {
        id: "",
        number: null,
        text: null
    };

    let idx, len;
    if (data.number) {
        idx = 0;
        len = data.number.length;
    }

    function getImage(folder, index) {
        return "https://alans-photos.s3-us-west-1.amazonaws.com/" + folder + "/" + index.toString() + ".jpg";
    }

    function prev() {
        if (idx > 0) idx--;
        else idx = len;
    }

    function next() {
        if (idx < len) idx++;
        else idx = 0;
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
