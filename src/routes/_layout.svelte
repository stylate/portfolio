<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
        position: fixed;
        width: 100%;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
        box-sizing: border-box;
        float: left;
    }

    .content ::global() {
        opacity: 1.0;
    }
</style>

<main>
    <Nav {segment}/>
    <h1>testing</h1>
    <div class="content" id="toggleOpacity">
        <slot></slot>
    </div>
</main>
