const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			peopleNext: [],
			vehiclesNext: [],
			planetsNext: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getData: (name, pageNumber = 1) => {
				let url = "https://swapi.dev/api/" + name + "/?page=" + pageNumber;
				const currentStore = getStore();
				let nameNext = name + "Next";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						let itemList = [];
						if (name in currentStore) {
							itemList = currentStore[name];
						}
						for (let item of result.results) {
							itemList.push(item);
						}
						setStore({
							[name]: itemList,
							[nameNext]: result.next.split("=")[1]
						});
					})
					.catch(e => console.error(e));
			},
			loadPeople: () => {
				const actions = getActions();
				actions.getData("people");
			},
			loadPlanets() {
				const actions = getActions();
				actions.getData("planets");
			},
			loadVehicles() {
				const actions = getActions();
				actions.getData("vehicles");
			}
		}
	};
};

export default getState;
