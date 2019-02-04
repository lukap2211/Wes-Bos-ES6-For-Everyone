import md5 from 'md5'

export default function gravatar (email){
	const hash = md5(email.toLowerCase())
	const gravatarPhoto = `https://www.gravatar.com/avatar/${hash}`
	console.log(`My Gravatar URL https://www.gravatar.com/avatar/${hash}`)
	return gravatarPhoto
}