<script>
    import Gallery from '../components/Gallery.svelte';
    let name = "about";
    let pictures = {
        id: name,
        number: [1]
    };
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<Gallery title=""
         data={pictures} />

