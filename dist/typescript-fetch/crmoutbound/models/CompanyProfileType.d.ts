/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CompanyProfileTypeType } from './CompanyProfileTypeType';
import type { CompanyType } from './CompanyType';
import type { GuestProfileTypeAddresses } from './GuestProfileTypeAddresses';
import type { ImageSetType } from './ImageSetType';
import type { IndicatorsType } from './IndicatorsType';
import type { LastStayInfoType } from './LastStayInfoType';
import type { MailingActionsType } from './MailingActionsType';
import type { PrivacyInfoType } from './PrivacyInfoType';
import type { ProfileAccessType } from './ProfileAccessType';
import type { ProfileRestrictions } from './ProfileRestrictions';
import type { ProfileStatusType } from './ProfileStatusType';
import type { ProfileTypeComments } from './ProfileTypeComments';
import type { ProfileTypeEmails } from './ProfileTypeEmails';
import type { ProfileTypeKeywords } from './ProfileTypeKeywords';
import type { ProfileTypePreferenceCollection } from './ProfileTypePreferenceCollection';
import type { ProfileTypeProfileMemberships } from './ProfileTypeProfileMemberships';
import type { ProfileTypeTelephones } from './ProfileTypeTelephones';
import type { UserDefinedFieldsType } from './UserDefinedFieldsType';
/**
 * Type provides the detailed information about the profile and its children.
 * @export
 * @interface CompanyProfileType
 */
export interface CompanyProfileType {
    /**
     *
     * @type {CompanyType}
     * @memberof CompanyProfileType
     */
    company?: CompanyType;
    /**
     *
     * @type {ImageSetType}
     * @memberof CompanyProfileType
     */
    profileImage?: ImageSetType;
    /**
     *
     * @type {GuestProfileTypeAddresses}
     * @memberof CompanyProfileType
     */
    addresses?: GuestProfileTypeAddresses;
    /**
     * Business/Market Segment associated to the profile.
     * @type {Array<string>}
     * @memberof CompanyProfileType
     */
    businessSegments?: Array<string>;
    /**
     * Territory associated to the profile.
     * @type {string}
     * @memberof CompanyProfileType
     */
    territory?: string;
    /**
     *
     * @type {ProfileTypeTelephones}
     * @memberof CompanyProfileType
     */
    telephones?: ProfileTypeTelephones;
    /**
     *
     * @type {ProfileTypeEmails}
     * @memberof CompanyProfileType
     */
    emails?: ProfileTypeEmails;
    /**
     *
     * @type {ProfileTypeComments}
     * @memberof CompanyProfileType
     */
    comments?: ProfileTypeComments;
    /**
     *
     * @type {ProfileTypeProfileMemberships}
     * @memberof CompanyProfileType
     */
    profileMemberships?: ProfileTypeProfileMemberships;
    /**
     *
     * @type {ProfileTypePreferenceCollection}
     * @memberof CompanyProfileType
     */
    preferenceCollection?: ProfileTypePreferenceCollection;
    /**
     *
     * @type {ProfileTypeKeywords}
     * @memberof CompanyProfileType
     */
    keywords?: ProfileTypeKeywords;
    /**
     *
     * @type {IndicatorsType}
     * @memberof CompanyProfileType
     */
    profileIndicators?: IndicatorsType;
    /**
     *
     * @type {LastStayInfoType}
     * @memberof CompanyProfileType
     */
    lastStayInfo?: LastStayInfoType;
    /**
     *
     * @type {ProfileAccessType}
     * @memberof CompanyProfileType
     */
    profileAccessType?: ProfileAccessType;
    /**
     *
     * @type {ProfileRestrictions}
     * @memberof CompanyProfileType
     */
    profileRestrictions?: ProfileRestrictions;
    /**
     *
     * @type {MailingActionsType}
     * @memberof CompanyProfileType
     */
    mailingActions?: MailingActionsType;
    /**
     *
     * @type {PrivacyInfoType}
     * @memberof CompanyProfileType
     */
    privacyInfo?: PrivacyInfoType;
    /**
     *
     * @type {UserDefinedFieldsType}
     * @memberof CompanyProfileType
     */
    userDefinedFields?: UserDefinedFieldsType;
    /**
     * Localization Guest Type associated to the profile.
     * @type {string}
     * @memberof CompanyProfileType
     */
    localizationGuestType?: string;
    /**
     * Eligible for Fiscal Folio/Payload generation.
     * @type {string}
     * @memberof CompanyProfileType
     */
    eligibleForFiscalFolio?: string;
    /**
     *
     * @type {CompanyProfileTypeType}
     * @memberof CompanyProfileType
     */
    profileType?: CompanyProfileTypeType;
    /**
     *
     * @type {ProfileStatusType}
     * @memberof CompanyProfileType
     */
    statusCode?: ProfileStatusType;
    /**
     * Hotel which this profile is registered with. This attribute is not used for configuration.
     * @type {string}
     * @memberof CompanyProfileType
     */
    registeredProperty?: string;
    /**
     * Hotel which this profile is to be registered. This attribute is only used during creation of profile.
     * @type {string}
     * @memberof CompanyProfileType
     */
    requestForHotel?: string;
    /**
     * What level this profile is protected.
     * @type {string}
     * @memberof CompanyProfileType
     */
    protectedBy?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof CompanyProfileType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof CompanyProfileType
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof CompanyProfileType
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof CompanyProfileType
     */
    lastModifierId?: string;
    /**
     * Mark this profile as recently accessed.
     * @type {boolean}
     * @memberof CompanyProfileType
     */
    markAsRecentlyAccessed?: boolean;
    /**
     * "true" setting marks the profile to be kept from being purged, once the profile is marked inactive.
     * @type {boolean}
     * @memberof CompanyProfileType
     */
    markForHistory?: boolean;
    /**
     * Populates true if the profile has commission configured false otherwise.
     * @type {boolean}
     * @memberof CompanyProfileType
     */
    hasCommission?: boolean;
}
/**
 * Check if a given object implements the CompanyProfileType interface.
 */
export declare function instanceOfCompanyProfileType(value: object): boolean;
export declare function CompanyProfileTypeFromJSON(json: any): CompanyProfileType;
export declare function CompanyProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyProfileType;
export declare function CompanyProfileTypeToJSON(value?: CompanyProfileType | null): any;
