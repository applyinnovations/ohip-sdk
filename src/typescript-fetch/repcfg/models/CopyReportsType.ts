/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Report Master Data Management API
 * APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Copy report configuration code from one property to the other.
 * @export
 * @interface CopyReportsType
 */
export interface CopyReportsType {
    /**
     * 
     * @type {Array<string>}
     * @memberof CopyReportsType
     */
    codes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CopyReportsType
     */
    targetHotelCodes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CopyReportsType
     */
    sourceHotelCode?: string;
}

/**
 * Check if a given object implements the CopyReportsType interface.
 */
export function instanceOfCopyReportsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyReportsTypeFromJSON(json: any): CopyReportsType {
    return CopyReportsTypeFromJSONTyped(json, false);
}

export function CopyReportsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyReportsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'codes': !exists(json, 'codes') ? undefined : json['codes'],
        'targetHotelCodes': !exists(json, 'targetHotelCodes') ? undefined : json['targetHotelCodes'],
        'sourceHotelCode': !exists(json, 'sourceHotelCode') ? undefined : json['sourceHotelCode'],
    };
}

export function CopyReportsTypeToJSON(value?: CopyReportsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'codes': value.codes,
        'targetHotelCodes': value.targetHotelCodes,
        'sourceHotelCode': value.sourceHotelCode,
    };
}

