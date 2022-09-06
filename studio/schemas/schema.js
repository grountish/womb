import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import home from './documents/Home'
import settings from './documents/settings'
import blockContent from './objects/blockContent'
import hero from './objects/hero'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([hero, home, settings, blockContent]),
})
