import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Bounded from '../../components/Bounded'
import { Wrapper } from './components/Wrapper'

/**
 * Props for `Article`.
 */
export type ArticleProps = SliceComponentProps<Content.ArticleSlice>

/**
 * Component for "Article" Slices.
 */

const Article = ({ slice }: ArticleProps): JSX.Element => {
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
