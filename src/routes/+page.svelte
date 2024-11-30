<!-- bookmark 50:00 -->

<script lang="ts">
	import Header from './Header.svelte';

	let formState = $state({
		name: '',
		birthday: '',
		step: 0,
		error: ''
	});
</script>

<main>
	<p>Step: {formState.step}</p>

	{#if formState.error}
		<p class="error">{formState.error}</p>
	{/if}

	{#if formState.step === 0}
		<div>
			<label for="name">Your Name</label>
			<input type="text" id="name" bind:value={formState.name} />
		</div>
		<button
			onclick={() => {
				if (formState.name !== '') {
					formState.step += 1;
					formState.error = '';
				} else {
					formState.error = 'Your name is empty.  Please write your name.';
				}
			}}>Next</button
		>
	{:else if formState.step === 1}
		<div>
			<label for="bday">Birthday</label>
			<input type="date" id="bday" bind:value={formState.birthday} />
		</div>
		<button
			onclick={() => {
				if (formState.birthday !== '') {
					formState.step += 1;
					formState.error = '';
				} else {
					formState.error = 'Your birthday is empty.  Please write your birthday.';
				}
			}}>Next</button
		>
	{/if}
</main>

<style>
	.error {
		background-color: palevioletred;
		color: white;
		padding: 1rem;
		border-radius: 4px;
	}
</style>
