export const TranslationsLanguageEnum = {
  EN: 'en',
  ES: 'es',
};

export const DEFAULT_LANGUAGE = TranslationsLanguageEnum.EN;

export const TranslationsLanguagePrefixEnum = {
  [TranslationsLanguageEnum.ES]: `/${TranslationsLanguageEnum.ES}/`,
};

export const TranslationsLanguageLabel = {
  [TranslationsLanguageEnum.EN]: 'EN',
  [TranslationsLanguageEnum.ES]: 'ES',
};

export const TRANSLATIONS_LOCAL_STORAGE_KEY = 'translations';

export const TranslationKeysEnum = {
  IndexPage: {
    NAME: 'IndexPage',
    TITLE: 'TITLE',
    DESCRIPTION: 'DESCRIPTION',
    INTRO_TITLE: 'INTRO_TITLE',
    INTRO_DESCRIPTION: 'INTRO_DESCRIPTION',
    EXPLORE_BUTTON: 'EXPLORE_BUTTON',
    SECTION_FEATURES_TITLE: 'SECTION_FEATURES_TITLE',
    VIEW_MORE_BUTTON: 'VIEW_MORE_BUTTON',
    CREATIVE_PROCESS_TITLE: 'CREATIVE_PROCESS_TITLE',
    CUSTOMERS_REVIEWS_TITLE: 'CUSTOMERS_REVIEWS_TITLE',
    CUSTOMERS_REVIEWS_DESCRIPTION_0: 'CUSTOMERS_REVIEWS_DESCRIPTION_0',
    CUSTOMERS_REVIEWS_DESCRIPTION_1: 'CUSTOMERS_REVIEWS_DESCRIPTION_1',
    CUSTOMERS_REVIEWS_DESCRIPTION_2: 'CUSTOMERS_REVIEWS_DESCRIPTION_2',
  },
  AboutUsPage: {
    NAME: 'AboutUsPage',
    TITLE: 'TITLE',
    DESCRIPTION: 'DESCRIPTION',
    PAGE_HEADER_DESCRIPTION: 'PAGE_HEADER_DESCRIPTION',
    PAGE_HEADER_TITLE: 'PAGE_HEADER_TITLE',
    CONTAINER_TEXT_0: 'CONTAINER_TEXT_0',
    CONTAINER_TEXT_1: 'CONTAINER_TEXT_1',
    CONTAINER_TEXT_2: 'CONTAINER_TEXT_2',
    CONTAINER_TEXT_3: 'CONTAINER_TEXT_3',
    CONTAINER_TEXT_4: 'CONTAINER_TEXT_4',
    CONTAINER_TEXT_5: 'CONTAINER_TEXT_5',
    CREATIVE_TEAM_TITLE: 'CREATIVE_TEAM_TITLE',
  },
  TraceabilityPage: {
    NAME: 'TraceabilityPage',
    TITLE: 'TITLE',
    DESCRIPTION: 'DESCRIPTION',
    PAGE_HEADER_TITLE_0: 'PAGE_HEADER_TITLE_0',
    PAGE_HEADER_TITLE_1: 'PAGE_HEADER_TITLE_1',
    PAGE_HEADER_SUBTITLE: 'PAGE_HEADER_SUBTITLE',
    PAGE_HEADER_DESCRIPTION: 'PAGE_HEADER_DESCRIPTION',
    PAGE_HEADER_REQUEST_A_DEMO_BUTTON: 'PAGE_HEADER_REQUEST_A_DEMO_BUTTON',
    STORYCODE_INTRO_TITLE: 'STORYCODE_INTRO_TITLE',
    STORYCODE_INTRO_DESCRIPTION_TEXT_0: 'STORYCODE_DESCRIPTION_TEXT_0',
    STORYCODE_INTRO_DESCRIPTION_TEXT_1: 'STORYCODE_DESCRIPTION_TEXT_1',
    STORYCODE_SUMMARY_TITLE: 'STORYCODE_SUMMARY_TITLE',
    STORYCODE_SUMMARY_DESCRIPTION_TITLE_0:
      'STORYCODE_SUMMARY_DESCRIPTION_TITLE_0',
    STORYCODE_SUMMARY_DESCRIPTION_TEXT_0:
      'STORYCODE_SUMMARY_DESCRIPTION_TEXT_0',
    STORYCODE_SUMMARY_DESCRIPTION_TITLE_1:
      'STORYCODE_SUMMARY_DESCRIPTION_TITLE_1',
    STORYCODE_SUMMARY_DESCRIPTION_TEXT_1:
      'STORYCODE_SUMMARY_DESCRIPTION_TEXT_1',
    STORYCODE_SUMMARY_DESCRIPTION_TITLE_2:
      'STORYCODE_SUMMARY_DESCRIPTION_TITLE_2',
    STORYCODE_SUMMARY_DESCRIPTION_TEXT_2:
      'STORYCODE_SUMMARY_DESCRIPTION_TEXT_2',
    STORYCODE_SUMMARY_SUCCESS_CASE: 'STORYCODE_SUMMARY_SUCCESS_CASE',
    MYSTORY_TITLE: 'MYSTORY_TITLE',
    MYSTORY_SUBTITLE: 'MYSTORY_SUBTITLE',
    MYSTORY_TEXT_0: 'MYSTORY_TEXT_0',
    MYSTORY_TEXT_1: 'MYSTORY_TEXT_1',
    MYSTORY_WATCH_VIDEO_BUTTON: 'MYSTORY_WATCH_VIDEO_BUTTON',
    STORYCODE_PATH: 'STORYCODE_PATH',
    STORYCODE_BASED_ON_ECOSYSTEM: 'STORYCODE_BASED_ON_ECOSYSTEM',
  },
  PortfolioPage: {
    NAME: 'PortfolioPage',
    TITLE: 'TITLE',
    DESCRIPTION: 'DESCRIPTION',
    PAGE_HEADER_TITLE: 'PAGE_HEADER_TITLE',
    PAGE_HEADER_DESCRIPTION: 'PAGE_HEADER_DESCRIPTION',
    PAGE_TITLE: 'PAGE_TITLE',
    DCL_TITLE: 'DCL_TITLE',
    DCL_DESCRIPTION: 'DCL_DESCRIPTION',
    GRYND_TITLE: 'GRYND_TITLE',
    GRYND_DESCRIPTION: 'GRYND_DESCRIPTION',
    NOS_FALTA_1_TITLE: 'NOS_FALTA_1_TITLE',
    NOS_FALTA_1_DESCRIPTION: 'NOS_FALTA_1_DESCRIPTION',
    'M&T_SERVICES_TITLE': 'M&T_SERVICES_TITLE',
    'M&T_SERVICES_DESCRIPTION': 'M&T_SERVICES_DESCRIPTION',
    SONRISAS_ARGENTINAS_TITLE: 'SONRISAS_ARGENTINAS_TITLE',
    SONRISAS_ARGENTINAS_DESCRIPTION: 'SONRISAS_ARGENTINAS_DESCRIPTION',
    VIEW_CASE_STUDY: 'VIEW_CASE_STUDY',
  },
  ProcessPage: {
    NAME: 'ProcessPage',
    TITLE: 'TITLE',
    DESCRIPTION: 'DESCRIPTION',
    PAGE_HEADER_TITLE_0: 'PAGE_HEADER_TITLE_0',
    PAGE_HEADER_TITLE_1: 'PAGE_HEADER_TITLE_1',
    PAGE_HEADER_DESCRIPTION: 'PAGE_HEADER_DESCRIPTION',
    CONTAINER_TEXT: 'CONTAINER_TEXT',
  },
  FeaturesList: {
    NAME: 'FeaturesList',
    BLOCKCHAIN_TITLE: 'BLOCKCHAIN_TITLE',
    BLOCKCHAIN_DESCRIPTION: 'BLOCKCHAIN_DESCRIPTION',
    BLOCKCHAIN_LINK: 'BLOCKCHAIN_LINK',
    CUSTOM_SOFTWARE_DEVELOPMENT_TITLE: 'CUSTOM_SOFTWARE_DEVELOPMENT_TITLE',
    CUSTOM_SOFTWARE_DEVELOPMENT_DESCRIPTION_0:
      'CUSTOM_SOFTWARE_DEVELOPMENT_DESCRIPTION_0',
    CUSTOM_SOFTWARE_DEVELOPMENT_DESCRIPTION_1:
      'CUSTOM_SOFTWARE_DEVELOPMENT_DESCRIPTION_1',
    MOBILE_APPS_TITLE: 'MOBILE_APPS_TITLE',
    MOBILE_APPS_DESCRIPTION: 'MOBILE_APPS_DESCRIPTION',
    WEB_DEVELOPMENT_TITLE: 'WEB_DEVELOPMENT_TITLE',
    WEB_DEVELOPMENT_DESCRIPTION: 'WEB_DEVELOPMENT_DESCRIPTION',
    UI_UX_DESIGN_TITLE: 'UI_UX_DESIGN_TITLE',
    UI_UX_DESIGN_DESCRIPTION: 'UI_UX_DESIGN_DESCRIPTION',
    HOSTING_TITLE: 'HOSTING_TITLE',
    HOSTING_DESCRIPTION: 'HOSTING_DESCRIPTION',
    IDEA_TALK_TITLE: 'IDEA_TALK_TITLE',
    IDEA_TALK_DESCRIPTION: 'IDEA_TALK_DESCRIPTION',
    PROPOSE_SOLUTION_TITLE: 'PROPOSE_SOLUTION_TITLE',
    PROPOSE_SOLUTION_DESCRIPTION: 'PROPOSE_SOLUTION_DESCRIPTION',
    SKETCH_IT_OUT_TITLE: 'SKETCH_IT_OUT_TITLE',
    SKETCH_IT_OUT_DESCRIPTION: 'SKETCH_IT_OUT_DESCRIPTION',
    CREATE_TITLE: 'CREATE_TITLE',
    CREATE_DESCRIPTION: 'CREATE_DESCRIPTION',
    TEST_TITLE: 'TEST_TITLE',
    TEST_DESCRIPTION: 'TEST_DESCRIPTION',
    FIX_IMPROVE_TITLE: 'FIX_IMPROVE_TITLE',
    FIX_IMPROVE_DESCRIPTION: 'FIX_IMPROVE_DESCRIPTION',
    GO_LIVE_TITLE: 'GO_LIVE_TITLE',
    GO_LIVE_DESCRIPTION: 'GO_LIVE_DESCRIPTION',
    REGISTER_NEEDS_TITLE: 'REGISTER_NEEDS_TITLE',
    REGISTER_NEEDS_DESCRIPTION_0: 'REGISTER_NEEDS_DESCRIPTION_0',
    REGISTER_NEEDS_DESCRIPTION_1: 'REGISTER_NEEDS_DESCRIPTION_1',
    PREPARE_BUSINESS_TITLE: 'PREPARE_BUSINESS_TITLE',
    PREPARE_BUSINESS_DESCRIPTION_0: 'PREPARE_BUSINESS_DESCRIPTION_0',
    PREPARE_BUSINESS_DESCRIPTION_1: 'PREPARE_BUSINESS_DESCRIPTION_1',
    PREPARE_BUSINESS_DESCRIPTION_2: 'PREPARE_BUSINESS_DESCRIPTION_2',
    START_TRACKING_TITLE: 'START_TRACKING_TITLE',
    START_TRACKING_DESCRIPTION_0: 'START_TRACKING_DESCRIPTION_0',
    START_TRACKING_DESCRIPTION_1: 'START_TRACKING_DESCRIPTION_1',
    ADD_VALUE_TITLE: 'ADD_VALUE_TITLE',
    ADD_VALUE_DESCRIPTION_0: 'ADD_VALUE_DESCRIPTION_0',
    ADD_VALUE_DESCRIPTION_1: 'ADD_VALUE_DESCRIPTION_1',
    COMMUNICATE_WITH_CLIENTS_TITLE: 'COMMUNICATE_WITH_CLIENTS_TITLE',
    COMMUNICATE_WITH_CLIENTS_DESCRIPTION_0:
      'COMMUNICATE_WITH_CLIENTS_DESCRIPTION',
  },
  FeaturedProjects: {
    NAME: 'FeaturedProjects',
    RECENT_PROJECTS: 'RECENT_PROJECTS',
    RECENT_PROJECTS_SUBTITLE: 'RECENT_PROJECTS_SUBTITLE',
    NOS_FALTA_1_TITLE: 'NOS_FALTA_1_TITLE',
    NOS_FALTA_1_DESCRIPTION: 'NOS_FALTA_1_DESCRIPTION',
    'M&T_SERVICES_TITLE': 'M&T_SERVICES_TITLE',
    'M&T_SERVICES_DESCRIPTION': 'M&T_SERVICES_DESCRIPTION',
    SONRISAS_ARGENTINAS_TITLE: 'SONRISAS_ARGENTINAS_TITLE',
    SONRISAS_ARGENTINAS_DESCRIPTION: 'SONRISAS_ARGENTINAS_DESCRIPTION',
    DR_CONTACT_LENS_TITLE: 'DR_CONTACT_LENS_TITLE',
    DR_CONTACT_LENS_DESCRIPTION: 'DR_CONTACT_LENS_DESCRIPTION',
    VIEW_CASE: 'VIEW_CASE',
  },
  FeaturesGrid: {
    NAME: 'FeaturesGrid',
    WHY_THEY_CHOOSE_US: 'WHY_THEY_CHOOSE_US',
    IDEA_TO_REALITY_TITLE: 'IDEA_TO_REALITY_TITLE',
    IDEA_TO_REALITY_DESCRIPTION: 'IDEA_TO_REALITY_DESCRIPTION',
    WORLDWIDE_SERVICES_TITLE: 'WORLDWIDE_SERVICES_TITLE',
    WORLDWIDE_SERVICES_DESCRIPTION: 'WORLDWIDE_SERVICES_DESCRIPTION',
    QUALITY_WORK_TITLE: 'QUALITY_WORK_TITLE',
    QUALITY_WORK_DESCRIPTION: 'QUALITY_WORK_DESCRIPTION',
    CODE_REVIEWS_TESTING_TITLE: 'CODE_REVIEWS_TESTING_TITLE',
    CODE_REVIEWS_TESTING_DESCRIPTION: 'CODE_REVIEWS_TESTING_DESCRIPTION',
    UX_PRACTICES_TITLE: 'UX_PRACTICES_TITLE',
    UX_PRACTICES_DESCRIPTION: 'UX_PRACTICES_DESCRIPTION',
    CLOUD_SERVERS_TITLE: 'CLOUD_SERVERS_TITLE',
    CLOUD_SERVERS_DESCRIPTION: 'CLOUD_SERVERS_DESCRIPTION',
    COST_EFFECTIVE_TITLE: 'COST_EFFECTIVE_TITLE',
    COST_EFFECTIVE_DESCRIPTION: 'COST_EFFECTIVE_DESCRIPTION',
    AVAILABILITY_TITLE: 'AVAILABILITY_TITLE',
    AVAILABILITY_DESCRIPTION: 'AVAILABILITY_DESCRIPTION',
    BUSINESS_UNDERSTANDING_TITLE: 'BUSINESS_UNDERSTANDING_TITLE',
    BUSINESS_UNDERSTANDING_DESCRIPTION: 'BUSINESS_UNDERSTANDING_DESCRIPTION',
  },
  CreativeProcessIllustration: {
    NAME: 'CreativeProcessIllustration',
    IDEA_TALK_TITLE: 'IDEA_TALK_TITLE',
    IDEA_TALK_DESCRIPTION: 'IDEA_TALK_DESCRIPTION',
    PROPOSE_SOLUTIONS_TITLE: 'PROPOSE_SOLUTIONS_TITLE',
    PROPOSE_SOLUTIONS_DESCRIPTION: 'PROPOSE_SOLUTIONS_DESCRIPTION',
    SKETCH_IT_OUT_TITLE: 'SKETCH_IT_OUT_TITLE',
    SKETCH_IT_OUT_DESCRIPTION: 'SKETCH_IT_OUT_DESCRIPTION',
    CREATE_TITLE: 'CREATE_TITLE',
    CREATE_DESCRIPTION: 'CREATE_DESCRIPTION',
    TEST_TITLE: 'TEST_TITLE',
    TEST_DESCRIPTION: 'TEST_DESCRIPTION',
    FIX_AND_IMPROVE_TITLE: 'FIX_AND_IMPROVE_TITLE',
    FIX_AND_IMPROVE_DESCRIPTION: 'FIX_AND_IMPROVE_DESCRIPTION',
    GO_LIVE_TITLE: 'GO_LIVE_TITLE',
    GO_LIVE_DESCRIPTION: 'GO_LIVE_DESCRIPTION',
  },
  LogosList: {
    NAME: 'LogosList',
    COMPANIES_THAT_TRUST_US: 'COMPANIES_THAT_TRUST_US',
  },
  TeamSlider: {
    NAME: 'TeamSlider',
    PRESIDENT: 'PRESIDENT',
    CEO: 'CEO',
    CTO: 'CTO',
    DEVELOPER: 'DEVELOPER',
    HRBP: 'HRBP',
    DESIGNER: 'DESIGNER',
    QA: 'QA',
    BUSINESS_GROWTH_MANAGER: 'BUSINESS_GROWTH_MANAGER',
    MAZZOLA_DESCRIPTION: 'MAZZOLA_DESCRIPTION',
    SOSA_DESCRIPTION: 'SOSA_DESCRIPTION',
    MIRONOV_DESCRIPTION: 'MIRONOV_DESCRIPTION',
    DE_LUCA_DESCRIPTION: 'DE_LUCA_DESCRIPTION',
    BASCONES_DESCRIPTION: 'BASCONES_DESCRIPTION',
    PANESI_DESCRIPTION: 'PANESI_DESCRIPTION',
    VERA_DESCRIPTION: 'VERA_DESCRIPTION',
    EISENBOART_DESCRIPTION: 'EISENBOART_DESCRIPTION',
    TAMBUSSI_DESCRIPTION: 'TAMBUSSI_DESCRIPTION',
    CASTRO_DESCRIPTION: 'CASTRO_DESCRIPTION',
    VALDEZ_DESCRIPTION: 'VALDEZ_DESCRIPTION',
    FLORES_DESCRIPTION: 'FLORES_DESCRIPTION',
    PEDEMONTE_DESCRIPTION: 'PEDEMONTE_DESCRIPTION',
    DALESSANDRO_DESCRIPTION: 'DALESSANDRO_DESCRIPTION',
    HUAMAN_DESCRIPTION: 'HUAMAN_DESCRIPTION',
    GONZALEZ_DESCRIPTION: 'GONZALEZ_DESCRIPTION',
    SERRUYA_DESCRIPTION: 'SERRUYA_DESCRIPTION',
    CONTENTO_DESCRIPTION: 'CONTENTO_DESCRIPTION',
    CAINO_DESCRIPTION: 'CAINO_DESCRIPTION',
    REYERO_DESCRIPTION: 'REYERO_DESCRIPTION',
    AZPURUA_DESCRIPTION: 'AZPURUA_DESCRIPTION',
    IFRAN_DESCRIPTION: 'IFRAN_DESCRIPTION',
    GALLEGOS_DESCRIPTION: 'GALLEGOS_DESCRIPTION',
  },
  MapAndContact: {
    NAME: 'MapAndContact',
    CONTACT_INFO_TITLE: 'CONTACT_INFO_TITLE',
    CONTACT_INFO_DESCRIPTION: 'CONTACT_INFO_DESCRIPTION',
    CONTACT_INFO_DAYS: 'CONTACT_INFO_DAYS',
    CONTACT_INFO_TIME: 'CONTACT_INFO_TIME',
  },
  ContactForm: {
    NAME: 'ContactForm',
    FORM_TITLE: 'FORM_TITLE',
    FORM_DESCRIPTION: 'FORM_DESCRIPTION',
    MESSAGE_SUCCESS: 'MESSAGE_SUCCESS',
    MESSAGE_ERROR: 'MESSAGE_ERROR',
    FIELD_REQUIRED: 'FIELD_REQUIRED',
    INVALID_EMAIL: 'INVALID_EMAIL',
    FORM_MESSAGE: 'FORM_MESSAGE',
    SEND: 'SEND',
  },
  StoryCodeDemoRequestForm: {
    NAME: 'StoryCodeDemoRequestForm',
    FORM_TITLE: 'FORM_TITLE',
    FORM_FIRST_NAME_FIELD_PLACEHOLDER: 'FORM_FIRST_NAME_FIELD_PLACEHOLDER',
    FORM_LAST_NAME_FIELD_PLACEHOLDER: 'FORM_LAST_NAME_FIELD_PLACEHOLDER',
    FORM_COMPANY_FIELD_PLACEHOLDER: 'FORM_COMPANY_FIELD_PLACEHOLDER',
    FORM_JOB_FIELD_PLACEHOLDER: 'FORM_JOB_FIELD_PLACEHOLDER',
    FORM_EMAIL_PLACEHOLDER: 'FORM_EMAIL_PLACEHOLDER',
    FORM_PHONE_NUMBER_FIELD_PLACEHOLDER: 'FORM_PHONE_NUMBER_FIELD_PLACEHOLDER',
    FORM_COUNTRY_FIELD_PLACEHOLDER: 'FORM_COUNTRY_FIELD_PLACEHOLDER',
    MESSAGE_SUCCESS: 'MESSAGE_SUCCESS',
    MESSAGE_ERROR: 'MESSAGE_ERROR',
    FIELD_REQUIRED: 'FIELD_REQUIRED',
    INVALID_EMAIL: 'INVALID_EMAIL',
    INVALID_PHONE_NUMBER: 'INVALID_PHONE_NUMBER',
    FORM_MESSAGE: 'FORM_MESSAGE',
    SEND: 'SEND',
  },
  Map: {
    NAME: 'Map',
    BUENOS_AIRES_OFFICE_LABEL: 'BUENOS_AIRES_OFFICE_LABEL',
    MIAMI_OFFICE_LABEL: 'MIAMI_OFFICE_LABEL',
    BARCELONA_OFFICE_LABEL: 'BARCELONA_OFFICE_LABEL',
  },
  MainNav: {
    NAME: 'MainNav',
    HOME_PAGE_LABEL: 'HOME_PAGE_LABEL',
    ABOUT_US_PAGE_LABEL: 'ABOUT_US_PAGE_LABEL',
    SERVICES_PAGE_LABEL: 'SERVICES_PAGE_LABEL',
    PORTFOLIO_PAGE_LABEL: 'PORTFOLIO_PAGE_LABEL',
    PROCESS_PAGE_LABEL: 'PROCESS_PAGE_LABEL',
    CONTACT_US_BUTTON_LABEL: 'CONTACT_US_PAGE_LABEL',
    VERTICALS_PAGE_LABEL: 'VERTICALS_PAGE_LABEL',
    VERTICALS_PAGE_FINTECH_LABEL: 'VERTICALS_PAGE_FINTECH_LABEL',
    VERTICALS_PAGE_HEALTHCARE_LABEL: 'VERTICALS_PAGE_HEALTHCARE_LABEL',
    VERTICALS_PAGE_UXUI_LABEL: 'VERTICALS_PAGE_UXUI_LABEL',
    VERTICALS_PAGE_BLOCKCHAIN_LABEL: 'VERTICALS_PAGE_BLOCKCHAIN_LABEL',
    HOME_PAGE_LINK: 'HOME_PAGE_LINK',
    ABOUT_US_PAGE_LINK: 'ABOUT_US_PAGE_LINK',
    SERVICES_PAGE_LINK: 'SERVICES_PAGE_LINK',
    PORTFOLIO_PAGE_LINK: 'PORTFOLIO_PAGE_LINK',
    PROCESS_PAGE_LINK: 'PROCESS_PAGE_LINK',
    CONTACT_US_BUTTON_LINK: 'CONTACT_US_PAGE_LINK',
    VERTICALS_PAGE_LINK: 'VERTICALS_PAGE_LINK',
    VERTICALS_PAGE_FINTECH_LINK: 'VERTICALS_PAGE_FINTECH_LINK',
    VERTICALS_PAGE_HEALTHCARE_LINK: 'VERTICALS_PAGE_HEALTHCARE_LINK',
    VERTICALS_PAGE_UXUI_LINK: 'VERTICALS_PAGE_UXUI_LINK',
    VERTICALS_PAGE_BLOCKCHAIN_LINK: 'VERTICALS_PAGE_BLOCKCHAIN_LINK',
  },
  Footer: {
    NAME: 'Footer',
    HOME_PAGE_LABEL: 'HOME_PAGE_LABEL',
    ABOUT_US_PAGE_LABEL: 'ABOUT_US_PAGE_LABEL',
    SERVICES_PAGE_LABEL: 'SERVICES_PAGE_LABEL',
    PORTFOLIO_PAGE_LABEL: 'PORTFOLIO_PAGE_LABEL',
    PROCESS_PAGE_LABEL: 'PROCESS_PAGE_LABEL',
    VERTICALS_PAGE_LABEL: 'VERTICALS_PAGE_LABEL',
    HOME_PAGE_LINK: 'HOME_PAGE_LINK',
    ABOUT_US_PAGE_LINK: 'ABOUT_US_PAGE_LINK',
    SERVICES_PAGE_LINK: 'SERVICES_PAGE_LINK',
    PORTFOLIO_PAGE_LINK: 'PORTFOLIO_PAGE_LINK',
    PROCESS_PAGE_LINK: 'PROCESS_PAGE_LINK',
    VERTICALS_PAGE_LINK: 'VERTICALS_PAGE_LINK',
    MENU: 'MENU',
    OUR_OFFICES: 'OUR_OFFICES',
    MAIN_OFFICE: 'MAIN_OFFICE',
  },
  Partner: {
    NAME: 'Partner',
    TITLE: 'TITLE'
  },
  ContactUs: {
    NAME: 'Contact Us',
    FORM_NAME: 'FORM_NAME',
    FORM_EMAIL: 'FORM_EMAIL',
    FORM_DESCRIPTION: 'FORM_DESCRIPTION',
    FORM_SUBMIT: 'FORM_SUBMIT',
    MESSAGE_SUCCESS: 'MESSAGE_SUCCESS',
    MESSAGE_ERROR: 'MESSAGE_ERROR',
    FIELD_REQUIRED: 'FIELD_REQUIRED',
    INVALID_EMAIL: 'INVALID_EMAIL',
  },
  VerticalsPage: {
    NAME: 'VerticalsPage',
    TITLE: 'TITLE',
    FINTECH_PAGE_LABEL: 'FINTECH_PAGE_LABEL',
    HEALTHCARE_PAGE_LABEL: 'HEALTHCARE_PAGE_LABEL',
    UXUI_PAGE_LABEL: 'UXUI_PAGE_LABEL',
    BLOCKCHAIN_PAGE_LABEL: 'BLOCKCHAIN_PAGE_LABEL',
    FINTECH_PAGE_LINK: 'FINTECH_PAGE_LINK',
    HEALTHCARE_PAGE_LINK: 'HEALTHCARE_PAGE_LINK',
    UXUI_PAGE_LINK: 'UXUI_PAGE_LINK',
    BLOCKCHAIN_PAGE_LINK: 'BLOCKCHAIN_PAGE_LINK'
  },
  Review: {
    NAME: 'Customer Review',
    CUSTOMERS_REVIEWS_TITLE: 'CUSTOMERS_REVIEWS_TITLE',
    CUSTOMERS_REVIEWS_DESCRIPTION_0: 'CUSTOMERS_REVIEWS_DESCRIPTION_0',
    CUSTOMERS_REVIEWS_DESCRIPTION_1: 'CUSTOMERS_REVIEWS_DESCRIPTION_1',
    CUSTOMERS_REVIEWS_DESCRIPTION_2: 'CUSTOMERS_REVIEWS_DESCRIPTION_2',
  },
  FintechPage: {
    NAME: 'FintechPage',
    TITLE: 'TITLE',
    KEYWORD:'KEYWORD',
    DESCRIPTION: 'DESCRIPTION',
    PAGE_HEADER_TITLE_0: 'PAGE_HEADER_TITLE_0',
    PAGE_HEADER_TITLE_1: 'PAGE_HEADER_TITLE_1',
    PAGE_HEADER_TITLE_2: 'PAGE_HEADER_TITLE_2',
    PAGE_HEADER_DESCRIPTION: 'PAGE_HEADER_DESCRIPTION',
    PAGE_HEADER_BUTTON: 'PAGE_HEADER_BUTTON',
    CONTAINER_TITLE: 'CONTAINER_TITLE',
    CONTAINER_TEXT_0: 'CONTAINER_TEXT_0',
    CONTAINER_TEXT_1: 'CONTAINER_TEXT_1',
    CONTAINER_TEXT_2: 'CONTAINER_TEXT_2',
    CONTAINER_TEXT_3: 'CONTAINER_TEXT_3',
    CONTAINER_TEXT_4: 'CONTAINER_TEXT_4',
    CONTAINER_TEXT_5: 'CONTAINER_TEXT_5',
    CONTAINER_DESCRIPTION_0: 'CONTAINER_DESCRIPTION_0',
    CONTAINER_DESCRIPTION_1: 'CONTAINER_DESCRIPTION_1',
    CONTAINER_DESCRIPTION_2: 'CONTAINER_DESCRIPTION_2',
    CONTAINER_DESCRIPTION_3: 'CONTAINER_DESCRIPTION_3',
    CONTAINER_DESCRIPTION_4: 'CONTAINER_DESCRIPTION_4',
    CONTAINER_DESCRIPTION_5: 'CONTAINER_DESCRIPTION_5',
    CREATIVE_TEAM_TITLE: 'CREATIVE_TEAM_TITLE',
    CREATIVE_TEAM_BUTTON: 'CREATIVE_TEAM_BUTTON',
    OTHER_VERTICAL_TITLE: 'OTHER_VERTICAL_TITLE',
    FINTECH_PAGE_LABEL: 'FINTECH_PAGE_LABEL',
    HEALTHCARE_PAGE_LABEL: 'HEALTHCARE_PAGE_LABEL',
    UXUI_PAGE_LABEL: 'UXUI_PAGE_LABEL',
    BLOCKCHAIN_PAGE_LABEL: 'BLOCKCHAIN_PAGE_LABEL',
    FINTECH_PAGE_LINK: 'FINTECH_PAGE_LINK',
    HEALTHCARE_PAGE_LINK: 'HEALTHCARE_PAGE_LINK',
    UXUI_PAGE_LINK: 'UXUI_PAGE_LINK',
    BLOCKCHAIN_PAGE_LINK: 'BLOCKCHAIN_PAGE_LINK',
  },
  HealthcarePage: {
    NAME: 'HealthcarePage',
    TITLE: 'TITLE',
    KEYWORD:'KEYWORD',
    DESCRIPTION: 'DESCRIPTION',
    PAGE_HEADER_TITLE_1: 'PAGE_HEADER_TITLE_1',
    PAGE_HEADER_TITLE_2: 'PAGE_HEADER_TITLE_2',
    PAGE_HEADER_DESCRIPTION: 'PAGE_HEADER_DESCRIPTION',
    PAGE_HEADER_BUTTON: 'PAGE_HEADER_BUTTON',
    CONTAINER_TITLE: 'CONTAINER_TITLE',
    CONTAINER_TEXT_0: 'CONTAINER_TEXT_0',
    CONTAINER_TEXT_1: 'CONTAINER_TEXT_1',
    CONTAINER_TEXT_2: 'CONTAINER_TEXT_2',
    CONTAINER_TEXT_3: 'CONTAINER_TEXT_3',
    CONTAINER_TEXT_4: 'CONTAINER_TEXT_4',
    CONTAINER_TEXT_5: 'CONTAINER_TEXT_5',
    CONTAINER_DESCRIPTION_0: 'CONTAINER_DESCRIPTION_0',
    CONTAINER_DESCRIPTION_1: 'CONTAINER_DESCRIPTION_1',
    CONTAINER_DESCRIPTION_2: 'CONTAINER_DESCRIPTION_2',
    CONTAINER_DESCRIPTION_3: 'CONTAINER_DESCRIPTION_3',
    CONTAINER_DESCRIPTION_4: 'CONTAINER_DESCRIPTION_4',
    CONTAINER_DESCRIPTION_5: 'CONTAINER_DESCRIPTION_5',
    SUB_TITLE: 'SUB_TITLE',
    CREATIVE_TEAM_TITLE: 'CREATIVE_TEAM_TITLE',
    CREATIVE_TEAM_BUTTON: 'CREATIVE_TEAM_BUTTON',
    PROJECT_SUMMARY_TITLE: 'PROJECT_SUMMARY_TITLE',
    PROJECT_SUMMARY_DESCRIPTION: 'PROJECT_SUMMARY_DESCRIPTION',
    PROJECT_SUMMARY_LINK: 'PROJECT_SUMMARY_LINK',
    OTHER_VERTICAL_TITLE: 'OTHER_VERTICAL_TITLE',
    FINTECH_PAGE_LABEL: 'FINTECH_PAGE_LABEL',
    HEALTHCARE_PAGE_LABEL: 'HEALTHCARE_PAGE_LABEL',
    UXUI_PAGE_LABEL: 'UXUI_PAGE_LABEL',
    BLOCKCHAIN_PAGE_LABEL: 'BLOCKCHAIN_PAGE_LABEL',
    FINTECH_PAGE_LINK: 'FINTECH_PAGE_LINK',
    HEALTHCARE_PAGE_LINK: 'HEALTHCARE_PAGE_LINK',
    UXUI_PAGE_LINK: 'UXUI_PAGE_LINK',
    BLOCKCHAIN_PAGE_LINK: 'BLOCKCHAIN_PAGE_LINK',
  },
  BlockchainPage: {
    NAME: 'BlockchainPage',
    TITLE: 'TITLE',
    KEYWORD:'KEYWORD',
    DESCRIPTION: 'DESCRIPTION',
    PAGE_HEADER_TITLE_1: 'PAGE_HEADER_TITLE_1',
    PAGE_HEADER_TITLE_2: 'PAGE_HEADER_TITLE_2',
    PAGE_HEADER_DESCRIPTION: 'PAGE_HEADER_DESCRIPTION',
    PAGE_HEADER_BUTTON: 'PAGE_HEADER_BUTTON',
    CONTAINER_TITLE: 'CONTAINER_TITLE',
    CONTAINER_TEXT_0: 'CONTAINER_TEXT_0',
    CONTAINER_TEXT_1: 'CONTAINER_TEXT_1',
    CONTAINER_TEXT_2: 'CONTAINER_TEXT_2',
    CONTAINER_TEXT_3: 'CONTAINER_TEXT_3',
    CONTAINER_DESCRIPTION_0: 'CONTAINER_DESCRIPTION_0',
    CONTAINER_DESCRIPTION_1: 'CONTAINER_DESCRIPTION_1',
    CONTAINER_DESCRIPTION_2: 'CONTAINER_DESCRIPTION_2',
    CONTAINER_DESCRIPTION_3: 'CONTAINER_DESCRIPTION_3',
    CREATIVE_TEAM_TITLE: 'CREATIVE_TEAM_TITLE',
    CREATIVE_TEAM_BUTTON: 'CREATIVE_TEAM_BUTTON',
    OTHER_VERTICAL_TITLE: 'OTHER_VERTICAL_TITLE',
    FINTECH_PAGE_LABEL: 'FINTECH_PAGE_LABEL',
    HEALTHCARE_PAGE_LABEL: 'HEALTHCARE_PAGE_LABEL',
    UXUI_PAGE_LABEL: 'UXUI_PAGE_LABEL',
    BLOCKCHAIN_PAGE_LABEL: 'BLOCKCHAIN_PAGE_LABEL',
    FINTECH_PAGE_LINK: 'FINTECH_PAGE_LINK',
    HEALTHCARE_PAGE_LINK: 'HEALTHCARE_PAGE_LINK',
    UXUI_PAGE_LINK: 'UXUI_PAGE_LINK',
    BLOCKCHAIN_PAGE_LINK: 'BLOCKCHAIN_PAGE_LINK',
  },
  UxUiPage: {
    NAME: 'UxUiPage',
    TITLE: 'TITLE',
    KEYWORD:'KEYWORD',
    DESCRIPTION: 'DESCRIPTION',
    PAGE_HEADER_TITLE_0: 'PAGE_HEADER_TITLE_0',
    PAGE_HEADER_TITLE_1: 'PAGE_HEADER_TITLE_1',
    PAGE_HEADER_TITLE_2: 'PAGE_HEADER_TITLE_2',
    PAGE_HEADER_DESCRIPTION: 'PAGE_HEADER_DESCRIPTION',
    PAGE_HEADER_BUTTON: 'PAGE_HEADER_BUTTON',
    CONTAINER_TITLE: 'CONTAINER_TITLE',
    CONTAINER_TEXT_0: 'CONTAINER_TEXT_0',
    CONTAINER_TEXT_1: 'CONTAINER_TEXT_1',
    CONTAINER_TEXT_2: 'CONTAINER_TEXT_2',
    CONTAINER_TEXT_3: 'CONTAINER_TEXT_3',
    CONTAINER_TEXT_4: 'CONTAINER_TEXT_4',
    CONTAINER_TEXT_5: 'CONTAINER_TEXT_5',
    CONTAINER_DESCRIPTION_0: 'CONTAINER_DESCRIPTION_0',
    CONTAINER_DESCRIPTION_1: 'CONTAINER_DESCRIPTION_1',
    CONTAINER_DESCRIPTION_2: 'CONTAINER_DESCRIPTION_2',
    CONTAINER_DESCRIPTION_3: 'CONTAINER_DESCRIPTION_3',
    CONTAINER_DESCRIPTION_4: 'CONTAINER_DESCRIPTION_4',
    CONTAINER_DESCRIPTION_5: 'CONTAINER_DESCRIPTION_5',
    CREATIVE_TEAM_TITLE: 'CREATIVE_TEAM_TITLE',
    CREATIVE_TEAM_BUTTON: 'CREATIVE_TEAM_BUTTON',
    OTHER_VERTICAL_TITLE: 'OTHER_VERTICAL_TITLE',
    FINTECH_PAGE_LABEL: 'FINTECH_PAGE_LABEL',
    HEALTHCARE_PAGE_LABEL: 'HEALTHCARE_PAGE_LABEL',
    UXUI_PAGE_LABEL: 'UXUI_PAGE_LABEL',
    BLOCKCHAIN_PAGE_LABEL: 'BLOCKCHAIN_PAGE_LABEL',
    FINTECH_PAGE_LINK: 'FINTECH_PAGE_LINK',
    HEALTHCARE_PAGE_LINK: 'HEALTHCARE_PAGE_LINK',
    UXUI_PAGE_LINK: 'UXUI_PAGE_LINK',
    BLOCKCHAIN_PAGE_LINK: 'BLOCKCHAIN_PAGE_LINK',
  },
};
