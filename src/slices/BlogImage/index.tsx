import Bounded from '../../components/Bounded'
import { PrismicNextImage } from '@prismicio/next'

/**
 * Component for "BlogImage" Slices.
 */
const BlogImage = ({ slice }: any): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} />
    </Bounded>
  )
}

export default BlogImage
