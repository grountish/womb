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
			of: [
				{
					name: 'firstSection',
					title: 'First Section',
					type: 'object',
					fields: [
						{ type: 'media' },
						{
							name: 'header',
							title: 'Header',
							type: 'text',
						},
					],
				}
				,
				{ type: 'hero' },
			],
		},
	],
}
