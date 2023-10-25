/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * 
 * @export
 * @interface BlockStatisticsInfoTypeRate
 */
export interface BlockStatisticsInfoTypeRate {
    /**
     * 
     * @type {number}
     * @memberof BlockStatisticsInfoTypeRate
     */
    fourPerson?: number;
    /**
     * 
     * @type {number}
     * @memberof BlockStatisticsInfoTypeRate
     */
    onePerson?: number;
    /**
     * 
     * @type {number}
     * @memberof BlockStatisticsInfoTypeRate
     */
    threePerson?: number;
    /**
     * 
     * @type {number}
     * @memberof BlockStatisticsInfoTypeRate
     */
    twoPerson?: number;
}

/**
 * Check if a given object implements the BlockStatisticsInfoTypeRate interface.
 */
export function instanceOfBlockStatisticsInfoTypeRate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockStatisticsInfoTypeRateFromJSON(json: any): BlockStatisticsInfoTypeRate {
    return BlockStatisticsInfoTypeRateFromJSONTyped(json, false);
}

export function BlockStatisticsInfoTypeRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatisticsInfoTypeRate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fourPerson': !exists(json, 'fourPerson') ? undefined : json['fourPerson'],
        'onePerson': !exists(json, 'onePerson') ? undefined : json['onePerson'],
        'threePerson': !exists(json, 'threePerson') ? undefined : json['threePerson'],
        'twoPerson': !exists(json, 'twoPerson') ? undefined : json['twoPerson'],
    };
}

export function BlockStatisticsInfoTypeRateToJSON(value?: BlockStatisticsInfoTypeRate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fourPerson': value.fourPerson,
        'onePerson': value.onePerson,
        'threePerson': value.threePerson,
        'twoPerson': value.twoPerson,
    };
}

