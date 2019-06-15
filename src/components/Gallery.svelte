<script>
    export let title;
    export let data = [];

    function getImage(name) {
        return "https://alans-photos.s3-us-west-1.amazonaws.com/" + name;
    }
</script>

<style>
    img {
        max-width: 100%;
        max-height: 100%;
        margin-top: 30%;
        overflow: hidden;
        align: middle;
    }
</style>

<h2>{title}</h2>
{#each data as link}
    <img alt="" src={getImage(link)}/>
{/each}
