<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
        position: fixed;
        overflow: hidden;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
        box-sizing: border-box;
        float: left;
    }
</style>

<Nav {segment}/>
<main>
    <h1>testing</h1>
    <div class="content" id="toggleOpacity">
        <slot></slot>
    </div>
</main>
