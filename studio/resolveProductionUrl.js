export default function resolveProductionUrl(document) {
 	const url = document._type == 'home' ? '' : document._type
	return `https://ourlink.netlify.app/${url}?preview=true`
}
