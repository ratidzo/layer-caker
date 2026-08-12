import Link from 'next/link'

const links = [
	{
		id: 1,
		title: 'Posts',
		href: '/posts',
	},

	{
		id: 2,
		title: 'Sanity Studio',
		href: '/studio'
	},
]

export function Header() {
	return (
		<div className="from-pink-50 to-white bg-gradient-to-b p-6">
			<header className="bg-white/80 shadow-md flex items-center justify-between p-6 rounded-lg container mx-auto shadow-pink-50">
				<Link
					className="text-pink-700 md:text-xl font-bold tracking-tight"
					href="/"
				>
					Layer Caker
				</Link>
				<ul className="flex items-center gap-4 font-semibold text-slate-700">
					{
						links.map((link)=>(
							<li key={link.id}>
								<Link href={link.href} className="hover:text-pink-500 transition-colors">
									{ link.title }
								</Link>
							</li>
						))
					}
					
				</ul>
			</header>
		</div>
	)
}
