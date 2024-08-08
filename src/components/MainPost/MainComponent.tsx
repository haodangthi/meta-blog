
import { Tags } from '../ui/CategoryTag'
import { MainPostTitleWrapper } from '../PageTitleWrapper'
import BlogPostInfo from '../BlogPostInfo'
import { PrismicNextImage } from '@prismicio/next'
import {ImageWrapper} from "./ImageWrapper";
import {MainPostWrapper} from "./MainPostWrapper";

export default function MainPostComponent({ data }: any): JSX.Element {
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
        <MainPostTitleWrapper>{data.title}</MainPostTitleWrapper>
        <BlogPostInfo data={data} />
      </MainPostWrapper>
    </ImageWrapper>
  )
}
