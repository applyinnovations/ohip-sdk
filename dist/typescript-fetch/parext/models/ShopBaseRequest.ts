/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Availability Extension API
 * APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2.0.0
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Search Request attributes
 * @export
 * @interface ShopBaseRequest
 */
export interface ShopBaseRequest {
    /**
     * Number of adults
     * @type {number}
     * @memberof ShopBaseRequest
     */
    adults?: number;
    /**
     * Number of children
     * @type {number}
     * @memberof ShopBaseRequest
     */
    children?: number;
    /**
     * Number of units
     * @type {number}
     * @memberof ShopBaseRequest
     */
    numberOfUnits?: number;
}

/**
 * Check if a given object implements the ShopBaseRequest interface.
 */
export function instanceOfShopBaseRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShopBaseRequestFromJSON(json: any): ShopBaseRequest {
    return ShopBaseRequestFromJSONTyped(json, false);
}

export function ShopBaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShopBaseRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adults': !exists(json, 'adults') ? undefined : json['adults'],
        'children': !exists(json, 'children') ? undefined : json['children'],
        'numberOfUnits': !exists(json, 'numberOfUnits') ? undefined : json['numberOfUnits'],
    };
}

export function ShopBaseRequestToJSON(value?: ShopBaseRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adults': value.adults,
        'children': value.children,
        'numberOfUnits': value.numberOfUnits,
    };
}

