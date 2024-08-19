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
import type { MoveReasonCodeType } from './MoveReasonCodeType';
import type { WarningType } from './WarningType';
/**
 * Response object for fetching Move Reason Codes.
 * @export
 * @interface MoveReasonCodesDetails
 */
export interface MoveReasonCodesDetails {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof MoveReasonCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * List of Move Reason Codes.
     * @type {Array<MoveReasonCodeType>}
     * @memberof MoveReasonCodesDetails
     */
    moveReasonCodes?: Array<MoveReasonCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MoveReasonCodesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the MoveReasonCodesDetails interface.
 */
export declare function instanceOfMoveReasonCodesDetails(value: object): boolean;
export declare function MoveReasonCodesDetailsFromJSON(json: any): MoveReasonCodesDetails;
export declare function MoveReasonCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoveReasonCodesDetails;
export declare function MoveReasonCodesDetailsToJSON(value?: MoveReasonCodesDetails | null): any;
