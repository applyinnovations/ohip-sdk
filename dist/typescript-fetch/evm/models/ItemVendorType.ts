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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';

/**
 * Details of the Item Vendor.
 * @export
 * @interface ItemVendorType
 */
export interface ItemVendorType {
    /**
     * The email address of the Vendor.
     * @type {string}
     * @memberof ItemVendorType
     */
    email?: string;
    /**
     * The fax number of the Vendor.
     * @type {string}
     * @memberof ItemVendorType
     */
    fax?: string;
    /**
     * Lead time for ordering.
     * @type {string}
     * @memberof ItemVendorType
     */
    leadTime?: string;
    /**
     * The Name of the vendor.
     * @type {string}
     * @memberof ItemVendorType
     */
    name?: string;
    /**
     * The phone number of the Vendor.
     * @type {string}
     * @memberof ItemVendorType
     */
    phone?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ItemVendorType
     */
    price?: CurrencyAmountType;
    /**
     * The Priority of the Vendor.
     * @type {number}
     * @memberof ItemVendorType
     */
    priority?: number;
    /**
     * 
     * @type {ProfileId}
     * @memberof ItemVendorType
     */
    profileId?: ProfileId;
}

/**
 * Check if a given object implements the ItemVendorType interface.
 */
export function instanceOfItemVendorType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemVendorTypeFromJSON(json: any): ItemVendorType {
    return ItemVendorTypeFromJSONTyped(json, false);
}

export function ItemVendorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemVendorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'fax': !exists(json, 'fax') ? undefined : json['fax'],
        'leadTime': !exists(json, 'leadTime') ? undefined : json['leadTime'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'price': !exists(json, 'price') ? undefined : CurrencyAmountTypeFromJSON(json['price']),
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
    };
}

export function ItemVendorTypeToJSON(value?: ItemVendorType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'fax': value.fax,
        'leadTime': value.leadTime,
        'name': value.name,
        'phone': value.phone,
        'price': CurrencyAmountTypeToJSON(value.price),
        'priority': value.priority,
        'profileId': ProfileIdToJSON(value.profileId),
    };
}

