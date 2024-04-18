/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DateTimeSpanType } from './DateTimeSpanType';
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
export declare function instanceOfTraceTimeInfoType(value: object): boolean;
export declare function TraceTimeInfoTypeFromJSON(json: any): TraceTimeInfoType;
export declare function TraceTimeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceTimeInfoType;
export declare function TraceTimeInfoTypeToJSON(value?: TraceTimeInfoType | null): any;