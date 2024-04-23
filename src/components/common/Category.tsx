import React from 'react'
import { ReactComponent as Menu } from '../../assets/images/ic-menu.svg'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'

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
          <li>
            <Link
              to="/"
              css={css`
                display: block;
                width: 200px;
                padding: 10px;
                font-size: 14px;

                :hover {
                  background-color: #f5f5f5;
                  color: #5f0080;
                }
              `}
            >
              채소
            </Link>
          </li>
          <li>
            <Link
              to="/"
              css={css`
                display: block;
                width: 200px;
                padding: 10px;
                font-size: 14px;

                :hover {
                  background-color: #f5f5f5;
                  color: #5f0080;
                }
              `}
            >
              과일·견과·쌀
            </Link>
          </li>
          <li>
            <Link
              to="/"
              css={css`
                display: block;
                width: 200px;
                padding: 10px;
                font-size: 14px;

                :hover {
                  background-color: #f5f5f5;
                  color: #5f0080;
                }
              `}
            >
              정육·가공육·계란
            </Link>
          </li>
          <li>
            <Link
              to="/"
              css={css`
                display: block;
                width: 200px;
                padding: 10px;
                font-size: 14px;

                :hover {
                  background-color: #f5f5f5;
                  color: #5f0080;
                }
              `}
            >
              간편식·밀키트·샐러드
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Category
