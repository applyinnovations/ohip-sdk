/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AutoTraceOwnerAssignmentType } from './AutoTraceOwnerAssignmentType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object to fetch trace owner assignments.
 * @export
 * @interface AutoTraceOwnerAssignmentsDetails
 */
export interface AutoTraceOwnerAssignmentsDetails {
    /**
     * Detailed information of trace owner assignment.
     * @type {Array<AutoTraceOwnerAssignmentType>}
     * @memberof AutoTraceOwnerAssignmentsDetails
     */
    autoTraceOwnerAssignments?: Array<AutoTraceOwnerAssignmentType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof AutoTraceOwnerAssignmentsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof AutoTraceOwnerAssignmentsDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof AutoTraceOwnerAssignmentsDetails
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof AutoTraceOwnerAssignmentsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof AutoTraceOwnerAssignmentsDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof AutoTraceOwnerAssignmentsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof AutoTraceOwnerAssignmentsDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AutoTraceOwnerAssignmentsDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AutoTraceOwnerAssignmentsDetails interface.
 */
export declare function instanceOfAutoTraceOwnerAssignmentsDetails(value: object): boolean;
export declare function AutoTraceOwnerAssignmentsDetailsFromJSON(json: any): AutoTraceOwnerAssignmentsDetails;
export declare function AutoTraceOwnerAssignmentsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceOwnerAssignmentsDetails;
export declare function AutoTraceOwnerAssignmentsDetailsToJSON(value?: AutoTraceOwnerAssignmentsDetails | null): any;
