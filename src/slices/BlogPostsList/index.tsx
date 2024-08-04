import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import BlogPost from "../../components/BlogPost";
import Bounded from "../../components/Bounded";
import {createClient} from "../../prismicio";
import {Button, LoadMoreButton} from "../../components/ui/Button";

/**
 * Props for `BlogPostsList`.
 */
export type BlogPostsListProps =
  SliceComponentProps<Content.BlogPostsListSlice>;

/**
 * Component for "BlogPostsList" Slices.
 */

const BlogPostsList = async ({ slice }: BlogPostsListProps): Promise<JSX.Element> => {
    const client = createClient()
    const posts =  await client.getAllByType('blogpost')
    const page =  await client.getSingle('homepage')
   // const a =  await client.getByUID('blogpost','')
   // const posts = await page.data.slices.filter(slice => slice.slice_type === 'blog_posts_list')[0].primary.posts //.primary.posts


    return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          marginBottom={80}
      >
        <div className="blog-posts">
          {posts.map((post) => {
              return (
                <BlogPost data={post.data} key={post.uid}></BlogPost>
            );
          })}
        </div>
        <div className="justify-center">
            <Button>Load More</Button>
        </div>
      </Bounded>
  );
};

export default BlogPostsList;
