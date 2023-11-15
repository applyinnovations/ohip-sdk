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
 * @interface TraceResolveType
 */
export interface TraceResolveType {
    /**
     * User that resolved the trace
     * @type {string}
     * @memberof TraceResolveType
     */
    resolvedBy?: string;
    /**
     * Date the trace was resolved
     * @type {string}
     * @memberof TraceResolveType
     */
    resolvedOn?: string;
}

/**
 * Check if a given object implements the TraceResolveType interface.
 */
export function instanceOfTraceResolveType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TraceResolveTypeFromJSON(json: any): TraceResolveType {
    return TraceResolveTypeFromJSONTyped(json, false);
}

export function TraceResolveTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceResolveType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resolvedBy': !exists(json, 'resolvedBy') ? undefined : json['resolvedBy'],
        'resolvedOn': !exists(json, 'resolvedOn') ? undefined : json['resolvedOn'],
    };
}

export function TraceResolveTypeToJSON(value?: TraceResolveType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resolvedBy': value.resolvedBy,
        'resolvedOn': value.resolvedOn,
    };
}

