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
import type { HSKStatType } from './HSKStatType';
import {
    HSKStatTypeFromJSON,
    HSKStatTypeFromJSONTyped,
    HSKStatTypeToJSON,
} from './HSKStatType';

/**
 * Base statistic set holder which defines the span of the statistical data.
 * @export
 * @interface HSKStatSetType
 */
export interface HSKStatSetType {
    /**
     * 
     * @type {string}
     * @memberof HSKStatSetType
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof HSKStatSetType
     */
    end?: string;
    /**
     * 
     * @type {string}
     * @memberof HSKStatSetType
     */
    start?: string;
    /**
     * 
     * @type {Array<HSKStatType>}
     * @memberof HSKStatSetType
     */
    stat?: Array<HSKStatType>;
}

/**
 * Check if a given object implements the HSKStatSetType interface.
 */
export function instanceOfHSKStatSetType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HSKStatSetTypeFromJSON(json: any): HSKStatSetType {
    return HSKStatSetTypeFromJSONTyped(json, false);
}

export function HSKStatSetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HSKStatSetType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'end': !exists(json, 'end') ? undefined : json['end'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'stat': !exists(json, 'stat') ? undefined : ((json['stat'] as Array<any>).map(HSKStatTypeFromJSON)),
    };
}

export function HSKStatSetTypeToJSON(value?: HSKStatSetType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'end': value.end,
        'start': value.start,
        'stat': value.stat === undefined ? undefined : ((value.stat as Array<any>).map(HSKStatTypeToJSON)),
    };
}

