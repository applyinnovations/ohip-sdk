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
import type { GuaranteeCodeScheduleType } from './GuaranteeCodeScheduleType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Return response for fetch guarantee code schedules based on request.
 * @export
 * @interface GuaranteeCodeSchedulesDetails
 */
export interface GuaranteeCodeSchedulesDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof GuaranteeCodeSchedulesDetails
     */
    count?: number;
    /**
     * Unique Identifer for the Guarantee Code schedule.
     * @type {Array<GuaranteeCodeScheduleType>}
     * @memberof GuaranteeCodeSchedulesDetails
     */
    guaranteeCodeSchedules?: Array<GuaranteeCodeScheduleType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof GuaranteeCodeSchedulesDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof GuaranteeCodeSchedulesDetails
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof GuaranteeCodeSchedulesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof GuaranteeCodeSchedulesDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof GuaranteeCodeSchedulesDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof GuaranteeCodeSchedulesDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GuaranteeCodeSchedulesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the GuaranteeCodeSchedulesDetails interface.
 */
export declare function instanceOfGuaranteeCodeSchedulesDetails(value: object): boolean;
export declare function GuaranteeCodeSchedulesDetailsFromJSON(json: any): GuaranteeCodeSchedulesDetails;
export declare function GuaranteeCodeSchedulesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteeCodeSchedulesDetails;
export declare function GuaranteeCodeSchedulesDetailsToJSON(value?: GuaranteeCodeSchedulesDetails | null): any;