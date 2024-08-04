import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import {PrismicNextImage} from "@prismicio/next";
import {createClient} from "../../prismicio";

/**
 * Props for `BlogImage`.
 */
export type BlogImageProps = SliceComponentProps<Content.BlogImageSlice>;

/**
 * Component for "BlogImage" Slices.
 */
const BlogImage = ({ slice }: BlogImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage field={slice.primary.image} />
    </Bounded>
  );
};

export default BlogImage;
