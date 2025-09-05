'use client';

import * as Tabs from '@radix-ui/react-tabs';
import clsx from 'clsx';
import Link from 'next/link';

import Loader from '@/components/Loader';
import ProjectCard from '@/components/ProjectCard';
import { SERVICES } from '@/const/const';
import { Service } from '@/const/const.types';
import { ProjectsDocument, ProjectsQuery } from '@/graphql/generated';
import { useTabsData } from '@/hooks/useTabsData';
import apolloClient from '@/lib/apolloClient';

import styles from './ProjectsTabs.module.css';

const ProjectsTabs = () => {
	const { active, list, loadingInitial, loadingContent, handleTabChange } =
		useTabsData<Service, ProjectsQuery['progects'][number], ProjectsQuery>({
			client: apolloClient,
			query: ProjectsDocument,
			tabs: SERVICES,
			variableKey: 'type',
			extract: (data) => data?.progects,
		});

	if (loadingInitial) return <Loader />;

	return (
		<Tabs.Root
			value={active}
			onValueChange={handleTabChange}
			className='grid xl:grid-cols-[auto_1fr] xl:gap-x-6'>
			<Tabs.List
				aria-label='Projects'
				className={clsx(
					'mb-8 flex w-full flex-wrap items-center gap-4',
					'sm:justify-between xl:mb-0 xl:flex-col xl:items-start xl:justify-start xl:gap-4'
				)}>
				{SERVICES.map((service) => (
					<Tabs.Trigger
						key={`${service}-tab-trigger`}
						value={service}
						className={clsx(
							'animatedUnderline text-2xl font-semibold text-dark-color',
							'data-[state=active]:[background-size:100%_1px]'
						)}>
						{service}
					</Tabs.Trigger>
				))}
			</Tabs.List>

			<div className='xl:col-start-2'>
				{SERVICES.map((service) => (
					<Tabs.Content
						key={service}
						value={service}
						className={clsx(
							styles.grid,
							'grid gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-12'
						)}>
						{loadingContent && service === active ? (
							<Loader />
						) : (
							list?.map((elem, idx) =>
								!elem ? null : (
									<Link
										key={`${elem.title}-tab-content-${idx}`}
										href='/projects/showcase'
										className={clsx(
											styles.project,
											'outline-dark-color transition-[outline-offset] duration-150 hover:outline hover:outline-2 hover:outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
										)}>
										<ProjectCard hero={idx === 0} {...elem} />
									</Link>
								)
							)
						)}
					</Tabs.Content>
				))}
			</div>
		</Tabs.Root>
	);
};

export default ProjectsTabs;
