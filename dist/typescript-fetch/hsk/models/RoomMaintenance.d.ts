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
import type { InstanceLink } from './InstanceLink';
import type { RoomMaintenanceChangeType } from './RoomMaintenanceChangeType';
import type { WarningType } from './WarningType';
/**
 * Request to change room maintenance details.
 * @export
 * @interface RoomMaintenance
 */
export interface RoomMaintenance {
    /**
     *
     * @type {RoomMaintenanceChangeType}
     * @memberof RoomMaintenance
     */
    criteria?: RoomMaintenanceChangeType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RoomMaintenance
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomMaintenance
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RoomMaintenance interface.
 */
export declare function instanceOfRoomMaintenance(value: object): boolean;
export declare function RoomMaintenanceFromJSON(json: any): RoomMaintenance;
export declare function RoomMaintenanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomMaintenance;
export declare function RoomMaintenanceToJSON(value?: RoomMaintenance | null): any;