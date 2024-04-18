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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MiscTraceType } from './MiscTraceType';
import {
    MiscTraceTypeFromJSON,
    MiscTraceTypeFromJSONTyped,
    MiscTraceTypeToJSON,
} from './MiscTraceType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Fetch traces response.
 * @export
 * @interface TracesByDateRange
 */
export interface TracesByDateRange {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TracesByDateRange
     */
    links?: Array<InstanceLink>;
    /**
     * List of the traces
     * @type {Array<MiscTraceType>}
     * @memberof TracesByDateRange
     */
    tracesInfoList?: Array<MiscTraceType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TracesByDateRange
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TracesByDateRange interface.
 */
export function instanceOfTracesByDateRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TracesByDateRangeFromJSON(json: any): TracesByDateRange {
    return TracesByDateRangeFromJSONTyped(json, false);
}

export function TracesByDateRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TracesByDateRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'tracesInfoList': !exists(json, 'tracesInfoList') ? undefined : ((json['tracesInfoList'] as Array<any>).map(MiscTraceTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TracesByDateRangeToJSON(value?: TracesByDateRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'tracesInfoList': value.tracesInfoList === undefined ? undefined : ((value.tracesInfoList as Array<any>).map(MiscTraceTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
