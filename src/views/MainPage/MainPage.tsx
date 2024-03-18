// import { Form } from '../../components/Form/Form';
import { FormComponent } from '../../components/FormComponent';
import { Header } from '../../components/Header/Header';
import { MainLayout } from '../../components/MainLayout/MainLayout';

export const MainPage = () => {
	return (
		<MainLayout>
			<Header />
			<FormComponent/>
			{/* <Form /> */}
		</MainLayout>
	);
};
