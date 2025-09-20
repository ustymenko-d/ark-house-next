import { z } from 'zod';

const nameSchema = z
	.string()
	.regex(/^[A-Za-z\s]+$/, 'Name should contain only letters')
	.min(1, 'Name field is required');

const phoneSchema = z
	.string()
	.regex(
		/^(\+?\d{11})$/,
		'Phone must be 11 digits, optionally starting with +'
	);

const emailSchema = z.string().email('Invalid email format');

const ContactSchemas = {
	nameSchema,
	phoneSchema,
	emailSchema,
};

export default ContactSchemas;
