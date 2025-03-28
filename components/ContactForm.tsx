"use client";

import React, { useState, FormEvent } from "react";
import regex from "@/utils/regex";
import Link from "next/link";

const validateEmail = (email: string): boolean => {
	return regex.email.test(email);
};

const validateName = (name: string): boolean => {
	return regex.name.test(name);
};

const validateMessage = (message: string): boolean => {
	return regex.message.test(message);
};

interface FormData {
	email: string;
	name: string;
	message: string;
}

interface FormErrors {
	email?: string;
	name?: string;
	message?: string;
}

const ContactForm = () => {
	const [formData, setFormData] = useState<FormData>({
		email: "",
		name: "",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [buttonText, setButtonText] = useState("Envoyer");
	const [submittedName, setSubmittedName] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validation des champs avec les regex
		const isEmailValid = validateEmail(formData.email);
		const isNameValid = formData.name ? validateName(formData.name) : true; // Optionnel
		const isMessageValid = formData.message
			? validateMessage(formData.message)
			: true; // Optionnel

		if (isEmailValid && isNameValid && isMessageValid) {
			console.log("Données du formulaire :", {
				email: formData.email,
				name: formData.name,
				message: formData.message,
			});

			// Sauvegarder le nom avant de réinitialiser le formulaire
			setSubmittedName(formData.name);

			// Réinitialisation du formulaire et affichage du message de confirmation
			setFormData({
				email: "",
				name: "",
				message: "",
			});
			setIsSubmitted(true);
			setButtonText("Envoyé");
		} else {
			console.log("Erreurs de validation :", {
				email: !isEmailValid ? "Email invalide" : null,
				name: !isNameValid ? "Nom invalide" : null,
				message: !isMessageValid ? "Message invalide" : null,
			});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 w-full md:w-5/12 max-w-[800px] md:pl-10 pb-5 md:pb-10"
		>
			{!isSubmitted ? (
				<>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="email"
							className="text-sm font-light text-foreground/80"
						>
							Email *
						</label>
						<input
							type="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="bg-transparent border border-foreground/20 p-2 text-foreground focus:border-foreground/60 outline-none"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="name"
							className="text-sm font-light text-foreground/80"
						>
							Nom / Prénom
						</label>
						<input
							type="text"
							id="name"
							value={formData.name}
							onChange={handleChange}
							className="bg-transparent border border-foreground/20 p-2 text-foreground focus:border-foreground/60 outline-none"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="message"
							className="text-sm font-light text-foreground/80"
						>
							Message
						</label>
						<textarea
							id="message"
							value={formData.message}
							onChange={handleChange}
							rows={4}
							className="bg-transparent border border-foreground/20 p-2 text-foreground focus:border-foreground/60 outline-none resize-none"
						/>
					</div>
				</>
			) : (
				<span className="text-foreground/80 py-10 h-full font-light text-justify">
					{submittedName ? `Merci ${submittedName}` : "Merci "},
					message bien reçu ! Je vous répondrai dans les plus brefs délais. <br /><br />
                    En attendant, vous pouvez aller faire un tour sur mon <Link href="/">site</Link> ou sur mes réseaux.
				</span>
			)}
			<button
				type="submit"
				disabled={isSubmitted}
				className="bg-foreground text-background px-4 py-2 mt-2 hover:bg-blue-500 transition-colors disabled:hover:bg-foreground disabled:cursor-default"
			>
				{buttonText}
			</button>
		</form>
	);
};

export default ContactForm;
