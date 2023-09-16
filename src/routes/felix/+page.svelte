<script lang="ts">
	import '../../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex justify-end space-x-4 mt-4">
	<a href="https://crates.io/crates/felix">crates.io</a>
	<a href="https://github.com/kyoheiu/felix">repository</a>
</div>
<div class="flex justify-center text-6xl font-extrabold mt-8">felix</div>
<div
	class="prose
            prose-slate
            sm:prose-lg
			prose-invert
			prose-h2:border-b
			prose-h2:border-slate-400
			prose-table:table-fixed
			prose-a:text-sky-200
	        my-8
"
>
	<!-- eslint-disable -->
	{@html data.result}
</div>
