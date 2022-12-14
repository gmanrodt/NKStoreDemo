/**
 * Generated by '@kontent-ai/model-generator@5.8.0'
 *
 * Project name: NK Store Demo
 * Environment: Production
 * Project Id: 9d6858cd-ceea-0076-31e7-72c3266ce1fd
 */
export const contentTypes = {
  /**
   * Article
   * Last modified: Tue Nov 29 2022 09:53:52 GMT-0600 (Central Standard Time)
   */
  article: {
    codename: 'article',
    id: 'f4c46a4b-c929-4596-890b-178a635ac00d',
    externalId: undefined,
    name: 'Article',
    elements: {
      /**
       * Content (rich_text)
       */
      content: {
        codename: 'content',
        id: '91d587ac-4e2f-4e15-9d93-fc2e3ee039f9',
        externalId: undefined,
        name: 'Content',
        required: true,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Headline (text)
       */
      headline: {
        codename: 'headline',
        id: '3a42fecc-385f-4344-9dbf-13b5a78e26e1',
        externalId: undefined,
        name: 'Headline',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Navigation Options (multiple_choice)
       */
      navigation__untitled_multiple_choice: {
        codename: 'navigation__untitled_multiple_choice',
        id: '08bf0edc-6557-4ff4-8eb9-6857feb25184',
        externalId: undefined,
        name: 'Navigation Options',
        required: true,
        type: 'multiple_choice',
        snippetCodename: 'navigation',
      },
    },
  },

  /**
   * Hero Banner
   * Last modified: Tue Nov 29 2022 08:12:07 GMT-0600 (Central Standard Time)
   */
  hero_banner: {
    codename: 'hero_banner',
    id: '1b6ffc79-62ba-44b9-9062-67311152a54d',
    externalId: undefined,
    name: 'Hero Banner',
    elements: {
      /**
       * Background Image (asset)
       */
      background_image: {
        codename: 'background_image',
        id: '88d55ff3-dab2-4191-8139-10222742d879',
        externalId: undefined,
        name: 'Background Image',
        required: true,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * CTA Route (text)
       */
      cta_route: {
        codename: 'cta_route',
        id: '15860e2c-0a28-4ff2-b112-071bffc1ac7b',
        externalId: undefined,
        name: 'CTA Route',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * CTA Text (text)
       */
      cta_text: {
        codename: 'cta_text',
        id: '24797d83-7c17-48ab-adb6-94c7f58bb194',
        externalId: undefined,
        name: 'CTA Text',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: 'fb61d84c-4808-43c5-ba4d-475c9750690a',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Headline (text)
       */
      headline: {
        codename: 'headline',
        id: 'cb0db841-96c9-40a9-802c-ca4d21f67856',
        externalId: undefined,
        name: 'Headline',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Home Page
   * Last modified: Mon Nov 28 2022 14:55:08 GMT-0600 (Central Standard Time)
   */
  home_page: {
    codename: 'home_page',
    id: 'e7559b68-9cd2-40cd-979f-aaa989a8a40c',
    externalId: undefined,
    name: 'Home Page',
    elements: {
      /**
       * Featured Products (modular_content)
       */
      feature_products: {
        codename: 'feature_products',
        id: '58aedb6e-5318-4850-9551-354a3093a041',
        externalId: undefined,
        name: 'Featured Products',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Hero (modular_content)
       */
      hero: {
        codename: 'hero',
        id: '9fa36ee5-0aef-45a3-bfae-40ecdf767294',
        externalId: undefined,
        name: 'Hero',
        required: true,
        type: 'modular_content',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Product
   * Last modified: Mon Nov 28 2022 12:55:46 GMT-0600 (Central Standard Time)
   */
  product: {
    codename: 'product',
    id: 'b3849622-03a6-4c76-b7e0-e3ba3f8a6bbd',
    externalId: undefined,
    name: 'Product',
    elements: {
      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: 'a5802466-c5ca-491e-9b29-c351067cbdf7',
        externalId: undefined,
        name: 'Description',
        required: true,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Images (asset)
       */
      images: {
        codename: 'images',
        id: 'd6e98c7d-2bf8-4490-9e67-033cbdfef361',
        externalId: undefined,
        name: 'Images',
        required: true,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: '1639e846-2fd7-44a9-978c-326fc5e19095',
        externalId: undefined,
        name: 'Name',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Price (number)
       */
      price: {
        codename: 'price',
        id: '988e918e-4f33-4f2b-98a1-1155a0f173ea',
        externalId: undefined,
        name: 'Price',
        required: true,
        type: 'number',
        snippetCodename: undefined,
      },

      /**
       * Product Categories (taxonomy)
       */
      product_categories: {
        codename: 'product_categories',
        id: '7fe3443b-252f-4edb-8956-0a9e3ab944e1',
        externalId: undefined,
        name: 'Product Categories',
        required: true,
        type: 'taxonomy',
        snippetCodename: undefined,
      },

      /**
       * Slug (url_slug)
       */
      slug: {
        codename: 'slug',
        id: '8cd885b7-312b-4a88-b6f8-2269595302ea',
        externalId: undefined,
        name: 'Slug',
        required: true,
        type: 'url_slug',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Products
   * Last modified: Wed Dec 07 2022 11:09:18 GMT-0600 (Central Standard Time)
   */
  products: {
    codename: 'products',
    id: 'ff9c3d68-a5df-4116-a14b-f92fcf99949c',
    externalId: undefined,
    name: 'Products',
    elements: {
      /**
       * Heading (text)
       */
      heading: {
        codename: 'heading',
        id: 'af07cd0c-df9e-4cc0-872e-66f8f74388dc',
        externalId: undefined,
        name: 'Heading',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Meta description (text)
       *
       * This is a simple text field. It defines the description for your SEO metadata. Text fields don't store any formatting.
       */
      seo_metadata_example_to_include_in_any_type__meta_description: {
        codename:
          'seo_metadata_example_to_include_in_any_type__meta_description',
        id: 'a6d71176-bd66-42ae-92b1-9d1d4e2c8181',
        externalId: undefined,
        name: 'Meta description',
        required: false,
        type: 'text',
        snippetCodename: 'seo_metadata_example_to_include_in_any_type',
      },

      /**
       * Meta title (text)
       *
       * This is a simple text field. It defines the title for your SEO metadata (and can be different than the name in Kontent.ai). Text fields don't store any formatting.
       */
      seo_metadata_example_to_include_in_any_type__meta_title: {
        codename: 'seo_metadata_example_to_include_in_any_type__meta_title',
        id: 'e295e0be-3d12-4fcc-b6b9-a308b7307bce',
        externalId: undefined,
        name: 'Meta title',
        required: false,
        type: 'text',
        snippetCodename: 'seo_metadata_example_to_include_in_any_type',
      },

      /**
       * Navigation Options (multiple_choice)
       */
      navigation__untitled_multiple_choice: {
        codename: 'navigation__untitled_multiple_choice',
        id: '08bf0edc-6557-4ff4-8eb9-6857feb25184',
        externalId: undefined,
        name: 'Navigation Options',
        required: true,
        type: 'multiple_choice',
        snippetCodename: 'navigation',
      },

      /**
       * Products (modular_content)
       */
      products: {
        codename: 'products',
        id: 'd2c04801-2beb-470b-90ea-59cf1d86115f',
        externalId: undefined,
        name: 'Products',
        required: true,
        type: 'modular_content',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Search Results
   * Last modified: Tue Nov 29 2022 09:41:30 GMT-0600 (Central Standard Time)
   */
  search_results: {
    codename: 'search_results',
    id: 'd5baa167-fa27-46f0-9938-b16d9af59155',
    externalId: undefined,
    name: 'Search Results',
    elements: {
      /**
       * Headline (text)
       */
      headline: {
        codename: 'headline',
        id: '187ccc55-11ac-40a7-baef-6591ea92228c',
        externalId: undefined,
        name: 'Headline',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Search Box Placeholder (text)
       */
      search_box_placeholder: {
        codename: 'search_box_placeholder',
        id: 'bf760bdb-46fd-4e60-980b-ce9e0cd8e167',
        externalId: undefined,
        name: 'Search Box Placeholder',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },
} as const;
