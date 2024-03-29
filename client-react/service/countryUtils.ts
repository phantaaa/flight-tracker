const countries = require('i18n-iso-countries');
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

export function convertCountryToAlpha2Code(countryName: string): string | null {
  const countryCode: string = countries.getAlpha2Code(countryName, 'en');
  return countryCode ? countryCode.toLowerCase() : null;
}

export function convertCountryToAlpha3Code(countryName: string): string | null {
  const countryCode: string = countries.getAlpha3Code(countryName, 'en');
  return countryCode ? countryCode.toUpperCase() : null;
}
