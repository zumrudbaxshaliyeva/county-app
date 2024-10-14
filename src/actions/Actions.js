
export const getCountries = () => async dispatch => {
    dispatch(fetchCountriesStart()); // Dispatch loading action if you have it

    try {
        const response = await axios.get(`${baseUrl}all`);
        dispatch(fetchCountriesSuccess(response.data));
    } catch (error) {
        dispatch(fetchCountriesFailure(error.message)); // Dispatch error action if you have it
        console.error(error);
    }
};
