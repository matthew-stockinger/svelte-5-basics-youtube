<!-- bookmark 37:41 -->

<script lang="ts">
	import Header from './Header.svelte';
	let name = $state('Matt');
	let fullName = $derived(name + ' Stockinger');

	let status: 'OPEN' | 'CLOSED' = $state('OPEN');
</script>

<Header {name} fakeName="Wes" />

<h2>{fullName}</h2>

<input type="text" bind:value={name} />

<p>The store is now {status}</p>
<button
	onclick={() => {
		status = status === 'CLOSED' ? 'OPEN' : 'CLOSED';
	}}>Toggle Status</button
>
