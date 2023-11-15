/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressSearchType } from './AddressSearchType';
import {
    AddressSearchTypeFromJSON,
    AddressSearchTypeFromJSONTyped,
    AddressSearchTypeToJSON,
} from './AddressSearchType';
import type { AnonymizationType } from './AnonymizationType';
import {
    AnonymizationTypeFromJSON,
    AnonymizationTypeFromJSONTyped,
    AnonymizationTypeToJSON,
} from './AnonymizationType';
import type { CountryNameType } from './CountryNameType';
import {
    CountryNameTypeFromJSON,
    CountryNameTypeFromJSONTyped,
    CountryNameTypeToJSON,
} from './CountryNameType';
import type { GuestLastStayInfoType } from './GuestLastStayInfoType';
import {
    GuestLastStayInfoTypeFromJSON,
    GuestLastStayInfoTypeFromJSONTyped,
    GuestLastStayInfoTypeToJSON,
} from './GuestLastStayInfoType';
import type { MembershipInfoType } from './MembershipInfoType';
import {
    MembershipInfoTypeFromJSON,
    MembershipInfoTypeFromJSONTyped,
    MembershipInfoTypeToJSON,
} from './MembershipInfoType';
import type { NameTypeType } from './NameTypeType';
import {
    NameTypeTypeFromJSON,
    NameTypeTypeFromJSONTyped,
    NameTypeTypeToJSON,
} from './NameTypeType';
import type { ResAccompanyGuestInfoType } from './ResAccompanyGuestInfoType';
import {
    ResAccompanyGuestInfoTypeFromJSON,
    ResAccompanyGuestInfoTypeFromJSONTyped,
    ResAccompanyGuestInfoTypeToJSON,
} from './ResAccompanyGuestInfoType';
import type { ResGuestExternalInfoType } from './ResGuestExternalInfoType';
import {
    ResGuestExternalInfoTypeFromJSON,
    ResGuestExternalInfoTypeFromJSONTyped,
    ResGuestExternalInfoTypeToJSON,
} from './ResGuestExternalInfoType';
import type { VIPType } from './VIPType';
import {
    VIPTypeFromJSON,
    VIPTypeFromJSONTyped,
    VIPTypeToJSON,
} from './VIPType';

/**
 * Specifies Company or Travel Agent profile using IATA or Corp. No.
 * @export
 * @interface ResGuestInfoType
 */
export interface ResGuestInfoType {
    /**
     * Collection of accompany guests
     * @type {Array<ResAccompanyGuestInfoType>}
     * @memberof ResGuestInfoType
     */
    accompanyGuests?: Array<ResAccompanyGuestInfoType>;
    /**
     * 
     * @type {AddressSearchType}
     * @memberof ResGuestInfoType
     */
    address?: AddressSearchType;
    /**
     * Altername full display name
     * @type {string}
     * @memberof ResGuestInfoType
     */
    alternateFullName?: string;
    /**
     * Alternate given name, first name or names
     * @type {string}
     * @memberof ResGuestInfoType
     */
    alternateGivenName?: string;
    /**
     * Alternate family name, last name.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    alternateSurname?: string;
    /**
     * 
     * @type {AnonymizationType}
     * @memberof ResGuestInfoType
     */
    anonymization?: AnonymizationType;
    /**
     * Date of birth
     * @type {string}
     * @memberof ResGuestInfoType
     */
    birthDate?: string;
    /**
     * Email address
     * @type {string}
     * @memberof ResGuestInfoType
     */
    email?: string;
    /**
     * 
     * @type {ResGuestExternalInfoType}
     * @memberof ResGuestInfoType
     */
    externalInfo?: ResGuestExternalInfoType;
    /**
     * Full display name
     * @type {string}
     * @memberof ResGuestInfoType
     */
    fullName?: string;
    /**
     * Given name, first name or names
     * @type {string}
     * @memberof ResGuestInfoType
     */
    givenName?: string;
    /**
     * 
     * @type {GuestLastStayInfoType}
     * @memberof ResGuestInfoType
     */
    guestLastStayInfo?: GuestLastStayInfoType;
    /**
     * True indicates there are restrictions associated with the current profile.
     * @type {boolean}
     * @memberof ResGuestInfoType
     */
    guestRestricted?: boolean;
    /**
     * Guest profile restricted reason code
     * @type {string}
     * @memberof ResGuestInfoType
     */
    guestRestrictedCode?: string;
    /**
     * Guest profile restricted reason description
     * @type {string}
     * @memberof ResGuestInfoType
     */
    guestRestrictedReasonDesc?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    id?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    language?: string;
    /**
     * 
     * @type {MembershipInfoType}
     * @memberof ResGuestInfoType
     */
    membership?: MembershipInfoType;
    /**
     * The middle name of the person name
     * @type {string}
     * @memberof ResGuestInfoType
     */
    middleName?: string;
    /**
     * Salutation of honorific. (e.g., Mr. Mrs., Ms., Miss, Dr.)
     * @type {string}
     * @memberof ResGuestInfoType
     */
    namePrefix?: string;
    /**
     * Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.).
     * @type {string}
     * @memberof ResGuestInfoType
     */
    nameSuffix?: string;
    /**
     * Degree or honors (e.g., Ph.D., M.D.)
     * @type {string}
     * @memberof ResGuestInfoType
     */
    nameTitle?: string;
    /**
     * 
     * @type {NameTypeType}
     * @memberof ResGuestInfoType
     */
    nameType?: NameTypeType;
    /**
     * 
     * @type {CountryNameType}
     * @memberof ResGuestInfoType
     */
    nationality?: CountryNameType;
    /**
     * Phone number
     * @type {string}
     * @memberof ResGuestInfoType
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the police registration card number.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    registrationCardNo?: string;
    /**
     * Family name, last name.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    surname?: string;
    /**
     * e.g "van der", "von", "de"
     * @type {string}
     * @memberof ResGuestInfoType
     */
    surnamePrefix?: string;
    /**
     * A reference to the type of object defined by the UniqueID elementSpace.
     * @type {string}
     * @memberof ResGuestInfoType
     */
    type?: string;
    /**
     * 
     * @type {VIPType}
     * @memberof ResGuestInfoType
     */
    vip?: VIPType;
}

/**
 * Check if a given object implements the ResGuestInfoType interface.
 */
export function instanceOfResGuestInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResGuestInfoTypeFromJSON(json: any): ResGuestInfoType {
    return ResGuestInfoTypeFromJSONTyped(json, false);
}

export function ResGuestInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResGuestInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accompanyGuests': !exists(json, 'accompanyGuests') ? undefined : ((json['accompanyGuests'] as Array<any>).map(ResAccompanyGuestInfoTypeFromJSON)),
        'address': !exists(json, 'address') ? undefined : AddressSearchTypeFromJSON(json['address']),
        'alternateFullName': !exists(json, 'alternateFullName') ? undefined : json['alternateFullName'],
        'alternateGivenName': !exists(json, 'alternateGivenName') ? undefined : json['alternateGivenName'],
        'alternateSurname': !exists(json, 'alternateSurname') ? undefined : json['alternateSurname'],
        'anonymization': !exists(json, 'anonymization') ? undefined : AnonymizationTypeFromJSON(json['anonymization']),
        'birthDate': !exists(json, 'birthDate') ? undefined : json['birthDate'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'externalInfo': !exists(json, 'externalInfo') ? undefined : ResGuestExternalInfoTypeFromJSON(json['externalInfo']),
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'givenName': !exists(json, 'givenName') ? undefined : json['givenName'],
        'guestLastStayInfo': !exists(json, 'guestLastStayInfo') ? undefined : GuestLastStayInfoTypeFromJSON(json['guestLastStayInfo']),
        'guestRestricted': !exists(json, 'guestRestricted') ? undefined : json['guestRestricted'],
        'guestRestrictedCode': !exists(json, 'guestRestrictedCode') ? undefined : json['guestRestrictedCode'],
        'guestRestrictedReasonDesc': !exists(json, 'guestRestrictedReasonDesc') ? undefined : json['guestRestrictedReasonDesc'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'membership': !exists(json, 'membership') ? undefined : MembershipInfoTypeFromJSON(json['membership']),
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'namePrefix': !exists(json, 'namePrefix') ? undefined : json['namePrefix'],
        'nameSuffix': !exists(json, 'nameSuffix') ? undefined : json['nameSuffix'],
        'nameTitle': !exists(json, 'nameTitle') ? undefined : json['nameTitle'],
        'nameType': !exists(json, 'nameType') ? undefined : NameTypeTypeFromJSON(json['nameType']),
        'nationality': !exists(json, 'nationality') ? undefined : CountryNameTypeFromJSON(json['nationality']),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'registrationCardNo': !exists(json, 'registrationCardNo') ? undefined : json['registrationCardNo'],
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'surnamePrefix': !exists(json, 'surnamePrefix') ? undefined : json['surnamePrefix'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'vip': !exists(json, 'vip') ? undefined : VIPTypeFromJSON(json['vip']),
    };
}

export function ResGuestInfoTypeToJSON(value?: ResGuestInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accompanyGuests': value.accompanyGuests === undefined ? undefined : ((value.accompanyGuests as Array<any>).map(ResAccompanyGuestInfoTypeToJSON)),
        'address': AddressSearchTypeToJSON(value.address),
        'alternateFullName': value.alternateFullName,
        'alternateGivenName': value.alternateGivenName,
        'alternateSurname': value.alternateSurname,
        'anonymization': AnonymizationTypeToJSON(value.anonymization),
        'birthDate': value.birthDate,
        'email': value.email,
        'externalInfo': ResGuestExternalInfoTypeToJSON(value.externalInfo),
        'fullName': value.fullName,
        'givenName': value.givenName,
        'guestLastStayInfo': GuestLastStayInfoTypeToJSON(value.guestLastStayInfo),
        'guestRestricted': value.guestRestricted,
        'guestRestrictedCode': value.guestRestrictedCode,
        'guestRestrictedReasonDesc': value.guestRestrictedReasonDesc,
        'id': value.id,
        'language': value.language,
        'membership': MembershipInfoTypeToJSON(value.membership),
        'middleName': value.middleName,
        'namePrefix': value.namePrefix,
        'nameSuffix': value.nameSuffix,
        'nameTitle': value.nameTitle,
        'nameType': NameTypeTypeToJSON(value.nameType),
        'nationality': CountryNameTypeToJSON(value.nationality),
        'phoneNumber': value.phoneNumber,
        'registrationCardNo': value.registrationCardNo,
        'surname': value.surname,
        'surnamePrefix': value.surnamePrefix,
        'type': value.type,
        'vip': VIPTypeToJSON(value.vip),
    };
}

