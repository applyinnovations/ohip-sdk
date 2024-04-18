/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Information for validation of block rate code.
 * @export
 * @interface BlockRateCodeValidationType
 */
export interface BlockRateCodeValidationType {
    /**
     * End date for the rate code validation.
     * @type {string}
     * @memberof BlockRateCodeValidationType
     */
    endDate?: string;
    /**
     * Hotel code for which rate code should be validated.
     * @type {string}
     * @memberof BlockRateCodeValidationType
     */
    hotelId?: string;
    /**
     * Rate code
     * @type {string}
     * @memberof BlockRateCodeValidationType
     */
    rateCode?: string;
    /**
     * Start date for the rate code validation.
     * @type {string}
     * @memberof BlockRateCodeValidationType
     */
    startDate?: string;
}

/**
 * Check if a given object implements the BlockRateCodeValidationType interface.
 */
export function instanceOfBlockRateCodeValidationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockRateCodeValidationTypeFromJSON(json: any): BlockRateCodeValidationType {
    return BlockRateCodeValidationTypeFromJSONTyped(json, false);
}

export function BlockRateCodeValidationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRateCodeValidationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
    };
}

export function BlockRateCodeValidationTypeToJSON(value?: BlockRateCodeValidationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endDate': value.endDate,
        'hotelId': value.hotelId,
        'rateCode': value.rateCode,
        'startDate': value.startDate,
    };
}
