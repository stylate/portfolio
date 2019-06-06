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

    @media screen and (max-width: 599px) {
        main {
            margin-top: 20%;
        }
    }
</style>

<Nav {segment}/>
<main>
    <h2>alan nguyen</h2>
	<slot></slot>
</main>
