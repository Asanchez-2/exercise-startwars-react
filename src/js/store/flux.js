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
				const currentStore = getStore();
				const url = "https://swapi.dev/api/people/";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("hola people", result);
						setStore({
							...currentStore,
							people: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadPlanets() {
				const currentStore = getStore();
				const url = "https://swapi.dev/api/planets/";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("hola planets", result);
						setStore({
							...currentStore,
							planets: result.results
						});
					})
					.catch(e => console.error(e));
			},
			loadVehicles() {
				const currentStore = getStore();
				const url = "https://swapi.dev/api/vehicles/";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("hola vehicles", result);
						setStore({
							...currentStore,
							vehicles: result.results
						});
					})
					.catch(e => console.error(e));
			}
		}
	};
};

export default getState;
