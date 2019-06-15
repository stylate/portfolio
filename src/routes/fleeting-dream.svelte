<script>
    import Gallery from '../components/Gallery.svelte';
    let pictures = {
        id: "self",
        number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    };
    let name = "fleeting dream";
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<Gallery data={pictures} />
