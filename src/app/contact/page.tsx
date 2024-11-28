'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import Button from '@/components/UI/Button/Button'
import ContactPopup from './components/ContactPopup/ContactPopup'
import styles from './contact.module.css'

const contactSchema = z.object({
	name: z
		.string()
		.regex(/^[A-Za-z\s]+$/, 'Name should contain only letters')
		.min(1, 'Name field is required'),
	contact: z
		.union([
			z
				.string()
				.regex(
					/^\+(\d{1,3})(\(\d{3}\))? ?\d{3}-?\d{4}$|^\+\d{1,3}\d{7,10}$/,
					'Invalid phone format +1(800) 555-5555'
				),
			z.string().email('Invalid email format'),
		])
		.refine((value) => value.trim() !== '', 'Contact field is required'),
})

const ContactPage: React.FC = () => {
	const breakpoints = useBreakpoints([640])
	const [phoneType, setPhoneType] = useState<boolean>(true)
	const [showPopup, setShowPopup] = useState<boolean>(false)
	const [formData, setFormData] = useState({ name: '', contact: '' })
	const [errors, setErrors] = useState<{ name?: string; contact?: string }>({})

	const toggleType = (): void => {
		setPhoneType((prev) => !prev)
		setFormData((prev) => ({ ...prev, contact: '' }))
		setErrors({})
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		setErrors((prev) => ({ ...prev, [name]: undefined }))
	}

	const togglePopupShow = (isShow: boolean = true): void => {
		setShowPopup(isShow)
	}

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault()

		try {
			contactSchema.parse(formData)
			setErrors({})
			togglePopupShow()
			setFormData({ name: '', contact: '' })

			setTimeout(() => {
				togglePopupShow(false)
			}, 3000)
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
		<main
			className={`${styles.contactPage} flex-auto flex flex-col justify-center container mx-auto px-4 md:px-10 lg:px-20`}>
			<form
				className='h-full flex flex-col justify-center items-center gap-y-6'
				onSubmit={handleSubmit}>
				<h1 className={`mb-8 font-semibold text-4xl lg:text-5xl text-center`}>
					We will be glad to contact&nbsp;you
				</h1>

				<div
					className={`${styles.toggler}${
						phoneType ? ` ` : ` ${styles.toggler_email} `
					}relative w-full flex flex-nowrap items-center border border-dark-color text-center`}>
					<button
						disabled={phoneType}
						onClick={toggleType}
						className={`${styles.toggler__button}${
							phoneType ? ' text-white ' : ' '
						}px-4 border border-dark-color bg-transparent text-dark-color outline-none`}
						type='button'>
						{breakpoints ? 'Phone Number' : 'Phone'}
					</button>
					<button
						disabled={!phoneType}
						onClick={toggleType}
						className={`${styles.toggler__button}${
							phoneType ? ' ' : ' text-white '
						}px-4 border border-dark-color bg-transparent text-dark-color outline-none`}
						type='button'>
						Email
					</button>
				</div>

				<p className={`${styles.description} text-center`}>
					{`Give us your ${phoneType ? 'number' : 'email'} and we will ${
						phoneType ? 'call you' : 'write to you'
					} now`}
				</p>
				<div className='w-full sm:w-3/5 lg:w-1/2'>
					<input
						className={`${styles.input} w-full py-5 px-6 border border-dark-color rounded-none leading-5`}
						value={formData.name}
						onChange={handleChange}
						name='name'
						placeholder='Your Name'
						type='text'
					/>
					{errors.name && <p className='text-red-500 mt-1'>{errors.name}</p>}
				</div>
				<div className='w-full sm:w-3/5 lg:w-1/2'>
					<input
						className={`${styles.input} w-full py-5 px-6 border border-dark-color rounded-none leading-5`}
						value={formData.contact}
						onChange={handleChange}
						name='contact'
						placeholder={phoneType ? '+0(123) 456-7890' : 'username@mail.com'}
						type={phoneType ? 'tel' : 'email'}
					/>
					{errors.contact && (
						<p className='text-red-500 mt-1'>{errors.contact}</p>
					)}
				</div>

				<Button>Contact&nbsp;us</Button>
			</form>

			{showPopup && <ContactPopup togglePopupShow={togglePopupShow} />}
		</main>
	)
}

export default ContactPage
