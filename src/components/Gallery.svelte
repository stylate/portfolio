<script>
    export let data = {
        id: "",
        number: 0
    };

    function getImage(folder, index) {
        return "https://alans-photos.s3-us-west-1.amazonaws.com/" + folder + "/" + index.toString() + ".jpg";
    }
</script>

<style src="../styles/Gallery.scss">
    </style>

{#each data.number as index}
    <img alt="" src={getImage(data.id, index)}/>
{/each}
