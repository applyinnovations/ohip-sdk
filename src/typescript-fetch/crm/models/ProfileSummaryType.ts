/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AddressInfoType } from './AddressInfoType';
import {
    AddressInfoTypeFromJSON,
    AddressInfoTypeFromJSONTyped,
    AddressInfoTypeToJSON,
} from './AddressInfoType';
import type { AnonymizationType } from './AnonymizationType';
import {
    AnonymizationTypeFromJSON,
    AnonymizationTypeFromJSONTyped,
    AnonymizationTypeToJSON,
} from './AnonymizationType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { CountryNameType } from './CountryNameType';
import {
    CountryNameTypeFromJSON,
    CountryNameTypeFromJSONTyped,
    CountryNameTypeToJSON,
} from './CountryNameType';
import type { DirectBillingType } from './DirectBillingType';
import {
    DirectBillingTypeFromJSON,
    DirectBillingTypeFromJSONTyped,
    DirectBillingTypeToJSON,
} from './DirectBillingType';
import type { EmailInfoType } from './EmailInfoType';
import {
    EmailInfoTypeFromJSON,
    EmailInfoTypeFromJSONTyped,
    EmailInfoTypeToJSON,
} from './EmailInfoType';
import type { IndicatorsType } from './IndicatorsType';
import {
    IndicatorsTypeFromJSON,
    IndicatorsTypeFromJSONTyped,
    IndicatorsTypeToJSON,
} from './IndicatorsType';
import type { LastStayInfoType } from './LastStayInfoType';
import {
    LastStayInfoTypeFromJSON,
    LastStayInfoTypeFromJSONTyped,
    LastStayInfoTypeToJSON,
} from './LastStayInfoType';
import type { OwnersType } from './OwnersType';
import {
    OwnersTypeFromJSON,
    OwnersTypeFromJSONTyped,
    OwnersTypeToJSON,
} from './OwnersType';
import type { PrimaryProfileInfoType } from './PrimaryProfileInfoType';
import {
    PrimaryProfileInfoTypeFromJSON,
    PrimaryProfileInfoTypeFromJSONTyped,
    PrimaryProfileInfoTypeToJSON,
} from './PrimaryProfileInfoType';
import type { ProfileAccessType } from './ProfileAccessType';
import {
    ProfileAccessTypeFromJSON,
    ProfileAccessTypeFromJSONTyped,
    ProfileAccessTypeToJSON,
} from './ProfileAccessType';
import type { ProfileAdditionalInfoType } from './ProfileAdditionalInfoType';
import {
    ProfileAdditionalInfoTypeFromJSON,
    ProfileAdditionalInfoTypeFromJSONTyped,
    ProfileAdditionalInfoTypeToJSON,
} from './ProfileAdditionalInfoType';
import type { ProfileAllowedActionsType } from './ProfileAllowedActionsType';
import {
    ProfileAllowedActionsTypeFromJSON,
    ProfileAllowedActionsTypeFromJSONTyped,
    ProfileAllowedActionsTypeToJSON,
} from './ProfileAllowedActionsType';
import type { ProfileCashieringType } from './ProfileCashieringType';
import {
    ProfileCashieringTypeFromJSON,
    ProfileCashieringTypeFromJSONTyped,
    ProfileCashieringTypeToJSON,
} from './ProfileCashieringType';
import type { ProfileMembershipType } from './ProfileMembershipType';
import {
    ProfileMembershipTypeFromJSON,
    ProfileMembershipTypeFromJSONTyped,
    ProfileMembershipTypeToJSON,
} from './ProfileMembershipType';
import type { ProfileNameType } from './ProfileNameType';
import {
    ProfileNameTypeFromJSON,
    ProfileNameTypeFromJSONTyped,
    ProfileNameTypeToJSON,
} from './ProfileNameType';
import type { ProfileRestrictions } from './ProfileRestrictions';
import {
    ProfileRestrictionsFromJSON,
    ProfileRestrictionsFromJSONTyped,
    ProfileRestrictionsToJSON,
} from './ProfileRestrictions';
import type { ProfileStatusType } from './ProfileStatusType';
import {
    ProfileStatusTypeFromJSON,
    ProfileStatusTypeFromJSONTyped,
    ProfileStatusTypeToJSON,
} from './ProfileStatusType';
import type { ProfileSummaryTypeFormerName } from './ProfileSummaryTypeFormerName';
import {
    ProfileSummaryTypeFormerNameFromJSON,
    ProfileSummaryTypeFormerNameFromJSONTyped,
    ProfileSummaryTypeFormerNameToJSON,
} from './ProfileSummaryTypeFormerName';
import type { ProfileTaxInfoType } from './ProfileTaxInfoType';
import {
    ProfileTaxInfoTypeFromJSON,
    ProfileTaxInfoTypeFromJSONTyped,
    ProfileTaxInfoTypeToJSON,
} from './ProfileTaxInfoType';
import type { ProfileTypeType } from './ProfileTypeType';
import {
    ProfileTypeTypeFromJSON,
    ProfileTypeTypeFromJSONTyped,
    ProfileTypeTypeToJSON,
} from './ProfileTypeType';
import type { SalesInfoType } from './SalesInfoType';
import {
    SalesInfoTypeFromJSON,
    SalesInfoTypeFromJSONTyped,
    SalesInfoTypeToJSON,
} from './SalesInfoType';
import type { SearchMatchesType } from './SearchMatchesType';
import {
    SearchMatchesTypeFromJSON,
    SearchMatchesTypeFromJSONTyped,
    SearchMatchesTypeToJSON,
} from './SearchMatchesType';
import type { TelephoneInfoType } from './TelephoneInfoType';
import {
    TelephoneInfoTypeFromJSON,
    TelephoneInfoTypeFromJSONTyped,
    TelephoneInfoTypeToJSON,
} from './TelephoneInfoType';
import type { URLInfoType } from './URLInfoType';
import {
    URLInfoTypeFromJSON,
    URLInfoTypeFromJSONTyped,
    URLInfoTypeToJSON,
} from './URLInfoType';
import type { VIPStatusType } from './VIPStatusType';
import {
    VIPStatusTypeFromJSON,
    VIPStatusTypeFromJSONTyped,
    VIPStatusTypeToJSON,
} from './VIPStatusType';

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
export function instanceOfProfileSummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileSummaryTypeFromJSON(json: any): ProfileSummaryType {
    return ProfileSummaryTypeFromJSONTyped(json, false);
}

export function ProfileSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileSummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aRAccount': !exists(json, 'aRAccount') ? undefined : DirectBillingTypeFromJSON(json['aRAccount']),
        'additionalInfo': !exists(json, 'additionalInfo') ? undefined : ProfileAdditionalInfoTypeFromJSON(json['additionalInfo']),
        'addressInfo': !exists(json, 'addressInfo') ? undefined : AddressInfoTypeFromJSON(json['addressInfo']),
        'allowedActions': !exists(json, 'allowedActions') ? undefined : ProfileAllowedActionsTypeFromJSON(json['allowedActions']),
        'altName': !exists(json, 'altName') ? undefined : ProfileNameTypeFromJSON(json['altName']),
        'anonymization': !exists(json, 'anonymization') ? undefined : AnonymizationTypeFromJSON(json['anonymization']),
        'cashiering': !exists(json, 'cashiering') ? undefined : ProfileCashieringTypeFromJSON(json['cashiering']),
        'citizenCountry': !exists(json, 'citizenCountry') ? undefined : CountryNameTypeFromJSON(json['citizenCountry']),
        'commission': !exists(json, 'commission') ? undefined : CodeDescriptionTypeFromJSON(json['commission']),
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'emailInfo': !exists(json, 'emailInfo') ? undefined : EmailInfoTypeFromJSON(json['emailInfo']),
        'formerName': !exists(json, 'formerName') ? undefined : ProfileSummaryTypeFormerNameFromJSON(json['formerName']),
        'inheritedNegRates': !exists(json, 'inheritedNegRates') ? undefined : json['inheritedNegRates'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastStayInfo': !exists(json, 'lastStayInfo') ? undefined : LastStayInfoTypeFromJSON(json['lastStayInfo']),
        'owners': !exists(json, 'owners') ? undefined : OwnersTypeFromJSON(json['owners']),
        'primaryAccountInfo': !exists(json, 'primaryAccountInfo') ? undefined : PrimaryProfileInfoTypeFromJSON(json['primaryAccountInfo']),
        'primaryCompany': !exists(json, 'primaryCompany') ? undefined : json['primaryCompany'],
        'privateProfile': !exists(json, 'privateProfile') ? undefined : json['privateProfile'],
        'profileAccessType': !exists(json, 'profileAccessType') ? undefined : ProfileAccessTypeFromJSON(json['profileAccessType']),
        'profileIndicators': !exists(json, 'profileIndicators') ? undefined : IndicatorsTypeFromJSON(json['profileIndicators']),
        'profileMembership': !exists(json, 'profileMembership') ? undefined : ProfileMembershipTypeFromJSON(json['profileMembership']),
        'profileRestrictions': !exists(json, 'profileRestrictions') ? undefined : ProfileRestrictionsFromJSON(json['profileRestrictions']),
        'profileType': !exists(json, 'profileType') ? undefined : ProfileTypeTypeFromJSON(json['profileType']),
        '_protected': !exists(json, 'protected') ? undefined : json['protected'],
        'registeredProperty': !exists(json, 'registeredProperty') ? undefined : json['registeredProperty'],
        'salesInfo': !exists(json, 'salesInfo') ? undefined : SalesInfoTypeFromJSON(json['salesInfo']),
        'searchMatches': !exists(json, 'searchMatches') ? undefined : SearchMatchesTypeFromJSON(json['searchMatches']),
        'statusCode': !exists(json, 'statusCode') ? undefined : ProfileStatusTypeFromJSON(json['statusCode']),
        'subscription': !exists(json, 'subscription') ? undefined : json['subscription'],
        'taxInfo': !exists(json, 'taxInfo') ? undefined : ProfileTaxInfoTypeFromJSON(json['taxInfo']),
        'telephoneInfo': !exists(json, 'telephoneInfo') ? undefined : TelephoneInfoTypeFromJSON(json['telephoneInfo']),
        'uRLInfo': !exists(json, 'uRLInfo') ? undefined : URLInfoTypeFromJSON(json['uRLInfo']),
        'vipStatus': !exists(json, 'vipStatus') ? undefined : VIPStatusTypeFromJSON(json['vipStatus']),
    };
}

export function ProfileSummaryTypeToJSON(value?: ProfileSummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aRAccount': DirectBillingTypeToJSON(value.aRAccount),
        'additionalInfo': ProfileAdditionalInfoTypeToJSON(value.additionalInfo),
        'addressInfo': AddressInfoTypeToJSON(value.addressInfo),
        'allowedActions': ProfileAllowedActionsTypeToJSON(value.allowedActions),
        'altName': ProfileNameTypeToJSON(value.altName),
        'anonymization': AnonymizationTypeToJSON(value.anonymization),
        'cashiering': ProfileCashieringTypeToJSON(value.cashiering),
        'citizenCountry': CountryNameTypeToJSON(value.citizenCountry),
        'commission': CodeDescriptionTypeToJSON(value.commission),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'emailInfo': EmailInfoTypeToJSON(value.emailInfo),
        'formerName': ProfileSummaryTypeFormerNameToJSON(value.formerName),
        'inheritedNegRates': value.inheritedNegRates,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastStayInfo': LastStayInfoTypeToJSON(value.lastStayInfo),
        'owners': OwnersTypeToJSON(value.owners),
        'primaryAccountInfo': PrimaryProfileInfoTypeToJSON(value.primaryAccountInfo),
        'primaryCompany': value.primaryCompany,
        'privateProfile': value.privateProfile,
        'profileAccessType': ProfileAccessTypeToJSON(value.profileAccessType),
        'profileIndicators': IndicatorsTypeToJSON(value.profileIndicators),
        'profileMembership': ProfileMembershipTypeToJSON(value.profileMembership),
        'profileRestrictions': ProfileRestrictionsToJSON(value.profileRestrictions),
        'profileType': ProfileTypeTypeToJSON(value.profileType),
        'protected': value._protected,
        'registeredProperty': value.registeredProperty,
        'salesInfo': SalesInfoTypeToJSON(value.salesInfo),
        'searchMatches': SearchMatchesTypeToJSON(value.searchMatches),
        'statusCode': ProfileStatusTypeToJSON(value.statusCode),
        'subscription': value.subscription,
        'taxInfo': ProfileTaxInfoTypeToJSON(value.taxInfo),
        'telephoneInfo': TelephoneInfoTypeToJSON(value.telephoneInfo),
        'uRLInfo': URLInfoTypeToJSON(value.uRLInfo),
        'vipStatus': VIPStatusTypeToJSON(value.vipStatus),
    };
}
