import React from 'react';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: React.ReactNode;
}

const Link = ({ href, children, ...rest }: Props) => (
	<a data-testid='mocked-link' href={href} {...rest}>
		{children}
	</a>
);

export default Link;
