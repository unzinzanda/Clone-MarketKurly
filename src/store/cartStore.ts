import { create } from 'zustand'
import { CartType } from '../type/category.type'
import { persist } from 'zustand/middleware'

interface CartStore {
  products: CartType[]
  insertToCart: (product: CartType) => void
  deleteToCart: (id: string) => void
  setQuantity: (id: string, quantity: number) => void
  deleteSelectedProduct: () => void
  allToggle: (flag: boolean) => void
  singleToggle: (id: string, flag: boolean) => void
}

const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      products: [],
      insertToCart: (product) =>
        set((prev) => ({
          products: [...prev.products, product],
        })),
      deleteToCart: (id) =>
        set((prev) => ({
          products: [
            ...prev.products.filter((product) => product.product.id !== id),
          ],
        })),
      setQuantity: (id, quantity) =>
        set((state) => {
          const copyProducts = [...state.products]
          for (let i = 0; i < copyProducts.length; i++) {
            if (copyProducts[i].product.id === id) {
              copyProducts[i].quantity += quantity
              break
            }
          }
          return { products: copyProducts }
        }),
      deleteSelectedProduct: () =>
        set((state) => {
          const copyProducts = [...state.products]
          for (let i = copyProducts.length - 1; i >= 0; i--) {
            if (copyProducts[i].checked) {
              copyProducts.splice(i, 1)
            }
          }

          return { products: copyProducts }
        }),
      allToggle: (flag) =>
        set((state) => {
          const copyProducts = [...state.products]

          for (let i = 0; i < copyProducts.length; i++) {
            copyProducts[i].checked = flag
          }

          return { products: copyProducts }
        }),
      singleToggle: (id, flag) =>
        set((state) => {
          const copyProducts = [...state.products]
          for (let i = 0; i < copyProducts.length; i++) {
            if (copyProducts[i].product.id === id) {
              copyProducts[i].checked = flag
              break
            }
          }
          return { products: copyProducts }
        }),
    }),
    {
      name: 'CartStorage',
    },
  ),
)

export default useCartStore
