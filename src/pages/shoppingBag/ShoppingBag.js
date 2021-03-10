import React from 'react'
import Header from '../../components/header/headerContainer'
import styles from './stylesheets/shoppingBag.module.sass'
import { Button } from 'react-bootstrap'
import Table from './components/Table'
import jumpTo from '../../modules/Navigation'


export default function ShoppingBag(props) {
  const { totalPrice, items } = props.cart
  const { postCart } = props
  return (
    <div className={styles.outbox}>
      <Header />
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.title.concat(" my-2")}>
            Favoritos
          </div>
          <div className={styles.table}>
            <Table
              items={items || {}}
              handleClick={(pid, increase, decrease) => postCart(pid, increase, decrease)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
