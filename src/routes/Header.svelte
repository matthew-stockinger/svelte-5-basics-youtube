<script lang="ts">
	import { createState } from './state.svelte';
	let {
		name
	}: {
		name: string;
	} = $props();

	const myState = createState();
</script>

<div>
	<h1>
		{name ? name : 'User'}'s Form
	</h1>
	<button onclick={myState.up}>{myState.value}</button>
</div>

<style>
</style>
