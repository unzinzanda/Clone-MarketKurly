import React from 'react'
import * as css from '../../styles/common/Category.style'
import { ReactComponent as Menu } from '../../assets/images/ic-menu.svg'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
      <div css={css.menu}>
        <Menu />
        <p>카테고리</p>
        <ul css={css.drop}>
          <li>
            <Link to="/" css={css.category}>
              채소
            </Link>
          </li>
          <li>
            <Link to="/" css={css.category}>
              과일·견과·쌀
            </Link>
          </li>
          <li>
            <Link to="/" css={css.category}>
              정육·가공육·계란
            </Link>
          </li>
          <li>
            <Link to="/" css={css.category}>
              간편식·밀키트·샐러드
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Category
