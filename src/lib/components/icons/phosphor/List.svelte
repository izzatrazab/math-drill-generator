<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let {style, class: className} : Partial<HTMLAttributes<HTMLElement>> = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {style} class={className}
	><rect width="256" height="256" fill="none" /><line
		x1="40"
		y1="128"
		x2="216"
		y2="128"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/><line
		x1="40"
		y1="64"
		x2="216"
		y2="64"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/><line
		x1="40"
		y1="192"
		x2="216"
		y2="192"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/></svg
>
