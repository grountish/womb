export default {
 
	name: 'settings',
	title: 'Settings',
	type: 'document',
	__experimental_actions: ['update', 'publish', 'create', 'delete'],
	fields: [
		{
			name: 'titulo',
			title: 'title',
			type: 'string',
		},
		{
			name: 'description',
			title: 'description',
			type: 'string',
		},
		{
			title: 'Logo',
			name: 'logo',
			type: 'image',
		},
		{
			title: 'ContactInfo',
			name: 'contactinfo',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
	],
}
