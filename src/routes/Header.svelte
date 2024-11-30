<script lang="ts">
	let {
		name,
		fakeName = null
	}: {
		name: string;
		fakeName?: string | null;
	} = $props();
</script>

<h1>Hello from {name}</h1>
<h2>{name.replaceAll('t', 'X')}</h2>
<h2>Your fake name is {fakeName}</h2>

<style>
</style>
