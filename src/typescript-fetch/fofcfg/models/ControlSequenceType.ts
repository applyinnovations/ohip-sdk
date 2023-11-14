/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { ControlSequenceCodeType } from './ControlSequenceCodeType';
import {
    ControlSequenceCodeTypeFromJSON,
    ControlSequenceCodeTypeFromJSONTyped,
    ControlSequenceCodeTypeToJSON,
} from './ControlSequenceCodeType';

/**
 * Provides information about the Opera Control Sequence
 * @export
 * @interface ControlSequenceType
 */
export interface ControlSequenceType {
    /**
     * 
     * @type {ControlSequenceCodeType}
     * @memberof ControlSequenceType
     */
    controlCode?: ControlSequenceCodeType;
    /**
     * Opera Control Sequence belongs to country
     * @type {string}
     * @memberof ControlSequenceType
     */
    countryCode?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof ControlSequenceType
     */
    folioType?: CodeDescriptionType;
    /**
     * Control Sequence code associated with Hotel
     * @type {string}
     * @memberof ControlSequenceType
     */
    hotelId?: string;
    /**
     * Maximum value of Opera Control Sequence
     * @type {number}
     * @memberof ControlSequenceType
     */
    maximum?: number;
    /**
     * Minimum value of Opera Control Sequence
     * @type {number}
     * @memberof ControlSequenceType
     */
    minimum?: number;
    /**
     * Current Sequence Value for the OPERA Sequence
     * @type {number}
     * @memberof ControlSequenceType
     */
    sequenceValue?: number;
}

/**
 * Check if a given object implements the ControlSequenceType interface.
 */
export function instanceOfControlSequenceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ControlSequenceTypeFromJSON(json: any): ControlSequenceType {
    return ControlSequenceTypeFromJSONTyped(json, false);
}

export function ControlSequenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ControlSequenceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'controlCode': !exists(json, 'controlCode') ? undefined : ControlSequenceCodeTypeFromJSON(json['controlCode']),
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'folioType': !exists(json, 'folioType') ? undefined : CodeDescriptionTypeFromJSON(json['folioType']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'maximum': !exists(json, 'maximum') ? undefined : json['maximum'],
        'minimum': !exists(json, 'minimum') ? undefined : json['minimum'],
        'sequenceValue': !exists(json, 'sequenceValue') ? undefined : json['sequenceValue'],
    };
}

export function ControlSequenceTypeToJSON(value?: ControlSequenceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'controlCode': ControlSequenceCodeTypeToJSON(value.controlCode),
        'countryCode': value.countryCode,
        'folioType': CodeDescriptionTypeToJSON(value.folioType),
        'hotelId': value.hotelId,
        'maximum': value.maximum,
        'minimum': value.minimum,
        'sequenceValue': value.sequenceValue,
    };
}
