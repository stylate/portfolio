<script>
    import Gallery from '../components/Gallery.svelte';
    let name = "anachronism";
    let pictures = {
        id: "green",
        number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    };
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<Gallery title={name}
         data={pictures} />
