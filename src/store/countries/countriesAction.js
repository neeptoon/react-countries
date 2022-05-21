export const SET_COUNTRIES = '@@countries/SET_COUNTRIES';
export const SET_LOADING = '@@countries/SET_LOADING';
export const SET_ERROR = '@@countries/SET_ERROR';


const setCountries = (countries) => ({
	type: SET_COUNTRIES,
	payload: countries
})

const setLoading = () => ({
	type: SET_LOADING
})

const setError = (error) => ({
	type: SET_ERROR,
	payload: error
})

export const lodadCountries = () => (dispatch, _, {client, api}) => {
	dispatch(setLoading());

	client.get(api.ALL_COUNTRIES)
		.then(({data}) => setCountries(data))
		.catch(error => setError(error))
}