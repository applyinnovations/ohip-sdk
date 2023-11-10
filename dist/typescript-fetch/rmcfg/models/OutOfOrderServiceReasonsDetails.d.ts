/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { OutOfOrderServiceReasonsType } from './OutOfOrderServiceReasonsType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching Out of Order/Service Reason(s).
 * @export
 * @interface OutOfOrderServiceReasonsDetails
 */
export interface OutOfOrderServiceReasonsDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    limit?: number;
    /**
     *
     * @type {Links}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    links?: Links;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    offset?: number;
    /**
     *
     * @type {OutOfOrderServiceReasonsType}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    outOfOrderServiceReasons?: OutOfOrderServiceReasonsType;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    totalResults?: number;
    /**
     *
     * @type {WarningsType}
     * @memberof OutOfOrderServiceReasonsDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the OutOfOrderServiceReasonsDetails interface.
 */
export declare function instanceOfOutOfOrderServiceReasonsDetails(value: object): boolean;
export declare function OutOfOrderServiceReasonsDetailsFromJSON(json: any): OutOfOrderServiceReasonsDetails;
export declare function OutOfOrderServiceReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutOfOrderServiceReasonsDetails;
export declare function OutOfOrderServiceReasonsDetailsToJSON(value?: OutOfOrderServiceReasonsDetails | null): any;
