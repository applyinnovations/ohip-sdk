/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { MailingActionsType } from './MailingActionsType';
import {
    MailingActionsTypeFromJSON,
    MailingActionsTypeFromJSONTyped,
    MailingActionsTypeToJSON,
} from './MailingActionsType';
import type { PrivacyInfoType } from './PrivacyInfoType';
import {
    PrivacyInfoTypeFromJSON,
    PrivacyInfoTypeFromJSONTyped,
    PrivacyInfoTypeToJSON,
} from './PrivacyInfoType';
import type { StagedProfileAddressType } from './StagedProfileAddressType';
import {
    StagedProfileAddressTypeFromJSON,
    StagedProfileAddressTypeFromJSONTyped,
    StagedProfileAddressTypeToJSON,
} from './StagedProfileAddressType';
import type { StagedProfileCommentInfoType } from './StagedProfileCommentInfoType';
import {
    StagedProfileCommentInfoTypeFromJSON,
    StagedProfileCommentInfoTypeFromJSONTyped,
    StagedProfileCommentInfoTypeToJSON,
} from './StagedProfileCommentInfoType';
import type { StagedProfileCompanyType } from './StagedProfileCompanyType';
import {
    StagedProfileCompanyTypeFromJSON,
    StagedProfileCompanyTypeFromJSONTyped,
    StagedProfileCompanyTypeToJSON,
} from './StagedProfileCompanyType';
import type { StagedProfileCustomerType } from './StagedProfileCustomerType';
import {
    StagedProfileCustomerTypeFromJSON,
    StagedProfileCustomerTypeFromJSONTyped,
    StagedProfileCustomerTypeToJSON,
} from './StagedProfileCustomerType';
import type { StagedProfileEmailType } from './StagedProfileEmailType';
import {
    StagedProfileEmailTypeFromJSON,
    StagedProfileEmailTypeFromJSONTyped,
    StagedProfileEmailTypeToJSON,
} from './StagedProfileEmailType';
import type { StagedProfileIdentificationsType } from './StagedProfileIdentificationsType';
import {
    StagedProfileIdentificationsTypeFromJSON,
    StagedProfileIdentificationsTypeFromJSONTyped,
    StagedProfileIdentificationsTypeToJSON,
} from './StagedProfileIdentificationsType';
import type { StagedProfileKeywordType } from './StagedProfileKeywordType';
import {
    StagedProfileKeywordTypeFromJSON,
    StagedProfileKeywordTypeFromJSONTyped,
    StagedProfileKeywordTypeToJSON,
} from './StagedProfileKeywordType';
import type { StagedProfileMembershipType } from './StagedProfileMembershipType';
import {
    StagedProfileMembershipTypeFromJSON,
    StagedProfileMembershipTypeFromJSONTyped,
    StagedProfileMembershipTypeToJSON,
} from './StagedProfileMembershipType';
import type { StagedProfileNegotiatedRateType } from './StagedProfileNegotiatedRateType';
import {
    StagedProfileNegotiatedRateTypeFromJSON,
    StagedProfileNegotiatedRateTypeFromJSONTyped,
    StagedProfileNegotiatedRateTypeToJSON,
} from './StagedProfileNegotiatedRateType';
import type { StagedProfilePhoneType } from './StagedProfilePhoneType';
import {
    StagedProfilePhoneTypeFromJSON,
    StagedProfilePhoneTypeFromJSONTyped,
    StagedProfilePhoneTypeToJSON,
} from './StagedProfilePhoneType';
import type { StagedProfilePreferenceType } from './StagedProfilePreferenceType';
import {
    StagedProfilePreferenceTypeFromJSON,
    StagedProfilePreferenceTypeFromJSONTyped,
    StagedProfilePreferenceTypeToJSON,
} from './StagedProfilePreferenceType';
import type { StagedProfileRoutingInstructionType } from './StagedProfileRoutingInstructionType';
import {
    StagedProfileRoutingInstructionTypeFromJSON,
    StagedProfileRoutingInstructionTypeFromJSONTyped,
    StagedProfileRoutingInstructionTypeToJSON,
} from './StagedProfileRoutingInstructionType';
import type { StagedProfileURLType } from './StagedProfileURLType';
import {
    StagedProfileURLTypeFromJSON,
    StagedProfileURLTypeFromJSONTyped,
    StagedProfileURLTypeToJSON,
} from './StagedProfileURLType';
import type { StagedProfileUserDefinedFieldsType } from './StagedProfileUserDefinedFieldsType';
import {
    StagedProfileUserDefinedFieldsTypeFromJSON,
    StagedProfileUserDefinedFieldsTypeFromJSONTyped,
    StagedProfileUserDefinedFieldsTypeToJSON,
} from './StagedProfileUserDefinedFieldsType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Detailed information about the staged profile.
 * @export
 * @interface StagedProfileType
 */
export interface StagedProfileType {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof StagedProfileType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {StagedProfileCustomerType}
     * @memberof StagedProfileType
     */
    customer?: StagedProfileCustomerType;
    /**
     * 
     * @type {StagedProfileCompanyType}
     * @memberof StagedProfileType
     */
    company?: StagedProfileCompanyType;
    /**
     * Collection of detailed information about address for the staged profile.
     * @type {Array<StagedProfileAddressType>}
     * @memberof StagedProfileType
     */
    addresses?: Array<StagedProfileAddressType>;
    /**
     * Collection of detailed information about telephone/fax for the staged profile.
     * @type {Array<StagedProfilePhoneType>}
     * @memberof StagedProfileType
     */
    telephones?: Array<StagedProfilePhoneType>;
    /**
     * Collection of detailed information about email for the staged profile.
     * @type {Array<StagedProfileEmailType>}
     * @memberof StagedProfileType
     */
    emails?: Array<StagedProfileEmailType>;
    /**
     * Collection of detailed information about web url/address for the staged profile.
     * @type {Array<StagedProfileURLType>}
     * @memberof StagedProfileType
     */
    uRLs?: Array<StagedProfileURLType>;
    /**
     * Collection of detailed information about memberships for the staged profile.
     * @type {Array<StagedProfileMembershipType>}
     * @memberof StagedProfileType
     */
    memberships?: Array<StagedProfileMembershipType>;
    /**
     * Collection of detailed information about preferences for the staged profile.
     * @type {Array<StagedProfilePreferenceType>}
     * @memberof StagedProfileType
     */
    preferences?: Array<StagedProfilePreferenceType>;
    /**
     * Collection of detailed information about keyword for the staged profile.
     * @type {Array<StagedProfileKeywordType>}
     * @memberof StagedProfileType
     */
    keywords?: Array<StagedProfileKeywordType>;
    /**
     * Collection of detailed information about negotiated rates for the staged profile.
     * @type {Array<StagedProfileNegotiatedRateType>}
     * @memberof StagedProfileType
     */
    negotiatedRates?: Array<StagedProfileNegotiatedRateType>;
    /**
     * Collection of detailed information about identification for the staged profile.
     * @type {Array<StagedProfileIdentificationsType>}
     * @memberof StagedProfileType
     */
    identifications?: Array<StagedProfileIdentificationsType>;
    /**
     * Collection of routing instructions for the staged profile.
     * @type {Array<StagedProfileRoutingInstructionType>}
     * @memberof StagedProfileType
     */
    routingInstructions?: Array<StagedProfileRoutingInstructionType>;
    /**
     * 
     * @type {StagedProfileUserDefinedFieldsType}
     * @memberof StagedProfileType
     */
    userDefinedFields?: StagedProfileUserDefinedFieldsType;
    /**
     * 
     * @type {MailingActionsType}
     * @memberof StagedProfileType
     */
    mailingActions?: MailingActionsType;
    /**
     * 
     * @type {PrivacyInfoType}
     * @memberof StagedProfileType
     */
    privacyInfo?: PrivacyInfoType;
    /**
     * List of Notes for the customer.
     * @type {Array<StagedProfileCommentInfoType>}
     * @memberof StagedProfileType
     */
    comments?: Array<StagedProfileCommentInfoType>;
    /**
     * Hotel code that the staged profile belongs to.
     * @type {string}
     * @memberof StagedProfileType
     */
    hotelId?: string;
    /**
     * The date on which the staged profile has been received.
     * @type {string}
     * @memberof StagedProfileType
     */
    importDate?: string;
    /**
     * Type of the staged profile.
     * @type {string}
     * @memberof StagedProfileType
     */
    profileType?: string;
    /**
     * The status of the staged profile.
     * @type {string}
     * @memberof StagedProfileType
     */
    stageStatus?: string;
}

/**
 * Check if a given object implements the StagedProfileType interface.
 */
export function instanceOfStagedProfileType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StagedProfileTypeFromJSON(json: any): StagedProfileType {
    return StagedProfileTypeFromJSONTyped(json, false);
}

export function StagedProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StagedProfileType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'customer': !exists(json, 'customer') ? undefined : StagedProfileCustomerTypeFromJSON(json['customer']),
        'company': !exists(json, 'company') ? undefined : StagedProfileCompanyTypeFromJSON(json['company']),
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(StagedProfileAddressTypeFromJSON)),
        'telephones': !exists(json, 'telephones') ? undefined : ((json['telephones'] as Array<any>).map(StagedProfilePhoneTypeFromJSON)),
        'emails': !exists(json, 'emails') ? undefined : ((json['emails'] as Array<any>).map(StagedProfileEmailTypeFromJSON)),
        'uRLs': !exists(json, 'uRLs') ? undefined : ((json['uRLs'] as Array<any>).map(StagedProfileURLTypeFromJSON)),
        'memberships': !exists(json, 'memberships') ? undefined : ((json['memberships'] as Array<any>).map(StagedProfileMembershipTypeFromJSON)),
        'preferences': !exists(json, 'preferences') ? undefined : ((json['preferences'] as Array<any>).map(StagedProfilePreferenceTypeFromJSON)),
        'keywords': !exists(json, 'keywords') ? undefined : ((json['keywords'] as Array<any>).map(StagedProfileKeywordTypeFromJSON)),
        'negotiatedRates': !exists(json, 'negotiatedRates') ? undefined : ((json['negotiatedRates'] as Array<any>).map(StagedProfileNegotiatedRateTypeFromJSON)),
        'identifications': !exists(json, 'identifications') ? undefined : ((json['identifications'] as Array<any>).map(StagedProfileIdentificationsTypeFromJSON)),
        'routingInstructions': !exists(json, 'routingInstructions') ? undefined : ((json['routingInstructions'] as Array<any>).map(StagedProfileRoutingInstructionTypeFromJSON)),
        'userDefinedFields': !exists(json, 'userDefinedFields') ? undefined : StagedProfileUserDefinedFieldsTypeFromJSON(json['userDefinedFields']),
        'mailingActions': !exists(json, 'mailingActions') ? undefined : MailingActionsTypeFromJSON(json['mailingActions']),
        'privacyInfo': !exists(json, 'privacyInfo') ? undefined : PrivacyInfoTypeFromJSON(json['privacyInfo']),
        'comments': !exists(json, 'comments') ? undefined : ((json['comments'] as Array<any>).map(StagedProfileCommentInfoTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'importDate': !exists(json, 'importDate') ? undefined : json['importDate'],
        'profileType': !exists(json, 'profileType') ? undefined : json['profileType'],
        'stageStatus': !exists(json, 'stageStatus') ? undefined : json['stageStatus'],
    };
}

export function StagedProfileTypeToJSON(value?: StagedProfileType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'customer': StagedProfileCustomerTypeToJSON(value.customer),
        'company': StagedProfileCompanyTypeToJSON(value.company),
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(StagedProfileAddressTypeToJSON)),
        'telephones': value.telephones === undefined ? undefined : ((value.telephones as Array<any>).map(StagedProfilePhoneTypeToJSON)),
        'emails': value.emails === undefined ? undefined : ((value.emails as Array<any>).map(StagedProfileEmailTypeToJSON)),
        'uRLs': value.uRLs === undefined ? undefined : ((value.uRLs as Array<any>).map(StagedProfileURLTypeToJSON)),
        'memberships': value.memberships === undefined ? undefined : ((value.memberships as Array<any>).map(StagedProfileMembershipTypeToJSON)),
        'preferences': value.preferences === undefined ? undefined : ((value.preferences as Array<any>).map(StagedProfilePreferenceTypeToJSON)),
        'keywords': value.keywords === undefined ? undefined : ((value.keywords as Array<any>).map(StagedProfileKeywordTypeToJSON)),
        'negotiatedRates': value.negotiatedRates === undefined ? undefined : ((value.negotiatedRates as Array<any>).map(StagedProfileNegotiatedRateTypeToJSON)),
        'identifications': value.identifications === undefined ? undefined : ((value.identifications as Array<any>).map(StagedProfileIdentificationsTypeToJSON)),
        'routingInstructions': value.routingInstructions === undefined ? undefined : ((value.routingInstructions as Array<any>).map(StagedProfileRoutingInstructionTypeToJSON)),
        'userDefinedFields': StagedProfileUserDefinedFieldsTypeToJSON(value.userDefinedFields),
        'mailingActions': MailingActionsTypeToJSON(value.mailingActions),
        'privacyInfo': PrivacyInfoTypeToJSON(value.privacyInfo),
        'comments': value.comments === undefined ? undefined : ((value.comments as Array<any>).map(StagedProfileCommentInfoTypeToJSON)),
        'hotelId': value.hotelId,
        'importDate': value.importDate,
        'profileType': value.profileType,
        'stageStatus': value.stageStatus,
    };
}

