/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Two collections of transaction codes for a resort. One collection lists codes to be changed to Rotation Revenue transaction codes and the other to be changed to non Rotation Revenue Transaction codes.
 * @export
 * @interface RotationRevenueTransactionCodesChangeType
 */
export interface RotationRevenueTransactionCodesChangeType {
    /**
     * Hotel code of revenue transaction code.
     * @type {string}
     * @memberof RotationRevenueTransactionCodesChangeType
     */
    hotelId?: string;
    /**
     * Revenue transaction code.
     * @type {Array<string>}
     * @memberof RotationRevenueTransactionCodesChangeType
     */
    nonRotationRevenueTransactionCodes?: Array<string>;
    /**
     * Revenue transaction code.
     * @type {Array<string>}
     * @memberof RotationRevenueTransactionCodesChangeType
     */
    rotationRevenueTransactionCodes?: Array<string>;
}

/**
 * Check if a given object implements the RotationRevenueTransactionCodesChangeType interface.
 */
export function instanceOfRotationRevenueTransactionCodesChangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RotationRevenueTransactionCodesChangeTypeFromJSON(json: any): RotationRevenueTransactionCodesChangeType {
    return RotationRevenueTransactionCodesChangeTypeFromJSONTyped(json, false);
}

export function RotationRevenueTransactionCodesChangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RotationRevenueTransactionCodesChangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'nonRotationRevenueTransactionCodes': !exists(json, 'nonRotationRevenueTransactionCodes') ? undefined : json['nonRotationRevenueTransactionCodes'],
        'rotationRevenueTransactionCodes': !exists(json, 'rotationRevenueTransactionCodes') ? undefined : json['rotationRevenueTransactionCodes'],
    };
}

export function RotationRevenueTransactionCodesChangeTypeToJSON(value?: RotationRevenueTransactionCodesChangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'nonRotationRevenueTransactionCodes': value.nonRotationRevenueTransactionCodes,
        'rotationRevenueTransactionCodes': value.rotationRevenueTransactionCodes,
    };
}

