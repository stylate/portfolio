<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>reverie</title>
</svelte:head>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
