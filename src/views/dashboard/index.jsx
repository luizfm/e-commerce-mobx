/* eslint-disable react/jsx-one-expression-per-line */
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { StoreContext } from '_providers/store-provider'
import Sidebar from '_components/sidebar'
import ShoppingVideo from '_assets/videos/shopping-gray.mp4'
import ShowCase from '_components/showcase'
import { PRODUCTS_CATEGORIES } from '_utils/constants'

import api from '_services/api'
import styles from './styles.css'

const Dashboard = () => {
  const { user } = useContext(StoreContext)
  const [currentProduct, setCurrentProduct] = useState(null)

  const randomCategory = useMemo(() => {
    const randomCategoriesIndex = Math.floor(
      Math.random() * Object.values(PRODUCTS_CATEGORIES).length
    )

    return Object.values(PRODUCTS_CATEGORIES)[randomCategoriesIndex]
  }, [])

  const getShowCaseItem = useCallback(async () => {
    const response = await api.get('/products', {
      params: { category: randomCategory },
    })

    const randomIndex = Math.floor(Math.random() * response.data.length)

    setCurrentProduct(response.data[randomIndex])
  }, [randomCategory])

  useEffect(() => {
    getShowCaseItem()
  }, [getShowCaseItem])

  return (
    <section className={styles['dashboard-container']}>
      <div className={styles['video-overlay']} />
      <video
        className={styles['background-video']}
        autoPlay
        muted
        loop
        id="myVideo"
      >
        <source src={ShoppingVideo} type="video/mp4" />
      </video>
      <div className={styles['dashboard-content']}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>buy-e all</span>
        </h1>
        <h2 className={styles['sub-title']}>Take a look at our Sales!</h2>
        <ShowCase
          to="/"
          name={currentProduct?.name}
          image={currentProduct?.image}
          price={currentProduct?.price}
        />
      </div>
    </section>
  )
}

export default Dashboard
