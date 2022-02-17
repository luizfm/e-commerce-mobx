import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { StoreContext } from '_store'
import { updateProductsList } from '_store/modules/product/actions'
import api from '_services/api'

import { observer } from 'mobx-react'
import styles from './styles.css'

const ProductsCatalog = observer(() => {
  const location = useLocation()
  const store = useContext(StoreContext)

  const formattedPathName = useMemo(
    () => location.pathname.slice(1),
    [location.pathname]
  )

  const getProductsList = useCallback(async () => {
    const response = await api.get('/products', {
      params: { category: formattedPathName },
    })

    updateProductsList(response.data)(store)
  }, [formattedPathName, store])

  useEffect(() => {
    getProductsList()
  }, [getProductsList])

  return (
    <main className={styles['products-catalog-container']}>
      <div>
        {store.currentCategoryList(formattedPathName).map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </main>
  )
})

export default React.memo(ProductsCatalog)
