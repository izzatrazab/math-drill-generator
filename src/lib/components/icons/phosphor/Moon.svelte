<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { style, class: className }: Partial<HTMLAttributes<HTMLElement>> = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {style} class={className}
	><rect width="256" height="256" fill="none" /><path
		d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/></svg
>
