/** Request object for creation of company/agent/group/source profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included. */
export interface Company {
    /** Unique identifiers of Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as ID. */
    companyIdList?: ProfileIdList;
    /** External Reference information for Profile. */
    externalReferences?: ExternalReferencesType;
    /** Provides detailed information of a company profile. */
    companyDetails?: CompanyProfileType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ProfileIdList = UniqueIDType[];
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface UniqueIDType {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 40
     */
    type?: string;
}
/**
 * This type contains unique information of external reference.
 * @maxItems 4000
 */
export type ExternalReferencesType = ExternalReferenceType[];
/** This type contains unique information of external reference. */
export interface ExternalReferenceType {
    /**
     * Unique ID of external reference.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * ID context for external reference.
     * @minLength 0
     * @maxLength 80
     */
    idContext?: string;
}
/** Type provides the detailed information about the profile and its children. */
export interface CompanyProfileType {
    /** Detailed company information for this profile. */
    company?: CompanyType;
    /** The profile image. */
    profileImage?: ImageSetType;
    /** List of customer addresses. */
    addresses?: {
        /**
         * Collection of Detailed information on an address for the customer.
         * @maxItems 4000
         */
        addressInfo?: AddressInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /**
     * Business/Market Segment associated to the profile.
     * @maxItems 4000
     */
    businessSegments?: string[];
    /**
     * Territory associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    territory?: string;
    /**
     * Trace Code associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    traceCode?: string;
    /**
     * Owner Code associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    ownerCode?: string;
    /**
     * Influence Code associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    influenceCode?: string;
    /** List of Telephone Number Information */
    telephones?: {
        /**
         * Collection of Detailed information on telephone/fax for the customer.
         * @maxItems 4000
         */
        telephoneInfo?: TelephoneInfoType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of email address for the customer. */
    emails?: {
        /**
         * Collection of Detailed information on an eMail address for the customer.
         * @maxItems 4000
         */
        emailInfo?: EmailInfoType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of Information on a URL for the customer. */
    uRLs?: {
        /**
         * Collection of Detailed information on web url/address for the customer.
         * @maxItems 4000
         */
        uRLInfo?: URLInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of Notes for the customer. */
    comments?: {
        /**
         * Collection of Detailed information on comments for the customer.
         * @maxItems 4000
         */
        commentInfo?: CommentInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of loyalty program(s) the profile is subscribed to. */
    profileMemberships?: {
        /**
         * Collection of Detailed information on memberships for the customer.
         * @maxItems 4000
         */
        profileMembership?: ProfileMembershipType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of customer preferences. */
    preferenceCollection?: {
        /**
         * Collection of Detailed information on preferences of the customer.
         * @maxItems 4000
         */
        preferenceType?: PreferenceTypeType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of customer keywords. */
    keywords?: {
        /**
         * Collection of keywords attached to the profile.
         * @maxItems 4000
         */
        keyword?: KeywordType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of profile negotiated rates. */
    negotiatedRates?: {
        /**
         * Collection of Detailed information on profile negotiated rates.
         * @maxItems 4000
         */
        negotiatedRate?: NegotiatedType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of channel negotiated rates that this profile has been assigned to. */
    gdsNegotiatedRates?: {
        /**
         * Collection of Detailed information on channel negotiated rates for the profile.
         * @maxItems 4000
         */
        gdsNegotiatedRate?: GdsNegotiatedType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Indicators of additional information attached to the profile */
    profileIndicators?: IndicatorsType;
    /** Contains a collection of profiles that have a relationship with this profile. */
    relationships?: {
        /**
         * A collection of the profiles that have a relationship with this profile.
         * @maxItems 4000
         */
        relationship?: RelationshipInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Information on last stay of the profile. */
    lastStayInfo?: LastStayInfoType;
    /** Detailed information on access type associated with the profile. */
    profileAccessType?: ProfileAccessType;
    /** Detailed information on restrictions associated with the profile. */
    profileRestrictions?: ProfileRestrictions;
    /** Contains collection of mailing action list associated with the profile */
    mailingActions?: MailingActionsType;
    /** Contains privacy related information associated with the profile */
    privacyInfo?: PrivacyInfoType;
    /** Contains cashiering related details for the profile */
    cashiering?: ProfileCashieringType;
    /**
     * Contains commission related details for the profile.
     * @maxItems 4000
     */
    commissionInfoList?: ProfileCommissionType[];
    /** Collections of user defined fields. */
    userDefinedFields?: UserDefinedFieldsType;
    /** List of Web User Accounts of the profile. */
    webUserAccounts?: WebUserAccountsType;
    /** Profile information about tax. */
    taxInfo?: ProfileTaxInfoType;
    /** Sales information of the profiles. */
    salesInfo?: SalesInfoType;
    /** E-Certificate associated with the profile. */
    eCertificates?: ECertificatesType;
    /** List of profile subscriptions. */
    subscriptions?: ProfileSubscriptionListType;
    /**
     * Localization Guest Type associated to the profile.
     * @minLength 0
     * @maxLength 20
     */
    localizationGuestType?: string;
    /**
     * Eligible for Fiscal Folio/Payload generation.
     * @minLength 0
     * @maxLength 20
     */
    eligibleForFiscalFolio?: string;
    /** Type of profile such as Agent, Company, Group and Source. */
    profileType?: CompanyProfileTypeType;
    /** Status of the profile. Active/Inactive */
    statusCode?: ProfileStatusType;
    /**
     * Hotel which this profile is registered with. This attribute is not used for configuration.
     * @minLength 0
     * @maxLength 20
     */
    registeredProperty?: string;
    /**
     * Hotel which this profile is to be registered. This attribute is only used during creation of profile.
     * @minLength 0
     * @maxLength 20
     */
    requestForHotel?: string;
    /**
     * What level this profile is protected.
     * @minLength 0
     * @maxLength 40
     */
    protectedBy?: string;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
    /** Mark this profile as recently accessed. */
    markAsRecentlyAccessed?: boolean;
    /** "true" setting marks the profile to be kept from being purged, once the profile is marked inactive. */
    markForHistory?: boolean;
    /** Populates true if the profile has commission configured false otherwise. */
    hasCommission?: boolean;
    /** Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. */
    inheritedNegRates?: boolean;
}
export interface CompanyType {
    /**
     * Name of the company.
     * @minLength 0
     * @maxLength 40
     */
    companyName?: string;
    /**
     * Second Name of the company.
     * @minLength 0
     * @maxLength 40
     */
    companyName2?: string;
    /**
     * Third Name of the company.
     * @minLength 0
     * @maxLength 40
     */
    companyName3?: string;
    /**
     * Alternate Name of the Company. Mainly, it's the name of the company written in the Alternate Language.
     * @minLength 0
     * @maxLength 40
     */
    alternateName?: string;
    /**
     * Alternate Language of the company.
     * @minLength 0
     * @maxLength 20
     */
    alternateLanguage?: string;
    /**
     * A jurisdiction(Territory) in which a company is authorized to do business.
     * @minLength 0
     * @maxLength 40
     */
    businessLocale?: string;
    /** IATA Information of the profile. */
    iATAInfo?: IATAInfoType;
    /**
     * Business Title.
     * @minLength 0
     * @maxLength 80
     */
    businessTitle?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @minLength 0
     * @maxLength 10
     */
    currencySymbol?: string;
    /** Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85). */
    decimalPlaces?: number;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /**
     * Nationality code identification
     * @minLength 0
     * @maxLength 20
     */
    nationality?: string;
    /**
     * Nationality code description
     * @minLength 0
     * @maxLength 80
     */
    nationalityDescription?: string;
    /**
     * Commission code of the company.
     * @minLength 0
     * @maxLength 20
     */
    commissionCode?: string;
    /**
     * Credit Rating of the company.
     * @minLength 0
     * @maxLength 20
     */
    creditRating?: string;
    /**
     * The type of corporate ID
     * @minLength 0
     * @maxLength 20
     */
    corporateIdType?: string;
    /**
     * VIP status of the company.
     * @minLength 0
     * @maxLength 20
     */
    vipStatus?: string;
    /**
     * Description of the VIP status.
     * @minLength 0
     * @maxLength 2000
     */
    vipDescription?: string;
    /** This element tells if profile is blacklisted or not. */
    blacklist?: boolean;
}
/** IATA Information of the profile. */
export interface IATAInfoType {
    /**
     * IATA Company Detail.
     * @minLength 0
     * @maxLength 20
     */
    iATACompany?: string;
    /**
     * IATA Consortia.
     * @minLength 0
     * @maxLength 40
     */
    iATAConsortia?: string;
    /** IATA Validation Result. */
    iATAValidationResult?: boolean;
}
/** Represents on image set record. */
export interface ImageSetType {
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /**
     * The image set name.
     * @minLength 0
     * @maxLength 800
     */
    imageSet?: string;
    /** The image set sequence ID. */
    sequenceId?: number;
    /** The image set enumerated style. */
    imageStyle?: ImageStyleType;
    /**
     * The image set type.
     * @minLength 0
     * @maxLength 80
     */
    imageType?: string;
    /**
     * The image set hotel code.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * The image set chain code.
     * @minLength 0
     * @maxLength 20
     */
    chainCode?: string;
    /**
     * The image set URL.
     * @minLength 0
     * @maxLength 2000
     */
    imageURL?: string;
    /**
     * The image set description.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** The image set order. */
    imageOrder?: number;
    /**
     * The image set website.
     * @minLength 0
     * @maxLength 2000
     */
    website?: string;
}
/** An enumeration of image styles. */
export declare enum ImageStyleType {
    Full = "Full",
    Thumbnail = "Thumbnail",
    Icon = "Icon",
    Square = "Square",
    Banner = "Banner",
    Button = "Button",
    Lowres = "Lowres",
    Highres = "Highres"
}
/** Provides address information. */
export interface AddressInfoType {
    /** Address details for the profile. */
    address?: AddressType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 40
     */
    type?: string;
}
/** Provides address information. */
export interface AddressType {
    /** Indicator to define if the Address is validated by the Address Validation System. */
    isValidated?: boolean;
    /**
     * When the address is unformatted (FormattedInd="false") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence.
     * @maxItems 4
     */
    addressLine?: string[];
    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     * @minLength 0
     * @maxLength 40
     */
    cityName?: string;
    /**
     * Post Office Code number.
     * @minLength 0
     * @maxLength 15
     */
    postalCode?: string;
    /**
     * Post Office City Extension Code number. City Extension mainly used for UK addresses.
     * @minLength 0
     * @maxLength 20
     */
    cityExtension?: string;
    /**
     * County or District Name (e.g., Fairfax). This is read only.
     * @minLength 0
     * @maxLength 20
     */
    county?: string;
    /**
     * State or Province name (e.g., Texas).
     * @minLength 0
     * @maxLength 20
     */
    state?: string;
    /** Country name (e.g., Ireland). */
    country?: CountryNameType;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /**
     * Defines the type of address (e.g. home, business, other).
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * Describes the type code
     * @maxLength 2000
     */
    typeDescription?: string;
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address. */
    updateReservations?: boolean;
    /**
     * The postal barcode for the address.
     * @minLength 0
     * @maxLength 100
     */
    barCode?: string;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
}
/** Code for a country or a nationality. */
export interface CountryNameType {
    /**
     * Used for Character Strings, length 0 to 200.
     * @minLength 0
     * @maxLength 200
     */
    value?: string;
    /**
     * Code for a country or a nationality.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
}
/** Information on a telephone number for the customer. */
export interface TelephoneInfoType {
    /** Phone details for the profile. */
    telephone?: TelephoneType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 40
     */
    type?: string;
}
/** Information on a telephone number for the customer. */
export interface TelephoneType {
    /**
     * Indicates type of technology associated with this telephone number, such as Voice, Data, Fax, Pager, Mobile, TTY, etc.
     * @minLength 0
     * @maxLength 20
     */
    phoneTechType?: string;
    /**
     * Describes the type of telephone number, in the context of its general use (e.g. Home, Business, Emergency Contact, Travel Arranger, Day, Evening).
     * @minLength 0
     * @maxLength 20
     */
    phoneUseType?: string;
    /**
     * Description of the PhoneUseType code
     * @minLength 0
     * @maxLength 2000
     */
    phoneUseTypeDescription?: string;
    /**
     * Telephone number assigned to a single location.
     * @minLength 0
     * @maxLength 40
     */
    phoneNumber?: string;
    /**
     * Extension to reach a specific party at the phone number.
     * @minLength 0
     * @maxLength 20
     */
    extension?: string;
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
}
/** Information on an email for the customer. */
export interface EmailInfoType {
    /** eMail deatils for the profile. */
    email?: EmailType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 40
     */
    type?: string;
}
/** Information on an email for the customer. */
export interface EmailType {
    /**
     * Defines the e-mail address.
     * @minLength 0
     * @maxLength 2000
     */
    emailAddress?: string;
    /**
     * Defines the purpose of the e-mail address (e.g. personal, business, listserve).
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * Describes the Type code
     * @minLength 0
     * @maxLength 2000
     */
    typeDescription?: string;
    /** Supported Email format. */
    emailFormat?: 'Html' | 'Text';
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
}
/** Web site address. */
export interface URLInfoType {
    /** Provides URL information. */
    url?: URLType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 40
     */
    type?: string;
}
/** Web site address, in IETF(The Internet Engineering Task Force) specified format. */
export interface URLType {
    /** Property Value */
    value?: string;
    /**
     * Defines the purpose of the URL address, such as personal, business, public, etc.
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * Describes the Type code
     * @minLength 0
     * @maxLength 2000
     */
    typeDescription?: string;
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
}
/** Comment related to the profile/reservation. */
export interface CommentInfoType {
    /** Comment details for the comment. It will be empty in case of delete comment. */
    comment?: CommentType;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 40
     */
    type?: string;
}
/** An indication of a new paragraph for a sub-section of a formatted text message. */
export interface CommentType {
    /** Formatted text content. */
    text?: FormattedTextTextType;
    /**
     * Specifies Comment's Title.
     * @minLength 0
     * @maxLength 4000
     */
    commentTitle?: string;
    /**
     * Notification Location associated with the Note.
     * @minLength 0
     * @maxLength 20
     */
    notificationLocation?: string;
    /**
     * Specifies type of the comment.
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * Comment type Description.
     * @minLength 0
     * @maxLength 200
     */
    typeDescription?: string;
    /** When true, the comment may not be shown to the consumer. When false, the comment may be shown to the consumer. */
    internal?: boolean;
    /** When true, the comment may be confidential. */
    confidential?: boolean;
    /** When true, the note internal could be modified. */
    overrideInternal?: boolean;
    /** When true, the note title will be populated from the note type description and couldn't be modified. */
    protectDescription?: boolean;
    /**
     * If specified comment belongs to the Hotel, otherwise it is a global comment.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Specifies type of action described in the comments.
     * @minLength 0
     * @maxLength 20
     */
    actionType?: string;
    /**
     * Indicates at which date an action described in the comment must be taken.
     * @format date
     * @maxLength 8
     */
    actionDate?: string;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
}
/** Provides text and indicates whether it is formatted or not. */
export interface FormattedTextTextType {
    /** Property Value */
    value?: string;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
}
/** Detailed information of the memberships. */
export interface ProfileMembershipType {
    /** Additional comments regarding to the membership. */
    comment?: ParagraphType;
    /**
     * Card Number of the membership.
     * @maxLength 2000
     */
    newMembershipNumber?: string;
    /**
     * Name to be displayed on the membership card.
     * @maxLength 2000
     */
    nameOnCard?: string;
    /**
     * Description of the membership program.
     * @maxLength 2000
     */
    programDescription?: string;
    /**
     * Indicates the membership level.
     * @maxLength 2000
     */
    membershipLevel?: string;
    /**
     * Indicates the membership level description.
     * @minLength 0
     * @maxLength 200
     */
    membershipLevelDescription?: string;
    /**
     * Indicates the membership class.
     * @maxLength 2000
     */
    membershipClass?: string;
    /** Earning preference to the membership. */
    earningPreference?: MembershipEarningPreferenceType;
    /** Indicates whether membership is active or inactive. */
    inactive?: boolean;
    /** benefits for the membership. */
    benefits?: BenefitsType;
    /** Defines the degree of participation for this membership in the tier management portion of the program. */
    tierAdministration?: TierAdministrationType;
    /** Defines how downgrading will be handled for this membership. */
    downgrade?: DowngradeType;
    /** The status of issuing new membership card to the member. */
    reIssueNewCard?: CardReIssueType;
    /** True if you want to exclude the member from the Membership Fulfillment extract,the member's actions will not be included in the fulfillment extract until this value set to false. */
    excludeFromBatch?: boolean;
    /**
     * Indicates Upgrade information which includes member's next tier level, requirements for the next upgrade.
     * @minLength 0
     * @maxLength 32000
     */
    upgradeDescription?: string;
    /**
     * Indicates information regarding the member's possible downgrades.
     * @minLength 0
     * @maxLength 32000
     */
    downgradeDescription?: string;
    /**
     * Value Rating Type Description for this membership.
     * @maxLength 2000
     */
    rating?: string;
    /**
     * Indicates how the guest enrolled in the program.
     * @minLength 0
     * @maxLength 20
     */
    membershipEnrollmentCode?: string;
    /**
     * Indicates where the guest is in the membership enrollment process.
     * @minLength 0
     * @maxLength 20
     */
    memberStatus?: string;
    /** Profile MemberShip Points. */
    currentPoints?: number;
    /**
     * Label used to refer to points for this membership type
     * @minLength 0
     * @maxLength 20
     */
    pointsLabel?: string;
    /**
     * Source from where the enrollment is done.
     * @minLength 0
     * @maxLength 20
     */
    enrollmentSource?: string;
    /**
     * Resort/CRO where enrollment is done.
     * @minLength 0
     * @maxLength 20
     */
    enrollmentResort?: string;
    /** Preferred Card. */
    preferredCard?: boolean;
    /**
     * Card Number of the membership.
     * @maxLength 2000
     */
    membershipId?: string;
    /**
     * Type of membership.
     * @maxLength 2000
     */
    membershipType?: string;
    /**
     * Indicator if Membership is a Primary Membership.
     * @minLength 0
     * @maxLength 1
     */
    primaryMembershipYn?: string;
    /** Boolean indicator set to True implies membership is a Primary Membership. */
    primaryMembership?: boolean;
    /** Membership ID Number. */
    membershipIdNo?: number;
    /** Ranking assigned to the Player Profile by the Gaming system. */
    playerRanking?: number;
    /** Indicates how the award points for this membership type will be managed. */
    centralSetup?: boolean;
    /**
     * Indicates when the member signed up for the loyalty program.
     * @format date
     * @maxLength 8
     */
    signupDate?: string;
    /**
     * Indicates the starting date.
     * @format date
     * @maxLength 8
     */
    effectiveDate?: string;
    /**
     * Indicates the ending date.
     * @format date
     * @maxLength 8
     */
    expireDate?: string;
    /** When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14). */
    expireDateExclusiveIndicator?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
}
/** An indication of a new paragraph for a sub-section of a formatted text message. */
export interface ParagraphType {
    /** Formatted text content. */
    text?: FormattedTextTextType;
    /**
     * A URL for this paragraph.
     * @maxLength 2000
     */
    url?: string;
}
/** The earning preference of a membership, it depends on the type of property. eg. when the property is a airline it should be Miles, other than Points. */
export declare enum MembershipEarningPreferenceType {
    Points = "Points",
    Miles = "Miles"
}
/**
 * Basic information about membership benefit.
 * @maxItems 4000
 */
export type BenefitsType = BenefitType[];
/** Basic information about membership benefit. */
export interface BenefitType {
    /**
     * Benefit code associated with a membership.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * Processing message for membership benefit.
     * @minLength 0
     * @maxLength 4000
     */
    message?: string;
    /** Indicates whether membership benefit is active or inactive. */
    inactive?: boolean;
}
/** Do not upgrade membership. The membership may be downgraded. */
export declare enum TierAdministrationType {
    Disabled = "Disabled",
    NoUpgrade = "NoUpgrade"
}
/** Do not downgrade membership when the next downgrade process runs. When the downgrade process runs, the membership will be automatically set to Grace. */
export declare enum DowngradeType {
    Grace = "Grace",
    Never = "Never",
    Period = "Period"
}
/** Request to re issue a new card. */
export declare enum CardReIssueType {
    Pending = "Pending",
    NotApplicable = "NotApplicable",
    Requested = "Requested"
}
/** Preference details for the profile. */
export interface PreferenceTypeType {
    /**
     * Collection of Preferences for the profile.
     * @maxItems 4000
     */
    preference?: PreferenceType[];
    /**
     * Preference group code.
     * @minLength 0
     * @maxLength 20
     */
    preferenceType?: string;
    /**
     * Preference group description.
     * @maxLength 2000
     */
    preferenceTypeDescription?: string;
    /**
     * Preference Sequence.
     * @maxLength 2000
     */
    sequence?: string;
    /** Maximum quantity of preferences allowed per preference group. */
    maxQuantity?: number;
    /** Available quantity of preferences (maximum quantity - Existing preferences)per preference group. */
    availableQuantity?: number;
    /** Maximum quantity of preferences used by any resort per preference group. */
    maxResortUsedQuantity?: number;
    /** Whether this preference is reservation preference or not. */
    reservationPreference?: boolean;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
}
/** Guest Preference details for the profile. */
export interface PreferenceType {
    /**
     * Preference value for display purposes.
     * @minLength 0
     * @maxLength 200
     */
    preferenceValue?: string;
    /**
     * Preference Description for display purposes.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
    /** Whether this preference is property specific or not. */
    global?: boolean;
    /**
     * Source of the preference.
     * @minLength 0
     * @maxLength 40
     */
    source?: string;
    /**
     * If specified preference belongs to the Hotels listed, otherwise it is a global preference.
     * @maxItems 4000
     */
    hotels?: string[];
    /**
     * @minLength 0
     * @maxLength 20
     */
    preferenceCode?: string;
    /** Specifies the count of preferences excluded for the attached reservation preference. */
    excludedPreferencesCount?: number;
}
export interface KeywordType {
    /** The keyword new value, in case keyword value is modified. */
    keywordDetail?: KeywordDetailType;
    /**
     * The type of keyword
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * The keyword value.
     * @minLength 0
     * @maxLength 80
     */
    keyword?: string;
}
export interface KeywordDetailType {
    /**
     * The new keyword value.
     * @minLength 0
     * @maxLength 80
     */
    newKeyword?: string;
}
/** This holds a list of NegotiatedInfoType. */
export interface NegotiatedType {
    /** @maxItems 4000 */
    negotiatedInfoList?: NegotiatedInfoType[];
    /**
     * Hotel code for the negotiated rate.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Rate plan code for the negotiated rate.
     * @minLength 0
     * @maxLength 20
     */
    rateCode?: string;
}
/** This provides information for a profile negotiated rate. */
export interface NegotiatedInfoType {
    /**
     * The master identifier for multiple offices/locations under the same company profile. This is optional
     * @minLength 0
     * @maxLength 80
     */
    corporateAgreementId?: string;
    /**
     * Informational purposes only in numeric format.
     * @minLength 0
     * @maxLength 20
     */
    comissionCode?: string;
    /** The sell order. */
    order?: number;
    /** Negotiated Rate is inactive or not */
    inactive?: boolean;
    /**
     * The starting value of the date range.
     * @format date
     * @maxLength 8
     */
    start?: string;
    /**
     * The ending value of the date range.
     * @format date
     * @maxLength 8
     */
    end?: string;
}
/** This holds a list of GdsNegotiatedInfoType. */
export interface GdsNegotiatedType {
    /**
     * List of channel negotiated rates for the profile.
     * @maxItems 4000
     */
    gdsNegotiatedInfoList?: GdsNegotiatedInfoType[];
    /**
     * Booking Channel Code.
     * @minLength 0
     * @maxLength 20
     */
    bookingChannelCode?: string;
    /**
     * Hotel Code.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Channel Room Type.
     * @minLength 0
     * @maxLength 20
     */
    channelRatePlanCode?: string;
}
/** This provides information for a channel negotiated rate. */
export interface GdsNegotiatedInfoType {
    /**
     * The GDS negotiated rate code.
     * @minLength 0
     * @maxLength 20
     */
    accessCode?: string;
    /** The sell order. */
    order?: number;
    /** The GDS Negotiated Rate is inactive or not */
    inactive?: boolean;
    /**
     * The starting value of the date range.
     * @format date
     * @maxLength 8
     */
    start?: string;
    /**
     * The ending value of the date range.
     * @format date
     * @maxLength 8
     */
    end?: string;
}
/**
 * Collection of lamp indicators.
 * @maxItems 4000
 */
export type IndicatorsType = IndicatorType[];
/** Lamp indicator Type. */
export interface IndicatorType {
    /**
     * Name of the indicator.
     * @minLength 0
     * @maxLength 80
     */
    indicatorName?: string;
    /** Indicates number of occurrences of the indicator. */
    count?: number;
}
/** Relationship Type contains information about the associations between and among individuals, companies, travel agents, groups, sources, and contact profiles. */
export interface RelationshipInfoType {
    /** Information about the changes in relationship for the profile */
    changeRelationship?: ChangeRelationsType;
    /** Refer to Relationship Profile type document. */
    relationshipProfile?: RelationshipProfileType;
    /** Refer to Master Profile type document. */
    masterAccountInfo?: MasterAccountInfoType;
    /**
     * Relationship identifier.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 20
     */
    relation?: string;
    /**
     * Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 200
     */
    relationDescription?: string;
    /**
     * Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
     * @minLength 0
     * @maxLength 20
     */
    targetRelation?: string;
    /**
     * Displays the description of the target relation(Target Profile).
     * @minLength 0
     * @maxLength 200
     */
    targetRelationDescription?: string;
}
/** Detailed information regarding the changes made to relationships for the profile. */
export interface ChangeRelationsType {
    /**
     * Relationship identifier.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 20
     */
    relation?: string;
    /**
     * Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 200
     */
    relationDescription?: string;
    /**
     * Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
     * @minLength 0
     * @maxLength 20
     */
    targetRelation?: string;
    /**
     * Displays the description of the target relation(Target Profile).
     * @minLength 0
     * @maxLength 200
     */
    targetRelationDescription?: string;
}
export interface RelationshipProfileType {
    /** Detailed information of the customer */
    customer?: CustomerType;
    /** Detailed information of the Company. */
    company?: CompanyType;
    /** Information on telephone details for the customer/company */
    telephone?: TelephoneInfoType;
    /** Information on address details for the customer/company */
    address?: AddressInfoType;
    /** Information on email address for the customer/company */
    email?: EmailInfoType;
    /** Information on web url/address for the customer/company */
    uRLs?: URLInfoType;
    /** Primary Owner of the profile */
    primaryOwner?: OwnerType;
    /** Original profile details for which the relationships was created */
    profileIdList?: UniqueIDListType;
    /** Updated/changed profile details for the relationships created */
    changeProfileIdList?: UniqueIDListType;
    /**
     * Indicates if this relationship is the primary relationship.
     * @minLength 0
     * @maxLength 20
     */
    primary?: string;
    /**
     * Relationship identifier.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /** Status of the profile. Active/Inactive */
    statusCode?: ProfileStatusType;
    /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
    profileType?: ProfileTypeType;
}
/** Contains basic data on the customer's identity, location, relationships, finances, memberships, etc. */
export interface CustomerType {
    /**
     * Detailed name information for the customer.
     * @maxItems 5
     */
    personName?: PersonNameType[];
    /** Provides information about the guest's anonymization status */
    anonymization?: AnonymizationType;
    /** Name of the (self-professed) country that is claimed for citizenship. */
    citizenCountry?: CountryNameType;
    /** List of identification of the customer. */
    identifications?: {
        /**
         * Collection of detailed information on the identification of the customer.
         * @maxItems 4000
         */
        identificationInfo?: IdentificationInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /**
     * Profession of a person.
     * @minLength 0
     * @maxLength 80
     */
    profession?: string;
    /** Immigration/visa information of a foreign person. */
    alienInfo?: AlienInfoType;
    /** Country of birth. */
    birthCountry?: CountryNameType;
    /**
     * Name Of the company the individual is associated with.
     * @minLength 0
     * @maxLength 80
     */
    legalCompany?: string;
    /** Company Information of the Profile. */
    companyInfo?: CompanyInfoType;
    /**
     * Business Title.
     * @minLength 0
     * @maxLength 80
     */
    businessTitle?: string;
    /** Identifies the gender. */
    gender?: 'Male' | 'Female' | 'Unknown';
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @format date
     * @maxLength 8
     */
    birthDate?: string;
    /**
     * Indicates the date of birth as masked.
     * @maxLength 2000
     */
    birthDateMasked?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @minLength 0
     * @maxLength 10
     */
    currencySymbol?: string;
    /** Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85). */
    decimalPlaces?: number;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /**
     * Nationality code identification
     * @minLength 0
     * @maxLength 20
     */
    nationality?: string;
    /**
     * Nationality code description
     * @minLength 0
     * @maxLength 80
     */
    nationalityDescription?: string;
    /**
     * The supplier's ranking of the customer (e.g., VIP, numerical ranking).
     * @minLength 0
     * @maxLength 20
     */
    customerValue?: string;
    /**
     * Credit Rating of the customer.
     * @minLength 0
     * @maxLength 20
     */
    creditRating?: string;
    /**
     * VIP status of the customer.
     * @minLength 0
     * @maxLength 20
     */
    vipStatus?: string;
    /**
     * Description of the VIP status.
     * @minLength 0
     * @maxLength 2000
     */
    vipDescription?: string;
    /**
     * Place of birth.
     * @minLength 0
     * @maxLength 80
     */
    birthPlace?: string;
    /** This element tells profile is property exclusive or not. */
    privateProfile?: boolean;
    /** This element tells if profile is blacklisted or not. */
    blacklist?: boolean;
}
/** This provides name information for a person. */
export interface PersonNameType {
    /**
     * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
     * @minLength 0
     * @maxLength 40
     */
    namePrefix?: string;
    /**
     * Given name, first name or names.
     * @minLength 0
     * @maxLength 40
     */
    givenName?: string;
    /**
     * The middle name of the person name.
     * @minLength 0
     * @maxLength 40
     */
    middleName?: string;
    /**
     * Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name.
     * @minLength 0
     * @maxLength 40
     */
    surname?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.)
     * @minLength 0
     * @maxLength 40
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @minLength 0
     * @maxLength 80
     */
    nameTitle?: string;
    /** Title Suffix. Must be populated if ADVANCED_TITLE is on. */
    nameTitleSuffix?: number;
    /**
     * Envelope Greeting of the profile
     * @maxLength 2000
     */
    envelopeGreeting?: string;
    /**
     * Salutation of the profile
     * @maxLength 2000
     */
    salutation?: string;
    /** Type of name of the individual, such as former, nickname, alternate or alias name. */
    nameType?: PersonNameTypeType;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
}
/** Person's name in an external system. */
export declare enum PersonNameTypeType {
    Primary = "Primary",
    Alternate = "Alternate",
    Incognito = "Incognito",
    External = "External",
    Phonetic = "Phonetic"
}
/** Provides information about guest's anonymization status. */
export interface AnonymizationType {
    /** Status of anonymization such as Requested or Anonymized. */
    anonymizationStatus?: AnonymizationStatusType;
    /**
     * Date and Time when the guest was anonymized.
     * @format date-time
     */
    anonymizationDate?: string;
}
/** Guest has been anonymized. */
export declare enum AnonymizationStatusType {
    Requested = "Requested",
    Anonymized = "Anonymized"
}
/** Information on the identification of the customer. */
export interface IdentificationInfoType {
    /** Detailed information on the identification of the customer. */
    identification?: IdentificationType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 40
     */
    type?: string;
}
/** Identification information of the customer. */
export interface IdentificationType {
    /**
     * Identification Type. Eg Passport, Driving License etc.
     * @minLength 0
     * @maxLength 40
     */
    idType?: string;
    /**
     * Identification Number.
     * @minLength 0
     * @maxLength 80
     */
    idNumber?: string;
    /**
     * Masked Identification Number.
     * @minLength 0
     * @maxLength 80
     */
    idNumberMasked?: string;
    /**
     * The country where Identification was issued.
     * @minLength 0
     * @maxLength 20
     */
    issuedCountry?: string;
    /**
     * Issued date of Identification.
     * @format date
     * @maxLength 8
     */
    issuedDate?: string;
    /**
     * The place where Identification was issued.
     * @minLength 0
     * @maxLength 80
     */
    issuedPlace?: string;
    /**
     * Expiration date of Identification.
     * @format date
     * @maxLength 8
     */
    expirationDate?: string;
    /**
     * Property where the identification belongs to.
     * @minLength 0
     * @maxLength 20
     */
    registeredProperty?: string;
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
}
/** immigration/visa information of a foreign person. */
export interface AlienInfoType {
    /**
     * Alien Registration Number.
     * @maxLength 2000
     */
    alienRegistrationNo?: string;
    /**
     * Immigration Status on an Alien.
     * @minLength 0
     * @maxLength 40
     */
    immigrationStatus?: string;
    /**
     * Visa Type of an Alien.
     * @minLength 0
     * @maxLength 40
     */
    visaValidityType?: string;
}
/** Company Information of the Profile. */
export interface CompanyInfoType {
    /**
     * Legal Company.
     * @minLength 0
     * @maxLength 20
     */
    legalCompany?: string;
    /**
     * Department of the Profile.
     * @minLength 0
     * @maxLength 20
     */
    department?: string;
    /**
     * Business Title or Position of the profile.
     * @minLength 0
     * @maxLength 40
     */
    position?: string;
}
/** Generic type for information about an owner. */
export interface OwnerType {
    /** Hotel to which the owner belongs to. */
    hotel?: CodeDescriptionType;
    /** Unique application user ID. */
    userId?: UniqueIDType;
    /**
     * Unique application user name of the owner.
     * @minLength 0
     * @maxLength 40
     */
    userName?: string;
    /**
     * Unique Code to identify the owner.
     * @minLength 0
     * @maxLength 20
     */
    ownerCode?: string;
    /** Unique owner profile information. */
    profileId?: ProfileId;
    /** Provides name information of the owner. */
    name?: PersonNameType;
    /** Department to which the owner belongs to. */
    department?: CodeDescriptionType;
    /** Email information of the owner. */
    email?: EmailInfoType;
    /** Information on the telephone number of the owner. */
    phone?: TelephoneInfoType;
    /** Relationship of the owner within the profile or block. */
    relationship?: CodeDescriptionType;
    /** When true, this is a primary owner. */
    primary?: boolean;
}
/** This contains a generic code and description information. */
export interface CodeDescriptionType {
    /**
     * Code.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * description.
     * @minLength 0
     * @maxLength 2000
     */
    description?: string;
}
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface ProfileId {
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @minLength 0
     * @maxLength 80
     */
    instance?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @minLength 0
     * @maxLength 80
     */
    idContext?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
}
/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type UniqueIDListType = UniqueIDType[];
export declare enum ProfileStatusType {
    Active = "Active",
    Inactive = "Inactive"
}
/** The types of Profile handled by the web service. */
export declare enum ProfileTypeType {
    Guest = "Guest",
    Agent = "Agent",
    Company = "Company",
    Group = "Group",
    Source = "Source",
    Employee = "Employee",
    Hotel = "Hotel",
    Vendor = "Vendor",
    Contact = "Contact",
    Purge = "Purge",
    BusinessHeader = "BusinessHeader",
    BillingAccount = "BillingAccount",
    Activity = "Activity",
    Potential = "Potential",
    Account = "Account"
}
export interface MasterAccountInfoType {
    /** Unique ID of the Master account. */
    masterAccountId?: UniqueIDType;
    /**
     * Name of the Master account.
     * @minLength 0
     * @maxLength 40
     */
    masterAccountName?: string;
}
/** Contains last stay related details for the profile */
export interface LastStayInfoType {
    /**
     * Used to hold last stay information for the profile.
     * @format date
     * @maxLength 8
     */
    lastVisit?: string;
    /**
     * Used to hold last room information for the profile.
     * @maxLength 2000
     */
    lastRoom?: string;
    /** Used to hold last rate information for the profile. */
    lastRate?: CurrencyAmountType;
    /** The total number of previous stay of the profile. */
    totalStay?: number;
}
/** A monetary value expressed with a currency code. */
export interface CurrencyAmountType {
    /** A monetary amount. */
    amount?: number;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @minLength 3
     * @maxLength 3
     */
    currencyCode?: string;
}
export interface ProfileAccessType {
    /**
     * Indicates the Chain code where the profile was created
     * @minLength 0
     * @maxLength 200
     */
    chainCode?: string;
    /**
     * Indicates the CRO code where the profile was created
     * @minLength 0
     * @maxLength 200
     */
    croCode?: string;
    /**
     * Indicates the Hotel code where the profile was created
     * @minLength 0
     * @maxLength 200
     */
    hotelId?: string;
    /** Indicates whether the profile is shared at the following levels : global/property/CRO */
    sharedLevel?: ProfileSharedLevelType;
}
/** Simple types for Shared level. */
export declare enum ProfileSharedLevelType {
    Global = "Global",
    Property = "Property",
    Cro = "Cro"
}
export interface ProfileRestrictions {
    /**
     * Restriction reason associated with the current profile.
     * @minLength 0
     * @maxLength 20
     */
    reason?: string;
    /**
     * Description of restriction reason.
     * @minLength 0
     * @maxLength 2000
     */
    reasonDescription?: string;
    /** True indicates there are restrictions associated with the current profile. */
    restricted?: boolean;
}
/** Defines mailing action list for the profile. */
export interface MailingActionsType {
    /**
     * Defines mailing action code and description.
     * @maxItems 4000
     */
    mailingAction?: CodeDescriptionType[];
    /** When true indicates that profile has subscribed to the mailing list. */
    active?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
}
/** Defines Privacy related information for the profile. */
export interface PrivacyInfoType {
    /** Indicates if the profile participates in market research. */
    marketResearchParticipation?: boolean;
    /**
     * Indicate the last privacy prompt date of the guest.
     * @format date
     * @maxLength 8
     */
    lastPrivacyPromptDate?: string;
    /** Indicates if the profile is ok getting info from third parties. */
    infoFromThirdParty?: boolean;
    /** Indicates if the profile wishes to be automatically enrolled in the property's loyalty program. */
    autoEnrollLoyaltyProgram?: boolean;
    /** Indicates if the profile wishes to allow phone calls. */
    allowPhone?: boolean;
    /** Indicates if the profile wishes to allow SMS. */
    allowSMS?: boolean;
    /** Indicates if the profile wishes to allow Email. */
    allowEmail?: boolean;
    /** Indicates if the profile wishes to opt in for Mailing List. */
    optInMailingList?: boolean;
    /** Indicates if the profile wishes to opt in for Market Research. */
    optInMarketResearch?: boolean;
    /** Indicates if the profile wishes to opt in for Third Party. */
    optInThirdParty?: boolean;
    /** Indicates if the profile wishes to opt in for Auto Enrolment Member. */
    optInAutoEnrollmentMember?: boolean;
    /** Indicates if the profile wishes to opt in for Phone. */
    optInPhone?: boolean;
    /** Indicates if the profile wishes to opt in for SMS. */
    optInSms?: boolean;
    /** Indicates if the profile wishes to opt in for Email. */
    optInEmail?: boolean;
}
/** Contains cashiering related details for the profile */
export interface ProfileCashieringType {
    /**
     * Contains the direct billing related information for the profile.
     * @maxItems 4000
     */
    directBillingList?: DirectBillingType[];
    /**
     * Contains the auto folio settlement type for the profile.
     * @minLength 0
     * @maxLength 40
     */
    autoFolioSettlementType?: string;
    /** Ability to define on the account, the number of days after which the invoice should be paid. */
    paymentDueDays?: number;
    /** Tax1 Percentage for Collecting Agent. */
    taxPercent1?: number;
    /** Tax2 Percentage for Collecting Agent. */
    taxPercent2?: number;
    /** Tax3 Percentage for Collecting Agent. */
    taxPercent3?: number;
    /** Tax4 Percentage for Collecting Agent. */
    taxPercent4?: number;
    /** Tax5 Percentage for Collecting Agent. */
    taxPercent5?: number;
    /**
     * Account Receivables Central Number.
     * @minLength 0
     * @maxLength 20
     */
    arNoCentral?: string;
    /**
     * Reference Currency.
     * @minLength 0
     * @maxLength 20
     */
    referenceCurrency?: string;
    /**
     * VAT Offset Flag.
     * @minLength 0
     * @maxLength 1
     */
    vATOffsetYN?: string;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @minLength 0
     * @maxLength 10
     */
    currencySymbol?: string;
    /** Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85). */
    decimalPlaces?: number;
}
/** This is the preconfigured routing instruction type. */
export interface DirectBillingType {
    /**
     * Hotel Code for which the details of direct billing is provided for a profile.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * Hotel Code for which the details of direct billing is provided for a profile.
     * @minLength 0
     * @maxLength 20
     */
    aRNumber?: string;
}
/** This is the preconfigured routing instruction type. */
export interface ProfileCommissionType {
    /**
     * Hotel Code for the commission being used for a profile.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * commission Code for a profile.
     * @minLength 0
     * @maxLength 20
     */
    commissionCode?: string;
    /**
     * Bank account used for the commission for a profile.
     * @minLength 0
     * @maxLength 20
     */
    bankAccount?: string;
    /** Type of payment associated with the bank account. */
    paymentMethod?: CommissionPaymentMethods;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @minLength 0
     * @maxLength 20
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @minLength 0
     * @maxLength 10
     */
    currencySymbol?: string;
    /** Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85). */
    decimalPlaces?: number;
}
/** Check */
export declare enum CommissionPaymentMethods {
    Cent = "Cent",
    Eft = "Eft",
    Chk = "Chk"
}
/** A common type used to hold user defined fields(UDFs). This type should be used to handle UDFs on RReservation, Profiles, etc. */
export interface UserDefinedFieldsType {
    /** Collection of user defined fields of Character/String Type. */
    characterUDFs?: CharacterUDFsType;
    /** Collection of user defined fields of Numeric Type. */
    numericUDFs?: NumericUDFsType;
    /** Collection of user defined fields of Date Type. */
    dateUDFs?: DateUDFsType;
}
/**
 * Used to hold collection of user defined fields of Character/String Type.
 * @maxItems 4000
 */
export type CharacterUDFsType = CharacterUDFType[];
/** Used to hold user defined field of Character/String Type. */
export interface CharacterUDFType {
    /**
     * Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @minLength 0
     * @maxLength 20
     */
    name?: string;
    /**
     * Value of user defined field.
     * @minLength 0
     * @maxLength 2000
     */
    value?: string;
    /**
     * Label of user defined field used by vendors or customers.
     * @minLength 0
     * @maxLength 2000
     */
    alternateName?: string;
}
/**
 * Used to hold collection of user defined fields of Numeric Type.
 * @maxItems 4000
 */
export type NumericUDFsType = NumericUDFType[];
/** Used to hold user defined field of Numeric Type. It is highly recommended to use UDFN01, UDFN02,...UDFN40 (Total 40) as Numeric UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. */
export interface NumericUDFType {
    /**
     * Name of user defined field.
     * @minLength 0
     * @maxLength 20
     */
    name?: string;
    /** Value of user defined field. */
    value?: number;
    /**
     * Label of user defined field used by vendors or customers.
     * @minLength 0
     * @maxLength 2000
     */
    alternateName?: string;
}
/**
 * Used to hold collection of user defined fields of Date Type.
 * @maxItems 4000
 */
export type DateUDFsType = DateUDFType[];
/** Used to hold user defined field of Date Type. */
export interface DateUDFType {
    /**
     * Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @minLength 0
     * @maxLength 20
     */
    name?: string;
    /**
     * Value of user defined field.
     * @format date
     * @maxLength 8
     */
    value?: string;
    /**
     * Label of user defined field used by vendors or customers.
     * @minLength 0
     * @maxLength 2000
     */
    alternateName?: string;
}
/**
 * Web User Accounts List.
 * @maxItems 4000
 */
export type WebUserAccountsType = WebUserAccountType[];
/** Web User Account of the guest. */
export interface WebUserAccountType {
    /** Security Question and its Code associated with the account to verify the user. */
    securityQuestion?: CodeDescriptionType;
    /**
     * Answer to the Security Question.
     * @minLength 0
     * @maxLength 4000
     */
    securityAnswer?: string;
    /**
     * Comments.
     * @minLength 0
     * @maxLength 4000
     */
    comments?: string;
    /** Web User Account History. */
    history?: WebUserHistoryType;
    /**
     * New Login Name of the guest.
     * @minLength 0
     * @maxLength 80
     */
    newLoginName?: string;
    /**
     * Login Password.
     * @minLength 0
     * @maxLength 2000
     */
    newPassword?: string;
    /** A flag which determines if the password is auto generated. */
    autoGeneratePassword?: boolean;
    /**
     * Login Name of the guest.
     * @minLength 0
     * @maxLength 80
     */
    loginName?: string;
    /**
     * Domain code.
     * @minLength 0
     * @maxLength 20
     */
    domainCode?: string;
    /** Boolean flag that indicates whether the web account is locked or not. */
    locked?: boolean;
    /** Boolean flag that indicates whether the web account is inactive or not. */
    inactive?: boolean;
}
/** Creation date time, Creator Id, last modification date time and last Modifier Id. */
export interface WebUserHistoryType {
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
    /**
     * Last login date.
     * @format date
     * @maxLength 8
     */
    lastLogin?: string;
    /**
     * Last Password change date.
     * @format date
     * @maxLength 8
     */
    lastPasswordChange?: string;
    /**
     * Inactive date.
     * @format date
     * @maxLength 8
     */
    inactiveDate?: string;
}
/** Profile information related to tax. */
export interface ProfileTaxInfoType {
    /**
     * The tax id of this profile. Usually issued by a government agency. Used by 1099 printing.
     * @minLength 0
     * @maxLength 40
     */
    tax1No?: string;
    /**
     * Tax 2 id of this profile.
     * @minLength 0
     * @maxLength 40
     */
    tax2No?: string;
    /**
     * Tax Category to be changed.
     * @minLength 0
     * @maxLength 20
     */
    taxCategory?: string;
    /**
     * Tax Office to be changed.
     * @minLength 0
     * @maxLength 30
     */
    taxOffice?: string;
    /**
     * Tax type to be changed.
     * @minLength 0
     * @maxLength 20
     */
    taxType?: string;
    /**
     * Business ID. The maximum length of this element should not exceed 120 characters.
     * @minLength 0
     * @maxLength 128
     */
    businessId?: string;
    /**
     * Business Registration Code. The maximum length of this element should not exceed 120 characters.
     * @minLength 0
     * @maxLength 128
     */
    businessRegistration?: string;
}
/** Provides sales information about the profiles of type company, travel agent, source and contact. */
export interface SalesInfoType {
    /**
     * Defines the scope.
     * @minLength 0
     * @maxLength 2000
     */
    scope?: string;
    /**
     * Defines the scope city.
     * @minLength 0
     * @maxLength 2000
     */
    scopeCity?: string;
    /**
     * Defines the account type.
     * @minLength 0
     * @maxLength 20
     */
    accountType?: string;
    /**
     * Defines the account source.
     * @minLength 0
     * @maxLength 2000
     */
    accountSource?: string;
    /**
     * Defines the industry code.
     * @minLength 0
     * @maxLength 2000
     */
    industryCode?: string;
    /**
     * Defines the Business segments.
     * @minLength 0
     * @maxLength 2000
     */
    businessSegments?: string;
    /**
     * Defines the priority.
     * @minLength 0
     * @maxLength 4000
     */
    priority?: string;
    /**
     * Defines the rooms potential.
     * @minLength 0
     * @maxLength 4000
     */
    roomsPotential?: string;
    /**
     * Defines the action code.
     * @minLength 0
     * @maxLength 4000
     */
    actionCode?: string;
    /**
     * Defines the competition code.
     * @minLength 0
     * @maxLength 4000
     */
    competitionCode?: string;
    /**
     * Defines the influence for the contact profile.
     * @minLength 0
     * @maxLength 2000
     */
    influence?: string;
    /**
     * Defines the Preferred Room for profile.
     * @minLength 0
     * @maxLength 20
     */
    preferredRoom?: string;
    /**
     * Hotel Code used to filter the sales information.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/**
 * List of e-certificates for the profile.
 * @maxItems 4000
 */
export type ECertificatesType = ECertificateType[];
/** E-Certificates details. */
export interface ECertificateType {
    /** System generated unique certificate id. */
    certificateId?: number;
    /**
     * System generated unique voucher number.
     * @minLength 0
     * @maxLength 40
     */
    voucherNo?: string;
    /**
     * Printed certificate no. This has to be unique.
     * @minLength 0
     * @maxLength 40
     */
    certificateNo?: string;
    /** E-Certificates details. */
    eCertificateInfo?: ECertificateInfoType;
    /**
     * Date of expiry.
     * @format date
     * @maxLength 8
     */
    expiryDate?: string;
    /**
     * New Date of expiry to extend e-certificate.
     * @format date
     * @maxLength 8
     */
    newExpiryDate?: string;
    /** NameId. */
    profileId?: ProfileId;
    /** E-Certificates details. */
    consumptionDetail?: ECertificateConsumptionType;
    /** Status of the certificate. */
    status?: ECertificateStatusType;
    /** Print status of the certificate. */
    printed?: boolean;
    /**
     * Date the record was marked as inactive.
     * @format date
     * @maxLength 8
     */
    inactiveDate?: string;
    /** AwardID. */
    awardId?: AwardId;
    /**
     * External reference from which the record is created.
     * @minLength 0
     * @maxLength 20
     */
    databaseId?: string;
    /** Source of e-certificate. */
    source?: ECertificateIssueSourceType;
    /** Process action issued the certificate. valid values are assigned (a),opt in (o) and purchased (p). */
    issueType?: ECertificateIssueType;
    /**
     * Date when certificate was issued.
     * @format date
     * @maxLength 8
     */
    issueDate?: string;
    /** Award points if any in case of certificate use membership award. */
    awardPoints?: number;
    /** E-Certificates details. */
    generationDetail?: ECertificateGenerationType;
    /**
     * In case of in lieu of certificate this will contain the original voucher no.
     * @minLength 0
     * @maxLength 40
     */
    originalVoucherNo?: string;
    /**
     * In case of in lieu of certificate this will contain the original certificate no.
     * @minLength 0
     * @maxLength 40
     */
    originalCertificateNo?: string;
    /** Seq of the in lieu of certificate. 1..n. original certificate will be treated as null = 0. */
    inLieuSequence?: number;
    /**
     * Date on which the cancellation was requested.
     * @format date
     * @maxLength 8
     */
    cancelRequestDate?: string;
    /** Number of times e-certificate is already extended. */
    extensionCount?: number;
}
/** E-Certificates details. */
export interface ECertificateInfoType {
    /**
     * User defined certificate code.
     * @minLength 0
     * @maxLength 20
     */
    certificateType?: string;
    /**
     * Membership type to which the certificate is linked to.
     * @minLength 0
     * @maxLength 20
     */
    membershipType?: string;
    /**
     * Award type to which the certificate is linked to.
     * @minLength 0
     * @maxLength 20
     */
    awardCode?: string;
    /**
     * Promotion code to which certificate is attached to.
     * @minLength 0
     * @maxLength 20
     */
    promotionCode?: string;
    /**
     * Voucher benefit code attached to the certificate.
     * @minLength 0
     * @maxLength 40
     */
    voucherBenefitCode?: string;
    /** Hotel to which certificate is attached to. */
    hotels?: {
        /** @maxItems 4000 */
        code?: string[];
        /** Scope of e-cert: global,single property or multi property. */
        scope?: ECertificateScopeType;
    };
    /**
     * Description about the certificate.
     * @minLength 0
     * @maxLength 200
     */
    description?: string;
    /**
     * Detail description about the certificate.
     * @minLength 0
     * @maxLength 4000
     */
    longDescription?: string;
    /**
     * Label for the certificate.
     * @minLength 0
     * @maxLength 40
     */
    label?: string;
    /** Number of times e-certificate can be extended. */
    maxExtensionAllowed?: number;
    /** E-Certificates details. */
    usageCriteria?: ECertificateUsageCriteriaType;
    /** Value of the certificate for the guest. */
    value?: CurrencyAmountType;
    /** Cost of certificate. */
    cost?: CurrencyAmountType;
    /**
     * Summary of Benefits attached to this ECertificate.
     * @minLength 0
     * @maxLength 4000
     */
    benefitSummary?: string;
}
/** Indicates that OPERA E-Certificate is available for a specific list of hotels. */
export declare enum ECertificateScopeType {
    Global = "Global",
    Hotel = "Hotel",
    MultiHotel = "MultiHotel"
}
/** E-Certificates details. */
export interface ECertificateUsageCriteriaType {
    /** Indicates if certificate is to be used against reservation or not. */
    reservation?: boolean;
    /** Indicates if web certificate can be consumed in OWS. */
    web?: boolean;
    /** Indicates if certificate consumption allowable on the web. */
    webAllowed?: boolean;
    /** Indicates to attach a rate code to the e-certificate as a benefit. */
    benefit?: boolean;
    /** Indicates if web certificate can be consumed in hotel. */
    hotel?: boolean;
    /** Specify if the certificate number verification is required at time of consumption or not. */
    verifyCertificateNo?: boolean;
    /** Identify if cancel is allowed or not. */
    cancelAllowed?: boolean;
    /** Identify if in lieu of certificate can be generated or not. */
    generateInLieuCertificate?: boolean;
}
/** E-Certificates details. */
export interface ECertificateConsumptionType {
    /**
     * Property where certificate was consumed for.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Source of consumption. */
    source?: ECertificateConsumeSourceType;
    /**
     * Last name of the person who consumed the certificate..
     * @minLength 0
     * @maxLength 40
     */
    surname?: string;
    /**
     * First name of the person who consumed the certificate.
     * @minLength 0
     * @maxLength 40
     */
    firstName?: string;
    /**
     * Middle name of the person who consumed the certificate.
     * @minLength 0
     * @maxLength 40
     */
    middleName?: string;
    /**
     * Email of the person who consumed the certificate.
     * @minLength 0
     * @maxLength 2000
     */
    email?: string;
    /**
     * Date the certificate was consumed.
     * @format date
     * @maxLength 8
     */
    date?: string;
    /**
     * Application user who created the consumption.
     * @minLength 0
     * @maxLength 2000
     */
    userName?: string;
    /**
     * Any notes on the certificate entered at time of consumption.
     * @minLength 0
     * @maxLength 4000
     */
    userNotes?: string;
    /** Any reference like reservation no etc against which the certificate was consumed. */
    referenceId?: UniqueIDType;
    /**
     * Consumption location type.
     * @minLength 0
     * @maxLength 20
     */
    locationType?: string;
    /**
     * Authorization code for consumption.
     * @minLength 0
     * @maxLength 100
     */
    authorizationCode?: string;
    /**
     * Date on which the service is due (arrival date in case of reservation).
     * @format date
     * @maxLength 8
     */
    serviceDate?: string;
}
/** Indicates that OPERA E-Certificate is consumed by hotelPMS. */
export declare enum ECertificateConsumeSourceType {
    Central = "Central",
    Web = "Web",
    Hotel = "Hotel"
}
/** Indicates that OPERA E-Certificate is reserved. */
export declare enum ECertificateStatusType {
    Cancelled = "Cancelled",
    Consumed = "Consumed",
    Deleted = "Deleted",
    Expired = "Expired",
    Issued = "Issued",
    Reserved = "Reserved"
}
/** An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote). */
export interface AwardId {
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @minLength 0
     * @maxLength 80
     */
    instance?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @minLength 0
     * @maxLength 80
     */
    idContext?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @minLength 0
     * @maxLength 80
     */
    id?: string;
}
/** Indicates that OPERA E-Certificate is issued by external system. */
export declare enum ECertificateIssueSourceType {
    Opera = "Opera",
    Web = "Web",
    Interface = "Interface"
}
/** Indicates that guest purchased OPERA E-Certificate. */
export declare enum ECertificateIssueType {
    Assigned = "Assigned",
    OptedIn = "OptedIn",
    Purchased = "Purchased"
}
/** E-Certificates details. */
export interface ECertificateGenerationType {
    /** Key to identify the generation rule id. */
    ruleId?: UniqueIDType;
    /**
     * Reason for which e-certificate was generated.
     * @minLength 0
     * @maxLength 4000
     */
    generationDetail?: string;
    /**
     * Type of value that is in the certificate.valid values are membership_level.
     * @minLength 0
     * @maxLength 20
     */
    referenceValue?: string;
}
/**
 * Details of the OPERA Profile subscription to external system
 * @maxItems 4000
 */
export type ProfileSubscriptionListType = ProfileSubscriptionType[];
/** Contains details of the profile subscription. The subscription represents the link between the OPERA profile and the external profile within a particular external system */
export interface ProfileSubscriptionType {
    /** OPERA Profile ID that this subscription record corresponds to. */
    profileId?: ProfileId;
    /** Profile ID within the external system. */
    externalProfileId?: UniqueIDType;
    /** This provides name information for a person. */
    profileInfo?: {
        /**
         * Family name, last name or Company Name.
         * @minLength 0
         * @maxLength 40
         */
        name?: string;
        /**
         * Full display Name.
         * @minLength 0
         * @maxLength 200
         */
        fullName?: string;
        /**
         * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
         * @minLength 0
         * @maxLength 40
         */
        namePrefix?: string;
        /**
         * Given name, first name or names.
         * @minLength 0
         * @maxLength 40
         */
        givenName?: string;
        /**
         * The middle name of the person name.
         * @minLength 0
         * @maxLength 40
         */
        middleName?: string;
        /**
         * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.)
         * @minLength 0
         * @maxLength 40
         */
        nameSuffix?: string;
        /**
         * Degree or honors (e.g., Ph.D., M.D.)
         * @minLength 0
         * @maxLength 80
         */
        nameTitle?: string;
        /** Type of name of the individual, such as former, nickname, alternate or alias name. */
        nameType?: PersonNameTypeType;
        /** OPERA profile type such as Individual or Company */
        profileType?: ProfileTypeType;
    };
    /** Indicates if the profile was distributed to the external system. */
    distributed?: boolean;
    /** Indicates if the profile information should be overwritten by the external system. */
    force?: boolean;
    /**
     * Timestamp when the profile was subscribed to.
     * @format date-time
     */
    subscriptionDate?: string;
    /**
     * Timestamp of the most recent distribution of this profile to the external system.
     * @format date-time
     */
    lastDistributionDate?: string;
    /**
     * Timestamp of the most recent update of the subscription information by the external system.
     * @format date-time
     */
    lastExternalUpdateDate?: string;
    /** Indicates whether this subscription is active or inactive. */
    inactive?: boolean;
    /**
     * Code of system where profile is subscribed to.
     * @minLength 0
     * @maxLength 40
     */
    systemCode?: string;
    /**
     * Type of system where profile is subscribed to.
     * @minLength 0
     * @maxLength 40
     */
    systemType?: string;
}
/** The types of Profile handled by the web service. */
export declare enum CompanyProfileTypeType {
    Agent = "Agent",
    Company = "Company",
    Group = "Group",
    Source = "Source"
}
export type Links = InstanceLink[];
/** Metadata describing link description objects that MAY appear in the JSON instance representation. */
export interface InstanceLink {
    /** URI [RFC3986] or URI Template [RFC6570]. If the value is set to URI Template, then the "templated" property must be set to true. */
    href: string;
    /** Name of the link relation that, in addition to the type property, can be used to retrieve link details. For example, href or profile. */
    rel: string;
    /**
     * Boolean flag that specifies that "href" property is a URI or URI Template. If the property is a URI template, set this value to true. By default, this value is false.
     * @default false
     */
    templated?: boolean;
    /** HTTP method for requesting the target of the link. */
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';
    /** Link to the metadata of the resource, such as JSON-schema, that describes the resource expected when dereferencing the target resource.. */
    targetSchema?: string;
    /** The operationId of the path you can call to follow this link.  This allows you to look up not only the path and method, but the description of that path and any parameters you need to supply. */
    operationId: string;
    /** Exact copy of the "summary" field on the linked operation. */
    title?: string;
}
/**
 * Used in conjunction with the Success element to define a business error.
 * @maxItems 4000
 */
export type WarningsType = WarningType[];
/** Used when a message has been successfully processed to report any warnings or business errors that occurred. */
export interface WarningType {
    /** Property Value */
    value?: string;
    /**
     * An abbreviated version of the error in textual format.
     * @maxLength 2000
     */
    shortText?: string;
    /**
     * If present, this refers to a table of coded values exchanged between applications to identify errors or warnings.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
    /**
     * If present, this URL refers to an online description of the error that occurred.
     * @maxLength 2000
     */
    docURL?: string;
    /**
     * If present, recommended values are those enumerated in the ErrorRS, (NotProcessed Incomplete Complete Unknown) however, the data type is designated as string data, recognizing that trading partners may identify additional status conditions not included in the enumeration.
     * @maxLength 2000
     */
    status?: string;
    /**
     * If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type=ReqFieldMissing].
     * @maxLength 2000
     */
    tag?: string;
    /**
     * If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction.
     * @maxLength 2000
     */
    recordId?: string;
    /**
     * The Warning element MUST contain the Type attribute that uses a recommended set of values to indicate the warning type. The validating XSD can expect to accept values that it has NOT been explicitly coded for and process them by using Type ="Unknown".
     * @minLength 0
     * @maxLength 20
     */
    type?: string;
    /**
     * Language identification.
     * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     */
    language?: string;
    /**
     * Reference Place Holder used as an index for this warning.
     * @minLength 1
     * @maxLength 8
     */
    rph?: string;
}
/** Existing Operations Responses will eventually be modified to be extended from this type. */
export interface Status {
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
    links?: Links;
}
/**
 * Error Detail
 * Complex type that contains error details for a REST call.
 */
export interface ExceptionDetailType {
    /** Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML). */
    type: string;
    /** Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. */
    title: string;
    /** HTTP status code for this occurrence of the problem, set by the origin server. */
    status?: number;
    /** Human-readable description specific to this occurrence of the problem. */
    detail?: string;
    /** Absolute URI that identifies the specific occurrence of the problem.  It may or may not provide additional information if dereferenced. */
    instance?: string;
    /** Application error code, which is different from HTTP error code. */
    'o:errorCode'?: string;
    /** Path to the problem at the resource or property level. */
    'o:errorPath'?: string;
    /** Details of the error message, consisting of a hierarchical tree structure. */
    'o:errorDetails'?: ErrorInstance[];
    links?: Links;
}
/**
 * Error Instance Details
 * Complex type that contains error instance details for a REST call.
 */
export interface ErrorInstance {
    /** Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML). */
    type: string;
    /** Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. */
    title: string;
    /** HTTP status code for this occurrence of the problem, set by the origin server. */
    status?: number;
    /** Human-readable description specific to this occurrence of the problem. */
    detail?: string;
    /** Absolute URI that identifies the specific occurrence of the problem.  It may or may not provide additional information if dereferenced. */
    instance?: string;
    /** Application error code, which is different from HTTP error code. */
    'o:errorCode'?: string;
    /** Path to the problem at the resource or property level. */
    'o:errorPath'?: string;
}
/** Object for creation of profiles. This object contains profile details with unique identifiers for each profile. */
export interface Profile {
    /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code and in case of Company can be any form of identifier as ID. */
    profileIdList?: ProfileIdList;
    /** External Reference information for Profile. */
    externalReferences?: ExternalReferencesType;
    /** Provides detailed information regarding either a company or a customer profile. */
    profileDetails?: ProfileType;
    /** Provides the actions needed to apply on the profile */
    profileAllowedActions?: ProfileAllowedActionsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Type provides the detailed information about the profile and its children. */
export interface ProfileType {
    /** Detailed customer information for this profile. */
    customer?: CustomerType;
    /** Detailed company information for this profile. */
    company?: CompanyType;
    /** The profile image. */
    profileImage?: ImageSetType;
    /** List of customer addresses. */
    addresses?: {
        /**
         * Collection of Detailed information on an address for the customer.
         * @maxItems 4000
         */
        addressInfo?: AddressInfoType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /**
     * Business/Market Segment associated to the profile.
     * @maxItems 4000
     */
    businessSegments?: string[];
    /**
     * Territory associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    territory?: string;
    /**
     * Trace Code associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    traceCode?: string;
    /**
     * Owner Code associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    ownerCode?: string;
    /**
     * Influence Code associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    influenceCode?: string;
    /** List of Telephone Number Information */
    telephones?: {
        /**
         * Collection of Detailed information on telephone/fax for the customer.
         * @maxItems 4000
         */
        telephoneInfo?: TelephoneInfoType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of email address for the customer. */
    emails?: {
        /**
         * Collection of Detailed information on an eMail address for the customer.
         * @maxItems 4000
         */
        emailInfo?: EmailInfoType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of Information on a URL for the customer. */
    uRLs?: {
        /**
         * Collection of Detailed information on web url/address for the customer.
         * @maxItems 4000
         */
        uRLInfo?: URLInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of Notes for the customer. */
    comments?: {
        /**
         * Collection of Detailed information on comments for the customer.
         * @maxItems 4000
         */
        commentInfo?: CommentInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of Delivery methods configured against a Property for this Profile. */
    profileDeliveryMethods?: {
        /**
         * Collection of delivery methods for this Profile.
         * @maxItems 4000
         */
        profileDeliveryMethod?: ProfileDeliveryMethod[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of loyalty program(s) the profile is subscribed to. */
    profileMemberships?: {
        /**
         * Collection of Detailed information on memberships for the customer.
         * @maxItems 4000
         */
        profileMembership?: ProfileMembershipType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of customer preferences. */
    preferenceCollection?: {
        /**
         * Collection of Detailed information on preferences of the customer.
         * @maxItems 4000
         */
        preferenceType?: PreferenceTypeType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of customer keywords. */
    keywords?: {
        /**
         * Collection of keywords attached to the profile.
         * @maxItems 4000
         */
        keyword?: KeywordType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of profile negotiated rates. */
    negotiatedRates?: {
        /**
         * Collection of Detailed information on profile negotiated rates.
         * @maxItems 4000
         */
        negotiatedRate?: NegotiatedType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of channel negotiated rates that this profile has been assigned to. */
    gdsNegotiatedRates?: {
        /**
         * Collection of Detailed information on channel negotiated rates for the profile.
         * @maxItems 4000
         */
        gdsNegotiatedRate?: GdsNegotiatedType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Indicators of additional information attached to the profile */
    profileIndicators?: IndicatorsType;
    /** Contains a collection of profiles that have a relationship with this profile. */
    relationships?: {
        /**
         * A collection of the profiles that have a relationship with this profile.
         * @maxItems 4000
         */
        relationship?: RelationshipInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Contains a collection of profiles that have a relationship with this profile. */
    relationshipsSummary?: {
        /**
         * A collection of the profiles summary that have a relationship with this profile.
         * @maxItems 4000
         */
        relationship?: RelationshipInfoSummaryType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Collection of Detailed information on history and future reservations associated with the profile. */
    stayReservationInfoList?: ReservationStayHistoryFutureInfoType;
    /** Information on last stay of the profile. */
    lastStayInfo?: LastStayInfoType;
    /** Detailed information on access type associated with the profile. */
    profileAccessType?: ProfileAccessType;
    /** Detailed information on restrictions associated with the profile. */
    profileRestrictions?: ProfileRestrictions;
    /** Contains collection of mailing action list associated with the profile */
    mailingActions?: MailingActionsType;
    /** Contains privacy related information associated with the profile */
    privacyInfo?: PrivacyInfoType;
    /** Contains cashiering related details for the profile */
    cashiering?: ProfileCashieringType;
    /**
     * Contains commission related details for the profile.
     * @maxItems 4000
     */
    commissionInfoList?: ProfileCommissionType[];
    /** Collections of user defined fields. */
    userDefinedFields?: UserDefinedFieldsType;
    /** List of Web User Accounts of the profile. */
    webUserAccounts?: WebUserAccountsType;
    /** Profile information about tax. */
    taxInfo?: ProfileTaxInfoType;
    /** Sales information of the profiles. */
    salesInfo?: SalesInfoType;
    /** E-Certificate assosiated with the profile. */
    eCertificates?: ECertificatesType;
    /** List of profile subscriptions. */
    subscriptions?: ProfileSubscriptionListType;
    /**
     * Localization Guest Type assocaited to the profile.
     * @minLength 0
     * @maxLength 20
     */
    localizationGuestType?: string;
    /**
     * Eligible for Fiscal Folio/Payload generation.
     * @minLength 0
     * @maxLength 20
     */
    eligibleForFiscalFolio?: string;
    /** Room Ownership records. */
    roomOwnershipsList?: {
        /**
         * Collection of Detailed information on Room Ownership records.
         * @maxItems 4000
         */
        roomOwnershipInfo?: RoomOwnershipType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
    profileType?: ProfileTypeType;
    /** Status of the profile. Active/Inactive */
    statusCode?: ProfileStatusType;
    /**
     * Hotel which this profile is registered with. This attribute is not used for configuration.
     * @minLength 0
     * @maxLength 20
     */
    registeredProperty?: string;
    /**
     * Hotel which this profile is to be registered. This attribute is only used during creation of profile.
     * @minLength 0
     * @maxLength 20
     */
    requestForHotel?: string;
    /**
     * What level this profile is protected.
     * @minLength 0
     * @maxLength 40
     */
    protectedBy?: string;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
    /** Mark this profile as recently accessed. */
    markAsRecentlyAccessed?: boolean;
    /** "true" setting marks the profile to be kept from being purged, once the profile is marked inactive. */
    markForHistory?: boolean;
    /** Populates true if the profile has commission configured false otherwise. */
    hasCommission?: boolean;
    /** Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. */
    inheritedNegRates?: boolean;
    /** Flag to show inactive Room Owners. */
    showInactiveRoomOwners?: boolean;
}
/** Delivery Information type to the profile. */
export interface ProfileDeliveryMethod {
    /** Delivery ID. It will be empty in case of new delivery method. */
    deliveryId?: UniqueIDType;
    /**
     * Delivery type can have a value EMAIL, ELECTRONIC etc and it depends on the parameter set in OPERA Control.
     * @minLength 0
     * @maxLength 20
     */
    deliveryType?: string;
    /**
     * Delivery value holds the corresponding value of the delivery type..
     * @minLength 0
     * @maxLength 2000
     */
    deliveryValue?: string;
    /**
     * Property that has delivery methods configured.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc.. */
    deliveryModule?: ProfileDeliveryModuleType;
    /** When true, indicates a primary information. */
    primaryInd?: boolean;
    /** Display Order sequence. */
    orderSequence?: number;
}
/** Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc.. */
export declare enum ProfileDeliveryModuleType {
    EfolioExport = "EfolioExport"
}
/** RelationshipInfoSummaryType contains information about the associations between and among individuals, companies, travel agents, groups, sources, and contact profiles. */
export interface RelationshipInfoSummaryType {
    /** Refer to Relationship Profile Summary type document. */
    relationshipProfile?: RelationshipProfileSummaryType;
    /** Refer to Master Profile type document. */
    masterAccountDetails?: MasterAccountInfoType;
    /**
     * Relationship identifier.
     * @minLength 0
     * @maxLength 80
     */
    relationshipID?: string;
    /**
     * Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 20
     */
    sourceRelation?: string;
    /**
     * Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 200
     */
    sourceRelationDescription?: string;
    /**
     * Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
     * @minLength 0
     * @maxLength 20
     */
    targetRelation?: string;
    /**
     * Displays the description of the target relation(Target Profile).
     * @minLength 0
     * @maxLength 200
     */
    targetRelationDescription?: string;
}
export interface RelationshipProfileSummaryType {
    /**
     * Name of the customer
     * @minLength 0
     * @maxLength 40
     */
    customerName?: string;
    /**
     * Name of the company.
     * @minLength 0
     * @maxLength 40
     */
    companyName?: string;
    /**
     * Telephone number assigned to a single location
     * @minLength 0
     * @maxLength 40
     */
    telephoneNumber?: string;
    /** Information on address details for the customer/company */
    address?: RelationshipAddressType;
    /**
     * Defines the e-mail address.
     * @minLength 0
     * @maxLength 2000
     */
    emailAddress?: string;
    /**
     * Unique Code to identify the owner.
     * @minLength 0
     * @maxLength 20
     */
    ownerCode?: string;
    /** Original profile details for which the relationships was created */
    profileIdList?: UniqueIDListType;
    /** Indicates if this relationship is the primary relationship. */
    primary?: boolean;
    /** Status of the profile. Active/Inactive */
    profileStatus?: ProfileStatusType;
    /** When true, this is a primary owner. */
    primaryOwnerCode?: boolean;
    /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
    profileType?: ProfileTypeType;
}
/** Provides address information for a Relationship. */
export interface RelationshipAddressType {
    /**
     * When the address is unformatted (FormattedInd="false") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence.
     * @maxItems 4
     */
    addressLine?: string[];
    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     * @minLength 0
     * @maxLength 40
     */
    city?: string;
    /**
     * Post Office Code number.
     * @minLength 0
     * @maxLength 15
     */
    postalCode?: string;
    /**
     * State or Province name (e.g., Texas).
     * @minLength 0
     * @maxLength 20
     */
    state?: string;
    /**
     * Country name (e.g., Ireland).
     * @minLength 0
     * @maxLength 200
     */
    country?: string;
}
/** Information of History and Future Reservation details attached to Profiles. */
export interface ReservationStayHistoryFutureInfoType {
    /** Refer to History list type document. */
    historyList?: StayHistoryListType;
    /** Refer to Future list type document. */
    futureList?: StayFutureListType;
}
/** A collection of reservation history details attached to Profiles. */
export interface StayHistoryListType {
    /**
     * Additional reservation information attached to the profile . Eg : History reservation details
     * @maxItems 4000
     */
    reservationInfo?: StayReservationInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
}
/** The Reservation class contains the current reservation being created or altered. */
export interface StayReservationInfoType {
    /** Unique identifiers for the reservation for both internal and external systems */
    reservationIdList?: ReservationIdList;
    /** Collection of room stays. */
    roomStay?: StayInfoType;
    /** List of attached profiles */
    attachedProfiles?: ResAttachedProfileListType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /** Indicates the status of the reservation. */
    reservationStatus?: PMSResStatusType;
    /** Indicates the status of the reservation. */
    computedReservationStatus?: PMSResStatusType;
}
/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type ReservationIdList = UniqueIDType[];
/** Details on the Room Stay including Guest Counts, Time Span of this Room Stay, pointers to Res Guests, guest Memberships, Comments and Special Requests pertaining to this particular Room Stay and finally financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties. */
export interface StayInfoType {
    /** @format date */
    arrivalDate?: string;
    /** @format date */
    departureDate?: string;
    /** The Original Time Span covers the Room Stay dates of the original reservation. */
    originalTimeSpan?: TimeSpanType;
    /** The expected arrival, return and departure times of the guest. */
    expectedTimes?: ResExpectedTimesType;
    /** A collection of Guest Counts associated with Room Stay. */
    adultCount?: number;
    /** A collection of Child Counts associated with Room Stay. */
    childCount?: number;
    /**
     * Room class code
     * @minLength 0
     * @maxLength 20
     */
    roomClass?: string;
    /**
     * Room type code
     * @minLength 0
     * @maxLength 20
     */
    roomType?: string;
    /** True indicates room type is a component type. */
    componentRoomType?: boolean;
    /** Room Id */
    numberOfRooms?: number;
    /**
     * Room Id
     * @minLength 0
     * @maxLength 20
     */
    roomId?: string;
    /**
     * Rate plan code
     * @minLength 0
     * @maxLength 20
     */
    ratePlanCode?: string;
    /** Rate amount */
    rateAmount?: CurrencyAmountType;
    /** The Points contains the number of points used to book a particular room type. */
    points?: PointsType;
    /** Whether this rate should be suppressed from view */
    rateSuppressed?: boolean;
    /** Key information about the block for this reservation. */
    reservationBlock?: ReservationBlockType;
    /**
     * Booking channel code
     * @minLength 0
     * @maxLength 20
     */
    bookingChannelCode?: string;
    /**
     * Party code
     * @maxLength 2000
     */
    linkCode?: string;
    /** True if the rate is a fixed rate, otherwise false */
    fixedRate?: boolean;
    /** The total amount charged for the Room Stay including additional occupant amounts and fees. If TaxInclusive is set to True, then taxes are included in the total amount. */
    totalAmount?: CurrencyAmountType;
    /** The guarantee information associated to the Room Stay. A maximum of 5 occurances are available for use depending on the context. */
    guarantee?: ResGuaranteeType;
    /** Promotion Codes */
    promotion?: PromotionType;
    /**
     * Market code
     * @minLength 0
     * @maxLength 20
     */
    marketCode?: string;
    /**
     * Description of Market code
     * @minLength 0
     * @maxLength 4000
     */
    marketDescription?: string;
    /**
     * Source of business
     * @minLength 0
     * @maxLength 20
     */
    sourceCode?: string;
    /**
     * Description of the source of business.
     * @minLength 0
     * @maxLength 4000
     */
    sourceCodeDescription?: string;
    /** Balance amount */
    balance?: CurrencyAmountType;
    /** Comp Balance amount */
    compBalance?: CurrencyAmountType;
    /**
     * Room type code that was charged
     * @minLength 0
     * @maxLength 20
     */
    roomTypeCharged?: string;
    /** A collection of deposit and/or payments for the Room Stay. */
    depositPayments?: CurrencyAmountType;
    /** Service Status of In House guest like DND or MUP */
    guestServiceStatus?: GuestHousekeepingServiceRequestType;
    /**
     * Indicates that this reservation is scheduled for automated check out.
     * @format date
     */
    scheduledCheckoutTime?: string;
    /** When true, indicates a room number cannot be changed. When false, indicates a room number may be changed. */
    roomNumberLocked?: boolean;
    /** True indicates as pseudo room type. This is usually used for a posting master reservation. */
    pseudoRoom?: boolean;
    /** Represents the room was assigned by AI Room Assignment. */
    assignedByAI?: boolean;
    /** Represents the room was assigned by AI Room Assignment. */
    upgradedByAI?: boolean;
}
/** Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date. */
export interface TimeSpanType {
    /**
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    /**
     * @format date
     * @maxLength 8
     */
    endDate?: string;
    duration?: string;
}
/** Holds the Arrival and Departure Time Information */
export interface ResExpectedTimesType {
    /**
     * Arrival Time
     * @format date-time
     */
    reservationExpectedArrivalTime?: string;
    /**
     * Departure Time
     * @format date-time
     */
    reservationExpectedDepartureTime?: string;
}
/** The Redeem Points contains the number of points required to book a room type. */
export interface PointsType {
    /**
     * Awards type for the award type rate code.
     * @maxLength 2000
     */
    awardsType?: string;
    /** No of points required to book this Room Stay. */
    points?: number;
}
/** Key information about the block for a reservation. */
export interface ReservationBlockType {
    /** Collection of unique block identifiers for the reservation. */
    blockIdList?: BlockIdList;
    /**
     * The Name of the block that is attached to the reservation.
     * @minLength 0
     * @maxLength 40
     */
    blockName?: string;
    /**
     * This is the HotelCode of the Block.
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
}
/**
 * Unique Id that references an object uniquely in the system.
 * @maxItems 4000
 */
export type BlockIdList = UniqueIDType[];
/** Validations type record returned after Validations are done. */
export interface ResGuaranteeType {
    /**
     * Guarantee Code.
     * @minLength 0
     * @maxLength 20
     */
    guaranteeCode?: string;
    /**
     * Guarantee Code.
     * @minLength 0
     * @maxLength 80
     */
    shortDescription?: string;
    /** Guarantee Code. */
    onHold?: boolean;
}
/** Type to specify a rate promotion. Usually attached to a reservation to indicate a specific promotion is applied to the reservation. */
export interface PromotionType {
    /**
     * Promotion code associated with the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    promotionCode?: string;
    /**
     * Promotion code Name associated with the rate plan.
     * @minLength 0
     * @maxLength 20
     */
    promotionName?: string;
    /**
     * Promotion Coupon Code when promotion is setup to have a valid coupon code.
     * @minLength 0
     * @maxLength 40
     */
    couponCode?: string;
}
/** Possible values for the Guest Service Status. */
export declare enum GuestHousekeepingServiceRequestType {
    DoNotDisturb = "DoNotDisturb",
    MakeUpRoom = "MakeUpRoom",
    NoStatusSelected = "NoStatusSelected"
}
/** @maxItems 4000 */
export type ResAttachedProfileListType = ResAttachedProfileType[];
export interface ResAttachedProfileType {
    /**
     * Attached profile name
     * @maxLength 2000
     */
    name?: string;
    /** Collection of unique profile identifiers */
    profileIdList?: ProfileIdList;
    reservationProfileType?: ResProfileTypeType;
}
export declare enum ResProfileTypeType {
    Guest = "Guest",
    Company = "Company",
    Group = "Group",
    TravelAgent = "TravelAgent",
    Source = "Source",
    ReservationContact = "ReservationContact",
    BillingContact = "BillingContact",
    Addressee = "Addressee"
}
/** This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. */
export declare enum PMSResStatusType {
    Reserved = "Reserved",
    Requested = "Requested",
    NoShow = "NoShow",
    Cancelled = "Cancelled",
    InHouse = "InHouse",
    CheckedOut = "CheckedOut",
    Waitlisted = "Waitlisted",
    DueIn = "DueIn",
    DueOut = "DueOut",
    Walkin = "Walkin",
    PendingCheckout = "PendingCheckout"
}
/** A collection of reservation history details attached to Profiles. */
export interface StayFutureListType {
    /**
     * Additional reservation information attached to the profile . Eg : Future reservation details
     * @maxItems 4000
     */
    reservationInfo?: StayReservationInfoType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
}
/** Define the search criteria for retrieving room ownership records */
export interface RoomOwnershipType {
    /** Contract ID of the room ownership record. */
    contractId?: number;
    /**
     * Contract number for room owner.
     * @maxLength 2000
     */
    contractNumber?: string;
    /**
     * Unit for room owner.
     * @maxLength 2000
     */
    unit?: string;
    /**
     * Room Category of the room ownership record.
     * @maxLength 2000
     */
    roomCategory?: string;
    /**
     * Room Type of the room ownership record.
     * @maxLength 2000
     */
    roomType?: string;
    /**
     * Start Date of the room ownership record.
     * @format date
     * @maxLength 8
     */
    startDate?: string;
    /**
     * End Date of the room ownership record.
     * @format date
     * @maxLength 8
     */
    endDate?: string;
    /** Profile ID of the room ownership record. */
    profileId?: UniqueIDType;
    /**
     * Status of the room ownership record.
     * @maxLength 2000
     */
    status?: string;
}
/**
 * Allowed actions for profile operations.
 * @maxItems 2
 */
export type ProfileAllowedActionsType = ProfileAllowedActionType[];
/** Flag indicating whether Profile is Enrolled to Primary Membership Program. */
export declare enum ProfileAllowedActionType {
    NameChange = "NameChange",
    TaxIDChange = "TaxIDChange",
    EnrollToPrimaryMembership = "EnrollToPrimaryMembership"
}
/** Request object for creation of guest/contact/employee profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included. */
export interface Guest {
    /** Unique identifiers of Profile for both internal and external systems. */
    guestIdList?: ProfileIdList;
    /** External Reference information for Profile. */
    externalReferences?: ExternalReferencesType;
    /** Provides detailed information of a customer profile. */
    guestDetails?: GuestProfileType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Type provides the detailed information about the profile and its children. */
export interface GuestProfileType {
    /** Detailed customer information for this profile. */
    customer?: CustomerType;
    /** The profile image. */
    profileImage?: ImageSetType;
    /** List of customer addresses. */
    addresses?: {
        /**
         * Collection of Detailed information on an address for the customer.
         * @maxItems 4000
         */
        addressInfo?: AddressInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /**
     * Trace Code associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    traceCode?: string;
    /**
     * Owner Code associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    ownerCode?: string;
    /**
     * Influence Code associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    influenceCode?: string;
    /** List of Telephone Number Information */
    telephones?: {
        /**
         * Collection of Detailed information on telephone/fax for the customer.
         * @maxItems 4000
         */
        telephoneInfo?: TelephoneInfoType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of email address for the customer. */
    emails?: {
        /**
         * Collection of Detailed information on an eMail address for the customer.
         * @maxItems 4000
         */
        emailInfo?: EmailInfoType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of Information on a URL for the customer. */
    uRLs?: {
        /**
         * Collection of Detailed information on web url/address for the customer.
         * @maxItems 4000
         */
        uRLInfo?: URLInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of Notes for the customer. */
    comments?: {
        /**
         * Collection of Detailed information on comments for the customer.
         * @maxItems 4000
         */
        commentInfo?: CommentInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of loyalty program(s) the profile is subscribed to. */
    profileMemberships?: {
        /**
         * Collection of Detailed information on memberships for the customer.
         * @maxItems 4000
         */
        profileMembership?: ProfileMembershipType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of customer preferences. */
    preferenceCollection?: {
        /**
         * Collection of Detailed information on preferences of the customer.
         * @maxItems 4000
         */
        preferenceType?: PreferenceTypeType[];
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of customer keywords. */
    keywords?: {
        /**
         * Collection of keywords attached to the profile.
         * @maxItems 4000
         */
        keyword?: KeywordType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of profile negotiated rates. */
    negotiatedRates?: {
        /**
         * Collection of Detailed information on profile negotiated rates.
         * @maxItems 4000
         */
        negotiatedRate?: NegotiatedType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** List of channel negotiated rates that this profile has been assigned to. */
    gdsNegotiatedRates?: {
        /**
         * Collection of Detailed information on channel negotiated rates for the profile.
         * @maxItems 4000
         */
        gdsNegotiatedRate?: GdsNegotiatedType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Indicators of additional information attached to the profile */
    profileIndicators?: IndicatorsType;
    /** Contains a collection of profiles that have a relationship with this profile. */
    relationships?: {
        /**
         * A collection of the profiles that have a relationship with this profile.
         * @maxItems 4000
         */
        relationship?: RelationshipInfoType[];
        /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
        hasMore?: boolean;
        /** Total number of rows queried */
        totalResults?: number;
        /** Total number of rows returned */
        count?: number;
    };
    /** Information on last stay of the profile. */
    lastStayInfo?: LastStayInfoType;
    /** Detailed information on access type associated with the profile. */
    profileAccessType?: ProfileAccessType;
    /** Detailed information on restrictions associated with the profile. */
    profileRestrictions?: ProfileRestrictions;
    /** Contains collection of mailing action list associated with the profile */
    mailingActions?: MailingActionsType;
    /** Contains privacy related information associated with the profile */
    privacyInfo?: PrivacyInfoType;
    /** Contains cashiering related details for the profile */
    cashiering?: ProfileCashieringType;
    /**
     * Contains commission related details for the profile.
     * @maxItems 4000
     */
    commissionInfoList?: ProfileCommissionType[];
    /** Collections of user defined fields. */
    userDefinedFields?: UserDefinedFieldsType;
    /** List of Web User Accounts of the profile. */
    webUserAccounts?: WebUserAccountsType;
    /** Profile information about tax. */
    taxInfo?: ProfileTaxInfoType;
    /** Sales information of the profiles. */
    salesInfo?: SalesInfoType;
    /** E-Certificate associated with the profile. */
    eCertificates?: ECertificatesType;
    /** List of profile subscriptions. */
    subscriptions?: ProfileSubscriptionListType;
    /**
     * Localization Guest Type associated to the profile.
     * @minLength 0
     * @maxLength 20
     */
    localizationGuestType?: string;
    /**
     * Eligible for Fiscal Folio/Payload generation.
     * @minLength 0
     * @maxLength 20
     */
    eligibleForFiscalFolio?: string;
    /** Type of profile such as Guest, Employee or Contact. */
    profileType?: GuestProfileTypeType;
    /** Status of the profile. Active/Inactive */
    statusCode?: ProfileStatusType;
    /**
     * Hotel which this profile is registered with. This attribute is not used for configuration.
     * @minLength 0
     * @maxLength 20
     */
    registeredProperty?: string;
    /**
     * Hotel which this profile is to be registered. This attribute is only used during creation of profile.
     * @minLength 0
     * @maxLength 20
     */
    requestForHotel?: string;
    /**
     * What level this profile is protected.
     * @minLength 0
     * @maxLength 40
     */
    protectedBy?: string;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
    /** Mark this profile as recently accessed. */
    markAsRecentlyAccessed?: boolean;
    /** "true" setting marks the profile to be kept from being purged, once the profile is marked inactive. */
    markForHistory?: boolean;
    /** Populates true if the profile has commission configured false otherwise. */
    hasCommission?: boolean;
    /** Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. */
    inheritedNegRates?: boolean;
}
/** The types of Profile handled by the web service. */
export declare enum GuestProfileTypeType {
    Guest = "Guest",
    Employee = "Employee",
    Contact = "Contact"
}
export interface AvailablePreferences {
    /** A collection of preferences */
    preferenceCollection?: PreferenceTypeType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Response object for fetching profiles. This object contains profile primary details,profile summary details,master info list containing code and description used as lookup for description. */
export interface ProfileSummaries {
    /** Type contains Profile's summary information. */
    profileSummaries?: ProfileSummariesType;
    /** Refer to Generic common types document. */
    masterInfoList?: MasterInfoType[];
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** A complex type containing the collection of Profile objects or Unique IDs of Profiles. */
export interface ProfileSummariesType {
    /**
     * A collection of Profiles or Unique IDs of Profiles.
     * @maxItems 4000
     */
    profileInfo?: ProfileSummaryInfoType[];
    /** Evaluated total page count based on the requested max fetch count. */
    totalPages?: number;
    /** Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. */
    offset?: number;
    /** Indicates maximum number of records a Web Service should return. */
    limit?: number;
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
}
/** Summary information about a profile and the associated Unique IDs. */
export interface ProfileSummaryInfoType {
    /** Unique identifiers for the Profile for both internal and external systems. In case of Travel Agent the IATA code. */
    profileIdList?: ProfileIdList;
    /** Provides summary information regarding profile. */
    profile?: ProfileSummaryType;
}
/** Type provides the basic information about the profile. */
export interface ProfileSummaryType {
    /** This provides name information for a person. */
    formerName?: {
        /**
         * Family name, last name or Company Name.
         * @minLength 0
         * @maxLength 40
         */
        name?: string;
        /**
         * Full display Name.
         * @minLength 0
         * @maxLength 200
         */
        fullName?: string;
        /**
         * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
         * @minLength 0
         * @maxLength 40
         */
        namePrefix?: string;
        /**
         * Given name, first name or names.
         * @minLength 0
         * @maxLength 40
         */
        givenName?: string;
        /**
         * The middle name of the person name.
         * @minLength 0
         * @maxLength 40
         */
        middleName?: string;
        /**
         * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.)
         * @minLength 0
         * @maxLength 40
         */
        nameSuffix?: string;
        /**
         * Degree or honors (e.g., Ph.D., M.D.)
         * @minLength 0
         * @maxLength 80
         */
        nameTitle?: string;
        /** Type of name of the individual, such as former, nickname, alternate or alias name. */
        nameType?: PersonNameTypeType;
        /** Identifies the gender. */
        gender?: 'Male' | 'Female' | 'Unknown';
        /**
         * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
         * @format date
         * @maxLength 8
         */
        birthDate?: string;
        /**
         * Indicates the date of birth as masked.
         * @maxLength 2000
         */
        birthDateMasked?: string;
        /**
         * The code specifying a monetary unit. Use ISO 4217, three alpha code.
         * @minLength 0
         * @maxLength 20
         */
        currencyCode?: string;
        /**
         * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
         * @minLength 0
         * @maxLength 10
         */
        currencySymbol?: string;
        /** Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85). */
        decimalPlaces?: number;
        /**
         * Language identification.
         * @pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
         */
        language?: string;
        /**
         * The supplier's ranking of the customer (e.g., VIP, numerical ranking).
         * @minLength 0
         * @maxLength 20
         */
        customerValue?: string;
    };
    /** Profile Name information for this profile. */
    altName?: ProfileNameType;
    /** Provides information about the guest's anonymization status */
    anonymization?: AnonymizationType;
    /** Detailed information on an address for the customer. */
    addressInfo?: AddressInfoType;
    /** Detailed information on telephone/ fax for the customer. */
    telephoneInfo?: TelephoneInfoType;
    /** Detailed information on an eMail address for the customer. */
    emailInfo?: EmailInfoType;
    /** Information on membership for the customer. */
    profileMembership?: ProfileMembershipType;
    /** Detailed information on web url/address for the customer. */
    uRLInfo?: URLInfoType;
    /** Name of the (self-professed) country that is claimed for citizenship. */
    citizenCountry?: CountryNameType;
    /** Indicators of additional information attached to the profile */
    profileIndicators?: IndicatorsType;
    /** Super Search matching terms. */
    searchMatches?: SearchMatchesType;
    /** Detailed information on access type associated with the profile.Information on whether the profile is created in CRO/Hotel/Chain. */
    profileAccessType?: ProfileAccessType;
    /** Detailed information on restrictions associated with the profile. */
    profileRestrictions?: ProfileRestrictions;
    /** VIP status of the customer. */
    vipStatus?: VIPStatusType;
    /** Owner of the customer. */
    owners?: OwnersType;
    /**
     * Primary Company of the profile.
     * @maxLength 2000
     */
    primaryCompany?: string;
    /** AR Account information. */
    aRAccount?: DirectBillingType;
    /** Commission Code and description of the requested HotelCode. */
    commission?: CodeDescriptionType;
    /** Profile information about tax. */
    taxInfo?: ProfileTaxInfoType;
    /** Contains cashiering related details for the profile */
    cashiering?: ProfileCashieringType;
    /** Information on last stay of the profile. */
    lastStayInfo?: LastStayInfoType;
    /** Collection of allowed actions for profile search. */
    allowedActions?: ProfileAllowedActionsType;
    /** Contains primary account information (Profile Id, Profile Type and Profile Name) for the contacts. */
    primaryAccountInfo?: PrimaryProfileInfoType;
    /** Sales information of the profile. */
    salesInfo?: SalesInfoType;
    /** Additional Information about the profile. */
    additionalInfo?: ProfileAdditionalInfoType;
    /** Type of profile such as Guest, Agent, Company, Group, Source, Employee, Hotel, Vendor or Contact. */
    profileType?: ProfileTypeType;
    /** This element tells If there is an active subscription for this external profile . */
    subscription?: boolean;
    /** Status of the profile. Active/Inactive */
    statusCode?: ProfileStatusType;
    /**
     * What level this profile is protected.
     * @minLength 0
     * @maxLength 40
     */
    protected?: string;
    /** This element tells profile is property exclusive or not. */
    privateProfile?: boolean;
    /** Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached. */
    inheritedNegRates?: boolean;
    /**
     * Time stamp of the creation.
     * @format date-time
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @minLength 0
     * @maxLength 200
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @format date-time
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @minLength 0
     * @maxLength 200
     */
    lastModifierId?: string;
    /**
     * Property this profile is registered with.
     * @minLength 0
     * @maxLength 20
     */
    registeredProperty?: string;
}
/** This provides name information for a person. */
export interface ProfileNameType {
    /**
     * Family name, last name or Company Name.
     * @minLength 0
     * @maxLength 40
     */
    name?: string;
    /**
     * Full display Name.
     * @minLength 0
     * @maxLength 200
     */
    fullName?: string;
    /**
     * Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.)
     * @minLength 0
     * @maxLength 40
     */
    namePrefix?: string;
    /**
     * Given name, first name or names.
     * @minLength 0
     * @maxLength 40
     */
    givenName?: string;
    /**
     * The middle name of the person name.
     * @minLength 0
     * @maxLength 40
     */
    middleName?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.)
     * @minLength 0
     * @maxLength 40
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @minLength 0
     * @maxLength 80
     */
    nameTitle?: string;
    /** Type of name of the individual, such as former, nickname, alternate or alias name. */
    nameType?: PersonNameTypeType;
}
/**
 * List of Generic Name-Value-Pair Parameters used for super search matches.
 * @maxItems 4000
 */
export type SearchMatchesType = SearchMatchType[];
/** Search match indicating attribute and the matching value. */
export interface SearchMatchType {
    /**
     * Search match attribute.
     * @minLength 0
     * @maxLength 2000
     */
    attribute?: string;
    /**
     * Search match value.
     * @minLength 0
     * @maxLength 2000
     */
    value?: string;
}
/** VIP status of the customer. */
export interface VIPStatusType {
    /**
     * Used for Character Strings, length 0 to 2000.
     * @minLength 0
     * @maxLength 2000
     */
    value?: string;
    /**
     * VIP status of the customer.
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
}
/**
 * Generic type for a list of owners.
 * @maxItems 4000
 */
export type OwnersType = OwnerType[];
/** Contains basic information of profile. */
export interface PrimaryProfileInfoType {
    /** Unique Identifier for OPERA Profile. */
    profileId?: UniqueIDType;
    /** Type of account such as Agent, Company, and Source. */
    profileType?: ProfileTypeType;
    /**
     * Name of the account.
     * @minLength 0
     * @maxLength 40
     */
    profileName?: string;
}
export interface ProfileAdditionalInfoType {
    /**
     * Primary Owner of the profile
     * @minLength 0
     * @maxLength 20
     */
    primaryOwnerCode?: string;
    /**
     * Territory associated to the profile.
     * @minLength 0
     * @maxLength 40
     */
    territory?: string;
    /** Indicates if the profile is a Master Account for one or more Subsidiary Accounts. */
    masterAccount?: boolean;
    /** Indicates if the profile is a Subsidiary Account of a Master/Parent Account. */
    subsidiaryAccount?: boolean;
    /**
     * Business Title or Position of the profile.
     * @minLength 0
     * @maxLength 40
     */
    businessPosition?: string;
}
export interface MasterInfoType {
    /** @maxItems 4000 */
    codeInfo?: CodeInfoType[];
    codeType?: MasterType;
}
export interface CodeInfoType {
    /**
     * @minLength 0
     * @maxLength 80
     */
    description?: string;
    /** Holds name of additional code information */
    addtionalCodeInfo?: AddtionalCodeInfoType;
    /**
     * @minLength 0
     * @maxLength 20
     */
    hotelId?: string;
    /**
     * @minLength 0
     * @maxLength 20
     */
    code?: string;
}
/**
 * Holds name of additional code information
 * @maxItems 4000
 */
export type AddtionalCodeInfoType = {
    /** Holds name of additional code information */
    name?: MasterInfoCodeDetailType;
    /**
     * Holds value of additional code information
     * @minLength 0
     * @maxLength 2000
     */
    value?: string;
}[];
export declare enum MasterInfoCodeDetailType {
    LongDescription = "LongDescription",
    ShortDescription = "ShortDescription"
}
export declare enum MasterType {
    Country = "Country",
    State = "State",
    AddressType = "AddressType",
    PhoneType = "PhoneType",
    RateCategory = "RateCategory",
    CalculationRule = "CalculationRule",
    PostingRythym = "PostingRythym",
    BillingInstruction = "BillingInstruction",
    TransactionCode = "TransactionCode",
    DisplaySet = "DisplaySet",
    MailingActions = "MailingActions",
    DistanceType = "DistanceType",
    District = "District",
    Territory = "Territory",
    FiscalRegion = "FiscalRegion",
    InventoryItem = "InventoryItem",
    Package = "Package",
    RoomFeaturePreference = "RoomFeaturePreference",
    SpecialPreference = "SpecialPreference",
    Promotion = "Promotion",
    Department = "Department",
    ReservationPreference = "ReservationPreference",
    FacilityTask = "FacilityTask",
    RoomType = "RoomType",
    RateCode = "RateCode",
    OutOfOrderReason = "OutOfOrderReason",
    Block = "Block"
}
/** Request object for storing an email. */
export interface EmailMessageType {
    /** ID of the Block that is associated with the email. */
    blockId?: StringLength80;
    /** The address that originated the email. */
    fromAddress?: BasicEmailType;
    /** A collection of email addresses for recipients who were sent the email message */
    toAddress?: BasicEmailListType;
    /** The subject line of the email. */
    subject?: StringLength200;
    /**
     * Email in base64 binary format.
     * @format byte
     */
    emailBody?: string;
    /** Global ID of the email message from the external system. */
    messageId?: StringLength100;
    /**
     * The date the email was received.
     * @format date-time
     */
    emailReceiveDate?: string;
    /** Indicates whether the email was sent with an attachment (true) or not (false). */
    hasAttachment?: boolean;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/**
 * Used for Character Strings, length 0 to 80.
 * @minLength 0
 * @maxLength 80
 */
export type StringLength80 = string;
/**
 * Email address
 * @minLength 0
 * @maxLength 2000
 */
export type BasicEmailType = string;
/** @maxItems 4000 */
export type BasicEmailListType = BasicEmailType[];
/**
 * Used for Character Strings, length 0 to 200.
 * @minLength 0
 * @maxLength 200
 */
export type StringLength200 = string;
/**
 * Used for Character Strings, length 0 to 100.
 * @minLength 0
 * @maxLength 100
 */
export type StringLength100 = string;
export interface ProfileRelationships {
    /** Contains a collection of profiles that have a relationship with this profile. */
    relationships?: RelationshipsSummary;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Contains details relationships related to a profile. */
export interface RelationshipsSummary {
    /**
     * A collection of the profiles summary that have a relationship with this profile.
     * @maxItems 4000
     */
    relationship?: RelationshipInfoSummaryType[];
    /** Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. */
    hasMore?: boolean;
    /** Total number of rows queried */
    totalResults?: number;
    /** Total number of rows returned */
    count?: number;
}
/** Response object for showing stay history and future reservations of specific profile. */
export interface ProfileStayHistory {
    /** Type contains stay history and future reservations of the specific profile. */
    profileStayDetails?: ProfileStayDetailsType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Type provides the stay history and future reservations of specific profile. */
export interface ProfileStayDetailsType {
    /** Collection of Detailed information on history and future reservations associated with the profile. */
    reservationInfoList?: ReservationStayHistoryFutureInfoType;
}
/** Request object for creating profile relationship. */
export interface ProfileRelationship {
    /** Refer to Relationship Profile request criteria. */
    relationship?: RelationshipCriteriaType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Contains Criteria Information for a profile relationship. */
export interface RelationshipCriteriaType {
    /** Indicates if this relationship is the primary relationship. */
    primary?: boolean;
    /**
     * Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 20
     */
    sourceRelation?: string;
    /**
     * Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true.
     * @minLength 0
     * @maxLength 200
     */
    sourceRelationDescription?: string;
    /** Used to specify a source profile type. */
    sourceProfileType?: ProfileTypeType;
    /**
     * Indicates the type of relationship the related profile(Target Profile) has with the current profile(Source Profile).
     * @minLength 0
     * @maxLength 20
     */
    targetRelation?: string;
    /**
     * Displays the description of relationship the related profile(Target Profile) has with the current profile(Source Profile).
     * @minLength 0
     * @maxLength 200
     */
    targetRelationDescription?: string;
    /** Used to specify a target profile type. */
    targetProfileType?: ProfileTypeType;
}
/** Request object for changing profile relationship. */
export interface ProfileRelationshipToBeChanged {
    /** Refer to Relationship Profile request criteria. */
    relationship?: ChangeRelationshipCriteriaType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
/** Information about the changes in relationship for the profile */
export interface ChangeRelationshipCriteriaType {
    /** Information about the changes in relationship for the profile */
    changeRelationship?: ChangeRelationsInfoType;
    /**
     * Relationship identifier.
     * @minLength 0
     * @maxLength 80
     */
    relationshipID?: string;
    /**
     * Indicates the type of existing relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 20
     */
    sourceRelation?: string;
    /**
     * Displays the description of existing relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 200
     */
    sourceRelationDescription?: string;
    /**
     * Indicates the type of existing relationship the Related profile(Target Profile) has with the current profile(Source Profile).
     * @minLength 0
     * @maxLength 20
     */
    targetRelation?: string;
    /**
     * Displays the description of existing relationship the related profile(Target Profile) has with the current profile(Source Profile).
     * @minLength 0
     * @maxLength 200
     */
    targetRelationDescription?: string;
}
/** Detailed information regarding to be changed relationships for the profile. */
export interface ChangeRelationsInfoType {
    /** Unique id of the profile to be changed to. */
    changeProfileID?: UniqueIDType;
    /** Indicates if this relationship is the primary relationship. */
    primary?: boolean;
    /** Used to specify a source profile type. */
    sourceProfileType?: ProfileTypeType;
    /**
     * Indicates the type of to be changed relationship the current profile(Source Profile) has with the related profile(Target Profile).
     * @minLength 0
     * @maxLength 20
     */
    sourceRelation?: string;
    /**
     * Displays the description of to be changed relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true.
     * @minLength 0
     * @maxLength 200
     */
    sourceRelationDescription?: string;
    /**
     * Indicates the type of to be changed relationship the Related profile(Target Profile) has with the current profile(Source Profile).
     * @minLength 0
     * @maxLength 20
     */
    targetRelation?: string;
    /**
     * Displays the description of to be changed relationship the related profile(Target Profile) has with the current profile(Source Profile).
     * @minLength 0
     * @maxLength 200
     */
    targetRelationDescription?: string;
    /** Used to specify a target profile type. */
    targetProfileType?: ProfileTypeType;
}
/** Profile Resource will be merged. */
export interface ProfileToBeMerged {
    /** Provides detailed information regarding either a company or a customer profile. */
    victimProfileId?: UniqueIDListType;
    /** Provides detailed information regarding either a company or a customer profile. */
    profileDetails?: ProfileType;
    links?: Links;
    /** Used in conjunction with the Success element to define a business error. */
    warnings?: WarningsType;
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    prerequest: Promise<any>;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T, any>>;
}
/**
 * @title OPERA Cloud Customer Relationship Management API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /crm/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    companies: {
        /**
         * @description When a profile doesn't already exist for a guest, use this to create a new profile.  The response will provide the newly created profile's OPERA ID. There are many fields in postProfile defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use postProfile. <p><strong>OperationId:</strong>postCompanyProfile</p>
         *
         * @tags Profile
         * @name PostCompanyProfile
         * @summary This API facilitates creation of a company/agent/group/source profile in OPERA.
         * @request POST:/companies
         */
        postCompanyProfile: (hotelId: string, company: Company, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this to retrieve a specific Company, Travel Agent, Group or Source profile. You must know the corporate ID of the profile for the request API. <p><strong>OperationId:</strong>getCompanyProfile</p>
         *
         * @tags Profile
         * @name GetCompanyProfile
         * @summary Get company profile by corporate ID
         * @request GET:/companies/{corporateID}
         */
        getCompanyProfile: (hotelId: string, corporateId: string, query?: {
            /**
             * Delivery methods associated with the profile.
             * @uniqueItems true
             */
            fetchInstructions?: ('Address' | 'Communication' | 'Comment' | 'Membership' | 'Preference' | 'Keyword' | 'Correspondence' | 'Profile' | 'Indicators' | 'SalesInfo' | 'Relationship')[];
        }, params?: RequestParams) => Promise<AxiosResponse<Company, any>>;
    };
    externalSystems: {
        /**
         * @description When a reservation is booked via an external system, you would use this API to retrieve a reservation using the external ID in the request <p><strong>OperationId:</strong>getProfileByExtId</p>
         *
         * @tags Profile
         * @name GetProfileByExtId
         * @summary Get profile by external ID
         * @request GET:/externalSystems/{extSystemCode}/profiles/{profileExternalId}
         */
        getProfileByExtId: (hotelId: string, profileExternalId: string, extSystemCode: string, query?: {
            /** Hotel Code used to filter hotel specific information regarding the profile. */
            hotelId?: string;
            /** This element tells when the view profile should be logged. */
            logViewProfile?: boolean;
            /** Flag to show inactive Room Owners. */
            showInactiveRoomOwners?: boolean;
            /**
             * Delivery methods associated with the profile.
             * @uniqueItems true
             */
            fetchInstructions?: ('Address' | 'Communication' | 'Comment' | 'Membership' | 'Preference' | 'Keyword' | 'Correspondence' | 'Profile' | 'Indicators' | 'SalesInfo' | 'Relationship' | 'Subscriptions' | 'DeliveryMethods' | 'GdsNegotiatedRate' | 'NegotiatedRate' | 'HistoryReservation' | 'FutureReservation' | 'WebUserAccount')[];
            /**
             * Simple type enumerating the different parameters accepted by a profile Instructions. Parameter names have the name of the instruction expecting it, and the parameter name itself.
             * @uniqueItems true
             */
            instructionParameterType?: ('NegotiatedRateShowInactive' | 'NegotiatedRateResort' | 'NegotiatedRateMaxFetchCount' | 'NegotiatedRateCode' | 'GdsNegotiatedRateShowInactive' | 'PreferencesShowInactive' | 'ResortForRoutingInstructions' | 'RelationshipPrimaryProfile' | 'AddressPrimaryOnly' | 'CommunicationPrimaryOnly' | 'DeliveryMethodsHotelCode')[];
            /** Value of Profile Instruction Parameter */
            value?: string[];
            /**
             * Flag indicating whether Profile is Enrolled to Primary Membership Program.
             * @uniqueItems true
             */
            allowedAction?: ('NameChange' | 'TaxIDChange' | 'EnrollToPrimaryMembership')[];
        }, params?: RequestParams) => Promise<AxiosResponse<Profile, any>>;
    };
    guests: {
        /**
         * @description When a profile doesn't already exist for a guest, use this to create a new profile.  The response will provide the newly created profile's OPERA ID. There are many fields in postProfile defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use postProfile. <p><strong>OperationId:</strong>postGuestProfile</p>
         *
         * @tags Profile
         * @name PostGuestProfile
         * @summary Create a guest, contact or employee profile in OPERA
         * @request POST:/guests
         */
        postGuestProfile: (hotelId: string, guest: Guest, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to retrieve all data stored for a guest Profile, such as their address, phone number, preferences. You must already know the guests Profile ID. If you don’t know the profile ID, first use the API getGuests to find the profile ID. <p><strong>OperationId:</strong>getGuestProfile</p>
         *
         * @tags Profile
         * @name GetGuestProfile
         * @summary Get guest profile by guest ID
         * @request GET:/guests/{guestId}
         */
        getGuestProfile: (hotelId: string, guestId: string, query?: {
            /**
             * Delivery methods associated with the profile.
             * @uniqueItems true
             */
            fetchInstructions?: ('Address' | 'Communication' | 'Comment' | 'Membership' | 'Preference' | 'Keyword' | 'Correspondence' | 'Profile' | 'Indicators' | 'SalesInfo' | 'Relationship' | 'WebUserAccount')[];
        }, params?: RequestParams) => Promise<AxiosResponse<Guest, any>>;
    };
    profileListOfValues: {
        /**
         * @description Use this API to fetch the available preferences List Of Values for profiles <p><strong>OperationId:</strong>getAvailablePreferences</p>
         *
         * @tags ProfileLOV
         * @name GetAvailablePreferences
         * @summary Get available preferences
         * @request GET:/profileListOfValues/availablePreferences
         */
        getAvailablePreferences: (hotelId: string, query: {
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            id: string;
            /** Property for which preferences are to be fetched. */
            hotelId: string;
            /** Maximum records to be fetched. */
            maxFetchSize?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<AvailablePreferences, any>>;
    };
    profiles: {
        /**
         * @description Use this API when you want to search for a profile as part of a booking process or to manage a profile data. The response will include a list of profiles that exist in OPERA, based on your search criteria.  For example, you want to see if a profile for Mr David Smith exists - you can search by various criteria, such as first name, last name, email.  The response will include a list of any profiles that exist for Mr David Smith.  If a profile matches the criteria, and you want to get more details of that profile, proceed to use getProfile with the profileId in the request. Maximum response data limit is 1000 records, so use more query parameters to narrow your results. This API is not designed to support sync between two systems or initial upload of data.<p><strong>OperationId:</strong>getProfiles</p>
         *
         * @tags Profile
         * @name GetProfiles
         * @summary Search for profile(s)
         * @request GET:/profiles
         */
        getProfiles: (hotelId: string, query?: {
            /** Indicates whether to exclude Inactive Profiles, when true indicates that only profiles with active status will be displayed. */
            excludeInactive?: boolean;
            /** Hotel Code, It is used to filter hotel specific children to this specific hotel code. */
            hotelId?: string;
            /** Include profiles that have one or more relationships in the search. */
            includeHasHierarchyOnly?: boolean;
            /** Include primary owners in the search. */
            includePrimaryOwnersOnly?: boolean;
            /** Include purged profiles in the search. */
            includePurgeProfiles?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number;
            /**
             * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
             * @default 0
             */
            offset?: number;
            /**
             * When search type is PatronTrackingSystemMemberProfiles, the FetchProfiles will return the Membership Number of the searched Membership Type regardless of primary flag or sequence of the profile memberships.
             * @uniqueItems true
             */
            searchType?: 'PurgeableProfiles' | 'Any' | 'PatronTrackingSystemMemberProfiles';
            /** When true response will return summary information otherwise detailed information. */
            summaryInfo?: boolean;
            /** Search string to be used for super search. */
            searchString?: string;
            /** Indicates whether to include Anonymized Profiles. */
            includeAnonymized?: boolean;
            /**
             * The types of Profile handled by the web service.
             * @uniqueItems true
             */
            profileType?: ('Guest' | 'Agent' | 'Company' | 'Group' | 'Source' | 'Employee' | 'Hotel' | 'Vendor' | 'Contact' | 'Purge' | 'BusinessHeader' | 'BillingAccount' | 'Activity' | 'Potential' | 'Account')[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            profileIds?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            externalReferenceIds?: string[];
            /** Used to identify the source of the identifier (e.g., IATA, ABTA). */
            externalSystemCodes?: string[];
            /** A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. */
            corporateIds?: string[];
            /** Family name, last name or Company Name. */
            profileName?: string;
            /** Given name, first name or names. */
            givenName?: string;
            /** Family name, last name or Company Name. */
            incognitoName?: string;
            /** Given name, first name or names. */
            incognitoGivenName?: string;
            /** City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). */
            city?: string;
            /** Post Office Code number. */
            postalCode?: string;
            /** State or Province name (e.g., Texas). */
            state?: string;
            /** Code for a country or a nationality. */
            countryCode?: string;
            /** First Line of Street Address. For profile search it matches the first Address line. */
            streetAddress?: string;
            /** Keyword associated to the profile. */
            keyword?: string;
            /** Any communication method associated to the profile such as phone, fax, eMail id. */
            communication?: string;
            /** Membership number associated to the profile. */
            membership?: string;
            /** Member Type of searching profile. */
            membershipType?: string;
            /** Membership level associated to the profile. */
            membershipLevel?: string;
            /** Account Receivable associated to the profile. */
            aRNumber?: string;
            /** Business/Market Segment associated to the profile. */
            businessSegment?: string[];
            /** When true indicates that only profiles with AR account fetched. */
            accountsReceivables?: boolean;
            /** When true indicates that only profiles with client id are searched for. */
            corporateProfiles?: boolean;
            /** When true indicates that only profiles with an Address Line 1 and Country or at least one Communications Type will be displayed. */
            excludeIncompleteProfiles?: boolean;
            /** When true indicates that this option has to be included in advanced search. */
            negotiatedRates?: boolean;
            /** Indicates whether to exclude Inactive Profiles, when true indicates that only profiles with active status will be displayed. */
            relatedProfileExcludeInactive?: boolean;
            /** Include profiles that have one or more relationships in the search. */
            realtedProfileIncludeHasHierarchyOnly?: boolean;
            /** When true indicates that this option has to be included in advanced search. */
            relatedProfileNegotiatedRates?: boolean;
            /**
             * The types of Profile handled by the web service.
             * @uniqueItems true
             */
            relatedProfileType?: 'Guest' | 'Agent' | 'Company' | 'Group' | 'Source' | 'Employee' | 'Hotel' | 'Vendor' | 'Contact' | 'Purge' | 'BusinessHeader' | 'BillingAccount' | 'Activity' | 'Potential' | 'Account';
            /** Family name, last name or Company Name. */
            relatedProfileName?: string;
            /** Indicates whether to exclude Protected Profiles. */
            protectedProfiles?: boolean;
            /** Any identification number associated with the profile such as Passport Number, StateID. */
            identificationNo?: string;
            /**
             * Room Ownership information associated with the profile.
             * @uniqueItems true
             */
            fetchInstructions?: ('Address' | 'Communication' | 'NegotiatedRate' | 'GdsNegotiatedRate' | 'Comment' | 'Membership' | 'Preference' | 'Keyword' | 'HistoryReservation' | 'FutureReservation' | 'Relationship' | 'Correspondence' | 'Routing' | 'Indicators' | 'Profile' | 'WebUserAccount' | 'SalesInfo' | 'ECertificate' | 'Subscriptions' | 'PrimaryAccountInfo' | 'DeliveryMethods' | 'RoomOwnership')[];
            /**
             * Flag indicating whether Profile is Enrolled to Primary Membership Program.
             * @uniqueItems true
             */
            allowedAction?: ('NameChange' | 'TaxIDChange' | 'EnrollToPrimaryMembership')[];
            vipCodes?: string[];
            /** Unique ID of the Filter used to filter profiles. */
            predefinedFilterId?: number;
            /** Filter code. */
            predefinedFilterCode?: string;
            prioritieCodes?: string[];
        }, params?: RequestParams) => Promise<AxiosResponse<ProfileSummaries, any>>;
        /**
         * @description When a profile doesn&apos;t already exist in OPERA, use this to create a new profile. The response will provide the newly created profile&apos;s OPERA ID in the Location header. There are many fields in postProfile defined by ListOfValues; ensure you have reviewed ListOfValues APIs in order successfully to use postProfile.<p><strong>OperationId:</strong>postProfile</p>
         *
         * @tags Profile
         * @name PostProfile
         * @summary Create a profile
         * @request POST:/profiles
         */
        postProfile: (hotelId: string, profile: Profile, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to retrieve a specific profile&apos;s detail information using OPERA&apos;s profileId. You can retrieve any type of profile including guest, travel agent, company, source, group, or contact. If you do not know OPERA profileID, use getProfiles or getProfileByExtId API first to get OPERA profileId.<p><strong>OperationId:</strong>getProfile</p>
         *
         * @tags Profile
         * @name GetProfile
         * @summary Get profile by ID
         * @request GET:/profiles/{profileId}
         */
        getProfile: (hotelId: string, profileId: string, query?: {
            /** Hotel Code used to filter hotel specific information regarding the profile. */
            hotelId?: string;
            /** This element tells when the view profile should be logged. */
            logViewProfile?: boolean;
            /** Flag to show inactive Room Owners. */
            showInactiveRoomOwners?: boolean;
            /** Providing this flag marks the profile as recently accessed. */
            markAsRecentlyAccessed?: boolean;
            /**
             * Delivery methods associated with the profile.
             * @uniqueItems true
             */
            fetchInstructions?: ('Address' | 'Communication' | 'Comment' | 'Membership' | 'Preference' | 'Keyword' | 'Correspondence' | 'Profile' | 'Indicators' | 'SalesInfo' | 'Relationship' | 'Subscriptions' | 'DeliveryMethods' | 'GdsNegotiatedRate' | 'NegotiatedRate' | 'HistoryReservation' | 'FutureReservation' | 'WebUserAccount')[];
            /**
             * Simple type enumerating the different parameters accepted by a profile Instructions. Parameter names have the name of the instruction expecting it, and the parameter name itself.
             * @uniqueItems true
             */
            instructionParameterType?: ('NegotiatedRateShowInactive' | 'NegotiatedRateResort' | 'NegotiatedRateMaxFetchCount' | 'NegotiatedRateCode' | 'GdsNegotiatedRateShowInactive' | 'PreferencesShowInactive' | 'ResortForRoutingInstructions' | 'RelationshipPrimaryProfile' | 'AddressPrimaryOnly' | 'CommunicationPrimaryOnly' | 'DeliveryMethodsHotelCode')[];
            /** Value of Profile Instruction Parameter */
            value?: string[];
            /**
             * Flag indicating whether Profile is Enrolled to Primary Membership Program.
             * @uniqueItems true
             */
            allowedAction?: ('NameChange' | 'TaxIDChange' | 'EnrollToPrimaryMembership')[];
        }, params?: RequestParams) => Promise<AxiosResponse<Profile, any>>;
        /**
         * @description Use this to update a guests details on their profile.  You will need to know the OPERA Profile ID to use this API, and you will also need to know the List of Values for profile fields, such as AddressType, PhoneType, Title.  <p><strong>OperationId:</strong>putProfile</p>
         *
         * @tags Profile
         * @name PutProfile
         * @summary Update a profile by ID
         * @request PUT:/profiles/{profileId}
         */
        putProfile: (hotelId: string, profileId: string, profile: Profile, params?: RequestParams) => Promise<AxiosResponse<Profile, any>>;
        /**
         * @description Use deleteProfile to inactivate and remove a profile from OPERA. The profile will stay in the Database, until a nightly purge process is run to remove profile details from the OPERA database. <p><strong>OperationId:</strong>deleteProfile</p>
         *
         * @tags Profile
         * @name DeleteProfile
         * @summary Forget or delete a profile by ID
         * @request DELETE:/profiles/{profileId}
         */
        deleteProfile: (hotelId: string, profileId: string, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description Use this API to create a new Email in OPERA.  You would need to know the Profile Id such as Contact or Account. <p><strong>OperationId:</strong>storeEmail</p>
         *
         * @tags Profile
         * @name StoreEmail
         * @summary Create an Email.
         * @request POST:/profiles/{profileId}/emails
         */
        storeEmail: (hotelId: string, profileId: string, emailMessageType: EmailMessageType, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getProfileRelationships</p>
         *
         * @tags Profile
         * @name GetProfileRelationships
         * @summary FetchProfileRelationships method provides the ability to retrieve a profile relationships for a profile based on the unique internal profile ID specified.
         * @request GET:/profiles/{profileId}/relationships
         */
        getProfileRelationships: (hotelId: string, profileId: string, query?: {
            /** Type of Profile to be fetched from OPERA. */
            relationshipPrimaryProfile?: boolean;
        }, params?: RequestParams) => Promise<AxiosResponse<ProfileRelationships, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>getStayHistory</p>
         *
         * @tags Profile
         * @name GetStayHistory
         * @summary FetchStayHistory method provides stay history and future reservations of a profile based on the unique internal ID specified.
         * @request GET:/profiles/{profileId}/stayHistory
         */
        getStayHistory: (hotelId: string, profileId: string, query?: {
            /** Hotel Code used to filter hotel specific information regarding the profile. */
            hotelId?: string;
            /** Providing this flag includes purged profiles in the result. */
            includePurgeProfiles?: boolean;
            /** Providing this flag marks the profile as recently accessed. */
            markAsRecentlyAccessed?: boolean;
            /** Indicates maximum number of records a Web Service should return. */
            limit?: number[];
            /**
             * Simple type for instructions that can be used in requests for partial operations to fetch past and future reservation.
             * @uniqueItems true
             */
            fetchInstructions?: ('HistoryReservation' | 'FutureReservation')[];
        }, params?: RequestParams) => Promise<AxiosResponse<ProfileStayHistory, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>postProfileRelationship</p>
         *
         * @tags Profile
         * @name PostProfileRelationship
         * @summary CreateProfileRelationship method provides the ability to create profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.
         * @request POST:/profiles/{sourceProfileId}/relationships/{targetProfileId}
         */
        postProfileRelationship: (hotelId: string, targetProfileId: string, sourceProfileId: string, profileRelationship: ProfileRelationship, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>putProfileRelationship</p>
         *
         * @tags Profile
         * @name PutProfileRelationship
         * @summary ChangeProfileRelationship method provides the ability to update(delete and add) profile relationship based on the request criteria of SourceProfileID , TargetProfileID, To Be ChangedProfileID and SourceProfileRelationType specified.
         * @request PUT:/profiles/{sourceProfileId}/relationships/{targetProfileId}
         */
        putProfileRelationship: (hotelId: string, targetProfileId: string, sourceProfileId: string, profileRelationshipToBeChanged: ProfileRelationshipToBeChanged, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description  <p><strong>OperationId:</strong>removeProfileRelationship</p>
         *
         * @tags Profile
         * @name RemoveProfileRelationship
         * @summary DeleteProfileRelationship method provides the ability to delete profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.
         * @request DELETE:/profiles/{sourceProfileId}/relationships/{targetProfileId}
         */
        removeProfileRelationship: (hotelId: string, targetProfileId: string, sourceProfileId: string, query: {
            /** Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile). */
            sourceRelation: string;
            /** Indicates the type of relationship the related profile(Target Profile) has with the current profile(Source Profile). */
            targetRelation: string;
            /** Indicates if this relationship is the primary relationship. */
            primary?: boolean;
            /** Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true. */
            sourceRelationDescription?: string;
            /** Displays the description of relationship the related profile(Target Profile) has with the current profile(Source Profile). */
            targetRelationDescription?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
        /**
         * @description When you need to merge 2 guest profiles into 1 profile, use this API. <p><strong>OperationId:</strong>mergeProfiles</p>
         *
         * @tags Profile
         * @name MergeProfiles
         * @summary Merge two profiles by ID
         * @request POST:/profiles/{survivorProfileId}/merges
         */
        mergeProfiles: (hotelId: string, survivorProfileId: string, profileToBeMerged: ProfileToBeMerged, params?: RequestParams) => Promise<AxiosResponse<Status, any>>;
    };
}
