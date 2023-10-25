/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DateTimeSpanType } from './DateTimeSpanType';
import {
    DateTimeSpanTypeFromJSON,
    DateTimeSpanTypeFromJSONTyped,
    DateTimeSpanTypeToJSON,
} from './DateTimeSpanType';

/**
 * 
 * @export
 * @interface TraceTimeInfoType
 */
export interface TraceTimeInfoType {
    /**
     * 
     * @type {DateTimeSpanType}
     * @memberof TraceTimeInfoType
     */
    dateTimeSpan?: DateTimeSpanType;
    /**
     * User that entered this trace.
     * @type {string}
     * @memberof TraceTimeInfoType
     */
    enteredBy?: string;
    /**
     * Date of the trace.
     * @type {string}
     * @memberof TraceTimeInfoType
     */
    traceOn?: string;
    /**
     * Time of the trace
     * @type {string}
     * @memberof TraceTimeInfoType
     */
    traceTime?: string;
}

/**
 * Check if a given object implements the TraceTimeInfoType interface.
 */
export function instanceOfTraceTimeInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TraceTimeInfoTypeFromJSON(json: any): TraceTimeInfoType {
    return TraceTimeInfoTypeFromJSONTyped(json, false);
}

export function TraceTimeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceTimeInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateTimeSpan': !exists(json, 'dateTimeSpan') ? undefined : DateTimeSpanTypeFromJSON(json['dateTimeSpan']),
        'enteredBy': !exists(json, 'enteredBy') ? undefined : json['enteredBy'],
        'traceOn': !exists(json, 'traceOn') ? undefined : json['traceOn'],
        'traceTime': !exists(json, 'traceTime') ? undefined : json['traceTime'],
    };
}

export function TraceTimeInfoTypeToJSON(value?: TraceTimeInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dateTimeSpan': DateTimeSpanTypeToJSON(value.dateTimeSpan),
        'enteredBy': value.enteredBy,
        'traceOn': value.traceOn,
        'traceTime': value.traceTime,
    };
}

