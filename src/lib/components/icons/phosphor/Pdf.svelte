<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	let { style, class: className }: Partial<HTMLAttributes<HTMLElement>> = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {style} class={className}
	><rect width="256" height="256" fill="none" /><polyline
		points="216 152 184 152 184 208"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/><line
		x1="208"
		y1="184"
		x2="184"
		y2="184"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/><path
		d="M48,192H64a20,20,0,0,0,0-40H48v56"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/><path
		d="M112,152v56h16a28,28,0,0,0,0-56Z"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/><path
		d="M48,112V40a8,8,0,0,1,8-8h96l56,56v24"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/><polyline
		points="152 32 152 88 208 88"
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="16"
	/></svg
>
