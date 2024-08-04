'use client'

import { Content } from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";
import Bounded from "../../components/Bounded";
import {createClient} from "../../prismicio";
import MainPostComponent from "../../components/MainComponent";

/**
 * Props for `MainBlogPost`.
 */
export type MainBlogPostProps = SliceComponentProps<Content.MainBlogPostSlice>;

/**
 * Component for "MainBlogPost" Slices.
 */
const MainBlogPost = async ({ slice }: MainBlogPostProps): Promise<JSX.Element> => {
  const client = createClient()
  const { data } =  await client.getByUID('blogpost',slice.primary.post.uid)

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <MainPostComponent data={data}/>
    </Bounded>
  );
};

export default MainBlogPost;
