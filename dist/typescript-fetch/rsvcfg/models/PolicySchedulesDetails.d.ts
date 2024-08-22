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
import type { PolicyScheduleType } from './PolicyScheduleType';
import type { WarningType } from './WarningType';
/**
 * Return response for fetch policy schedules based on request.
 * @export
 * @interface PolicySchedulesDetails
 */
export interface PolicySchedulesDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof PolicySchedulesDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof PolicySchedulesDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof PolicySchedulesDetails
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof PolicySchedulesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof PolicySchedulesDetails
     */
    offset?: number;
    /**
     * Unique Identifer for the policy schedule.
     * @type {Array<PolicyScheduleType>}
     * @memberof PolicySchedulesDetails
     */
    policySchedules?: Array<PolicyScheduleType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof PolicySchedulesDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof PolicySchedulesDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PolicySchedulesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the PolicySchedulesDetails interface.
 */
export declare function instanceOfPolicySchedulesDetails(value: object): boolean;
export declare function PolicySchedulesDetailsFromJSON(json: any): PolicySchedulesDetails;
export declare function PolicySchedulesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicySchedulesDetails;
export declare function PolicySchedulesDetailsToJSON(value?: PolicySchedulesDetails | null): any;
