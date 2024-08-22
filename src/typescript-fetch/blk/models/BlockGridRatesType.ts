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
 * Indicates the rate amount values per person occupancy.
 * @export
 * @interface BlockGridRatesType
 */
export interface BlockGridRatesType {
    /**
     * Indicates the extra person occupancy rate amount.
     * @type {number}
     * @memberof BlockGridRatesType
     */
    extraPerson?: number;
    /**
     * Indicates the four person occupancy rate amount.
     * @type {number}
     * @memberof BlockGridRatesType
     */
    fourPerson?: number;
    /**
     * Indicates the one person occupancy rate amount.
     * @type {number}
     * @memberof BlockGridRatesType
     */
    onePerson?: number;
    /**
     * Indicates the three person occupancy rate amount.
     * @type {number}
     * @memberof BlockGridRatesType
     */
    threePerson?: number;
    /**
     * Indicates the two person occupancy rate amount.
     * @type {number}
     * @memberof BlockGridRatesType
     */
    twoPerson?: number;
}

/**
 * Check if a given object implements the BlockGridRatesType interface.
 */
export function instanceOfBlockGridRatesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockGridRatesTypeFromJSON(json: any): BlockGridRatesType {
    return BlockGridRatesTypeFromJSONTyped(json, false);
}

export function BlockGridRatesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockGridRatesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extraPerson': !exists(json, 'extraPerson') ? undefined : json['extraPerson'],
        'fourPerson': !exists(json, 'fourPerson') ? undefined : json['fourPerson'],
        'onePerson': !exists(json, 'onePerson') ? undefined : json['onePerson'],
        'threePerson': !exists(json, 'threePerson') ? undefined : json['threePerson'],
        'twoPerson': !exists(json, 'twoPerson') ? undefined : json['twoPerson'],
    };
}

export function BlockGridRatesTypeToJSON(value?: BlockGridRatesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extraPerson': value.extraPerson,
        'fourPerson': value.fourPerson,
        'onePerson': value.onePerson,
        'threePerson': value.threePerson,
        'twoPerson': value.twoPerson,
    };
}

