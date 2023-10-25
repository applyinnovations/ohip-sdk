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
import type { NameValueDataTypeType } from './NameValueDataTypeType';
import {
    NameValueDataTypeTypeFromJSON,
    NameValueDataTypeTypeFromJSONTyped,
    NameValueDataTypeTypeToJSON,
} from './NameValueDataTypeType';
import type { NameValueOriginType } from './NameValueOriginType';
import {
    NameValueOriginTypeFromJSON,
    NameValueOriginTypeFromJSONTyped,
    NameValueOriginTypeToJSON,
} from './NameValueOriginType';

/**
 * Contains name value pair.
 * @export
 * @interface NameValueType
 */
export interface NameValueType {
    /**
     * 
     * @type {NameValueDataTypeType}
     * @memberof NameValueType
     */
    dataType?: NameValueDataTypeType;
    /**
     * Contains format string for values.
     * @type {string}
     * @memberof NameValueType
     */
    formatString?: string;
    /**
     * Contains unique key which represents for record field.
     * @type {string}
     * @memberof NameValueType
     */
    name?: string;
    /**
     * 
     * @type {NameValueOriginType}
     * @memberof NameValueType
     */
    origin?: NameValueOriginType;
    /**
     * 
     * @type {Array<string>}
     * @memberof NameValueType
     */
    usageInstruction?: Array<string>;
    /**
     * Contains value for the record/column.
     * @type {string}
     * @memberof NameValueType
     */
    value?: string;
}

/**
 * Check if a given object implements the NameValueType interface.
 */
export function instanceOfNameValueType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NameValueTypeFromJSON(json: any): NameValueType {
    return NameValueTypeFromJSONTyped(json, false);
}

export function NameValueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameValueType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataType': !exists(json, 'dataType') ? undefined : NameValueDataTypeTypeFromJSON(json['dataType']),
        'formatString': !exists(json, 'formatString') ? undefined : json['formatString'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'origin': !exists(json, 'origin') ? undefined : NameValueOriginTypeFromJSON(json['origin']),
        'usageInstruction': !exists(json, 'usageInstruction') ? undefined : json['usageInstruction'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function NameValueTypeToJSON(value?: NameValueType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataType': NameValueDataTypeTypeToJSON(value.dataType),
        'formatString': value.formatString,
        'name': value.name,
        'origin': NameValueOriginTypeToJSON(value.origin),
        'usageInstruction': value.usageInstruction,
        'value': value.value,
    };
}

