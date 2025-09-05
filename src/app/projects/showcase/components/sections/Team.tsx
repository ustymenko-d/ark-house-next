import TeamTabs from '@/components/TeamTabs';
import Button from '@/components/UI/Button';

const Team = () => (
	<>
		<div className='topline container mx-auto mb-14 px-4 md:px-10 lg:px-20'>
			<h2 className='font-semibold leading-tight'>Development team</h2>
			<Button to='/contact'>Contact&nbsp;Us</Button>
		</div>

		<div className='container mx-auto mb-14 px-4 md:px-10 lg:px-20'>
			<TeamTabs />
		</div>
	</>
);

export default Team;
