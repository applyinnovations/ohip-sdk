/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CompanyType } from './CompanyType';
import type { CustomerType } from './CustomerType';
import type { ECertificateType } from './ECertificateType';
import type { ImageSetType } from './ImageSetType';
import type { IndicatorType } from './IndicatorType';
import type { LastStayInfoType } from './LastStayInfoType';
import type { MailingActionsType } from './MailingActionsType';
import type { PrivacyInfoType } from './PrivacyInfoType';
import type { ProfileAccessType } from './ProfileAccessType';
import type { ProfileCashieringType } from './ProfileCashieringType';
import type { ProfileCommissionType } from './ProfileCommissionType';
import type { ProfileRestrictions } from './ProfileRestrictions';
import type { ProfileStatusType } from './ProfileStatusType';
import type { ProfileSubscriptionType } from './ProfileSubscriptionType';
import type { ProfileTaxInfoType } from './ProfileTaxInfoType';
import type { ProfileTypeAddresses } from './ProfileTypeAddresses';
import type { ProfileTypeComments } from './ProfileTypeComments';
import type { ProfileTypeEmails } from './ProfileTypeEmails';
import type { ProfileTypeGdsNegotiatedRates } from './ProfileTypeGdsNegotiatedRates';
import type { ProfileTypeKeywords } from './ProfileTypeKeywords';
import type { ProfileTypeNegotiatedRates } from './ProfileTypeNegotiatedRates';
import type { ProfileTypePreferenceCollection } from './ProfileTypePreferenceCollection';
import type { ProfileTypeProfileDeliveryMethods } from './ProfileTypeProfileDeliveryMethods';
import type { ProfileTypeProfileMemberships } from './ProfileTypeProfileMemberships';
import type { ProfileTypeRelationships } from './ProfileTypeRelationships';
import type { ProfileTypeRelationshipsSummary } from './ProfileTypeRelationshipsSummary';
import type { ProfileTypeTelephones } from './ProfileTypeTelephones';
import type { ProfileTypeType } from './ProfileTypeType';
import type { ProfileTypeURLs } from './ProfileTypeURLs';
import type { ReservationHistoryFutureInfoType } from './ReservationHistoryFutureInfoType';
import type { ReservationStayHistoryFutureInfoType } from './ReservationStayHistoryFutureInfoType';
import type { SalesInfoType } from './SalesInfoType';
import type { UserDefinedFieldsType } from './UserDefinedFieldsType';
import type { WebUserAccountType } from './WebUserAccountType';
/**
 * Type provides the detailed information about the profile and its children.
 * @export
 * @interface ProfileType
 */
export interface ProfileType {
    /**
     *
     * @type {ProfileTypeAddresses}
     * @memberof ProfileType
     */
    addresses?: ProfileTypeAddresses;
    /**
     * Business/Market Segment associated to the profile.
     * @type {Array<string>}
     * @memberof ProfileType
     */
    businessSegments?: Array<string>;
    /**
     *
     * @type {ProfileCashieringType}
     * @memberof ProfileType
     */
    cashiering?: ProfileCashieringType;
    /**
     *
     * @type {ProfileTypeComments}
     * @memberof ProfileType
     */
    comments?: ProfileTypeComments;
    /**
     * Contains commission related details for the profile.
     * @type {Array<ProfileCommissionType>}
     * @memberof ProfileType
     */
    commissionInfoList?: Array<ProfileCommissionType>;
    /**
     *
     * @type {CompanyType}
     * @memberof ProfileType
     */
    company?: CompanyType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof ProfileType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof ProfileType
     */
    creatorId?: string;
    /**
     *
     * @type {CustomerType}
     * @memberof ProfileType
     */
    customer?: CustomerType;
    /**
     * List of e-certificates for the profile.
     * @type {Array<ECertificateType>}
     * @memberof ProfileType
     */
    eCertificates?: Array<ECertificateType>;
    /**
     * Eligible for Fiscal Folio/Payload generation.
     * @type {string}
     * @memberof ProfileType
     */
    eligibleForFiscalFolio?: string;
    /**
     *
     * @type {ProfileTypeEmails}
     * @memberof ProfileType
     */
    emails?: ProfileTypeEmails;
    /**
     *
     * @type {ProfileTypeGdsNegotiatedRates}
     * @memberof ProfileType
     */
    gdsNegotiatedRates?: ProfileTypeGdsNegotiatedRates;
    /**
     * Populates true if the profile has commission configured false otherwise.
     * @type {boolean}
     * @memberof ProfileType
     */
    hasCommission?: boolean;
    /**
     * Influence Code associated to the profile.
     * @type {string}
     * @memberof ProfileType
     */
    influenceCode?: string;
    /**
     * Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached.
     * @type {boolean}
     * @memberof ProfileType
     */
    inheritedNegRates?: boolean;
    /**
     *
     * @type {ProfileTypeKeywords}
     * @memberof ProfileType
     */
    keywords?: ProfileTypeKeywords;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof ProfileType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof ProfileType
     */
    lastModifyDateTime?: string;
    /**
     *
     * @type {LastStayInfoType}
     * @memberof ProfileType
     */
    lastStayInfo?: LastStayInfoType;
    /**
     * Localization Guest Type assocaited to the profile.
     * @type {string}
     * @memberof ProfileType
     */
    localizationGuestType?: string;
    /**
     *
     * @type {MailingActionsType}
     * @memberof ProfileType
     */
    mailingActions?: MailingActionsType;
    /**
     * Mark this profile as recently accessed.
     * @type {boolean}
     * @memberof ProfileType
     */
    markAsRecentlyAccessed?: boolean;
    /**
     * "true" setting marks the profile to be kept from being purged, once the profile is marked inactive.
     * @type {boolean}
     * @memberof ProfileType
     */
    markForHistory?: boolean;
    /**
     *
     * @type {ProfileTypeNegotiatedRates}
     * @memberof ProfileType
     */
    negotiatedRates?: ProfileTypeNegotiatedRates;
    /**
     * Owner Code associated to the profile.
     * @type {string}
     * @memberof ProfileType
     */
    ownerCode?: string;
    /**
     *
     * @type {ProfileTypePreferenceCollection}
     * @memberof ProfileType
     */
    preferenceCollection?: ProfileTypePreferenceCollection;
    /**
     *
     * @type {PrivacyInfoType}
     * @memberof ProfileType
     */
    privacyInfo?: PrivacyInfoType;
    /**
     *
     * @type {ProfileAccessType}
     * @memberof ProfileType
     */
    profileAccessType?: ProfileAccessType;
    /**
     *
     * @type {ProfileTypeProfileDeliveryMethods}
     * @memberof ProfileType
     */
    profileDeliveryMethods?: ProfileTypeProfileDeliveryMethods;
    /**
     *
     * @type {ImageSetType}
     * @memberof ProfileType
     */
    profileImage?: ImageSetType;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof ProfileType
     */
    profileIndicators?: Array<IndicatorType>;
    /**
     *
     * @type {ProfileTypeProfileMemberships}
     * @memberof ProfileType
     */
    profileMemberships?: ProfileTypeProfileMemberships;
    /**
     *
     * @type {ProfileRestrictions}
     * @memberof ProfileType
     */
    profileRestrictions?: ProfileRestrictions;
    /**
     *
     * @type {ProfileTypeType}
     * @memberof ProfileType
     */
    profileType?: ProfileTypeType;
    /**
     * What level this profile is protected.
     * @type {string}
     * @memberof ProfileType
     */
    protectedBy?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof ProfileType
     */
    purgeDate?: string;
    /**
     * Hotel which this profile is registered with. This attribute is not used for configuration.
     * @type {string}
     * @memberof ProfileType
     */
    registeredProperty?: string;
    /**
     *
     * @type {ProfileTypeRelationships}
     * @memberof ProfileType
     */
    relationships?: ProfileTypeRelationships;
    /**
     *
     * @type {ProfileTypeRelationshipsSummary}
     * @memberof ProfileType
     */
    relationshipsSummary?: ProfileTypeRelationshipsSummary;
    /**
     * Hotel which this profile is to be registered. This attribute is only used during creation of profile.
     * @type {string}
     * @memberof ProfileType
     */
    requestForHotel?: string;
    /**
     *
     * @type {ReservationHistoryFutureInfoType}
     * @memberof ProfileType
     */
    reservationInfoList?: ReservationHistoryFutureInfoType;
    /**
     *
     * @type {SalesInfoType}
     * @memberof ProfileType
     */
    salesInfo?: SalesInfoType;
    /**
     *
     * @type {ProfileStatusType}
     * @memberof ProfileType
     */
    statusCode?: ProfileStatusType;
    /**
     *
     * @type {ReservationStayHistoryFutureInfoType}
     * @memberof ProfileType
     */
    stayReservationInfoList?: ReservationStayHistoryFutureInfoType;
    /**
     * Details of the OPERA Profile subscription to external system
     * @type {Array<ProfileSubscriptionType>}
     * @memberof ProfileType
     */
    subscriptions?: Array<ProfileSubscriptionType>;
    /**
     *
     * @type {ProfileTaxInfoType}
     * @memberof ProfileType
     */
    taxInfo?: ProfileTaxInfoType;
    /**
     *
     * @type {ProfileTypeTelephones}
     * @memberof ProfileType
     */
    telephones?: ProfileTypeTelephones;
    /**
     * Territory associated to the profile.
     * @type {string}
     * @memberof ProfileType
     */
    territory?: string;
    /**
     * Trace Code associated to the profile.
     * @type {string}
     * @memberof ProfileType
     */
    traceCode?: string;
    /**
     *
     * @type {ProfileTypeURLs}
     * @memberof ProfileType
     */
    uRLs?: ProfileTypeURLs;
    /**
     *
     * @type {UserDefinedFieldsType}
     * @memberof ProfileType
     */
    userDefinedFields?: UserDefinedFieldsType;
    /**
     * Web User Accounts List.
     * @type {Array<WebUserAccountType>}
     * @memberof ProfileType
     */
    webUserAccounts?: Array<WebUserAccountType>;
}
/**
 * Check if a given object implements the ProfileType interface.
 */
export declare function instanceOfProfileType(value: object): boolean;
export declare function ProfileTypeFromJSON(json: any): ProfileType;
export declare function ProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileType;
export declare function ProfileTypeToJSON(value?: ProfileType | null): any;
