import clsx from 'clsx';

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
	svgImage: React.ReactNode;
	topLineText: string;
	bottomLineText: string;
}

const Banner = ({
	svgImage,
	topLineText,
	bottomLineText,
	className,
}: BannerProps) => (
	<div
		className={clsx(
			className,
			'flex flex-col items-center justify-center gap-4 text-center text-dark-color'
		)}>
		{svgImage}
		<p className='text-3xl font-bold leading-none tracking-tight md:text-[2.5rem] 2xl:text-[3.5rem]'>
			{topLineText}
			<br />
			{bottomLineText}
		</p>
	</div>
);

export default Banner;
