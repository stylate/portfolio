<script>
    import { fade } from 'svelte/transition';
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>

<style>
	main {
        width: 100%;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
        box-sizing: border-box;
        float: left;
        overflow: hidden;
    }

    .content ::global() {
        z-index: 0;
        opacity: 1.0;
    }
</style>

<main transition:fade>
    <Nav {segment}/>
    <div class="content" id="toggleOpacity">
        <slot></slot>
    </div>
</main>
