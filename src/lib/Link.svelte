<script lang="ts">
	import {
		GithubSolid,
		CodeBranchOutline,
		PenNibOutline,
		PenOutline,
		CaptioningOutline,
		DiscordSolid,
		MailBoxOutline
	} from 'flowbite-svelte-icons';

	type Link = {
		name: string;
		link: string;
	};

	const links: Link[] = [
		{
			name: 'GitHub',
			link: 'https://github.com/kyoheiu'
		},
		{
			name: 'sourcehut',
			link: 'https://git.sr.ht/~kyoheiu/'
		},
		{
			name: 'blog (ja)',
			link: 'https://blog.kyoheiu.dev'
		},
		{
			name: 'zenn (ja)',
			link: 'https://zenn.dev/kyoheiu'
		},
		{
			name: 'TED Translation',
			link: 'https://www.ted.com/profiles/14244197/translator'
		},
		{ name: 'Discord@kyoheiu', link: '' },
		{ name: 'im@kyoheiu.dev', link: '' }
	];
</script>

{#each links as link}
	<a
		href={link.link}
		class="flex flex-row items-center justify-center text-slate-800 bg-slate-200 rounded-md w-48 h-10 m-1 p-2"
	>
		{#if link.name === 'GitHub'}
			<GithubSolid class="h-4 w-4" />
		{:else if link.name === 'sourcehut'}
			<CodeBranchOutline class="h-4 w-4" />
		{:else if link.name === 'blog (ja)'}
			<PenNibOutline class="h-4 w-4" />
		{:else if link.name === 'zenn (ja)'}
			<PenOutline class="h-4 w-4" />
		{:else if link.name === 'TED Translation'}
			<CaptioningOutline class="h-4 w-4" />
		{:else if link.name === 'Discord@kyoheiu'}
			<DiscordSolid class="h-4 w-4" />
		{:else if link.name === 'im@kyoheiu.dev'}
			<MailBoxOutline class="h-4 w-4" />
		{/if}
		&nbsp;
		<span class="text-slate-800 break-all">
			{link.name}
		</span>
	</a>
{/each}
