export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'category' },
				},
			],
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'blockContent',
		},
		{
			type: 'media',
			name: 'mainMedia',
			title: 'Main Media',
		},
		{
			name: 'information',
			title: 'Information',
			type: 'blockContent',
		},

		{
			name: 'mainSlider',
			title: 'Main Slider',
			type: 'array',
			hidden: ({ document }) => document?.isVideo,
			of: [
				{
					name: 'image',
					title: 'Add Image',
					type: 'image',
				},
			],
		},
	],
}
