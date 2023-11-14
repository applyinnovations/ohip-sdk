/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { ServiceRequestCodesType } from './ServiceRequestCodesType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching the service request codes for given search criteria hotel, code, active/inactive.
 * @export
 * @interface ServiceRequestCodesDetails
 */
export interface ServiceRequestCodesDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ServiceRequestCodesDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ServiceRequestCodesDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof ServiceRequestCodesDetails
     */
    limit?: number;
    /**
     *
     * @type {Links}
     * @memberof ServiceRequestCodesDetails
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof ServiceRequestCodesDetails
     */
    offset?: number;
    /**
     *
     * @type {ServiceRequestCodesType}
     * @memberof ServiceRequestCodesDetails
     */
    serviceRequestCodes?: ServiceRequestCodesType;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof ServiceRequestCodesDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ServiceRequestCodesDetails
     */
    totalResults?: number;
    /**
     *
     * @type {WarningsType}
     * @memberof ServiceRequestCodesDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ServiceRequestCodesDetails interface.
 */
export declare function instanceOfServiceRequestCodesDetails(value: object): boolean;
export declare function ServiceRequestCodesDetailsFromJSON(json: any): ServiceRequestCodesDetails;
export declare function ServiceRequestCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceRequestCodesDetails;
export declare function ServiceRequestCodesDetailsToJSON(value?: ServiceRequestCodesDetails | null): any;