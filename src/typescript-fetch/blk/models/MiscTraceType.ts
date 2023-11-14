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
import type { TraceBlockInfoType } from './TraceBlockInfoType';
import {
    TraceBlockInfoTypeFromJSON,
    TraceBlockInfoTypeFromJSONTyped,
    TraceBlockInfoTypeToJSON,
} from './TraceBlockInfoType';
import type { TraceResvInfoType } from './TraceResvInfoType';
import {
    TraceResvInfoTypeFromJSON,
    TraceResvInfoTypeFromJSONTyped,
    TraceResvInfoTypeToJSON,
} from './TraceResvInfoType';
import type { TraceType } from './TraceType';
import {
    TraceTypeFromJSON,
    TraceTypeFromJSONTyped,
    TraceTypeToJSON,
} from './TraceType';

/**
 * A collection of retrieved blocks and reservations traces.
 * @export
 * @interface MiscTraceType
 */
export interface MiscTraceType {
    /**
     * 
     * @type {TraceBlockInfoType}
     * @memberof MiscTraceType
     */
    blockInfo?: TraceBlockInfoType;
    /**
     * 
     * @type {TraceResvInfoType}
     * @memberof MiscTraceType
     */
    reservationInfo?: TraceResvInfoType;
    /**
     * 
     * @type {TraceType}
     * @memberof MiscTraceType
     */
    trace?: TraceType;
}

/**
 * Check if a given object implements the MiscTraceType interface.
 */
export function instanceOfMiscTraceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MiscTraceTypeFromJSON(json: any): MiscTraceType {
    return MiscTraceTypeFromJSONTyped(json, false);
}

export function MiscTraceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MiscTraceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockInfo': !exists(json, 'blockInfo') ? undefined : TraceBlockInfoTypeFromJSON(json['blockInfo']),
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : TraceResvInfoTypeFromJSON(json['reservationInfo']),
        'trace': !exists(json, 'trace') ? undefined : TraceTypeFromJSON(json['trace']),
    };
}

export function MiscTraceTypeToJSON(value?: MiscTraceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockInfo': TraceBlockInfoTypeToJSON(value.blockInfo),
        'reservationInfo': TraceResvInfoTypeToJSON(value.reservationInfo),
        'trace': TraceTypeToJSON(value.trace),
    };
}
