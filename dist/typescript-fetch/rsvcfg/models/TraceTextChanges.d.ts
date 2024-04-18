/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { TraceTextChangeType } from './TraceTextChangeType';
import type { WarningType } from './WarningType';
/**
 * Request object for changing trace texts.
 * @export
 * @interface TraceTextChanges
 */
export interface TraceTextChanges {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TraceTextChanges
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of trace texts that will be modified.
     * @type {Array<TraceTextChangeType>}
     * @memberof TraceTextChanges
     */
    traceTexts?: Array<TraceTextChangeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TraceTextChanges
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TraceTextChanges interface.
 */
export declare function instanceOfTraceTextChanges(value: object): boolean;
export declare function TraceTextChangesFromJSON(json: any): TraceTextChanges;
export declare function TraceTextChangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceTextChanges;
export declare function TraceTextChangesToJSON(value?: TraceTextChanges | null): any;