/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TelephoneType } from './TelephoneType';
import {
    TelephoneTypeFromJSON,
    TelephoneTypeFromJSONTyped,
    TelephoneTypeToJSON,
} from './TelephoneType';

/**
 * Information on a telephone number for the customer.
 * @export
 * @interface TelephoneInfoType
 */
export interface TelephoneInfoType {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof TelephoneInfoType
     */
    id?: string;
    /**
     * 
     * @type {TelephoneType}
     * @memberof TelephoneInfoType
     */
    telephone?: TelephoneType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof TelephoneInfoType
     */
    type?: string;
}

/**
 * Check if a given object implements the TelephoneInfoType interface.
 */
export function instanceOfTelephoneInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TelephoneInfoTypeFromJSON(json: any): TelephoneInfoType {
    return TelephoneInfoTypeFromJSONTyped(json, false);
}

export function TelephoneInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelephoneInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'telephone': !exists(json, 'telephone') ? undefined : TelephoneTypeFromJSON(json['telephone']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function TelephoneInfoTypeToJSON(value?: TelephoneInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'telephone': TelephoneTypeToJSON(value.telephone),
        'type': value.type,
    };
}

