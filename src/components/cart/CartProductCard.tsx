import React, { ChangeEvent, useCallback } from 'react'
import { CartType } from '../../type/category.type'
import { css } from '@emotion/react'
import { Checkbox, Typography } from '@mui/material'
import useCartStore from '../../store/cartStore'
import { images } from '../../constants/images'
import { formatPrice } from '../../utils/category/category.util'
import { ReactComponent as Remove } from '../../assets/images/ic-remove.svg'

type Props = {
  product: CartType
}

const quantityButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const CartProductCard = ({ product }: Props) => {
  const setQuantity = useCartStore((state) => state.setQuantity)
  const singleToggle = useCartStore((state) => state.singleToggle)
  const deleteToCart = useCartStore((state) => state.deleteToCart)

  const onClickQuantityBtn = useCallback((num: number) => {
    const newQuantity = product.quantity + num

    if (newQuantity >= 1) setQuantity(product.product.id, num)
  }, [])

  const onClickChecked = useCallback(
    (flag: boolean) => {
      singleToggle(product.product.id, flag)
    },
    [product, singleToggle],
  )

  return (
    <li
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        padding: 20px 0px;
      `}
    >
      <Checkbox
        checked={product.checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onClickChecked(e.target.checked)
        }
      />
      <img
        css={css`
          width: 60px;
          height: 78px;
        `}
        src={product.product.image}
        alt={product.product.title}
      />
      <Typography variant="subtitle1" sx={{ flex: 1, padding: '0px 10px' }}>
        {product.product.title}
      </Typography>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d9d9d9;
          border-radius: 5px;
          padding: 5px;
        `}
      >
        <button
          type="button"
          onClick={() => onClickQuantityBtn(-1)}
          css={quantityButtonStyle}
        >
          <img
            src={images.minus}
            alt="수량 줄이기"
            css={css`
              width: 16px;
              height: 16px;
            `}
          />
        </button>
        <div
          css={css`
            width: 50px;
            text-align: center;
          `}
        >
          {product.quantity}
        </div>
        <button
          type="button"
          onClick={() => onClickQuantityBtn(1)}
          css={quantityButtonStyle}
        >
          <img
            src={images.plus}
            alt="수량 늘리기"
            css={css`
              width: 16px;
              height: 16px;
            `}
          />
        </button>
      </div>
      <p
        css={css`
          width: 127px;
          padding: 0px 5px;
          text-align: right;
          font-weight: bold;
        `}
      >
        {formatPrice(product.product.price * product.quantity)}원
      </p>
      <button type="button" onClick={() => deleteToCart(product.product.id)}>
        <Remove />
      </button>
    </li>
  )
}

export default CartProductCard
