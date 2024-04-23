import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import categoryDummy from '../db/Category.db.json'
import productDummy from '../db/product.db.json'
import { CategoryType } from '../type/category.tyle'
import ProductCard from '../components/category/ProductCard'

const CategoryDetailPage = () => {
  const id = useParams().id

  const [curCategory, setCurCategory] = useState<CategoryType | null>(null)

  useEffect(() => {
    if (id !== undefined) {
      setCurCategory(categoryDummy.category[Number(id) - 1])
    }
  }, [id])

  if (curCategory === null) {
    return null
  }

  return (
    <div
      css={css`
        width: 1050px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
        gap: 50px;
        position: relative;
      `}
    >
      <p
        css={css`
          font-size: 28px;
          font-weight: bold;
        `}
      >
        {curCategory.name}
      </p>
      <div
        css={css`
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          place-content: center;
        `}
      >
        {productDummy.product[Number(id) - 1].map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CategoryDetailPage
