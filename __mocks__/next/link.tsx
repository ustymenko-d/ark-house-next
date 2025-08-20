import React from 'react';

interface Props {
	href: string;
	children: React.ReactNode;
	className?: string;
}

const Link = ({ href, children, className }: Props) => {
	return (
		<a data-testid='mocked-link' href={href} className={className}>
			{children}
		</a>
	);
};

export default Link;
