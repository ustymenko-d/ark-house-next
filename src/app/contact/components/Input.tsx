interface InputProps {
	name: 'name' | 'contact';
	type: 'text' | 'email' | 'tel';
	placeholder: string;
	errors: { name?: string; contact?: string };
	formData: { name: string; contact: string };
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
	name,
	type,
	placeholder,
	formData,
	errors,
	handleChange,
}: InputProps) => (
	<div className='w-full sm:w-3/5 lg:w-1/2'>
		<input
			name={name}
			type={type}
			value={formData[name]}
			onChange={handleChange}
			placeholder={placeholder}
			className='w-full rounded-none border border-dark-color px-6 py-5 leading-5 placeholder:text-gray-500 focus:border-[1.5px] disabled:border-dark-color/10 disabled:text-dark-color/10'
		/>
		{errors[name] && <p className='mt-1 text-red-500'>{errors[name]}</p>}
	</div>
);

export default Input;
