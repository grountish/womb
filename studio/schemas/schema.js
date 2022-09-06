import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import home from './documents/Home'
import settings from './documents/settings'
import gallery from './documents/gallery'
import blockContent from './objects/blockContent'
import hero from './objects/hero'
import galleryItem from './objects/galleryItem'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([hero, galleryItem, gallery, home, settings, blockContent]),
})
