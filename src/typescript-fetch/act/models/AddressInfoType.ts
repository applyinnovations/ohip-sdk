/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressType } from './AddressType';
import {
    AddressTypeFromJSON,
    AddressTypeFromJSONTyped,
    AddressTypeToJSON,
} from './AddressType';

/**
 * Provides address information.
 * @export
 * @interface AddressInfoType
 */
export interface AddressInfoType {
    /**
     * 
     * @type {AddressType}
     * @memberof AddressInfoType
     */
    address?: AddressType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof AddressInfoType
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof AddressInfoType
     */
    type?: string;
}

/**
 * Check if a given object implements the AddressInfoType interface.
 */
export function instanceOfAddressInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressInfoTypeFromJSON(json: any): AddressInfoType {
    return AddressInfoTypeFromJSONTyped(json, false);
}

export function AddressInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : AddressTypeFromJSON(json['address']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function AddressInfoTypeToJSON(value?: AddressInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': AddressTypeToJSON(value.address),
        'id': value.id,
        'type': value.type,
    };
}

