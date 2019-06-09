<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
        position: fixed;
        overflow: hidden;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
        box-sizing: border-box;
        float: left;
    }

</style>

<Nav {segment}/>
<main>
    <h1>alan nguyen</h1>
	<slot></slot>
</main>
