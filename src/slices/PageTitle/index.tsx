import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Bounded from '../../components/Bounded'
import { PageTitleWrapper } from '../../components/PageTitleWrapper'

/**
 * Props for `PageTitle`.
 */
export type PageTitleProps = SliceComponentProps<Content.PageTitleSlice>

/**
 * Component for "PageTitle" Slices.
 */
const PageTitle = ({ slice }: PageTitleProps): JSX.Element => {
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
