/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ApplicationUserType } from './ApplicationUserType';
/**
 * Information about on break start time and the application user who goes on break.
 * @export
 * @interface AppUserOnBreakType
 */
export interface AppUserOnBreakType {
    /**
     *
     * @type {ApplicationUserType}
     * @memberof AppUserOnBreakType
     */
    appUser?: ApplicationUserType;
    /**
     * Start time when the break started.
     * @type {string}
     * @memberof AppUserOnBreakType
     */
    startTime?: string;
}
/**
 * Check if a given object implements the AppUserOnBreakType interface.
 */
export declare function instanceOfAppUserOnBreakType(value: object): boolean;
export declare function AppUserOnBreakTypeFromJSON(json: any): AppUserOnBreakType;
export declare function AppUserOnBreakTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppUserOnBreakType;
export declare function AppUserOnBreakTypeToJSON(value?: AppUserOnBreakType | null): any;
