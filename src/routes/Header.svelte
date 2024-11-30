<script lang="ts">
	let {
		name,
		fakeName
	}: {
		name: string;
		fakeName?: string;
	} = $props();
</script>

<h1>Hello from {name}</h1>
<h2>{name.replaceAll('t', 'X')}</h2>
<h2>Your fake name is {fakeName}</h2>

<style>
	h1 {
		color: red;
		font-family: cursive;
	}
</style>
