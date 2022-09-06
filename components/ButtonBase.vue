<template>

	<button
		:href="url"
		:class="[
			'rounded-full border lg:px-6 px-4 py-3 text-sm hover:shadow-xl scaleUp',
			typeBtn == 'primary'
				? 'bg-primaryGreen text-white'
				: typeBtn == 'secondary'
				? 'bg-primaryBlue'
				: typeBtn == 'empty'
				? 'bg-transparent border-2 border-black'
				: 'bg-black text-white',
		]"
	>

		<slot class=""></slot>

	</button>

</template>

<script>
export default {
	props: ['typeBtn', 'url'],
}
</script>

<style>

</style>
