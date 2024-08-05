import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Bounded from '../../components/Bounded'
import { createClient } from '../../prismicio'
import { Tags } from '../../components/CategoryTag'
import { MainPostTitleWrapper } from '../../components/PageTitleWrapper'
import BlogPostInfo from '../../components/BlogPostInfo'

/**
 * Props for `BlopPostPageInfo`.
 */
export type BlopPostPageInfoProps =
  SliceComponentProps<Content.BlopPostPageInfoSlice>

/**
 * Component for "BlopPostPageInfo" Slices.
 */
const BlopPostPageInfo = async ({
  slice,
}: BlopPostPageInfoProps): Promise<JSX.Element> => {
  const client = createClient()
  const postId = slice.primary.blog_post_page_info.uid
  const { data } = await client.getByUID('blogpost', postId)

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      marginBottom={32}
    >
      <div style={{ maxWidth: '800px' }}>
        <Tags data={data} />
        <MainPostTitleWrapper color={'black'}>
          {data.title}
        </MainPostTitleWrapper>
        <BlogPostInfo data={data} />
      </div>
    </Bounded>
  )
}

export default BlopPostPageInfo
