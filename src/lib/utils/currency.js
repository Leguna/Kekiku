
function IntlCurrencyFormat(value, currency='IDR') {
  // eslint-disable-next-line no-undef
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    minimumFractionDigits: 0,
    currency,
  }).format(value);
}

export default IntlCurrencyFormat;