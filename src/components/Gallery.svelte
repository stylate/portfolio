<script>
    export let data = {
        id: "",
        number: 0
    };

    function getImage(folder, index) {
        return "https://alans-photos.s3-us-west-1.amazonaws.com/" + folder + "/" + index.toString() + ".jpg";
    }
</script>

<style>
    img {
        max-width: 100%;
        max-height: 100%;
        margin-top: 30%;
        overflow: hidden;
    }
</style>

{#each data.number as index}
    <img alt="" src={getImage(data.id, index)}/>
{/each}
