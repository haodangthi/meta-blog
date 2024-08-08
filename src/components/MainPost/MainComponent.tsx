import { Tags } from '../ui/CategoryTag'
import { MainPostTitleWrapper } from '../PageTitleWrapper'
import BlogPostInfo from '../BlogPostInfo'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { MainPostWrapper } from './MainPostWrapper'
import { ImageWrapper } from './ImageWrapper'

export default function MainPostComponent({ data }: any): JSX.Element {
  const smallTextColor = '#fff'

  return (
    <ImageWrapper>
      <PrismicNextImage
        field={data.img}
        width={1216}
        height={450}
        alt=""
        fallback={<div>A picture of the main post</div>}
      />
      <MainPostWrapper>
        <Tags data={data} />
        <PrismicNextLink field={data.link_to_post}>
          <MainPostTitleWrapper>{data.title}</MainPostTitleWrapper>
        </PrismicNextLink>
        <BlogPostInfo data={data} color={smallTextColor} />
      </MainPostWrapper>
    </ImageWrapper>
  )
}
