'use client'

import Bounded from '../../components/Bounded'
import { createClient } from '../../prismicio'
import MainPostComponent from '../../components/MainComponent'

/**
 * Props for `MainBlogPost`.
 */
//export type MainBlogPostProps = SliceComponentProps<Content.MainBlogPostSlice>

/**
 * Component for "MainBlogPost" Slices.
 */
async function MainBlogPost({ slice }: any): Promise<JSX.Element> {
  const client = createClient()
  const { data } = await client.getByUID('blogpost', slice.primary.post.uid)

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <MainPostComponent data={data} />
    </Bounded>
  )
}

export default MainBlogPost
