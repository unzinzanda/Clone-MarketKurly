import React from 'react'
import * as css from '../../styles/common/Header.style'
import { images } from '../../constants/images'
import { ReactComponent as Cart } from '../../assets/images/ic-cart.svg'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Category from './Category'

const Header = () => {
  return (
    <>
      <header css={css.container}>
        <div css={css.header}>
          <Link to={'/'} css={css.link}>
            <Logo />
            <p css={css.title}>마켓컬리</p>
          </Link>
          <button type="button">
            <Cart />
          </button>
        </div>
        <nav css={css.nav}>
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
