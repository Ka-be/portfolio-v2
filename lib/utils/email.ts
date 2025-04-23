import emailjs from '@emailjs/browser'

interface ContactFormInput {
    name: string
    email: string
    message: string
}

export const sendEmail = async (formData: ContactFormInput): Promise<void> => {
    const { name, email, message } = formData

    const templateParams = {
        from_name: name || 'Anonyme',
        reply_to: email,
        message: message,
    }

    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
    } catch (error: any) {
        console.error('Erreur lors de l\'envoi du mail via EmailJS:', error)
        throw new Error('Erreur lors de l\'envoi du mail via EmailJS')
    }
}
