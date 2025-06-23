import { z } from 'zod'

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

const ContactSchemas = {
	nameSchema,
	phoneSchema,
	emailSchema,
}

export default ContactSchemas
