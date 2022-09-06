export default {
	name: 'home',
	title: 'Home',
	type: 'document',
	__experimental_actions: ['update', 'publish', 'create', 'delete'],
	fields: [
		{
			title: 'Blocks',
			name: 'blocks',
			type: 'array',
			of: [{ type: 'hero' }],
		},
	],
}
