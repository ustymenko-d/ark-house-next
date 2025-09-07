'use client';

import * as Tabs from '@radix-ui/react-tabs';
import clsx from 'clsx';

import { DEPARTMENTS } from '@/const/const';
import { Department } from '@/const/const.types';
import { TeamsDocument, TeamsQuery } from '@/graphql/generated';
import { useTabsData } from '@/hooks/useTabsData';

import AnimatedWrapper from './AnimatedWrapper';
import Loader from './Loader';
import TeamMemberCard from './TeamMemberCard';

const TeamTabs = () => {
	const { active, list, initialLoading, loading, handleTabChange } =
		useTabsData<Department, TeamsQuery['teams'][number], TeamsQuery>({
			query: TeamsDocument,
			tabs: DEPARTMENTS,
			variableKey: 'department',
			extract: (data) => data?.teams,
		});

	if (initialLoading) return <Loader />;

	return (
		<Tabs.Root
			value={active}
			onValueChange={handleTabChange}
			className='grid xl:grid-cols-[auto_1fr] xl:gap-x-10'>
			<Tabs.List
				aria-label='Projects'
				className={clsx(
					'mb-8 flex w-full flex-wrap items-center gap-x-4 gap-y-2',
					'sm:justify-between xl:mb-0 xl:flex-col xl:items-start xl:justify-start xl:gap-4'
				)}>
				{DEPARTMENTS.map((department) => (
					<Tabs.Trigger
						key={`${department}-tab-trigger`}
						value={department}
						className={clsx(
							'animatedUnderline text-2xl font-semibold text-dark-color',
							'data-[state=active]:[background-size:100%_1px]'
						)}>
						{department}
					</Tabs.Trigger>
				))}
			</Tabs.List>

			<div className='xl:col-start-2 xl:min-h-[797px]'>
				{DEPARTMENTS.map((department) => (
					<Tabs.Content
						key={department}
						value={department}
						className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
						{loading && department === active ? (
							<div className='md:col-span-2 xl:col-span-3'>
								<Loader />
							</div>
						) : (
							list?.map((elem, idx) =>
								!elem ? null : (
									<AnimatedWrapper key={`${elem.name}-${idx}`} typeFade={false}>
										<TeamMemberCard {...elem} />
									</AnimatedWrapper>
								)
							)
						)}
					</Tabs.Content>
				))}
			</div>
		</Tabs.Root>
	);
};

export default TeamTabs;
