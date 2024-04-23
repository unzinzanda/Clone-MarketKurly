import React from 'react'
import { ReactComponent as Menu } from '../../assets/images/ic-menu.svg'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import dummy from '../../db/Category.db.json'

const Category = () => {
  return (
    <>
      <div
        css={css`
          width: 200px;
          padding: 10px 0px;
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;

          p {
            font-weight: bold;
          }

          :hover {
            path {
              fill: #5f0080;
            }
            p {
              color: #5f0080;
            }
            ul {
              display: block;
            }
          }
        `}
      >
        <Menu />
        <p>카테고리</p>
        <ul
          css={css`
            display: none;
            position: absolute;
            top: 100%;
            left: 0;

            border: 1px solid #d9d9d9;
            background-color: white;

            :hover {
              display: block;
            }
          `}
        >
          {dummy.category.map((item) => (
            <li key={item.id}>
              <Link
                to="/"
                css={css`
                  display: flex;
                  align-items: center;
                  width: 200px;
                  padding: 10px;
                  font-size: 14px;

                  :hover {
                    background-color: #f5f5f5;
                    color: #5f0080;
                  }
                `}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  css={css`
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                  `}
                />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Category
