import Bounded from '../../components/Bounded'
import { createClient } from '../../prismicio'
import { Button } from '../../components/ui/Button'
import BlogPosts from '../../components/BlogPostsList'

/**
 * Component for "BlogPostsList" Slices.
 */

const BlogPostsList = async ({ slice }: any): Promise<JSX.Element> => {
  const client = createClient()
  const posts = await client.getAllByType('blogpost')

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      marginBottom={80}
    >
      <BlogPosts posts={posts} />
      <div className="justify-center">
        <Button>Load More</Button>
      </div>
    </Bounded>
  )
}

export default BlogPostsList
