<script>
    import Gallery from '../components/Gallery.svelte';
    let pictures = {
        id: "bloom",
        number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
    };
    let name = "in bloom";
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<Gallery data={pictures} />
