import { GraphQLClient } from "graphql-request";
import { GraphQLClientRequestHeaders } from "graphql-request/build/cjs/types";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BooleanType: { input: boolean; output: boolean };
  CustomData: { input: Record<string, string>; output: Record<string, string> };
  DateTime: { input: string; output: string };
  FloatType: { input: number; output: number };
  IntType: { input: number; output: number };
  ItemId: { input: string; output: string };
  MetaTagAttributes: {
    input: Record<string, string>;
    output: Record<string, string>;
  };
  UploadId: { input: string; output: string };
};

export type ICollectionMetadata = {
  __typename?: "CollectionMetadata";
  count: Scalars["IntType"]["output"];
};

export enum IColorBucketType {
  Black = "black",
  Blue = "blue",
  Brown = "brown",
  Cyan = "cyan",
  Green = "green",
  Grey = "grey",
  Orange = "orange",
  Pink = "pink",
  Purple = "purple",
  Red = "red",
  White = "white",
  Yellow = "yellow",
}

export type IColorField = {
  __typename?: "ColorField";
  alpha: Scalars["IntType"]["output"];
  blue: Scalars["IntType"]["output"];
  cssRgb: Scalars["String"]["output"];
  green: Scalars["IntType"]["output"];
  hex: Scalars["String"]["output"];
  red: Scalars["IntType"]["output"];
};

/** Record of type ContactPage (contactpage) */
export type IContactpageRecord = IRecordInterface & {
  __typename?: "ContactpageRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
};

/** Record of type ContactPage (contactpage) */
export type IContactpageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

export enum IFaviconType {
  AppleTouchIcon = "appleTouchIcon",
  Icon = "icon",
  MsApplication = "msApplication",
}

export type IFileField = IFileFieldInterface & {
  __typename?: "FileField";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  alt?: Maybe<Scalars["String"]["output"]>;
  author?: Maybe<Scalars["String"]["output"]>;
  basename: Scalars["String"]["output"];
  blurUpThumb?: Maybe<Scalars["String"]["output"]>;
  blurhash?: Maybe<Scalars["String"]["output"]>;
  colors: Array<IColorField>;
  copyright?: Maybe<Scalars["String"]["output"]>;
  customData: Scalars["CustomData"]["output"];
  exifInfo: Scalars["CustomData"]["output"];
  filename: Scalars["String"]["output"];
  focalPoint?: Maybe<IFocalPoint>;
  format: Scalars["String"]["output"];
  height?: Maybe<Scalars["IntType"]["output"]>;
  id: Scalars["UploadId"]["output"];
  md5: Scalars["String"]["output"];
  mimeType: Scalars["String"]["output"];
  notes?: Maybe<Scalars["String"]["output"]>;
  responsiveImage?: Maybe<IResponsiveImage>;
  size: Scalars["IntType"]["output"];
  smartTags: Array<Scalars["String"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  thumbhash?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  url: Scalars["String"]["output"];
  video?: Maybe<IUploadVideoField>;
  width?: Maybe<Scalars["IntType"]["output"]>;
};

export type IFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<IImgixParams>;
  punch?: Scalars["Float"]["input"];
  quality?: Scalars["Int"]["input"];
  size?: Scalars["Int"]["input"];
};

export type IFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  imgixParams?: InputMaybe<IImgixParams>;
  locale?: InputMaybe<ISiteLocale>;
  sizes?: InputMaybe<Scalars["String"]["input"]>;
};

export type IFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldUrlArgs = {
  imgixParams?: InputMaybe<IImgixParams>;
};

export type IFileFieldInterface = {
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  alt?: Maybe<Scalars["String"]["output"]>;
  author?: Maybe<Scalars["String"]["output"]>;
  basename: Scalars["String"]["output"];
  blurUpThumb?: Maybe<Scalars["String"]["output"]>;
  blurhash?: Maybe<Scalars["String"]["output"]>;
  colors: Array<IColorField>;
  copyright?: Maybe<Scalars["String"]["output"]>;
  customData: Scalars["CustomData"]["output"];
  exifInfo: Scalars["CustomData"]["output"];
  filename: Scalars["String"]["output"];
  focalPoint?: Maybe<IFocalPoint>;
  format: Scalars["String"]["output"];
  height?: Maybe<Scalars["IntType"]["output"]>;
  id: Scalars["UploadId"]["output"];
  md5: Scalars["String"]["output"];
  mimeType: Scalars["String"]["output"];
  notes?: Maybe<Scalars["String"]["output"]>;
  responsiveImage?: Maybe<IResponsiveImage>;
  size: Scalars["IntType"]["output"];
  smartTags: Array<Scalars["String"]["output"]>;
  tags: Array<Scalars["String"]["output"]>;
  thumbhash?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  url: Scalars["String"]["output"];
  video?: Maybe<IUploadVideoField>;
  width?: Maybe<Scalars["IntType"]["output"]>;
};

export type IFileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<IImgixParams>;
  punch?: Scalars["Float"]["input"];
  quality?: Scalars["Int"]["input"];
  size?: Scalars["Int"]["input"];
};

export type IFileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  imgixParams?: InputMaybe<IImgixParams>;
  locale?: InputMaybe<ISiteLocale>;
  sizes?: InputMaybe<Scalars["String"]["input"]>;
};

export type IFileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export type IFileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<IImgixParams>;
};

export type IGlobalSeoField = {
  __typename?: "GlobalSeoField";
  facebookPageUrl?: Maybe<Scalars["String"]["output"]>;
  fallbackSeo?: Maybe<ISeoField>;
  siteName?: Maybe<Scalars["String"]["output"]>;
  titleSuffix?: Maybe<Scalars["String"]["output"]>;
  twitterAccount?: Maybe<Scalars["String"]["output"]>;
};

export type IHomepageModelHomepageContentField =
  | ISectionAboutMeRecord
  | ISectionContactBannerRecord
  | ISectionHeroRecord;

/** Record of type HomePage (homepage) */
export type IHomepageRecord = IRecordInterface & {
  __typename?: "HomepageRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  homepageContent: Array<IHomepageModelHomepageContentField>;
  id: Scalars["ItemId"]["output"];
};

/** Record of type HomePage (homepage) */
export type IHomepageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

export type IImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<IImgixParamsAuto | `${IImgixParamsAuto}`>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<
    Array<IImgixParamsBlendAlign | `${IImgixParamsBlendAlign}`>
  >;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<
    Array<IImgixParamsBlendCrop | `${IImgixParamsBlendCrop}`>
  >;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<IImgixParamsBlendFit | `${IImgixParamsBlendFit}`>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<IImgixParamsBlendMode | `${IImgixParamsBlendMode}`>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<IImgixParamsBlendSize | `${IImgixParamsBlendSize}`>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<IImgixParamsCh | `${IImgixParamsCh}`>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<IImgixParamsCrop | `${IImgixParamsCrop}`>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<IImgixParamsCs | `${IImgixParamsCs}`>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<IImgixParamsFill | `${IImgixParamsFill}`>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<IImgixParamsFit | `${IImgixParamsFit}`>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<IImgixParamsFlip | `${IImgixParamsFlip}`>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<IImgixParamsFm | `${IImgixParamsFm}`>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<IImgixParamsIptc | `${IImgixParamsIptc}`>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<
    Array<IImgixParamsMarkAlign | `${IImgixParamsMarkAlign}`>
  >;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<IImgixParamsMarkFit | `${IImgixParamsMarkFit}`>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<IImgixParamsMarkTile | `${IImgixParamsMarkTile}`>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<IImgixParamsPalette | `${IImgixParamsPalette}`>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<
    IImgixParamsTransparency | `${IImgixParamsTransparency}`
  >;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<IImgixParamsTrim | `${IImgixParamsTrim}`>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<
    Array<IImgixParamsTxtAlign | `${IImgixParamsTxtAlign}`>
  >;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<IImgixParamsTxtClip | `${IImgixParamsTxtClip}`>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<IImgixParamsTxtFit | `${IImgixParamsTxtFit}`>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars["FloatType"]["input"]>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars["IntType"]["input"]>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars["FloatType"]["input"]>;
};

export enum IImgixParamsAuto {
  Compress = "compress",
  Enhance = "enhance",
  Format = "format",
  Redeye = "redeye",
}

export enum IImgixParamsBlendAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsBlendCrop {
  Bottom = "bottom",
  Faces = "faces",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsBlendFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Max = "max",
  Scale = "scale",
}

export enum IImgixParamsBlendMode {
  Burn = "burn",
  Color = "color",
  Darken = "darken",
  Difference = "difference",
  Dodge = "dodge",
  Exclusion = "exclusion",
  Hardlight = "hardlight",
  Hue = "hue",
  Lighten = "lighten",
  Luminosity = "luminosity",
  Multiply = "multiply",
  Normal = "normal",
  Overlay = "overlay",
  Saturation = "saturation",
  Screen = "screen",
  Softlight = "softlight",
}

export enum IImgixParamsBlendSize {
  Inherit = "inherit",
}

export enum IImgixParamsCh {
  Dpr = "dpr",
  SaveData = "saveData",
  Width = "width",
}

export enum IImgixParamsCrop {
  Bottom = "bottom",
  Edges = "edges",
  Entropy = "entropy",
  Faces = "faces",
  Focalpoint = "focalpoint",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsCs {
  Adobergb1998 = "adobergb1998",
  Srgb = "srgb",
  Strip = "strip",
  Tinysrgb = "tinysrgb",
}

export enum IImgixParamsFill {
  Blur = "blur",
  Solid = "solid",
}

export enum IImgixParamsFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Facearea = "facearea",
  Fill = "fill",
  Fillmax = "fillmax",
  Max = "max",
  Min = "min",
  Scale = "scale",
}

export enum IImgixParamsFlip {
  H = "h",
  Hv = "hv",
  V = "v",
}

export enum IImgixParamsFm {
  Avif = "avif",
  Blurhash = "blurhash",
  Gif = "gif",
  Jp2 = "jp2",
  Jpg = "jpg",
  Json = "json",
  Jxr = "jxr",
  Mp4 = "mp4",
  Pjpg = "pjpg",
  Png = "png",
  Png8 = "png8",
  Png32 = "png32",
  Webm = "webm",
  Webp = "webp",
}

export enum IImgixParamsIptc {
  Allow = "allow",
  Block = "block",
}

export enum IImgixParamsMarkAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsMarkFit {
  Clip = "clip",
  Crop = "crop",
  Fill = "fill",
  Max = "max",
  Scale = "scale",
}

export enum IImgixParamsMarkTile {
  Grid = "grid",
}

export enum IImgixParamsPalette {
  Css = "css",
  Json = "json",
}

export enum IImgixParamsTransparency {
  Grid = "grid",
}

export enum IImgixParamsTrim {
  Auto = "auto",
  Color = "color",
}

export enum IImgixParamsTxtAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum IImgixParamsTxtClip {
  Ellipsis = "ellipsis",
  End = "end",
  Middle = "middle",
  Start = "start",
}

export enum IImgixParamsTxtFit {
  Max = "max",
}

/** Specifies how to filter by usage */
export type IInUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars["BooleanType"]["input"]>;
};

export enum IItemStatus {
  Draft = "draft",
  Published = "published",
  Updated = "updated",
}

/** Block of type Item | link (link) */
export type ILinkRecord = IRecordInterface & {
  __typename?: "LinkRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  linkIcon?: Maybe<Scalars["String"]["output"]>;
  linkName?: Maybe<Scalars["String"]["output"]>;
  linkUrl?: Maybe<Scalars["String"]["output"]>;
};

/** Block of type Item | link (link) */
export type ILinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Block of type Module | Navigation (module_navigation) */
export type IModuleNavigationRecord = IRecordInterface & {
  __typename?: "ModuleNavigationRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  navigationLinks: Array<ILinkRecord>;
};

/** Block of type Module | Navigation (module_navigation) */
export type IModuleNavigationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Block of type Module | Social (module_social) */
export type IModuleSocialRecord = IRecordInterface & {
  __typename?: "ModuleSocialRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  socialLinks: Array<ILinkRecord>;
};

/** Block of type Module | Social (module_social) */
export type IModuleSocialRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

export enum IMuxThumbnailFormatType {
  Gif = "gif",
  Jpg = "jpg",
  Png = "png",
}

/** Specifies how to filter by image orientation */
export type IOrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<IUploadOrientation | `${IUploadOrientation}`>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<IUploadOrientation | `${IUploadOrientation}`>;
};

/** Record of type PorfolioPage (porfoliopage) */
export type IPorfoliopageRecord = IRecordInterface & {
  __typename?: "PorfoliopageRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
};

/** Record of type PorfolioPage (porfoliopage) */
export type IPorfoliopageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQuery = {
  __typename?: "Query";
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: ICollectionMetadata;
  /** Returns the single instance record */
  _site: ISite;
  /** Returns a collection of assets */
  allUploads: Array<IFileField>;
  /** Returns the single instance record */
  contactpage?: Maybe<IContactpageRecord>;
  /** Returns the single instance record */
  homepage?: Maybe<IHomepageRecord>;
  /** Returns the single instance record */
  porfoliopage?: Maybe<IPorfoliopageRecord>;
  /** Returns the single instance record */
  sitelayout?: Maybe<ISitelayoutRecord>;
  /** Returns a specific asset */
  upload?: Maybe<IFileField>;
};

/** The query root for this schema */
export type IQuery_AllUploadsMetaArgs = {
  filter?: InputMaybe<IUploadFilter>;
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQuery_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IUploadFilter>;
  first?: InputMaybe<Scalars["IntType"]["input"]>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IUploadOrderBy>>>;
  skip?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** The query root for this schema */
export type IQueryContactpageArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQueryHomepageArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQueryPorfoliopageArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQuerySitelayoutArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

/** The query root for this schema */
export type IQueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  filter?: InputMaybe<IUploadFilter>;
  locale?: InputMaybe<ISiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<IUploadOrderBy>>>;
};

export type IRecordInterface = {
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
};

export type IRecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Specifies how to filter by upload type */
export type IResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<IResolutionType | `${IResolutionType}`>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<IResolutionType | `${IResolutionType}`>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<IResolutionType | `${IResolutionType}`>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<IResolutionType | `${IResolutionType}`>>>;
};

export enum IResolutionType {
  Icon = "icon",
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export type IResponsiveImage = {
  __typename?: "ResponsiveImage";
  alt?: Maybe<Scalars["String"]["output"]>;
  aspectRatio: Scalars["FloatType"]["output"];
  base64?: Maybe<Scalars["String"]["output"]>;
  bgColor?: Maybe<Scalars["String"]["output"]>;
  height: Scalars["IntType"]["output"];
  sizes: Scalars["String"]["output"];
  src: Scalars["String"]["output"];
  srcSet: Scalars["String"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  webpSrcSet: Scalars["String"]["output"];
  width: Scalars["IntType"]["output"];
};

/** Block of type Section | About me (section_about_me) */
export type ISectionAboutMeRecord = IRecordInterface & {
  __typename?: "SectionAboutMeRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  buttonLabel?: Maybe<Scalars["String"]["output"]>;
  buttonLink?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ItemId"]["output"];
  image?: Maybe<IFileField>;
  textContent?: Maybe<Scalars["String"]["output"]>;
};

/** Block of type Section | About me (section_about_me) */
export type ISectionAboutMeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Block of type Section | About me (section_about_me) */
export type ISectionAboutMeRecordTextContentArgs = {
  markdown?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Block of type Section | Contact banner (section_contact_banner) */
export type ISectionContactBannerRecord = IRecordInterface & {
  __typename?: "SectionContactBannerRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  buttonLabel?: Maybe<Scalars["String"]["output"]>;
  buttonLink?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ItemId"]["output"];
};

/** Block of type Section | Contact banner (section_contact_banner) */
export type ISectionContactBannerRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Block of type Section | Contact me (section_contact_me) */
export type ISectionContactMeRecord = IRecordInterface & {
  __typename?: "SectionContactMeRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
};

/** Block of type Section | Contact me (section_contact_me) */
export type ISectionContactMeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Block of type Section | Get in touch (section_get_in_touch) */
export type ISectionGetInTouchRecord = IRecordInterface & {
  __typename?: "SectionGetInTouchRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
};

/** Block of type Section | Get in touch (section_get_in_touch) */
export type ISectionGetInTouchRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Block of type Section | Hero (section_hero) */
export type ISectionHeroRecord = IRecordInterface & {
  __typename?: "SectionHeroRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  buttonLabel?: Maybe<Scalars["String"]["output"]>;
  buttonLink?: Maybe<Scalars["String"]["output"]>;
  heroHeadline?: Maybe<Scalars["String"]["output"]>;
  heroImage?: Maybe<IFileField>;
  id: Scalars["ItemId"]["output"];
};

/** Block of type Section | Hero (section_hero) */
export type ISectionHeroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Block of type Section | Portfolio detail (section_portfolio_detail) */
export type ISectionPortfolioDetailRecord = IRecordInterface & {
  __typename?: "SectionPortfolioDetailRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
};

/** Block of type Section | Portfolio detail (section_portfolio_detail) */
export type ISectionPortfolioDetailRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

/** Block of type Section | Portfolio list (section_portfolio_list) */
export type ISectionPortfolioListRecord = IRecordInterface & {
  __typename?: "SectionPortfolioListRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
};

/** Block of type Section | Portfolio list (section_portfolio_list) */
export type ISectionPortfolioListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

export type ISeoField = {
  __typename?: "SeoField";
  description?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<IFileField>;
  title?: Maybe<Scalars["String"]["output"]>;
  twitterCard?: Maybe<Scalars["String"]["output"]>;
};

export type ISite = {
  __typename?: "Site";
  favicon?: Maybe<IFileField>;
  faviconMetaTags: Array<ITag>;
  globalSeo?: Maybe<IGlobalSeoField>;
  locales: Array<ISiteLocale | `${ISiteLocale}`>;
};

export type ISiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<IFaviconType>>>;
};

export type ISiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<ISiteLocale>>;
  locale?: InputMaybe<ISiteLocale>;
};

export enum ISiteLocale {
  En = "en",
}

export type ISitelayoutModelLayoutModulesField =
  | IModuleNavigationRecord
  | IModuleSocialRecord;

/** Record of type SiteLayout (sitelayout) */
export type ISitelayoutRecord = IRecordInterface & {
  __typename?: "SitelayoutRecord";
  _createdAt: Scalars["DateTime"]["output"];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars["String"]["output"]>;
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  _isValid: Scalars["BooleanType"]["output"];
  _modelApiKey: Scalars["String"]["output"];
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** SEO meta tags */
  _seoMetaTags: Array<ITag>;
  _status: IItemStatus | `${IItemStatus}`;
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>;
  _updatedAt: Scalars["DateTime"]["output"];
  id: Scalars["ItemId"]["output"];
  layoutModules: Array<ISitelayoutModelLayoutModulesField>;
};

/** Record of type SiteLayout (sitelayout) */
export type ISitelayoutRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<ISiteLocale>;
};

export type IStringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars["BooleanType"]["input"]>;
  pattern: Scalars["String"]["input"];
  regexp?: InputMaybe<Scalars["BooleanType"]["input"]>;
};

export type ITag = {
  __typename?: "Tag";
  attributes?: Maybe<Scalars["MetaTagAttributes"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  tag: Scalars["String"]["output"];
};

/** Specifies how to filter by upload type */
export type ITypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<IUploadType | `${IUploadType}`>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<IUploadType | `${IUploadType}`>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<IUploadType | `${IUploadType}`>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<IUploadType | `${IUploadType}`>>>;
};

/** Specifies how to filter by default alt */
export type IUploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type IUploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type IUploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type IUploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<
    Array<InputMaybe<IColorBucketType | `${IColorBucketType}`>>
  >;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<
    Array<InputMaybe<IColorBucketType | `${IColorBucketType}`>>
  >;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<IColorBucketType | `${IColorBucketType}`>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<IColorBucketType | `${IColorBucketType}`>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<
    Array<InputMaybe<IColorBucketType | `${IColorBucketType}`>>
  >;
};

/** Specifies how to filter by copyright */
export type IUploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type IUploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

/** Specifies how to filter by filename */
export type IUploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

export type IUploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<IUploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IUploadFilter>>>;
  _createdAt?: InputMaybe<IUploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<IUploadUpdatedAtFilter>;
  alt?: InputMaybe<IUploadAltFilter>;
  author?: InputMaybe<IUploadAuthorFilter>;
  basename?: InputMaybe<IUploadBasenameFilter>;
  colors?: InputMaybe<IUploadColorsFilter>;
  copyright?: InputMaybe<IUploadCopyrightFilter>;
  filename?: InputMaybe<IUploadFilenameFilter>;
  format?: InputMaybe<IUploadFormatFilter>;
  height?: InputMaybe<IUploadHeightFilter>;
  id?: InputMaybe<IUploadIdFilter>;
  inUse?: InputMaybe<IInUseFilter>;
  md5?: InputMaybe<IUploadMd5Filter>;
  mimeType?: InputMaybe<IUploadMimeTypeFilter>;
  notes?: InputMaybe<IUploadNotesFilter>;
  orientation?: InputMaybe<IOrientationFilter>;
  resolution?: InputMaybe<IResolutionFilter>;
  size?: InputMaybe<IUploadSizeFilter>;
  smartTags?: InputMaybe<IUploadTagsFilter>;
  tags?: InputMaybe<IUploadTagsFilter>;
  title?: InputMaybe<IUploadTitleFilter>;
  type?: InputMaybe<ITypeFilter>;
  width?: InputMaybe<IUploadWidthFilter>;
};

/** Specifies how to filter by format */
export type IUploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Specifies how to filter by height */
export type IUploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** Specifies how to filter by ID */
export type IUploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars["UploadId"]["input"]>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars["UploadId"]["input"]>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>;
};

/** Specifies how to filter by MD5 */
export type IUploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Specifies how to filter by mime type */
export type IUploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type IUploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

export enum IUploadOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  Basename_ASC = "basename_ASC",
  Basename_DESC = "basename_DESC",
  Filename_ASC = "filename_ASC",
  Filename_DESC = "filename_DESC",
  Format_ASC = "format_ASC",
  Format_DESC = "format_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  MimeType_ASC = "mimeType_ASC",
  MimeType_DESC = "mimeType_DESC",
  Resolution_ASC = "resolution_ASC",
  Resolution_DESC = "resolution_DESC",
  Size_ASC = "size_ASC",
  Size_DESC = "size_DESC",
}

export enum IUploadOrientation {
  Landscape = "landscape",
  Portrait = "portrait",
  Square = "square",
}

/** Specifies how to filter by size */
export type IUploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars["IntType"]["input"]>;
};

/** Specifies how to filter by tags */
export type IUploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars["String"]["input"]>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Specifies how to filter by default title */
export type IUploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<IStringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars["String"]["input"]>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<IStringMatchesFilter>;
};

export enum IUploadType {
  Archive = "archive",
  Audio = "audio",
  Image = "image",
  Pdfdocument = "pdfdocument",
  Presentation = "presentation",
  Richtext = "richtext",
  Spreadsheet = "spreadsheet",
  Video = "video",
}

/** Specifies how to filter by update datetime */
export type IUploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type IUploadVideoField = {
  __typename?: "UploadVideoField";
  duration?: Maybe<Scalars["Int"]["output"]>;
  framerate?: Maybe<Scalars["Int"]["output"]>;
  mp4Url?: Maybe<Scalars["String"]["output"]>;
  muxAssetId: Scalars["String"]["output"];
  muxPlaybackId: Scalars["String"]["output"];
  streamingUrl: Scalars["String"]["output"];
  thumbnailUrl: Scalars["String"]["output"];
};

export type IUploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<IVideoMp4Res>;
  res?: InputMaybe<IVideoMp4Res>;
};

export type IUploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<IMuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type IUploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars["IntType"]["input"]>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars["IntType"]["input"]>;
};

export enum IVideoMp4Res {
  High = "high",
  Low = "low",
  Medium = "medium",
}

export type IFocalPoint = {
  __typename?: "focalPoint";
  x: Scalars["FloatType"]["output"];
  y: Scalars["FloatType"]["output"];
};

export type IHomepageQueryVariables = Exact<{ [key: string]: never }>;

export type IHomepageQuery = {
  __typename?: "Query";
  homepage?: {
    __typename?: "HomepageRecord";
    homepageContent: Array<
      | {
          __typename?: "SectionAboutMeRecord";
          id: string;
          _modelApiKey: string;
          headline?: string | null;
          buttonLink?: string | null;
          buttonLabel?: string | null;
          textContent?: string | null;
          image?: {
            __typename?: "FileField";
            alt?: string | null;
            url: string;
          } | null;
        }
      | {
          __typename?: "SectionContactBannerRecord";
          id: string;
          _modelApiKey: string;
          headline?: string | null;
          buttonLink?: string | null;
          buttonLabel?: string | null;
        }
      | {
          __typename?: "SectionHeroRecord";
          id: string;
          _modelApiKey: string;
          heroHeadline?: string | null;
          buttonLink?: string | null;
          buttonLabel?: string | null;
          heroImage?: {
            __typename?: "FileField";
            url: string;
            alt?: string | null;
          } | null;
        }
    >;
  } | null;
};

export type ISiteLayoutQueryVariables = Exact<{ [key: string]: never }>;

export type ISiteLayoutQuery = {
  __typename?: "Query";
  sitelayout?: {
    __typename?: "SitelayoutRecord";
    layoutModules: Array<
      | {
          __typename?: "ModuleNavigationRecord";
          id: string;
          _modelApiKey: string;
          navigationLinks: Array<{
            __typename?: "LinkRecord";
            linkIcon?: string | null;
            linkName?: string | null;
            linkUrl?: string | null;
            _modelApiKey: string;
          }>;
        }
      | {
          __typename?: "ModuleSocialRecord";
          id: string;
          _modelApiKey: string;
          socialLinks: Array<{
            __typename?: "LinkRecord";
            linkIcon?: string | null;
            linkName?: string | null;
            linkUrl?: string | null;
            _modelApiKey: string;
          }>;
        }
    >;
  } | null;
};

export const HomepageDocument = gql`
  query Homepage {
    homepage {
      homepageContent {
        ... on RecordInterface {
          id
          _modelApiKey
        }
        ... on SectionHeroRecord {
          id
          heroHeadline
          buttonLink
          buttonLabel
          heroImage {
            url
            alt
          }
          _modelApiKey
        }
        ... on SectionAboutMeRecord {
          id
          image {
            alt
            url
          }
          headline
          buttonLink
          buttonLabel
          textContent
          _modelApiKey
        }
        ... on SectionContactBannerRecord {
          id
          headline
          buttonLink
          buttonLabel
          _modelApiKey
        }
      }
    }
  }
`;
export const SiteLayoutDocument = gql`
  query SiteLayout {
    sitelayout {
      layoutModules {
        ... on ModuleSocialRecord {
          id
          socialLinks {
            linkIcon
            linkName
            linkUrl
            _modelApiKey
          }
          _modelApiKey
        }
        ... on ModuleNavigationRecord {
          id
          navigationLinks {
            linkIcon
            linkName
            linkUrl
            _modelApiKey
          }
          _modelApiKey
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    Homepage(
      variables?: IHomepageQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<IHomepageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IHomepageQuery>(HomepageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Homepage",
        "query"
      );
    },
    SiteLayout(
      variables?: ISiteLayoutQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<ISiteLayoutQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ISiteLayoutQuery>(SiteLayoutDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "SiteLayout",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
