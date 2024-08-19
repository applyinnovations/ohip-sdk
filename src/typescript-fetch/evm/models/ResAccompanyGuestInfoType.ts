/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface ResAccompanyGuestInfoType
 */
export interface ResAccompanyGuestInfoType {
    /**
     * Given name, first name or names
     * @type {string}
     * @memberof ResAccompanyGuestInfoType
     */
    firstName?: string;
    /**
     * String representation of the full name
     * @type {string}
     * @memberof ResAccompanyGuestInfoType
     */
    fullName?: string;
    /**
     * Family name, last name.
     * @type {string}
     * @memberof ResAccompanyGuestInfoType
     */
    lastName?: string;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ResAccompanyGuestInfoType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     * Unique identifier of the police registration card number.
     * @type {string}
     * @memberof ResAccompanyGuestInfoType
     */
    registrationCardNo?: string;
}

/**
 * Check if a given object implements the ResAccompanyGuestInfoType interface.
 */
export function instanceOfResAccompanyGuestInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResAccompanyGuestInfoTypeFromJSON(json: any): ResAccompanyGuestInfoType {
    return ResAccompanyGuestInfoTypeFromJSONTyped(json, false);
}

export function ResAccompanyGuestInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResAccompanyGuestInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'registrationCardNo': !exists(json, 'registrationCardNo') ? undefined : json['registrationCardNo'],
    };
}

export function ResAccompanyGuestInfoTypeToJSON(value?: ResAccompanyGuestInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'fullName': value.fullName,
        'lastName': value.lastName,
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'registrationCardNo': value.registrationCardNo,
    };
}

