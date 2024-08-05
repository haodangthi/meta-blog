'use client'

import styled from 'styled-components'
import BlogPost from './BlogPost'
import { IBlogPost } from '../types/BlogPost'

const BlogPostsListWrapper = styled.div`
  max-width: 1222px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 0 32px;
`

export default function BlogPosts({ posts }: { posts: IBlogPost[] }) {
  return (
    <BlogPostsListWrapper>
      {posts.map((post) => {
        return <BlogPost data={post.data} key={post.uid} />
      })}
    </BlogPostsListWrapper>
  )
}
