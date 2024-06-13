import React from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

const App = () => {
	const [search, setSearch] = React.useState('')

	return (
		<main className='container main'>
			<Search {...{ search, setSearch }} />
			<List {...{ search, setSearch }} />
		</main>
	)
}

export default App
