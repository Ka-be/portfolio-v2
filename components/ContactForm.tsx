"use client";

import React, { useState, FormEvent } from "react";
import regex from "@/utils/regex";
import Link from "next/link";
import { Send, SendHorizontal, Check } from "lucide-react";

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
	const [isHovered, setIsHovered] = useState(false);
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
					message bien reçu ! Je vous répondrai dans les plus brefs
					délais 😄
				</span>
			)}
			<button
				type="submit"
				disabled={isSubmitted}
				onMouseEnter={() => !isSubmitted && setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-foreground transition duration-300 ease-out border border-foreground/20  group disabled:opacity-50 disabled:cursor-not-allowed"
			>
				<span className="absolute inset-0 flex items-center justify-center w-full h-full bg-foreground text-background duration-300 -translate-x-full group-hover:translate-x-0 ease">
					{isSubmitted ? (
						<Check className="w-6 h-6" />
					) : (
						<SendHorizontal className="w-6 h-6" />
					)}
				</span>
				<span className="absolute flex items-center justify-center w-full h-full text-foreground transition-all duration-300 transform group-hover:translate-x-full ease">
					{isSubmitted ? "Envoyé" : "Envoyer"}
				</span>
				<span className="relative invisible">
					{isSubmitted ? "Envoyé" : "Envoyer"}
				</span>
			</button>
		</form>
	);
};

export default ContactForm;
