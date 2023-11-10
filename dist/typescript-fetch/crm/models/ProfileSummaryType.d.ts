/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AddressInfoType } from './AddressInfoType';
import type { AnonymizationType } from './AnonymizationType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { CountryNameType } from './CountryNameType';
import type { DirectBillingType } from './DirectBillingType';
import type { EmailInfoType } from './EmailInfoType';
import type { IndicatorsType } from './IndicatorsType';
import type { LastStayInfoType } from './LastStayInfoType';
import type { OwnersType } from './OwnersType';
import type { PrimaryProfileInfoType } from './PrimaryProfileInfoType';
import type { ProfileAccessType } from './ProfileAccessType';
import type { ProfileAdditionalInfoType } from './ProfileAdditionalInfoType';
import type { ProfileAllowedActionsType } from './ProfileAllowedActionsType';
import type { ProfileCashieringType } from './ProfileCashieringType';
import type { ProfileMembershipType } from './ProfileMembershipType';
import type { ProfileNameType } from './ProfileNameType';
import type { ProfileRestrictions } from './ProfileRestrictions';
import type { ProfileStatusType } from './ProfileStatusType';
import type { ProfileSummaryTypeFormerName } from './ProfileSummaryTypeFormerName';
import type { ProfileTaxInfoType } from './ProfileTaxInfoType';
import type { ProfileTypeType } from './ProfileTypeType';
import type { SalesInfoType } from './SalesInfoType';
import type { SearchMatchesType } from './SearchMatchesType';
import type { TelephoneInfoType } from './TelephoneInfoType';
import type { URLInfoType } from './URLInfoType';
import type { VIPStatusType } from './VIPStatusType';
/**
 * Type provides the basic information about the profile.
 * @export
 * @interface ProfileSummaryType
 */
export interface ProfileSummaryType {
    /**
     *
     * @type {DirectBillingType}
     * @memberof ProfileSummaryType
     */
    aRAccount?: DirectBillingType;
    /**
     *
     * @type {ProfileAdditionalInfoType}
     * @memberof ProfileSummaryType
     */
    additionalInfo?: ProfileAdditionalInfoType;
    /**
     *
     * @type {AddressInfoType}
     * @memberof ProfileSummaryType
     */
    addressInfo?: AddressInfoType;
    /**
     *
     * @type {ProfileAllowedActionsType}
     * @memberof ProfileSummaryType
     */
    allowedActions?: ProfileAllowedActionsType;
    /**
     *
     * @type {ProfileNameType}
     * @memberof ProfileSummaryType
     */
    altName?: ProfileNameType;
    /**
     *
     * @type {AnonymizationType}
     * @memberof ProfileSummaryType
     */
    anonymization?: AnonymizationType;
    /**
     *
     * @type {ProfileCashieringType}
     * @memberof ProfileSummaryType
     */
    cashiering?: ProfileCashieringType;
    /**
     *
     * @type {CountryNameType}
     * @memberof ProfileSummaryType
     */
    citizenCountry?: CountryNameType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof ProfileSummaryType
     */
    commission?: CodeDescriptionType;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof ProfileSummaryType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof ProfileSummaryType
     */
    creatorId?: string;
    /**
     *
     * @type {EmailInfoType}
     * @memberof ProfileSummaryType
     */
    emailInfo?: EmailInfoType;
    /**
     *
     * @type {ProfileSummaryTypeFormerName}
     * @memberof ProfileSummaryType
     */
    formerName?: ProfileSummaryTypeFormerName;
    /**
     * Flag to indicate if the negotiated rates are inherited from master profile. Flag is available only when the profile is linked to master profile and master profile has negotiated rate codes attached.
     * @type {boolean}
     * @memberof ProfileSummaryType
     */
    inheritedNegRates?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof ProfileSummaryType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof ProfileSummaryType
     */
    lastModifyDateTime?: string;
    /**
     *
     * @type {LastStayInfoType}
     * @memberof ProfileSummaryType
     */
    lastStayInfo?: LastStayInfoType;
    /**
     *
     * @type {OwnersType}
     * @memberof ProfileSummaryType
     */
    owners?: OwnersType;
    /**
     *
     * @type {PrimaryProfileInfoType}
     * @memberof ProfileSummaryType
     */
    primaryAccountInfo?: PrimaryProfileInfoType;
    /**
     * Primary Company of the profile.
     * @type {string}
     * @memberof ProfileSummaryType
     */
    primaryCompany?: string;
    /**
     * This element tells profile is property exclusive or not.
     * @type {boolean}
     * @memberof ProfileSummaryType
     */
    privateProfile?: boolean;
    /**
     *
     * @type {ProfileAccessType}
     * @memberof ProfileSummaryType
     */
    profileAccessType?: ProfileAccessType;
    /**
     *
     * @type {IndicatorsType}
     * @memberof ProfileSummaryType
     */
    profileIndicators?: IndicatorsType;
    /**
     *
     * @type {ProfileMembershipType}
     * @memberof ProfileSummaryType
     */
    profileMembership?: ProfileMembershipType;
    /**
     *
     * @type {ProfileRestrictions}
     * @memberof ProfileSummaryType
     */
    profileRestrictions?: ProfileRestrictions;
    /**
     *
     * @type {ProfileTypeType}
     * @memberof ProfileSummaryType
     */
    profileType?: ProfileTypeType;
    /**
     * What level this profile is protected.
     * @type {string}
     * @memberof ProfileSummaryType
     */
    _protected?: string;
    /**
     * Property this profile is registered with.
     * @type {string}
     * @memberof ProfileSummaryType
     */
    registeredProperty?: string;
    /**
     *
     * @type {SalesInfoType}
     * @memberof ProfileSummaryType
     */
    salesInfo?: SalesInfoType;
    /**
     *
     * @type {SearchMatchesType}
     * @memberof ProfileSummaryType
     */
    searchMatches?: SearchMatchesType;
    /**
     *
     * @type {ProfileStatusType}
     * @memberof ProfileSummaryType
     */
    statusCode?: ProfileStatusType;
    /**
     * This element tells If there is an active subscription for this external profile .
     * @type {boolean}
     * @memberof ProfileSummaryType
     */
    subscription?: boolean;
    /**
     *
     * @type {ProfileTaxInfoType}
     * @memberof ProfileSummaryType
     */
    taxInfo?: ProfileTaxInfoType;
    /**
     *
     * @type {TelephoneInfoType}
     * @memberof ProfileSummaryType
     */
    telephoneInfo?: TelephoneInfoType;
    /**
     *
     * @type {URLInfoType}
     * @memberof ProfileSummaryType
     */
    uRLInfo?: URLInfoType;
    /**
     *
     * @type {VIPStatusType}
     * @memberof ProfileSummaryType
     */
    vipStatus?: VIPStatusType;
}
/**
 * Check if a given object implements the ProfileSummaryType interface.
 */
export declare function instanceOfProfileSummaryType(value: object): boolean;
export declare function ProfileSummaryTypeFromJSON(json: any): ProfileSummaryType;
export declare function ProfileSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileSummaryType;
export declare function ProfileSummaryTypeToJSON(value?: ProfileSummaryType | null): any;
