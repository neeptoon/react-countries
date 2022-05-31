export const selectCountriesInfo = (state) => ({
	status: state.countries.status,
	error: state.countries.error,
	qty: state.countries.list.length,
})

export const selectAllCountries = (state) => state.countries.list;
export const selectVisibleCountries = (state, search) => state.countries.list
	.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

