const login = (data) => {
	const response = fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/login`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}
	).then((response) => response.json());
	return response;
};

const createAccount = (data) => {
	const response = fetch(
		`${import.meta.env.VITE_REACT_APP_API_URL}/api/register`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}
	).then((response) => response.json());
	return response;
};
export { login, createAccount };
