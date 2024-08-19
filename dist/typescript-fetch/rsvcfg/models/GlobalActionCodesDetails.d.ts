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
import type { GlobalActionCodeType } from './GlobalActionCodeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Global Action Codes.
 * @export
 * @interface GlobalActionCodesDetails
 */
export interface GlobalActionCodesDetails {
    /**
     * List of Global Action Codes.
     * @type {Array<GlobalActionCodeType>}
     * @memberof GlobalActionCodesDetails
     */
    globalActionCodes?: Array<GlobalActionCodeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof GlobalActionCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GlobalActionCodesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the GlobalActionCodesDetails interface.
 */
export declare function instanceOfGlobalActionCodesDetails(value: object): boolean;
export declare function GlobalActionCodesDetailsFromJSON(json: any): GlobalActionCodesDetails;
export declare function GlobalActionCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalActionCodesDetails;
export declare function GlobalActionCodesDetailsToJSON(value?: GlobalActionCodesDetails | null): any;
