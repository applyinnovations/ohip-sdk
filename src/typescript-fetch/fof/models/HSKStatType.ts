/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HSKStatCodeType } from './HSKStatCodeType';
import {
    HSKStatCodeTypeFromJSON,
    HSKStatCodeTypeFromJSONTyped,
    HSKStatCodeTypeToJSON,
} from './HSKStatCodeType';
import type { StatUnitCategoryType } from './StatUnitCategoryType';
import {
    StatUnitCategoryTypeFromJSON,
    StatUnitCategoryTypeFromJSONTyped,
    StatUnitCategoryTypeToJSON,
} from './StatUnitCategoryType';

/**
 * Since the statistical value can be represented in different measure of units, this element will provide a flexible definition for the supported Opera9 statistical units.
 * @export
 * @interface HSKStatType
 */
export interface HSKStatType {
    /**
     * 
     * @type {StatUnitCategoryType}
     * @memberof HSKStatType
     */
    category?: StatUnitCategoryType;
    /**
     * 
     * @type {HSKStatCodeType}
     * @memberof HSKStatType
     */
    code?: HSKStatCodeType;
    /**
     * Statistical value.
     * @type {number}
     * @memberof HSKStatType
     */
    value?: number;
}

/**
 * Check if a given object implements the HSKStatType interface.
 */
export function instanceOfHSKStatType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HSKStatTypeFromJSON(json: any): HSKStatType {
    return HSKStatTypeFromJSONTyped(json, false);
}

export function HSKStatTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HSKStatType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : StatUnitCategoryTypeFromJSON(json['category']),
        'code': !exists(json, 'code') ? undefined : HSKStatCodeTypeFromJSON(json['code']),
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function HSKStatTypeToJSON(value?: HSKStatType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': StatUnitCategoryTypeToJSON(value.category),
        'code': HSKStatCodeTypeToJSON(value.code),
        'value': value.value,
    };
}
