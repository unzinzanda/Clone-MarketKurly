import React, { useCallback, useState } from 'react'
import { ProductType } from '../../type/category.tyle'
import { css } from '@emotion/react'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/material'
import { formatPrice } from '../../utils/category/category.util'
import { images } from '../../constants/images'

type Props = {
  item: ProductType
  closeModal: () => void
  isOpen: boolean
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 440,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
}

const quantityButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const buttonStyle = (props: { bgColor: string }) => css`
  width: 50%;
  background-color: ${props.bgColor};
  border-radius: 3px;
  border: 1px solid ${props.bgColor === 'white' ? '#999999' : ''};
  color: ${props.bgColor !== 'white' ? 'white' : ''};
  height: 56px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`

const AddProductModal = ({ item, closeModal, isOpen }: Props) => {
  const [productCnt, setProductCnt] = useState(1)

  const onClickQuantityBtn = useCallback(
    (num: number) => {
      const newQuantity = productCnt + num

      if (newQuantity >= 1) setProductCnt((prev) => prev + num)
    },
    [productCnt],
  )

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box sx={style}>
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 5px 0px 12px;
            border-bottom: 1px solid #f4f4f4;
          `}
        >
          <img
            src={item.image}
            alt={item.title}
            css={css`
              width: 50px;
              height: 50px;
              border-radius: 5px;
            `}
          />
          <p>{item.title}</p>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 12px;
            border-bottom: 1px solid #f4f4f4;
          `}
        >
          <div
            css={css`
              font-size: 14px;
            `}
          >
            {item.title}
          </div>
          <div
            css={css`
              width: 100%;
              display: flex;
              justify-content: space-between;
              font-weight: bold;
            `}
          >
            <p>{formatPrice(item.price)}원</p>
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
                {productCnt}
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
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 16px;
            padding: 14px 0px 20px;
          `}
        >
          <p>합계</p>
          <p>
            <span
              css={css`
                font-size: 24px;
                font-weight: bold;
              `}
            >
              {formatPrice(item.price * productCnt)}
            </span>
            원
          </p>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-size: 16px;
          `}
        >
          <button css={buttonStyle({ bgColor: 'white' })} onClick={closeModal}>
            취소
          </button>
          <button css={buttonStyle({ bgColor: '#5f0080' })}>
            장바구니 담기
          </button>
        </div>
      </Box>
    </Modal>
  )
}

export default AddProductModal
