/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CompanyType } from './CompanyType';
import {
    CompanyTypeFromJSON,
    CompanyTypeFromJSONTyped,
    CompanyTypeToJSON,
} from './CompanyType';
import type { CustomerType } from './CustomerType';
import {
    CustomerTypeFromJSON,
    CustomerTypeFromJSONTyped,
    CustomerTypeToJSON,
} from './CustomerType';
import type { ECertificatesType } from './ECertificatesType';
import {
    ECertificatesTypeFromJSON,
    ECertificatesTypeFromJSONTyped,
    ECertificatesTypeToJSON,
} from './ECertificatesType';
import type { ImageSetType } from './ImageSetType';
import {
    ImageSetTypeFromJSON,
    ImageSetTypeFromJSONTyped,
    ImageSetTypeToJSON,
} from './ImageSetType';
import type { LastStayInfoType } from './LastStayInfoType';
import {
    LastStayInfoTypeFromJSON,
    LastStayInfoTypeFromJSONTyped,
    LastStayInfoTypeToJSON,
} from './LastStayInfoType';
import type { ProfileCashieringType } from './ProfileCashieringType';
import {
    ProfileCashieringTypeFromJSON,
    ProfileCashieringTypeFromJSONTyped,
    ProfileCashieringTypeToJSON,
} from './ProfileCashieringType';
import type { ProfileCommissionType } from './ProfileCommissionType';
import {
    ProfileCommissionTypeFromJSON,
    ProfileCommissionTypeFromJSONTyped,
    ProfileCommissionTypeToJSON,
} from './ProfileCommissionType';
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
import type { ProfileTypeAddresses } from './ProfileTypeAddresses';
import {
    ProfileTypeAddressesFromJSON,
    ProfileTypeAddressesFromJSONTyped,
    ProfileTypeAddressesToJSON,
} from './ProfileTypeAddresses';
import type { ProfileTypeComments } from './ProfileTypeComments';
import {
    ProfileTypeCommentsFromJSON,
    ProfileTypeCommentsFromJSONTyped,
    ProfileTypeCommentsToJSON,
} from './ProfileTypeComments';
import type { ProfileTypeEmails } from './ProfileTypeEmails';
import {
    ProfileTypeEmailsFromJSON,
    ProfileTypeEmailsFromJSONTyped,
    ProfileTypeEmailsToJSON,
} from './ProfileTypeEmails';
import type { ProfileTypePreferenceCollection } from './ProfileTypePreferenceCollection';
import {
    ProfileTypePreferenceCollectionFromJSON,
    ProfileTypePreferenceCollectionFromJSONTyped,
    ProfileTypePreferenceCollectionToJSON,
} from './ProfileTypePreferenceCollection';
import type { ProfileTypeProfileDeliveryMethods } from './ProfileTypeProfileDeliveryMethods';
import {
    ProfileTypeProfileDeliveryMethodsFromJSON,
    ProfileTypeProfileDeliveryMethodsFromJSONTyped,
    ProfileTypeProfileDeliveryMethodsToJSON,
} from './ProfileTypeProfileDeliveryMethods';
import type { ProfileTypeProfileMemberships } from './ProfileTypeProfileMemberships';
import {
    ProfileTypeProfileMembershipsFromJSON,
    ProfileTypeProfileMembershipsFromJSONTyped,
    ProfileTypeProfileMembershipsToJSON,
} from './ProfileTypeProfileMemberships';
import type { ProfileTypeRelationships } from './ProfileTypeRelationships';
import {
    ProfileTypeRelationshipsFromJSON,
    ProfileTypeRelationshipsFromJSONTyped,
    ProfileTypeRelationshipsToJSON,
} from './ProfileTypeRelationships';
import type { ProfileTypeRelationshipsSummary } from './ProfileTypeRelationshipsSummary';
import {
    ProfileTypeRelationshipsSummaryFromJSON,
    ProfileTypeRelationshipsSummaryFromJSONTyped,
    ProfileTypeRelationshipsSummaryToJSON,
} from './ProfileTypeRelationshipsSummary';
import type { ProfileTypeRoomOwnershipsList } from './ProfileTypeRoomOwnershipsList';
import {
    ProfileTypeRoomOwnershipsListFromJSON,
    ProfileTypeRoomOwnershipsListFromJSONTyped,
    ProfileTypeRoomOwnershipsListToJSON,
} from './ProfileTypeRoomOwnershipsList';
import type { ProfileTypeTelephones } from './ProfileTypeTelephones';
import {
    ProfileTypeTelephonesFromJSON,
    ProfileTypeTelephonesFromJSONTyped,
    ProfileTypeTelephonesToJSON,
} from './ProfileTypeTelephones';
import type { ProfileTypeType } from './ProfileTypeType';
import {
    ProfileTypeTypeFromJSON,
    ProfileTypeTypeFromJSONTyped,
    ProfileTypeTypeToJSON,
} from './ProfileTypeType';
import type { ProfileTypeURLs } from './ProfileTypeURLs';
import {
    ProfileTypeURLsFromJSON,
    ProfileTypeURLsFromJSONTyped,
    ProfileTypeURLsToJSON,
} from './ProfileTypeURLs';
import type { ReservationHistoryFutureInfoType } from './ReservationHistoryFutureInfoType';
import {
    ReservationHistoryFutureInfoTypeFromJSON,
    ReservationHistoryFutureInfoTypeFromJSONTyped,
    ReservationHistoryFutureInfoTypeToJSON,
} from './ReservationHistoryFutureInfoType';
import type { ReservationStayHistoryFutureInfoType } from './ReservationStayHistoryFutureInfoType';
import {
    ReservationStayHistoryFutureInfoTypeFromJSON,
    ReservationStayHistoryFutureInfoTypeFromJSONTyped,
    ReservationStayHistoryFutureInfoTypeToJSON,
} from './ReservationStayHistoryFutureInfoType';
import type { UserDefinedFieldsType } from './UserDefinedFieldsType';
import {
    UserDefinedFieldsTypeFromJSON,
    UserDefinedFieldsTypeFromJSONTyped,
    UserDefinedFieldsTypeToJSON,
} from './UserDefinedFieldsType';

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
     * 
     * @type {ECertificatesType}
     * @memberof ProfileType
     */
    eCertificates?: ECertificatesType;
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
     * Populates true if the profile has commission configured false otherwise.
     * @type {boolean}
     * @memberof ProfileType
     */
    hasCommission?: boolean;
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
     * @type {ProfileTypeRoomOwnershipsList}
     * @memberof ProfileType
     */
    roomOwnershipsList?: ProfileTypeRoomOwnershipsList;
    /**
     * Flag to show inactive Room Owners.
     * @type {boolean}
     * @memberof ProfileType
     */
    showInactiveRoomOwners?: boolean;
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
     * 
     * @type {ProfileTypeTelephones}
     * @memberof ProfileType
     */
    telephones?: ProfileTypeTelephones;
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
}

/**
 * Check if a given object implements the ProfileType interface.
 */
export function instanceOfProfileType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileTypeFromJSON(json: any): ProfileType {
    return ProfileTypeFromJSONTyped(json, false);
}

export function ProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addresses': !exists(json, 'addresses') ? undefined : ProfileTypeAddressesFromJSON(json['addresses']),
        'cashiering': !exists(json, 'cashiering') ? undefined : ProfileCashieringTypeFromJSON(json['cashiering']),
        'comments': !exists(json, 'comments') ? undefined : ProfileTypeCommentsFromJSON(json['comments']),
        'commissionInfoList': !exists(json, 'commissionInfoList') ? undefined : ((json['commissionInfoList'] as Array<any>).map(ProfileCommissionTypeFromJSON)),
        'company': !exists(json, 'company') ? undefined : CompanyTypeFromJSON(json['company']),
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'customer': !exists(json, 'customer') ? undefined : CustomerTypeFromJSON(json['customer']),
        'eCertificates': !exists(json, 'eCertificates') ? undefined : ECertificatesTypeFromJSON(json['eCertificates']),
        'eligibleForFiscalFolio': !exists(json, 'eligibleForFiscalFolio') ? undefined : json['eligibleForFiscalFolio'],
        'emails': !exists(json, 'emails') ? undefined : ProfileTypeEmailsFromJSON(json['emails']),
        'hasCommission': !exists(json, 'hasCommission') ? undefined : json['hasCommission'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastStayInfo': !exists(json, 'lastStayInfo') ? undefined : LastStayInfoTypeFromJSON(json['lastStayInfo']),
        'markAsRecentlyAccessed': !exists(json, 'markAsRecentlyAccessed') ? undefined : json['markAsRecentlyAccessed'],
        'markForHistory': !exists(json, 'markForHistory') ? undefined : json['markForHistory'],
        'ownerCode': !exists(json, 'ownerCode') ? undefined : json['ownerCode'],
        'preferenceCollection': !exists(json, 'preferenceCollection') ? undefined : ProfileTypePreferenceCollectionFromJSON(json['preferenceCollection']),
        'profileDeliveryMethods': !exists(json, 'profileDeliveryMethods') ? undefined : ProfileTypeProfileDeliveryMethodsFromJSON(json['profileDeliveryMethods']),
        'profileImage': !exists(json, 'profileImage') ? undefined : ImageSetTypeFromJSON(json['profileImage']),
        'profileMemberships': !exists(json, 'profileMemberships') ? undefined : ProfileTypeProfileMembershipsFromJSON(json['profileMemberships']),
        'profileRestrictions': !exists(json, 'profileRestrictions') ? undefined : ProfileRestrictionsFromJSON(json['profileRestrictions']),
        'profileType': !exists(json, 'profileType') ? undefined : ProfileTypeTypeFromJSON(json['profileType']),
        'protectedBy': !exists(json, 'protectedBy') ? undefined : json['protectedBy'],
        'registeredProperty': !exists(json, 'registeredProperty') ? undefined : json['registeredProperty'],
        'relationships': !exists(json, 'relationships') ? undefined : ProfileTypeRelationshipsFromJSON(json['relationships']),
        'relationshipsSummary': !exists(json, 'relationshipsSummary') ? undefined : ProfileTypeRelationshipsSummaryFromJSON(json['relationshipsSummary']),
        'requestForHotel': !exists(json, 'requestForHotel') ? undefined : json['requestForHotel'],
        'reservationInfoList': !exists(json, 'reservationInfoList') ? undefined : ReservationHistoryFutureInfoTypeFromJSON(json['reservationInfoList']),
        'roomOwnershipsList': !exists(json, 'roomOwnershipsList') ? undefined : ProfileTypeRoomOwnershipsListFromJSON(json['roomOwnershipsList']),
        'showInactiveRoomOwners': !exists(json, 'showInactiveRoomOwners') ? undefined : json['showInactiveRoomOwners'],
        'statusCode': !exists(json, 'statusCode') ? undefined : ProfileStatusTypeFromJSON(json['statusCode']),
        'stayReservationInfoList': !exists(json, 'stayReservationInfoList') ? undefined : ReservationStayHistoryFutureInfoTypeFromJSON(json['stayReservationInfoList']),
        'telephones': !exists(json, 'telephones') ? undefined : ProfileTypeTelephonesFromJSON(json['telephones']),
        'traceCode': !exists(json, 'traceCode') ? undefined : json['traceCode'],
        'uRLs': !exists(json, 'uRLs') ? undefined : ProfileTypeURLsFromJSON(json['uRLs']),
        'userDefinedFields': !exists(json, 'userDefinedFields') ? undefined : UserDefinedFieldsTypeFromJSON(json['userDefinedFields']),
    };
}

export function ProfileTypeToJSON(value?: ProfileType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addresses': ProfileTypeAddressesToJSON(value.addresses),
        'cashiering': ProfileCashieringTypeToJSON(value.cashiering),
        'comments': ProfileTypeCommentsToJSON(value.comments),
        'commissionInfoList': value.commissionInfoList === undefined ? undefined : ((value.commissionInfoList as Array<any>).map(ProfileCommissionTypeToJSON)),
        'company': CompanyTypeToJSON(value.company),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'customer': CustomerTypeToJSON(value.customer),
        'eCertificates': ECertificatesTypeToJSON(value.eCertificates),
        'eligibleForFiscalFolio': value.eligibleForFiscalFolio,
        'emails': ProfileTypeEmailsToJSON(value.emails),
        'hasCommission': value.hasCommission,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastStayInfo': LastStayInfoTypeToJSON(value.lastStayInfo),
        'markAsRecentlyAccessed': value.markAsRecentlyAccessed,
        'markForHistory': value.markForHistory,
        'ownerCode': value.ownerCode,
        'preferenceCollection': ProfileTypePreferenceCollectionToJSON(value.preferenceCollection),
        'profileDeliveryMethods': ProfileTypeProfileDeliveryMethodsToJSON(value.profileDeliveryMethods),
        'profileImage': ImageSetTypeToJSON(value.profileImage),
        'profileMemberships': ProfileTypeProfileMembershipsToJSON(value.profileMemberships),
        'profileRestrictions': ProfileRestrictionsToJSON(value.profileRestrictions),
        'profileType': ProfileTypeTypeToJSON(value.profileType),
        'protectedBy': value.protectedBy,
        'registeredProperty': value.registeredProperty,
        'relationships': ProfileTypeRelationshipsToJSON(value.relationships),
        'relationshipsSummary': ProfileTypeRelationshipsSummaryToJSON(value.relationshipsSummary),
        'requestForHotel': value.requestForHotel,
        'reservationInfoList': ReservationHistoryFutureInfoTypeToJSON(value.reservationInfoList),
        'roomOwnershipsList': ProfileTypeRoomOwnershipsListToJSON(value.roomOwnershipsList),
        'showInactiveRoomOwners': value.showInactiveRoomOwners,
        'statusCode': ProfileStatusTypeToJSON(value.statusCode),
        'stayReservationInfoList': ReservationStayHistoryFutureInfoTypeToJSON(value.stayReservationInfoList),
        'telephones': ProfileTypeTelephonesToJSON(value.telephones),
        'traceCode': value.traceCode,
        'uRLs': ProfileTypeURLsToJSON(value.uRLs),
        'userDefinedFields': UserDefinedFieldsTypeToJSON(value.userDefinedFields),
    };
}
