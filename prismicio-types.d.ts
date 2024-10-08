// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type BlogPostPageDocumentDataSlicesSlice =
  | BlogImageSlice
  | BlopPostPageInfoSlice
  | ArticleSlice

/**
 * Content for blog post page documents
 */
interface BlogPostPageDocumentData {
  /**
   * Slice Zone field in *blog post page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostPageDocumentDataSlicesSlice> /**
   * Meta Title field in *blog post page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *blog post page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *blog post page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * blog post page document from Prismic
 *
 * - **API ID**: `blog_post_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostPageDocumentData>,
    'blog_post_page',
    Lang
  >

/**
 * Item in *Blogpost → category*
 */
export interface BlogpostDocumentDataCategoryItem {
  /**
   * text color field in *Blogpost → category*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.category[].text_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  text_color: prismic.ColorField

  /**
   * name field in *Blogpost → category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.category[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField

  /**
   * bg color field in *Blogpost → category*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.category[].bg_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  bg_color: prismic.ColorField
}

/**
 * Content for Blogpost documents
 */
interface BlogpostDocumentData {
  /**
   * img field in *Blogpost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.img
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  img: prismic.ImageField<never>

  /**
   * avatar field in *Blogpost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.avatar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>

  /**
   * category field in *Blogpost*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.category[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  category: prismic.GroupField<Simplify<BlogpostDocumentDataCategoryItem>>

  /**
   * date field in *Blogpost*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField

  /**
   * author field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField

  /**
   * title field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * link_to_blogpost field in *Blogpost*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.link_to_blogpost
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_to_blogpost: prismic.ContentRelationshipField<'blog_post_page'>

  /**
   * link to post field in *Blogpost*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.link_to_post
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_to_post: prismic.LinkField
}

/**
 * Blogpost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogpostDocumentData>,
    'blogpost',
    Lang
  >

/**
 * Item in *Header → nav item*
 */
export interface HeaderDocumentDataNavItemItem {
  /**
   * link field in *Header → nav item*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.nav_item[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField

  /**
   * label field in *Header → nav item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.nav_item[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * nav item field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.nav_item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  nav_item: prismic.GroupField<Simplify<HeaderDocumentDataNavItemItem>>
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    'header',
    Lang
  >

type HomepageDocumentDataSlicesSlice =
  | BlogPostsListSlice
  | PageTitleSlice
  | MainBlogPostSlice

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Heading field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.heading
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
  >

export type AllDocumentTypes =
  | BlogPostPageDocument
  | BlogpostDocument
  | HeaderDocument
  | HomepageDocument

/**
 * Primary content in *Article → Default → Primary*
 */
export interface ArticleSliceDefaultPrimary {
  /**
   * article title field in *Article → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.default.primary.article_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  article_title: prismic.RichTextField

  /**
   * paragraph field in *Article → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField
}

/**
 * Default variation for Article Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ArticleSliceDefaultPrimary>,
  never
>

/**
 * Primary content in *Article → Without title → Primary*
 */
export interface ArticleSliceWithoutTitlePrimary {
  /**
   * paragraph field in *Article → Without title → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.withoutTitle.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField
}

/**
 * Without title variation for Article Slice
 *
 * - **API ID**: `withoutTitle`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSliceWithoutTitle = prismic.SharedSliceVariation<
  'withoutTitle',
  Simplify<ArticleSliceWithoutTitlePrimary>,
  never
>

/**
 * Slice variation for *Article*
 */
type ArticleSliceVariation = ArticleSliceDefault | ArticleSliceWithoutTitle

/**
 * Article Shared Slice
 *
 * - **API ID**: `article`
 * - **Description**: Article
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSlice = prismic.SharedSlice<'article', ArticleSliceVariation>

/**
 * Primary content in *BlogImage → Default → Primary*
 */
export interface BlogImageSliceDefaultPrimary {
  /**
   * image field in *BlogImage → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Default variation for BlogImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogImageSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<BlogImageSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *BlogImage*
 */
type BlogImageSliceVariation = BlogImageSliceDefault

/**
 * BlogImage Shared Slice
 *
 * - **API ID**: `blog_image`
 * - **Description**: BlogImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogImageSlice = prismic.SharedSlice<
  'blog_image',
  BlogImageSliceVariation
>

/**
 * Item in *BlogPostsList → Default → Primary → posts*
 */
export interface BlogPostsListSliceDefaultPrimaryPostsItem {
  /**
   * post field in *BlogPostsList → Default → Primary → posts*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_posts_list.default.primary.posts[].post
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  post: prismic.ContentRelationshipField
}

/**
 * Primary content in *BlogPostsList → Default → Primary*
 */
export interface BlogPostsListSliceDefaultPrimary {
  /**
   * posts field in *BlogPostsList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_posts_list.default.primary.posts[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  posts: prismic.GroupField<Simplify<BlogPostsListSliceDefaultPrimaryPostsItem>>
}

/**
 * Default variation for BlogPostsList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogPostsListSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<BlogPostsListSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *BlogPostsList*
 */
type BlogPostsListSliceVariation = BlogPostsListSliceDefault

/**
 * BlogPostsList Shared Slice
 *
 * - **API ID**: `blog_posts_list`
 * - **Description**: BlogPostsList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogPostsListSlice = prismic.SharedSlice<
  'blog_posts_list',
  BlogPostsListSliceVariation
>

/**
 * Primary content in *BlopPostPageInfo → Default → Primary*
 */
export interface BlopPostPageInfoSliceDefaultPrimary {
  /**
   * blog Post Page Info field in *BlopPostPageInfo → Default → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blop_post_page_info.default.primary.blog_post_page_info
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  blog_post_page_info: prismic.ContentRelationshipField
}

/**
 * Default variation for BlopPostPageInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlopPostPageInfoSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<BlopPostPageInfoSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *BlopPostPageInfo*
 */
type BlopPostPageInfoSliceVariation = BlopPostPageInfoSliceDefault

/**
 * BlopPostPageInfo Shared Slice
 *
 * - **API ID**: `blop_post_page_info`
 * - **Description**: BlopPostPageInfo
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlopPostPageInfoSlice = prismic.SharedSlice<
  'blop_post_page_info',
  BlopPostPageInfoSliceVariation
>

/**
 * Primary content in *MainBlogPost → Default → Primary*
 */
export interface MainBlogPostSliceDefaultPrimary {
  /**
   * post field in *MainBlogPost → Default → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: main_blog_post.default.primary.post
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  post: prismic.ContentRelationshipField
}

/**
 * Default variation for MainBlogPost Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainBlogPostSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<MainBlogPostSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *MainBlogPost*
 */
type MainBlogPostSliceVariation = MainBlogPostSliceDefault

/**
 * MainBlogPost Shared Slice
 *
 * - **API ID**: `main_blog_post`
 * - **Description**: MainBlogPost
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MainBlogPostSlice = prismic.SharedSlice<
  'main_blog_post',
  MainBlogPostSliceVariation
>

/**
 * Primary content in *PageTitle → Default → Primary*
 */
export interface PageTitleSliceDefaultPrimary {
  /**
   * page title field in *PageTitle → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page_title.default.primary.page_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  page_title: prismic.KeyTextField
}

/**
 * Default variation for PageTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageTitleSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<PageTitleSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *PageTitle*
 */
type PageTitleSliceVariation = PageTitleSliceDefault

/**
 * PageTitle Shared Slice
 *
 * - **API ID**: `page_title`
 * - **Description**: PageTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PageTitleSlice = prismic.SharedSlice<
  'page_title',
  PageTitleSliceVariation
>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      BlogPostPageDocument,
      BlogPostPageDocumentData,
      BlogPostPageDocumentDataSlicesSlice,
      BlogpostDocument,
      BlogpostDocumentData,
      BlogpostDocumentDataCategoryItem,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataNavItemItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      ArticleSlice,
      ArticleSliceDefaultPrimary,
      ArticleSliceWithoutTitlePrimary,
      ArticleSliceVariation,
      ArticleSliceDefault,
      ArticleSliceWithoutTitle,
      BlogImageSlice,
      BlogImageSliceDefaultPrimary,
      BlogImageSliceVariation,
      BlogImageSliceDefault,
      BlogPostsListSlice,
      BlogPostsListSliceDefaultPrimaryPostsItem,
      BlogPostsListSliceDefaultPrimary,
      BlogPostsListSliceVariation,
      BlogPostsListSliceDefault,
      BlopPostPageInfoSlice,
      BlopPostPageInfoSliceDefaultPrimary,
      BlopPostPageInfoSliceVariation,
      BlopPostPageInfoSliceDefault,
      MainBlogPostSlice,
      MainBlogPostSliceDefaultPrimary,
      MainBlogPostSliceVariation,
      MainBlogPostSliceDefault,
      PageTitleSlice,
      PageTitleSliceDefaultPrimary,
      PageTitleSliceVariation,
      PageTitleSliceDefault,
    }
  }
}
