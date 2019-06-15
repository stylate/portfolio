<script>
    import Gallery from '../components/Gallery.svelte';

    let pictures = [
        "self/intro.jpg"
    ];
</script>

<svelte:head>
    <title>fleeting dream</title>
</svelte:head>

<Gallery title="testing"
         data={pictures} />
