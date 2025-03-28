const regex = {
	// Validation plus stricte pour les emails
	email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

	// Accepte les noms avec espaces, accents et tirets
	name: /^[a-zA-ZÀ-ÿ\s-]{2,}$/,

	// Accepte les messages avec ponctuation et caractères spéciaux courants
	message: /^[a-zA-ZÀ-ÿ0-9\s,.!?'"-]{2,1000}$/,
};

export default regex;
