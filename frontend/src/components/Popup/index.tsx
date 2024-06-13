import React from 'react'
import styles from './Popup.module.scss'
import { IUser } from '../../@types'

interface PopupProps {
	popup: boolean
	setPopup: (popup: boolean) => void
	user: IUser
}

const Popup = ({ popup, setPopup, user }: PopupProps) => {
	const popupRef = React.useRef(null)
	const closePopup = (e: React.MouseEvent) => {
		if (popupRef.current === e.target) {
			setPopup(false)
		}
	}

	return (
		<aside
			ref={popupRef}
			onClick={closePopup}
			className={`${styles.popup} ${popup ? styles.open : ''}`}
		>
			<div className={styles.container}>
				<header className={styles.header}>
					<h4>{user.name}</h4>
					<button onClick={() => setPopup(false)}>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z'
								fill='black'
							/>
						</svg>
					</button>
				</header>
				<main className={styles.main}>
					<div>
						<p>Телефон:</p>
						<span>{user.phone}</span>
					</div>
					<div>
						<p>Почта:</p>
						<span>{user.email}</span>
					</div>
					<div>
						<p>Дата приема:</p>
						<span>{user.hire_date}</span>
					</div>
					<div>
						<p>Должность:</p>
						<span>{user.position_name}</span>
					</div>
					<div>
						<p>Подразделение:</p>
						<span>{user.department}</span>
					</div>
				</main>
				<footer className={styles.footer}>
					<h5>Дополнительная информация:</h5>
					<p>
						Разработчики используют текст в качестве заполнителя макта страницы.
						Разработчики используют текст в качестве заполнителя макта страницы.
					</p>
				</footer>
			</div>
		</aside>
	)
}

export default Popup
