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

<p>hello! i am a fourth-year student at uc berkeley studying computer science. aside from taking photos, i'm also a big fan of fashion, film, architecture, and music production. </p>

<p>for any inquiries - feel free to contact me at nguyenalan@berkeley.edu.</p>
