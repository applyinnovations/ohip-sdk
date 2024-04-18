/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
