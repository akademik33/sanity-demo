import { getSite } from '@/lib/sanity'
import CTA from './CTA'
import { cn } from '@/lib/utils'

import {
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6'
import { IoIosLink } from 'react-icons/io'

export default async function Social({
	className,
}: React.HTMLProps<HTMLDivElement>) {
	const { social } = await getSite()

	if (!social?.items?.length) return null

	return (
		<nav className={cn('flex flex-wrap items-center gap-x-4', className)}>
			{social.items.map((item, key) => {
				switch (item._type) {
					case 'link':
						return (
							<CTA link={item} key={key}>
								<Icon url={item.external} aria-label={item.label} />
							</CTA>
						)

					default:
						return null
				}
			})}
		</nav>
	)
}

function Icon({
	url,
	...props
}: { url?: string } & React.HTMLProps<SVGElement>) {
	if (!url) return null

	return url?.includes('facebook.com') ? (
		<FaFacebookF {...props} />
	) : url?.includes('github.com') ? (
		<FaGithub {...props} />
	) : url?.includes('instagram.com') ? (
		<FaInstagram {...props} />
	) : url?.includes('linkedin.com') ? (
		<FaLinkedinIn {...props} />
	) : url?.includes('tiktok.com') ? (
		<FaTiktok {...props} />
	) : url?.includes('twitter.com') || url?.includes('x.com') ? (
		<FaXTwitter {...props} />
	) : url?.includes('youtube.com') ? (
		<FaYoutube {...props} />
	) : (
		<IoIosLink {...props} />
	)
}
