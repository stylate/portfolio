<script>
    export let title;
    export let data = [];
</script>

<h2>{title}</h2>
{#each data as image}
    <img alt="" src={image.url}/>
{/each}
