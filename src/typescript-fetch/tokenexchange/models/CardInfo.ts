/* tslint:disable */
/* eslint-disable */
/**
 * OPI Token Exchange Service API
 * Oracle Token Exchange Service Specification<br /><br /> Compatible with OPERA Cloud release 1.0.1.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * JSON object containing the card information
 * @export
 * @interface CardInfo
 */
export interface CardInfo {
    /**
     * Expiration Date, YYMM format
     * @type {string}
     * @memberof CardInfo
     */
    expiryDate: string;
    /**
     * Primary Account Number (PAN)
     * @type {string}
     * @memberof CardInfo
     */
    pan: string;
    /**
     * Record number, the value must be unique within the collection
     * @type {number}
     * @memberof CardInfo
     */
    recordNumber: number;
}

/**
 * Check if a given object implements the CardInfo interface.
 */
export function instanceOfCardInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "expiryDate" in value;
    isInstance = isInstance && "pan" in value;
    isInstance = isInstance && "recordNumber" in value;

    return isInstance;
}

export function CardInfoFromJSON(json: any): CardInfo {
    return CardInfoFromJSONTyped(json, false);
}

export function CardInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expiryDate': json['expiryDate'],
        'pan': json['pan'],
        'recordNumber': json['recordNumber'],
    };
}

export function CardInfoToJSON(value?: CardInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expiryDate': value.expiryDate,
        'pan': value.pan,
        'recordNumber': value.recordNumber,
    };
}

