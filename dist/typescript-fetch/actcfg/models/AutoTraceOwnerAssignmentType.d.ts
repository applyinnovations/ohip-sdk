/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UniqueIDType } from './UniqueIDType';
/**
 * Trace owner assignment detail information.
 * @export
 * @interface AutoTraceOwnerAssignmentType
 */
export interface AutoTraceOwnerAssignmentType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof AutoTraceOwnerAssignmentType
     */
    autoTraceOwnerAssignmentId?: UniqueIDType;
    /**
     * The hotel code where trace owner assignments are created.
     * @type {string}
     * @memberof AutoTraceOwnerAssignmentType
     */
    hotelId?: string;
    /**
     * Owner code of trace owner assignment.
     * @type {string}
     * @memberof AutoTraceOwnerAssignmentType
     */
    ownerCode?: string;
    /**
     * Owner name of trace owner assignment.
     * @type {string}
     * @memberof AutoTraceOwnerAssignmentType
     */
    ownerName?: string;
    /**
     * Trace Owner code of trace owner assignment.
     * @type {string}
     * @memberof AutoTraceOwnerAssignmentType
     */
    traceOwnerCode?: string;
    /**
     * Trace Owner name of trace owner assignment.
     * @type {string}
     * @memberof AutoTraceOwnerAssignmentType
     */
    traceOwnerName?: string;
}
/**
 * Check if a given object implements the AutoTraceOwnerAssignmentType interface.
 */
export declare function instanceOfAutoTraceOwnerAssignmentType(value: object): boolean;
export declare function AutoTraceOwnerAssignmentTypeFromJSON(json: any): AutoTraceOwnerAssignmentType;
export declare function AutoTraceOwnerAssignmentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceOwnerAssignmentType;
export declare function AutoTraceOwnerAssignmentTypeToJSON(value?: AutoTraceOwnerAssignmentType | null): any;
