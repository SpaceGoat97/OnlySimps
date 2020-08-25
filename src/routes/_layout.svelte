<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
</script>

<style>
	main {
		background-color: white;
	}
</style>

<Tailwindcss />

<main>
	<slot></slot>
</main>