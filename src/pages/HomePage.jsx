import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";

import {selectAllCountries, selectVisibleCountries, selectCountriesInfo} from "../store/countries/countriesSelector";
import {loadCountries} from "../store/countries/countriesAction";


import {List} from '../components/List';
import {Card} from '../components/Card';
import {Controls} from '../components/Controls';
import {selectControls} from "../store/controls/controlsSelector";

export const HomePage = () => {
	const navigate = useNavigate();

	const {status, error, qty} = useSelector(selectCountriesInfo)
	const dispatch = useDispatch()
    const {search, region} = useSelector(selectControls)
	const countries = useSelector((state) => selectVisibleCountries(state, search, region))

	useEffect(() => {
		if (!qty) {
			dispatch(loadCountries())
		}
	}, [qty])

	return (
		<>
			<Controls/>
			{error && <h2>Can't loading data</h2>}
			{status === 'loading' && <h2>Loading data...</h2>}
			<List>
				{countries.map((c) => {
					const countryInfo = {
						img: c.flags.png,
						name: c.name,
						info: [
							{
								title: 'Population',
								description: c.population.toLocaleString(),
							},
							{
								title: 'Region',
								description: c.region,
							},
							{
								title: 'Capital',
								description: c.capital,
							},
						],
					};

					return (
						<Card
							key={c.name}
							onClick={() => navigate(`/country/${c.name}`)}
							{...countryInfo}
						/>
					);
				})}
			</List>
		</>
	);
};
