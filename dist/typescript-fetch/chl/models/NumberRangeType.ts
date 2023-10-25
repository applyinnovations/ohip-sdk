/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Date Range with Start and End dates.
 * @export
 * @interface NumberRangeType
 */
export interface NumberRangeType {
    /**
     * The starting value of the range of number
     * @type {number}
     * @memberof NumberRangeType
     */
    from?: number;
    /**
     * The ending value of the range of number
     * @type {number}
     * @memberof NumberRangeType
     */
    to?: number;
}

/**
 * Check if a given object implements the NumberRangeType interface.
 */
export function instanceOfNumberRangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NumberRangeTypeFromJSON(json: any): NumberRangeType {
    return NumberRangeTypeFromJSONTyped(json, false);
}

export function NumberRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumberRangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
    };
}

export function NumberRangeTypeToJSON(value?: NumberRangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
    };
}

