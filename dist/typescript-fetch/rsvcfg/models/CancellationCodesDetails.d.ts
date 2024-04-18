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
import type { CancellationCodeType } from './CancellationCodeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Cancellation Codes.
 * @export
 * @interface CancellationCodesDetails
 */
export interface CancellationCodesDetails {
    /**
     * List of Cancellation Codes.
     * @type {Array<CancellationCodeType>}
     * @memberof CancellationCodesDetails
     */
    cancellationCodes?: Array<CancellationCodeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CancellationCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CancellationCodesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CancellationCodesDetails interface.
 */
export declare function instanceOfCancellationCodesDetails(value: object): boolean;
export declare function CancellationCodesDetailsFromJSON(json: any): CancellationCodesDetails;
export declare function CancellationCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancellationCodesDetails;
export declare function CancellationCodesDetailsToJSON(value?: CancellationCodesDetails | null): any;