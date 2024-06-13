import React from 'react'
import axios from 'axios'
import styles from './List.module.scss'
import Item from '../Item'
import { IUser, Users } from '../../@types'
import { useDebounce } from '../../hooks/debounce'

const baseURL = 'http://127.0.0.1:3000'

const List = ({ search }: { search: string }) => {
	const [users, setUsers] = React.useState<Users>([])
	const debounced = useDebounce(search)

	React.useEffect(() => {
		axios.get(`${baseURL}/?term=${debounced}`).then((response) => {
			setUsers(response.data)
		})
	}, [debounced])

	return (
		<section className={styles.listSection}>
			<ul className={styles.list}>
				{users.map((user: IUser) => (
					<li key={user.email}>
						<Item {...user} />
					</li>
				))}
			</ul>
		</section>
	)
}

export default List
