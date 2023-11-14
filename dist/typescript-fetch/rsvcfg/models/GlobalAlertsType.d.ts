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
import type { GlobalAlertType } from './GlobalAlertType';
/**
 * Collection of property level global alert details with attached global alert types.
 * @export
 * @interface GlobalAlertsType
 */
export interface GlobalAlertsType extends Array<GlobalAlertType> {
}
/**
 * Check if a given object implements the GlobalAlertsType interface.
 */
export declare function instanceOfGlobalAlertsType(value: object): boolean;
export declare function GlobalAlertsTypeFromJSON(json: any): GlobalAlertsType;
export declare function GlobalAlertsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAlertsType;
export declare function GlobalAlertsTypeToJSON(value?: GlobalAlertsType | null): any;