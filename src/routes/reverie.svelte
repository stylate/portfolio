<script>
    import Gallery from '../components/Gallery.svelte';
    let pictures = {
        id: "reverie",
        number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
    let name = "reverie";
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<Gallery data={pictures} />
