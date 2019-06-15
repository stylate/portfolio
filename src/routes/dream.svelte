<script>
    import Gallery from '../components/Gallery.svelte';

    let pictures = [
        "self/intro.jpg",
        "self/1.jpg",
        "self/2--.jpg",
        "self/2-.jpg",
        "self/3-.jpg",
        "self/3.jpg",
        "self/4.jpg",
        "self/5.jpg",
        "self/6.jpg",
        "self/7.jpg",
        "self/8.jpg",
        "self/9.jpg",
        "self/10.jpg",
        "self/11.jpg",
        "self/12.jpg",
        "self/13.jpg",
        "self/14.jpg",
        "self/outro.jpg"
    ];
</script>

<svelte:head>
    <title>fleeting dream</title>
</svelte:head>

<Gallery title="testing"
         data={pictures} />
