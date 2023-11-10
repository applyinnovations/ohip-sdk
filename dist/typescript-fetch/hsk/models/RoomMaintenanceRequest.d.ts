/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { RoomMaintenanceRequestType } from './RoomMaintenanceRequestType';
import type { WarningsType } from './WarningsType';
/**
 * Request to create a room maintenance record.
 * @export
 * @interface RoomMaintenanceRequest
 */
export interface RoomMaintenanceRequest {
    /**
     *
     * @type {RoomMaintenanceRequestType}
     * @memberof RoomMaintenanceRequest
     */
    criteria?: RoomMaintenanceRequestType;
    /**
     * Attribute to decide whether response should include additional details.
     * @type {boolean}
     * @memberof RoomMaintenanceRequest
     */
    includeDetails?: boolean;
    /**
     *
     * @type {Links}
     * @memberof RoomMaintenanceRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof RoomMaintenanceRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the RoomMaintenanceRequest interface.
 */
export declare function instanceOfRoomMaintenanceRequest(value: object): boolean;
export declare function RoomMaintenanceRequestFromJSON(json: any): RoomMaintenanceRequest;
export declare function RoomMaintenanceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomMaintenanceRequest;
export declare function RoomMaintenanceRequestToJSON(value?: RoomMaintenanceRequest | null): any;
