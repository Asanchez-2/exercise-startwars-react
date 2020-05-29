const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPeople() {
				const url = "https://swapi.dev/api/people/";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("hola people", result);
						setStore({
							people: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadPlanets() {
				const url = "https://swapi.dev/api/planets/";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("hola planets", result);
						setStore({
							planets: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadVehicles() {
				const url = "https://swapi.dev/api/vehicles/";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("hola vehicles", result);
						setStore({
							vehicles: result.results
						});
					})
					.catch(e => console.error(e));
			}
		}
	};
};

export default getState;
