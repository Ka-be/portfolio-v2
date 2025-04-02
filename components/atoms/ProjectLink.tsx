import React from "react";
import { LiaGithub, LiaExternalLinkSquareAltSolid } from "react-icons/lia";

interface ProjectLinkProps {
	link?: string;
	github?: string;
}

interface LinkButtonProps {
	href: string;
	icon: React.ReactNode;
}

const LinkButton = ({ href, icon }: LinkButtonProps) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="text-background opacity-70 hover:opacity-100 transition-opacity bg-foreground py-1 px-4 my-1"
	>
		{icon}
	</a>
);

const linkConfig = [
	{
		key: 'github',
		icon: <LiaGithub className="w-5 h-5" />,
		getHref: (props: ProjectLinkProps) => props.github
	},
	{
		key: 'link',
		icon: <LiaExternalLinkSquareAltSolid className="w-5 h-5" />,
		getHref: (props: ProjectLinkProps) => props.link
	}
];

const ProjectLink = ({ link, github }: ProjectLinkProps) => {
	return (
		<div className="flex gap-4">
			{linkConfig.map(({ key, icon, getHref }) => {
				const href = getHref({ link, github });
				return href && <LinkButton key={key} href={href} icon={icon} />;
			})}
		</div>
	);
};

export default ProjectLink;
