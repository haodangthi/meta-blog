import Bounded from '../../components/Bounded'
import { createClient } from '../../prismicio'
import { Tags } from '../../components/ui/CategoryTag'
import { BlogPostTitleWrapper } from '../../components/PageTitleWrapper'
import BlogPostInfo from '../../components/BlogPostInfo'

/**
 * Component for "BlopPostPageInfo" Slices.
 */
const BlopPostPageInfo = async ({ slice }: any): Promise<JSX.Element> => {
  const client = createClient()
  const postId = slice.primary.blog_post_page_info.uid
  const { data } = await client.getByUID('blogpost', postId)

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      mb={32}
    >
      <div style={{ maxWidth: '800px' }}>
        <Tags data={data} />
        <BlogPostTitleWrapper>{data.title}</BlogPostTitleWrapper>
        <BlogPostInfo data={data} />
      </div>
    </Bounded>
  )
}

export default BlopPostPageInfo
