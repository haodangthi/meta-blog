import Bounded from '../../components/Bounded'
import { PageTitleWrapper } from '../../components/PageTitleWrapper'

/**
 * Component for "PageTitle" Slices.
 */
const PageTitle = ({ slice }: any): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PageTitleWrapper>{slice.primary.page_title}</PageTitleWrapper>
    </Bounded>
  )
}

export default PageTitle
