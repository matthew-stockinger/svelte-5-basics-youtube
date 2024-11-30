<script lang="ts">
	let {
		name,
		fakeName
	}: {
		name: string;
		fakeName?: string;
	} = $props();
</script>

<div>
	<h1>
		{name ? name : 'User'}'s Form
	</h1>
</div>

<style>
</style>
