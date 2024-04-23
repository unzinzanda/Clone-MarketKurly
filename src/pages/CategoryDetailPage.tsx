import { css } from '@emotion/react'
import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryDetailPage = () => {
  const id = useParams().id
  return (
    <div
      css={css`
        width: 1050px;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      CategoryDetailPage
    </div>
  )
}

export default CategoryDetailPage
