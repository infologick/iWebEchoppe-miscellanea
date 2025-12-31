/*
 * Lib. qui permet de gérer dynamiquement les URLs [o_footer] i.e. celles de CrazyStat et Facebook.
 */



var GoogleUtils = {

	/**
	* Vérifie si nom de domaine se termine en .dev ou @int (mode développement), alors pas d'i18n.
	* @return: bool valant false, quand hôte local pour dév.
	*/
	isHostRemoteWhenTrue_versus_localWhenFalse_toSwitchGoogleTranslationOnOrOff() {
// ~~NOK: ssi forcer test en dév.~~ return true;
		const sHostname = window.location.hostname;
		// Vérifie si le domaine se termine par ".io"
		const bIsComDomain = sHostname.endsWith('.io');
		// Vérifie si le domaine se termine par un @int
		const bEndsWithInteger = /\.\d+$/.test(sHostname);
		// Commercial…
		if (bIsComDomain) {
			return true;
		}
		// Lookback…
		if (bEndsWithInteger) {
			return false;
		}
		// .dev est vérifié plus loin
		return undefined;
	},



	googleTranslateElementInit() {
		if (GoogleUtils.isHostRemoteWhenTrue_versus_localWhenFalse_toSwitchGoogleTranslationOnOrOff()) {
			new google.translate.TranslateElement({
				pageLanguage: 'fr',
				layout: google.translate.TranslateElement.InlineLayout.VERTICAL,
				}, 'google_translate_element');
		}
	}

};


/*
* Go: 1. publication des interfaces aux autres!
*/
window.GoogleUtils = GoogleUtils;

