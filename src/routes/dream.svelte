<script>
    import Gallery from '../components/Gallery.svelte';

    let pictures = [
        "https://lh3.googleusercontent.com/G5rH49hj1TUXkz_T7c3_XT3UO2Pya1SFdWwzfl5Chbub0RyhiQTK8xl-ag97nHWitHnfSnwV7hkx8U2FdV9Aw9rqMdgj2MNEA2DtYEILYajJ_GD-HPg2hr24DONe02be4bqTb1MmcbQOhxbGLMLpIapa9SieTe83vHwXtozLdbsKDB1fiNy2ohpTLFBwHTiWjU7IPsac3TYQe5eDyUbkaEariWGlB1jG0W3ATOGENMzGCochCZRkTNV3-L2UVQuGHLaH1FMSIqcTThnKi5Tioz6bWspmopu4eMdVs82fKDTFt61mUAbpyjwjlrH4SM-RhWCQBoqXPGHSUQVh5hvDW2kCLgX9NYV4yllKPJIFIj1lyOgL2i_bHfb_jOjFzriAHVC91BLaD7YY5GyRCYxjdS7YVffrHyyqkh0aWCt9hOdRuR4XwBxk-ycQNAr_Mry8x8wTEHgBPobYEROPvYprnWDqbQYOCpoQ_x_ymtfhFInKBgEmg1ybrz0FpAJdoiSObjt0q90nls8kME58g7IArf5eqUiEfevH_wr--JyA3cp6G_2sTvqkaehRsIAbokY5RFUbr1hL0nFQksZ1ZpPbg0csF3KmQoHjG4fBCHGPI_kTpXGai3RRYaawooS4_VhEHOdmV1enkchO1wdVE6-dvnDLoynHpnY=w146-h220-no"
    ];
</script>

<svelte:head>
    <title>fleeting dream</title>
</svelte:head>

<Gallery title="dream"
         data={pictures} />
