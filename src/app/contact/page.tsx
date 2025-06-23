'use client'

import { useState } from 'react'
import { z } from 'zod'

import Button from '@/components/UI/Button/Button'

import ContactTypeToggle from './components/ContactTypeToggle/ContactTypeToggle'
import Input from './components/Input/Input'
import Popup from './components/Popup/Popup'

const nameSchema = z
	.string()
	.regex(/^[A-Za-z\s]+$/, 'Name should contain only letters')
	.min(1, 'Name field is required')

const phoneSchema = z
	.string()
	.regex(
		/^\+(\d{1,3})(\(\d{3}\))? ?\d{3}-?\d{4}$|^\+\d{1,3}\d{7,10}$/,
		'Invalid phone format +1(800) 555-5555'
	)

const emailSchema = z.string().email('Invalid email format')

const ContactPage = () => {
	const [phoneType, setPhoneType] = useState(true)
	const [showPopup, setShowPopup] = useState(false)
	const [formData, setFormData] = useState<{ name: string; contact: string }>({
		name: '',
		contact: '',
	})
	const [errors, setErrors] = useState<{ name?: string; contact?: string }>({})

	const contactSchema = z.object({
		name: nameSchema,
		contact: phoneType ? phoneSchema : emailSchema,
	})

	const toggleContactType = (): void => {
		setPhoneType((prev) => !prev)
		setFormData((prev) => ({ ...prev, contact: '' }))
		setErrors({})
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		setErrors((prev) => ({ ...prev, [name]: undefined }))
	}

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault()

		try {
			contactSchema.parse(formData)
			setErrors({})
			setShowPopup(true)
			setFormData({ name: '', contact: '' })

			setTimeout(() => setShowPopup(false), 3000)
		} catch (validationError) {
			if (validationError instanceof z.ZodError) {
				const fieldErrors: { name?: string; contact?: string } = {}
				validationError.errors.forEach((err) => {
					if (err.path[0] === 'name') {
						fieldErrors.name = err.message
					}
					if (err.path[0] === 'contact') {
						fieldErrors.contact = err.message
					}
				})
				setErrors(fieldErrors)
			}
		}
	}

	return (
		<main className='min-h-[700px] flex-auto flex flex-col justify-center container mx-auto px-4 md:px-10 lg:px-20'>
			<form
				className='flex flex-col items-center justify-center h-full gap-y-6'
				onSubmit={handleSubmit}>
				<h1 className='mb-8 text-4xl font-semibold text-center lg:text-5xl'>
					We will be glad to contact&nbsp;you
				</h1>

				<ContactTypeToggle
					phoneType={phoneType}
					toggleContactType={toggleContactType}
				/>

				<p className='text-2xl text-center sm:max-w-80'>
					{`Give us your ${phoneType ? 'number' : 'email'} and we will ${
						phoneType ? 'call you' : 'write to you'
					} now`}
				</p>

				<Input
					name='name'
					type='text'
					placeholder='Your Name'
					formData={formData}
					errors={errors}
					handleChange={handleChange}
				/>
				<Input
					name='contact'
					type={phoneType ? 'tel' : 'email'}
					placeholder={phoneType ? '+0(123) 456-7890' : 'username@mail.com'}
					formData={formData}
					errors={errors}
					handleChange={handleChange}
				/>

				<Button>Contact&nbsp;us</Button>
			</form>

			{showPopup && <Popup closePopup={() => setShowPopup(false)} />}
		</main>
	)
}

export default ContactPage
