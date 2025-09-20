'use client';

import { FormEvent, useCallback, useState } from 'react';
import { z } from 'zod';

import Button from '@/components/UI/Button';

import ContactTypeToggle from './components/ContactTypeToggle';
import Input from './components/Input';
import Popup from './components/Popup';
import ContactSchemas from './contact.schemas';

const getContactSchema = (isPhone: boolean) =>
	z.object({
		name: ContactSchemas.nameSchema,
		contact: isPhone ? ContactSchemas.phoneSchema : ContactSchemas.emailSchema,
	});

const ContactPage = () => {
	const [phoneType, setPhoneType] = useState(true);
	const [showPopup, setShowPopup] = useState(false);
	const [formData, setFormData] = useState({ name: '', contact: '' });
	const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});

	const toggleContactType = useCallback(() => {
		setPhoneType((prev) => !prev);
		setFormData((prev) => ({ ...prev, contact: '' }));
		setErrors({});
	}, []);

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: undefined }));
	}, []);

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault();
			const contactSchema = getContactSchema(phoneType);

			try {
				contactSchema.parse(formData);
				setErrors({});
				setShowPopup(true);
				setFormData({ name: '', contact: '' });

				setTimeout(() => setShowPopup(false), 3000);
			} catch (error) {
				if (error instanceof z.ZodError) {
					const fieldErrors: typeof errors = {};

					error.errors.forEach(({ path, message }) => {
						const field = path[0] as keyof typeof errors;
						fieldErrors[field] = message;
					});

					setErrors(fieldErrors);
				}
			}
		},
		[formData, phoneType]
	);

	const inputs = [
		{ name: 'name', type: 'text', placeholder: 'Your Name' },
		{
			name: 'contact',
			type: phoneType ? 'tel' : 'email',
			placeholder: phoneType ? '+0(123) 456-7890' : 'username@example.com',
		},
	] as const;

	return (
		<main className='container mx-auto flex min-h-[700px] flex-auto flex-col justify-center px-4 md:px-10 lg:px-20'>
			<form
				className='flex h-full flex-col items-center justify-center gap-y-6'
				onSubmit={handleSubmit}>
				<h1 className='mb-8 text-center text-4xl font-semibold leading-tight tracking-tight md:text-5xl'>
					We will be glad to contact&nbsp;you
				</h1>

				<ContactTypeToggle
					phoneType={phoneType}
					toggleContactType={toggleContactType}
				/>

				<p className='text-center text-2xl text-gray-800 sm:max-w-80'>
					{`Give us your ${phoneType ? 'number' : 'email'} and we will ${
						phoneType ? 'call you' : 'write to you'
					} now`}
				</p>

				{inputs.map((item) => (
					<Input
						key={item.name}
						{...item}
						formData={formData}
						errors={errors}
						handleChange={handleChange}
					/>
				))}

				<Button>Contact&nbsp;us</Button>
			</form>

			{showPopup && <Popup closePopup={() => setShowPopup(false)} />}
		</main>
	);
};

export default ContactPage;
