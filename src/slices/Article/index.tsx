import { PrismicRichText } from '@prismicio/react'
import { Wrapper } from './components/Wrapper'
import Bounded from '../../components/Bounded'

/**
 * Component for "Article" Slices.
 */

const Article = ({ slice }: any): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Wrapper>
        <PrismicRichText field={slice.primary.article_title} />
        <PrismicRichText field={slice.primary.paragraph} />
      </Wrapper>
    </Bounded>
  )
}

export default Article
