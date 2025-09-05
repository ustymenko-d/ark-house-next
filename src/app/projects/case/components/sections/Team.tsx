import Tabs from "@/components/Tabs/Tabs";
import Button from "@/components/UI/Button";
import { TEAM_TABS } from "@/const/const";

const Team = () => {
	return (
		<>
			<div className='topline container mx-auto mb-14 px-4 md:px-10 lg:px-20'>
				<h2 className='font-semibold leading-tight'>Development team</h2>
				<Button to='/contact'>Contact&nbsp;Us</Button>
			</div>

			<div className='container mx-auto mb-14 px-4 md:px-10 lg:px-20'>
				<Tabs tabsList={TEAM_TABS} tabsType='team' />
			</div>
		</>
	);
};

export default Team;
