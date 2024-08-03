import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import BlogPost from "../../components/BlogPost";
import Bounded from "../../components/Bounded";

/**
 * Props for `BlogPosts`.
 */
export type BlogPostsProps = SliceComponentProps<Content.BlogPostsSlice>;

/**
 * Component for "BlogPosts" Slices.
 */
const BlogPosts = ({ slice }: BlogPostsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="blog-posts">
        {slice.primary.blog_post.map((item,index) => {
          return (
              <BlogPost item={item} key={index}></BlogPost>
          );
        })}
      </div>
    </Bounded>
  );
};

export default BlogPosts;
