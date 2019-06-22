<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
    h1, p {
        margin-top: 40%;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
	}

	p {
        margin: 1em auto;
        display: block;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
