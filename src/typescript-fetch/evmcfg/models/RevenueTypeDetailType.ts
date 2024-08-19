/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Details type provides information about Catering Revenue Type Details.
 * @export
 * @interface RevenueTypeDetailType
 */
export interface RevenueTypeDetailType {
    /**
     * Hotel Code is used to set associated revenue type details.
     * @type {string}
     * @memberof RevenueTypeDetailType
     */
    hotelId?: string;
    /**
     * Indicates if this revenue type contributes to the revenue minimum.
     * @type {boolean}
     * @memberof RevenueTypeDetailType
     */
    revenueMinimum?: boolean;
    /**
     * VAT % to calculate Net Catering Revenues.
     * @type {number}
     * @memberof RevenueTypeDetailType
     */
    tax?: number;
}

/**
 * Check if a given object implements the RevenueTypeDetailType interface.
 */
export function instanceOfRevenueTypeDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueTypeDetailTypeFromJSON(json: any): RevenueTypeDetailType {
    return RevenueTypeDetailTypeFromJSONTyped(json, false);
}

export function RevenueTypeDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueTypeDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'revenueMinimum': !exists(json, 'revenueMinimum') ? undefined : json['revenueMinimum'],
        'tax': !exists(json, 'tax') ? undefined : json['tax'],
    };
}

export function RevenueTypeDetailTypeToJSON(value?: RevenueTypeDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'revenueMinimum': value.revenueMinimum,
        'tax': value.tax,
    };
}

