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
        len = data.number.length - 1;
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

    let isMobile = mobileCheck();
    function checkKey(e) {
        switch (e.key) {
            case "ArrowLeft":
                prev(); 
                break;
            case "ArrowRight":
                next();
                break;
            default: break;
        }
    }
    document.onkeydown = checkKey;
</script>

<style src="../styles/Gallery.scss">
</style>

{#if isMobile}
    {#each data.number as index}
        <img alt="" src={getImage(data.id, index)}/>
    {/each}
{:else}
    {#if !data.text}
        <h2><a on:click={prev}>Previous</a> / <a on:click={next}>Next</a> ({idx + 1} of {len + 1})</h2>
    {/if}
    
    {#if !isMobile && data.text}
        <img alt="" on:click={next} onstyle="max-width: 40%; max-height: 400px;" src={getImage(data.id, idx)}/>
    {:else}
        <img alt="" on:click={next} src={getImage(data.id, idx)}/>
    {/if}
{/if}

{#if data.text}
    {#each data.text as blurb}
        <p>{blurb}</p>
    {/each}
{/if}

