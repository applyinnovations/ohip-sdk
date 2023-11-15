/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { EmailInfoType } from './EmailInfoType';
import {
    EmailInfoTypeFromJSON,
    EmailInfoTypeFromJSONTyped,
    EmailInfoTypeToJSON,
} from './EmailInfoType';
import type { PersonNameType } from './PersonNameType';
import {
    PersonNameTypeFromJSON,
    PersonNameTypeFromJSONTyped,
    PersonNameTypeToJSON,
} from './PersonNameType';
import type { TelephoneInfoType } from './TelephoneInfoType';
import {
    TelephoneInfoTypeFromJSON,
    TelephoneInfoTypeFromJSONTyped,
    TelephoneInfoTypeToJSON,
} from './TelephoneInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface EmployeeInfoType
 */
export interface EmployeeInfoType {
    /**
     * 
     * @type {AddressInfoType}
     * @memberof EmployeeInfoType
     */
    addressInfo?: AddressInfoType;
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @type {string}
     * @memberof EmployeeInfoType
     */
    birthDate?: string;
    /**
     * Indicates the date of birth as masked.
     * @type {string}
     * @memberof EmployeeInfoType
     */
    birthDateMasked?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof EmployeeInfoType
     */
    department?: CodeDescriptionType;
    /**
     * 
     * @type {EmailInfoType}
     * @memberof EmployeeInfoType
     */
    emailInfo?: EmailInfoType;
    /**
     * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
     * @type {string}
     * @memberof EmployeeInfoType
     */
    gender?: string;
    /**
     * 
     * @type {PersonNameType}
     * @memberof EmployeeInfoType
     */
    personName?: PersonNameType;
    /**
     * 
     * @type {TelephoneInfoType}
     * @memberof EmployeeInfoType
     */
    phoneInfo?: TelephoneInfoType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof EmployeeInfoType
     */
    profileId?: UniqueIDType;
}

/**
 * Check if a given object implements the EmployeeInfoType interface.
 */
export function instanceOfEmployeeInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmployeeInfoTypeFromJSON(json: any): EmployeeInfoType {
    return EmployeeInfoTypeFromJSONTyped(json, false);
}

export function EmployeeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeeInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressInfo': !exists(json, 'addressInfo') ? undefined : AddressInfoTypeFromJSON(json['addressInfo']),
        'birthDate': !exists(json, 'birthDate') ? undefined : json['birthDate'],
        'birthDateMasked': !exists(json, 'birthDateMasked') ? undefined : json['birthDateMasked'],
        'department': !exists(json, 'department') ? undefined : CodeDescriptionTypeFromJSON(json['department']),
        'emailInfo': !exists(json, 'emailInfo') ? undefined : EmailInfoTypeFromJSON(json['emailInfo']),
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'personName': !exists(json, 'personName') ? undefined : PersonNameTypeFromJSON(json['personName']),
        'phoneInfo': !exists(json, 'phoneInfo') ? undefined : TelephoneInfoTypeFromJSON(json['phoneInfo']),
        'profileId': !exists(json, 'profileId') ? undefined : UniqueIDTypeFromJSON(json['profileId']),
    };
}

export function EmployeeInfoTypeToJSON(value?: EmployeeInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressInfo': AddressInfoTypeToJSON(value.addressInfo),
        'birthDate': value.birthDate,
        'birthDateMasked': value.birthDateMasked,
        'department': CodeDescriptionTypeToJSON(value.department),
        'emailInfo': EmailInfoTypeToJSON(value.emailInfo),
        'gender': value.gender,
        'personName': PersonNameTypeToJSON(value.personName),
        'phoneInfo': TelephoneInfoTypeToJSON(value.phoneInfo),
        'profileId': UniqueIDTypeToJSON(value.profileId),
    };
}

