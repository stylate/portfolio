<script>
    import Gallery from '../components/Gallery.svelte';
    let name = "about";
    let pictures = {
        id: name,
        number: [1],
        text: ["hello! i am a fourth-year student at uc berkeley studying computer science. aside from taking photos, i'm also a big fan of fashion, film, architecture, and music production.", "for any inquiries - feel free to contact me at nguyenalan@berkeley.edu."]
    };
</script>

<style>
    h2 {
        display: none;
    }
    
    @media screen and (min-width: 1200px) {
        .class {
            width: 50%;
            height: 50%;
            margin-left: 80%;
            float: right;
        }

        p {
            font-size: 14px;
        }
    }
</style>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<Gallery title=""
         data={pictures} />

