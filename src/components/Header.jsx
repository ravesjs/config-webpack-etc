import React from 'react'
import styles from '../styles/_styles.module.scss'
import logo from '../../public/webpack-icon.svg'

const now = new Date()
function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt={'logo'} />
      <span>Time: {now.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header
