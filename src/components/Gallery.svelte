<script>
    export let title;
    export let data = [];
</script>

<style>
    img {
        max-width: 100%;
        max-height: 100%;
        margin-top: 30%;
        margin-left: 25%;
        overflow: hidden;
        align: middle;
    }
</style>

<h2>{title}</h2>
{#each data as link}
    <img alt="" src={link}/>
{/each}
