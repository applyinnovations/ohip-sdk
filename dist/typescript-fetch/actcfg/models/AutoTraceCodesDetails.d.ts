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
import type { AutoTraceCodeDetailType } from './AutoTraceCodeDetailType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object to fetch Auto Trace Codes.
 * @export
 * @interface AutoTraceCodesDetails
 */
export interface AutoTraceCodesDetails {
    /**
     * Detailed information of configured Auto Trace Codes.
     * @type {Array<AutoTraceCodeDetailType>}
     * @memberof AutoTraceCodesDetails
     */
    autoTraceCodesConfig?: Array<AutoTraceCodeDetailType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof AutoTraceCodesDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof AutoTraceCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof AutoTraceCodesDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AutoTraceCodesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AutoTraceCodesDetails interface.
 */
export declare function instanceOfAutoTraceCodesDetails(value: object): boolean;
export declare function AutoTraceCodesDetailsFromJSON(json: any): AutoTraceCodesDetails;
export declare function AutoTraceCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceCodesDetails;
export declare function AutoTraceCodesDetailsToJSON(value?: AutoTraceCodesDetails | null): any;
