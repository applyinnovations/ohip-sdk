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
 * Indicates the inventory values ( occupancy or availability ) per person occupancy.
 * @export
 * @interface BlockGridInvType
 */
export interface BlockGridInvType {
    /**
     * Indicates the cutoff date.Date when inventory left in the block will be cut-off.
     * @type {string}
     * @memberof BlockGridInvType
     */
    cutoffDate?: string;
    /**
     * Indicates the four person inventory value ( occupancy or availability ).
     * @type {number}
     * @memberof BlockGridInvType
     */
    fourPerson?: number;
    /**
     * Indicates the one person inventory value ( occupancy or availability ).
     * @type {number}
     * @memberof BlockGridInvType
     */
    onePerson?: number;
    /**
     * Indicates the sell limit
     * @type {number}
     * @memberof BlockGridInvType
     */
    sellLimit?: number;
    /**
     * Indicates the three person inventory value ( occupancy or availability ).
     * @type {number}
     * @memberof BlockGridInvType
     */
    threePerson?: number;
    /**
     * Indicates the two person inventory value ( occupancy or availability ).
     * @type {number}
     * @memberof BlockGridInvType
     */
    twoPerson?: number;
}

/**
 * Check if a given object implements the BlockGridInvType interface.
 */
export function instanceOfBlockGridInvType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockGridInvTypeFromJSON(json: any): BlockGridInvType {
    return BlockGridInvTypeFromJSONTyped(json, false);
}

export function BlockGridInvTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockGridInvType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cutoffDate': !exists(json, 'cutoffDate') ? undefined : json['cutoffDate'],
        'fourPerson': !exists(json, 'fourPerson') ? undefined : json['fourPerson'],
        'onePerson': !exists(json, 'onePerson') ? undefined : json['onePerson'],
        'sellLimit': !exists(json, 'sellLimit') ? undefined : json['sellLimit'],
        'threePerson': !exists(json, 'threePerson') ? undefined : json['threePerson'],
        'twoPerson': !exists(json, 'twoPerson') ? undefined : json['twoPerson'],
    };
}

export function BlockGridInvTypeToJSON(value?: BlockGridInvType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cutoffDate': value.cutoffDate,
        'fourPerson': value.fourPerson,
        'onePerson': value.onePerson,
        'sellLimit': value.sellLimit,
        'threePerson': value.threePerson,
        'twoPerson': value.twoPerson,
    };
}

