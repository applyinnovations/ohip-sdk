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
import type { ECouponCodeType } from './ECouponCodeType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object to fetch eCoupon codes.
 * @export
 * @interface ECouponCodes
 */
export interface ECouponCodes {
    /**
     * List of eCoupon Codes.
     * @type {Array<ECouponCodeType>}
     * @memberof ECouponCodes
     */
    eCouponCodes?: Array<ECouponCodeType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ECouponCodes
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ECouponCodes
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ECouponCodes interface.
 */
export declare function instanceOfECouponCodes(value: object): boolean;
export declare function ECouponCodesFromJSON(json: any): ECouponCodes;
export declare function ECouponCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECouponCodes;
export declare function ECouponCodesToJSON(value?: ECouponCodes | null): any;
