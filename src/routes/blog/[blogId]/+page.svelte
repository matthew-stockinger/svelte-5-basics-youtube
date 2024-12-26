<script>
	let { data } = $props();

	$inspect(data);

	let blogPost = data.post;
</script>

<h1>Blog Article</h1>
<p>{blogPost}</p>
