'use client'

import { useState } from 'react'
import Button from '@/components/UI/Button/Button'
import styles from './contact.module.css'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import ContactPopup from './components/ContactPopup/ContactPopup'

const ContactPage: React.FC = () => {
	const breakpoints = useBreakpoints([640])
	const [phoneType, setPhoneType] = useState<boolean>(true)
	const [showPopup, setShowPopup] = useState<boolean>(false)

	const toggleType = (): void => setPhoneType((prev) => !prev)

	const togglePopupShow = (isShow: boolean = true): void => {
		setShowPopup(isShow)
	}

	const handleSubmit = (): void => {
		togglePopupShow()

		setTimeout(() => {
			togglePopupShow(false)
		}, 3000)
	}

	return (
		<main
			className={`${styles.contactPage} flex-auto flex flex-col justify-center container mx-auto px-4 md:px-10 lg:px-20`}>
			<form
				className='h-full flex flex-col justify-center items-center gap-y-6'
				action={handleSubmit}>
				<h1 className={`font-semibold ${styles.title} text-center`}>
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
					Give us your number and we will call&nbsp;you now
				</p>
				<input
					className={`${styles.input} w-full py-5 px-6 border border-dark-color rounded-none leading-6`}
					name='first-name'
					placeholder='Your Name'
					pattern='[A-Za-z]{1,32}'
					required
					type='text'
				/>
				{phoneType ? (
					<input
						className={`${styles.input} w-full py-5 px-6 border border-dark-color rounded-none leading-6`}
						name='phone'
						placeholder='+0(123) 456-7890'
						pattern='[0-9]{11}'
						required
						type='tel'
					/>
				) : (
					<input
						className={`${styles.input} w-full py-5 px-6 border border-dark-color rounded-none leading-6`}
						name='email'
						placeholder='username@mail.com'
						pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
						required
						type='email'
					/>
				)}
				<Button>Contact&nbsp;us</Button>
			</form>

			{showPopup && <ContactPopup togglePopupShow={togglePopupShow} />}
		</main>
	)
}

export default ContactPage
