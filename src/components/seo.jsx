import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SeoConfig = ({ title, description }) => {
	const seo = {
		title: title,
		description: "Portfolio site",
	};

	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta
				name="google-site-verification"
				content="D_slftRx1U1982acPd1bJMNr1rwSK7exMiYToPH7JGY"
			/>
			<meta httpEquiv="Cache-control" content="public" />
		</>
	);
};
