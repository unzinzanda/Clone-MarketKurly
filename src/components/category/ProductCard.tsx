import React, { useCallback, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { ReactComponent as Cart } from '../../assets/images/ic-cart.svg'
import { ProductType } from '../../type/category.type'
import { css } from '@emotion/react'
import AddProductModal from './AddProductModal'
import { formatPrice } from '../../utils/category/category.util'

type Props = {
  item: ProductType
}

const ProductCard = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])
  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <Card sx={{ minHeight: 500 }} key={item.id}>
      <CardMedia sx={{ height: 320 }} image={item.image} title={item.title} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Button
          variant="outlined"
          sx={{ border: '1px solid #999999', color: 'black' }}
          onClick={openModal}
        >
          <Cart
            css={css`
              width: 25px;
              margin-right: 10px;
            `}
          />
          담기
        </Button>
        <Typography variant="body2" color="#999999">
          {item.delivery}
        </Typography>
        <Typography variant="subtitle1">{item.title}</Typography>
        <Typography variant="body2" color="#999999" sx={{ fontSize: 12 }}>
          {item.description}
        </Typography>
        <Typography variant="h6">{formatPrice(item.price)}원</Typography>
        {item.kurlyOnly && (
          <Chip
            label="kurlyOnly"
            size="small"
            sx={{
              color: '#5f0080',
              width: 'fit-content',
              borderRadius: '5px',
            }}
          />
        )}
      </CardContent>
      <AddProductModal isOpen={isOpen} closeModal={closeModal} item={item} />
    </Card>
  )
}

export default ProductCard
