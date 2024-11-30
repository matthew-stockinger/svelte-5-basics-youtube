<!-- bookmark 28:05 -->

<script lang="ts">
	import Header from './Header.svelte';
	let name = $state('Stock');
	let status: 'OPEN' | 'CLOSED' = $state('OPEN');
	$inspect(status);

	function toggle() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}
</script>

<Header {name} />

<input type="text" bind:value={name} />

<p>The store is now {status}</p>
<button onclick={toggle}>Toggle Status</button>
