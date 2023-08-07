import { Provider } from 'react-redux';

import { store } from '~store/store';

import { AppRouter } from './AppRouter';

export function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}
