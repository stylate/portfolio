<script>
    import Gallery from '../components/Gallery.svelte';
    let name = "about";
    let pictures = {
        id: name,
        number: [0],
        text: ["hello! i am a fourth-year student at uc berkeley studying computer science. aside from taking photos, i'm also a big fan of fashion, architecture, film, and music production.", "for any inquiries - feel free to contact me at nguyenalan@berkeley.edu.", "site last updated: june 25, 2019"]
    };
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<Gallery title=""
         data={pictures} />

