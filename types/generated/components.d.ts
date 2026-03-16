import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'videos' | 'audios' | 'files'>;
  };
}

export interface ElementsBlock extends Struct.ComponentSchema {
  collectionName: 'components_elements_blocks';
  info: {
    displayName: 'Block';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.Text;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    name: Schema.Attribute.String;
    path: Schema.Attribute.Text;
  };
}

export interface ElementsNumbers extends Struct.ComponentSchema {
  collectionName: 'components_elements_numbers';
  info: {
    displayName: 'Numbers';
  };
  attributes: {
    number: Schema.Attribute.Text;
    subtitleOne: Schema.Attribute.Text;
    subtitleTwo: Schema.Attribute.Text;
  };
}

export interface ElementsTetimonials extends Struct.ComponentSchema {
  collectionName: 'components_elements_tetimonials';
  info: {
    displayName: 'Tetimonials';
  };
  attributes: {
    feedback: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.Text;
    starCount: Schema.Attribute.String;
  };
}

export interface HomepageCollaborations extends Struct.ComponentSchema {
  collectionName: 'components_homepage_collaborations';
  info: {
    displayName: 'Collaborations';
  };
  attributes: {
    brands: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    brandsTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    numbers: Schema.Attribute.Component<'elements.numbers', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageOtherServices extends Struct.ComponentSchema {
  collectionName: 'components_homepage_other_services';
  info: {
    displayName: 'Other Services';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageReadyToGetStarted extends Struct.ComponentSchema {
  collectionName: 'components_homepage_ready_to_get_started_s';
  info: {
    displayName: 'Ready to Get Started?';
  };
  attributes: {
    call: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    discrete: Schema.Attribute.String;
    quote: Schema.Attribute.Component<'elements.link', false>;
    response: Schema.Attribute.String;
    support: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageService extends Struct.ComponentSchema {
  collectionName: 'components_homepage_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    title: Schema.Attribute.Text;
  };
}

export interface HomepageSpectrum extends Struct.ComponentSchema {
  collectionName: 'components_homepage_spectrums';
  info: {
    displayName: 'Spectrum';
  };
  attributes: {
    ans1: Schema.Attribute.Text;
    ans2: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.link', false>;
    ques1: Schema.Attribute.Text;
    ques2: Schema.Attribute.Text;
    right_block: Schema.Attribute.Component<'elements.block', true>;
    right_description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    subtitle2: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
    title2: Schema.Attribute.Text;
  };
}

export interface HomepageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'elements.tetimonials', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'OpenGraph';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    socialNetworks: Schema.Attribute.Enumeration<
      ['Instagram', 'LinkedIn', 'TikTok']
    >;
    title: Schema.Attribute.Text;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.Text;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaRobots: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    metaViewport: Schema.Attribute.Text;
    socialNetwork: Schema.Attribute.Component<'shared.open-graph', true>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'elements.block': ElementsBlock;
      'elements.card': ElementsCard;
      'elements.link': ElementsLink;
      'elements.numbers': ElementsNumbers;
      'elements.tetimonials': ElementsTetimonials;
      'homepage.collaborations': HomepageCollaborations;
      'homepage.other-services': HomepageOtherServices;
      'homepage.ready-to-get-started': HomepageReadyToGetStarted;
      'homepage.service': HomepageService;
      'homepage.spectrum': HomepageSpectrum;
      'homepage.testimonials': HomepageTestimonials;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
