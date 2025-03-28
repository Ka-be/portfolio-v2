"use client";

import React, { useState, FormEvent } from "react";
import regex from "@/lib/utils/regex";
import Link from "next/link";
import { Send, Check, Loader2 } from "lucide-react";

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
	const [isPending, setIsPending] = useState(false);
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

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const isEmailValid = validateEmail(formData.email);
		const isNameValid = formData.name ? validateName(formData.name) : true;
		const isMessageValid = formData.message
			? validateMessage(formData.message)
			: true;

		if (isEmailValid && isNameValid && isMessageValid) {
			try {
				setIsPending(true);
				setSubmittedName(formData.name);

				// Simuler un délai pour l'animation
				await new Promise((resolve) => setTimeout(resolve, 1500));

				setFormData({
					email: "",
					name: "",
					message: "",
				});
				setIsSubmitted(true);
			} catch (error) {
				console.error("Erreur lors de l'envoi du formulaire:", error);
			} finally {
				setIsPending(false);
			}
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
							className="text-xs font-light text-foreground/80 uppercase tracking-widest"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="bg-transparent border border-foreground p-2 text-foreground hover:border-foreground/30 focus:bg-foreground focus:text-background outline-none transition-colors duration-300"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="name"
							className="text-xs font-light text-foreground/80 uppercase tracking-widest"
						>
							Nom / Prénom
						</label>
						<input
							type="text"
							id="name"
							value={formData.name}
							onChange={handleChange}
							className="bg-transparent border border-foreground p-2 text-foreground hover:border-foreground/30 focus:bg-foreground focus:text-background outline-none transition-colors duration-300"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label
							htmlFor="message"
							className="text-xs font-light text-foreground/80 uppercase tracking-widest"
						>
							Message
						</label>
						<textarea
							id="message"
							value={formData.message}
							onChange={handleChange}
							rows={4}
							className="bg-transparent border border-foreground p-2 text-foreground hover:border-foreground/30 focus:bg-foreground focus:text-background outline-none transition-colors duration-300 resize-none"
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
				disabled={isSubmitted || isPending}
				onMouseEnter={() =>
					!isSubmitted && !isPending && setIsHovered(true)
				}
				onMouseLeave={() => setIsHovered(false)}
				className="relative inline-flex items-center justify-center p-2 overflow-hidden font-medium text-foreground transition duration-300 ease-out border border-foreground/20 group disabled:opacity-50 disabled:cursor-not-allowed w-full h-full"
			>
				{isSubmitted ? (
					<Check className="w-6 h-6" strokeWidth={1} />
				) : isPending ? (
					<Loader2 className="w-6 h-6 animate-spin" strokeWidth={1} />
				) : (
					<>
						<span className="absolute inset-0 flex items-center justify-center w-full h-full bg-foreground text-background duration-1000 -translate-x-full group-hover:translate-x-0 ease">
							<Send className="w-6 h-6" strokeWidth={1} />
						</span>
						<span className="absolute flex items-center justify-center p-2 w-full h-full text-foreground transition-all duration-1000 transform group-hover:translate-x-full ease uppercase font-light tracking-widest">
							Envoyer
						</span>
						<span className="relative invisible">Envoyer</span>
					</>
				)}
			</button>
		</form>
	);
};

export default ContactForm;
