<!-- bookmark 1:33:00 -->

<script lang="ts">
	import { blur } from 'svelte/transition';
	import Header from './Header.svelte';

	let formState = $state({
		answers: {},
		step: 0,
		error: ''
	});

	const QUESTIONS = [
		{
			question: 'What is your name?',
			id: 'name',
			type: 'text'
		},
		{
			question: 'What is your birthday?',
			id: 'birthday',
			type: 'date'
		},
		{
			question: "What's your favourite colour?",
			id: 'color',
			type: 'color'
		}
	];

	function nextStep(id: string) {
		if (formState.answers[id]) {
			formState.step += 1;
			formState.error = '';
		} else {
			formState.error = 'Please fill out the form.';
		}
	}

	// onMount
	$effect(() => {
		// console.log('on mounted');
		return () => {
			// when unmounted or destroyed.
			// also, before effect reruns.
			// console.log('on unmounted');
		};
	});

	// since we're using a reactive value, formState, this will rerun every time
	// formState.step changes.
	$effect(() => {
		// console.log('formState', formState.step);
		return () => {
			// console.log('before formState reruns', formState.step);
		};
	});
</script>

<Header name={formState.answers.name} />

<main>
	{#if formState.step >= QUESTIONS.length}
		<p>Thank you!</p>
	{:else}
		<p>Step: {formState.step + 1}</p>
	{/if}

	{#each QUESTIONS as question, i (question.id)}
		{#if i === formState.step}
			<div transition:blur>
				{@render formStep(question)}
			</div>
			<!-- <div
				in:fly={{ x: 200, duration: 200, opacity: 0, delay: 200 }}
				out:fly={{ x: -200, duration: 200, opacity: 0 }}
			>
				{@render formStep(question)}
			</div> -->
		{/if}
	{/each}

	{#if formState.error}
		<p class="error">{formState.error}</p>
	{/if}
</main>

{#snippet formStep({ question, id, type }: { type: string; id: string; question: string })}
	<article>
		<div>
			<label for={id}>{question}</label>
			<input {type} {id} bind:value={formState.answers[id]} />
		</div>
		<button onclick={() => nextStep(id)}>Next</button>
	</article>
{/snippet}

<style>
	.error {
		color: red;
	}
</style>
