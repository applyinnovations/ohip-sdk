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
import type { TemplateMarketCodeType } from './TemplateMarketCodeType';
import type { WarningType } from './WarningType';
/**
 * Response for fetch template Market Codes.
 * @export
 * @interface TemplateMarketCodesDetails
 */
export interface TemplateMarketCodesDetails {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof TemplateMarketCodesDetails
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof TemplateMarketCodesDetails
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof TemplateMarketCodesDetails
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplateMarketCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof TemplateMarketCodesDetails
     */
    offset?: number;
    /**
     * Collection of template market codes.
     * @type {Array<TemplateMarketCodeType>}
     * @memberof TemplateMarketCodesDetails
     */
    templateMarketCodes?: Array<TemplateMarketCodeType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof TemplateMarketCodesDetails
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof TemplateMarketCodesDetails
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateMarketCodesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplateMarketCodesDetails interface.
 */
export declare function instanceOfTemplateMarketCodesDetails(value: object): boolean;
export declare function TemplateMarketCodesDetailsFromJSON(json: any): TemplateMarketCodesDetails;
export declare function TemplateMarketCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateMarketCodesDetails;
export declare function TemplateMarketCodesDetailsToJSON(value?: TemplateMarketCodesDetails | null): any;