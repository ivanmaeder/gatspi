import * as React from 'react'
import * as styles from './Layout.module.sass'

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <h1>
        {props.title}
      </h1>
      <div>
        {props.children}
      </div>
    </div>
  )

}

export default Layout