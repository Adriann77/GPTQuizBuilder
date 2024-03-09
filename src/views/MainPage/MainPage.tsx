

import { Testowe } from '../../components/Ai/Testowe';
import { Form } from '../../components/Form/Form';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { Quiz } from '../../components/Quiz/Quiz';

export const MainPage = () => {
	return (
		<MainLayout>
			<Header />
			<Testowe />
			{/* <Quiz/> */}
			{/* <Form /> */}
		</MainLayout>
	);
};
