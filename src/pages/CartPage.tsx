import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import useCartStore from '../store/cartStore'
import { css } from '@emotion/react'
import { Checkbox } from '@mui/material'
import CartProductCard from '../components/cart/CartProductCard'
import { formatPrice } from '../utils/category/category.util'

const CartPage = () => {
  const products = useCartStore((state) => state.products)
  const allToggle = useCartStore((state) => state.allToggle)
  const deleteSelectedProduct = useCartStore(
    (state) => state.deleteSelectedProduct,
  )
  const [checkedCount, setCheckedCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const onClickAllCheck = useCallback(
    (flag: boolean) => {
      allToggle(flag)
    },
    [allToggle],
  )

  const calcTotalPrice = useCallback(() => {
    let sum = 0
    for (let i = 0; i < products.length; i++) {
      if (products[i].checked) {
        sum += products[i].product.price * products[i].quantity
      }
    }

    setTotalPrice(sum)
  }, [products])

  useEffect(() => {
    let count = 0

    products.map((product) => {
      if (product.checked) count++
    })

    setCheckedCount(count)
    calcTotalPrice()
  }, [products])

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
        장바구니
      </p>
      <div
        css={css`
          width: 100%;
          min-height: 300px;
          display: flex;
          justify-content: space-between;
          gap: 30px;
        `}
      >
        <div
          css={css`
            width: 65%;
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              padding: 18px 10px 0px 2px;
              border-bottom: 1px solid rgb(51, 51, 51);
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                font-size: 14px;
                color: #333;
              `}
            >
              <Checkbox
                disabled={products.length === 0}
                checked={products.length === checkedCount}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onClickAllCheck(e.target.checked)
                }
              />
              <p>
                전체 선택({checkedCount}/{products.length})
              </p>
            </div>
            <span
              css={css`
                display: inline-block;
                width: 1px;
                height: 14px;
                background: rgb(221, 221, 221);
                margin: 6px 21px 0px 22px;
                vertical-align: top;
              `}
            ></span>
            <button type="button" onClick={deleteSelectedProduct}>
              선택삭제
            </button>
          </div>
          {products.length === 0 ? (
            <p
              css={css`
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                color: rgb(181, 181, 181);
              `}
            >
              장바구니에 담긴 상품이 없습니다.
            </p>
          ) : (
            <ul
              css={css`
                width: 100%;
              `}
            >
              {products.map((product) => (
                <CartProductCard product={product} />
              ))}
            </ul>
          )}
        </div>
        <div
          css={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding-top: 60px;
          `}
        >
          <div
            css={css`
              width: 100%;
              padding: 19px 18px 18px 20px;
              border: 1px solid rgb(242, 242, 242);
              background-color: rgb(250, 250, 250);
              font-size: 16px;
            `}
          >
            <div
              css={css`
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
              `}
            >
              <p>상품금액</p>
              <p>{formatPrice(totalPrice)}원</p>
            </div>
            <div
              css={css`
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-top: 12px;
              `}
            >
              <p>배송비</p>
              <p>{totalPrice === 0 || totalPrice >= 50000 ? '0' : '3000'}원</p>
            </div>
            <div
              css={css`
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-top: 24px;
              `}
            >
              <p>결제예정금액</p>
              <p>
                {formatPrice(
                  totalPrice === 0 || totalPrice >= 50000
                    ? totalPrice
                    : totalPrice + 3000,
                )}
                원
              </p>
            </div>
          </div>
          <button
            type="button"
            css={css`
              width: 100%;
              height: 56px;
              padding: 0px 10px;
              text-align: center;
              border-radius: 3px;
              color: rgb(255, 255, 255);
              background-color: rgb(95, 0, 128);
              font-size: 16px;
            `}
            onClick={deleteSelectedProduct}
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
