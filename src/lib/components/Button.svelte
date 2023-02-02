<script lang="ts">
	export let href: string;
	export let title: string;
	export let paddingx: string = '';
	export let width: string = '';
	export let margin: string = '';
</script>

<a
	class="font-spartan rounded bg-gradient-to-br from-custom-primary-1 to-custom-primary-2 py-4 {paddingx} {width} {margin} text-center xl:py-[0.9rem]	"
	{href}
>
	{title}
</a>
