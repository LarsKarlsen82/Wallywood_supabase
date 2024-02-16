import { CartList } from '../../Components/CartList/Cartlist'
import { ContentWrapper } from '../../Components/ContentWrapper/ContentWrapper'

export const CartPage = () => {
  return (
    <ContentWrapper title="Indkøbskurv">
      <CartList />
    </ContentWrapper>
  )
}