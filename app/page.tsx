import { Header } from '@app/components/header';
import { Main } from '@app/components/main';

const Home = () => {
	return (
		<div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-40'>
			<div className='lg:flex lg:justify-between lg:gap-6'>
				<Header />
				<Main />
			</div>
		</div>
	);
};

export default Home;
