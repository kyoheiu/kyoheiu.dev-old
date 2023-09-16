<script lang="ts">
  import "../app.css";
  import Links from '$lib/Link.svelte';
</script>

<img src="images/avatar.png" class="rounded-full" alt="my avatar" width="150" height="150" />

<!-- Title -->
<h1 class="text-2xl m-2">Kyohei Uto</h1>

<!-- Short Bio -->
<div class="text-center m-2 mb-6 w-48">
	Husband, father, editor, working student@UoL, and developer in the wild.
</div>

<Links />

<div class="text-center mt-6 mb-2 w-48">
	Powered by <a class="underline" href="https://astro.build/" rel="noopener">Astro</a>, illustration
	by my wife.
</div>
