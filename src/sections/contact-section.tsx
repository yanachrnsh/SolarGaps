import { styles } from '../constants/style-constants';
import { contactSection } from '../constants/content-constants';
import { SectionHeader } from '../components/section-header/section-header.component';
import { useFormspark } from '@formspark/use-formspark';
import { ChangeEvent, FormEvent, useState } from 'react';

const FORMSPARK_FORM_ID = 'l9LVXr3S1';

export const ContactSection = () => {
	const { header, title, inputPlaceholder } = contactSection;

	// update all here

	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID,
	});

	const [contacts, setContacts] = useState({ name: '', email: '', message: '' });

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await submit({ contacts });
		alert('Form contacts');
	};

	const onChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		setContacts({ ...contacts, [e.target.name]: e.target.value });
	};

	console.log(contacts);

	// updated form as per https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

	return (
		<section className={styles.sectionLayout}>
			<div className="flex flex-col xl:flex-row">
				<div className={styles.sectionLeft}>
					<SectionHeader header={header} />
				</div>
				<div className={styles.sectionRight}>
					<h2 className={`${styles.h2} pb-6 text-brand-yellow`}>{title}</h2>
					<form onSubmit={onSubmit} className="flex flex-col gap-6 xl:gap-9">
						<div className="gap-6 flex flex-col flex-wrap justify-between xl:flex-row xl:gap-0">
							<div className="xl:w-[48%]">
								<div className="max-h-72 items-stretch">
									<input
										type="text"
										id="name"
										name="name"
										placeholder={inputPlaceholder.name}
										required
										onChange={onChange}
										className={`${styles.input}`}
									/>
								</div>
							</div>
							<div className="xl:w-[48%]">
								<div className="max-h-72 items-stretch">
									<input
										value={contacts.email}
										type="email"
										id="email"
										name="email"
										placeholder={inputPlaceholder.email}
										required
										onChange={onChange}
										className={`${styles.input}`}
									/>
								</div>
							</div>
						</div>
						<textarea
							value={contacts.message}
							onChange={onChange}
							name="message"
							placeholder={inputPlaceholder.message}
							className={`${styles.input} min-h-[200px] resize-none`}
						/>
						<button type="submit" disabled={submitting} className={`${styles.button} justify-center`}>
							SEND
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
