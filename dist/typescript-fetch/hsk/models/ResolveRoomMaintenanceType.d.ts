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
 * Resolve Room Maintenance Type.
 * @export
 * @interface ResolveRoomMaintenanceType
 */
export interface ResolveRoomMaintenanceType {
    /**
     * Resolve date.
     * @type {string}
     * @memberof ResolveRoomMaintenanceType
     */
    resolveDate?: string;
    /**
     * Resolved by user.
     * @type {string}
     * @memberof ResolveRoomMaintenanceType
     */
    resolveUser?: string;
}
/**
 * Check if a given object implements the ResolveRoomMaintenanceType interface.
 */
export declare function instanceOfResolveRoomMaintenanceType(value: object): boolean;
export declare function ResolveRoomMaintenanceTypeFromJSON(json: any): ResolveRoomMaintenanceType;
export declare function ResolveRoomMaintenanceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResolveRoomMaintenanceType;
export declare function ResolveRoomMaintenanceTypeToJSON(value?: ResolveRoomMaintenanceType | null): any;