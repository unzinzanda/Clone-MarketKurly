import React from 'react'
import { images } from '../../constants/images'
import { ReactComponent as Cart } from '../../assets/images/ic-cart.svg'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Category from './Category'
import { css } from '@emotion/react'
import { Badge } from '@mui/material'
import useCartStore from '../../store/cartStore'

const Header = () => {
  const products = useCartStore((state) => state.products)
  return (
    <>
      <header
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;
          background-color: white;
          position: sticky;
          top: 0;
          z-index: 5;
        `}
      >
        <div
          css={css`
            width: 70%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0px;
          `}
        >
          <Link
            to={'/'}
            css={css`
              display: flex;
              align-items: center;
              gap: 20px;
            `}
          >
            <Logo />
            <p
              css={css`
                font-size: 14px;
                color: #5f0080;
                font-weight: bold;
              `}
            >
              마켓컬리
            </p>
          </Link>
          <Link to="/cart">
            <Badge badgeContent={products.length} color="secondary">
              <Cart />
            </Badge>
          </Link>
        </div>
        <nav
          css={css`
            display: flex;
            width: 70%;
          `}
        >
          <ul>
            <li>
              <Category />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
