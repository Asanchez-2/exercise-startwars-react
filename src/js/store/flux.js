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
			getData: (name, pageNumber) => {
				let url = "https://swapi.dev/api/" + name + "/?page=" + pageNumber;
				let nameNext = name + "Next";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						setStore({
							[name]: result.results,
							[nameNext]: result.next
						});
					})
					.cath(e => console.error(e));
			},
			getItems: (name, nameNext) => {
				const [active, setActive] = useState(false);
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
