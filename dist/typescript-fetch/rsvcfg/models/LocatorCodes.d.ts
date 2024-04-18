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
import type { LocatorCodeType } from './LocatorCodeType';
import type { WarningType } from './WarningType';
/**
 * Request object for modifying an existing locator code.
 * @export
 * @interface LocatorCodes
 */
export interface LocatorCodes {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof LocatorCodes
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of locator codes.
     * @type {Array<LocatorCodeType>}
     * @memberof LocatorCodes
     */
    locatorCodes?: Array<LocatorCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof LocatorCodes
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the LocatorCodes interface.
 */
export declare function instanceOfLocatorCodes(value: object): boolean;
export declare function LocatorCodesFromJSON(json: any): LocatorCodes;
export declare function LocatorCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocatorCodes;
export declare function LocatorCodesToJSON(value?: LocatorCodes | null): any;