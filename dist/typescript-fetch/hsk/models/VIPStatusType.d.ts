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
/**
 * VIP status of the customer.
 * @export
 * @interface VIPStatusType
 */
export interface VIPStatusType {
    /**
     * VIP status of the customer.
     * @type {string}
     * @memberof VIPStatusType
     */
    code?: string;
    /**
     * Used for Character Strings, length 0 to 2000.
     * @type {string}
     * @memberof VIPStatusType
     */
    value?: string;
}
/**
 * Check if a given object implements the VIPStatusType interface.
 */
export declare function instanceOfVIPStatusType(value: object): boolean;
export declare function VIPStatusTypeFromJSON(json: any): VIPStatusType;
export declare function VIPStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VIPStatusType;
export declare function VIPStatusTypeToJSON(value?: VIPStatusType | null): any;