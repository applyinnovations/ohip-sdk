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
import type { ReservationId } from './ReservationId';
/**
 * Room Information needed in updating the status.
 * @export
 * @interface RoomInformationType
 */
export interface RoomInformationType {
    /**
     *
     * @type {ReservationId}
     * @memberof RoomInformationType
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {string}
     * @memberof RoomInformationType
     */
    roomId?: string;
}
/**
 * Check if a given object implements the RoomInformationType interface.
 */
export declare function instanceOfRoomInformationType(value: object): boolean;
export declare function RoomInformationTypeFromJSON(json: any): RoomInformationType;
export declare function RoomInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomInformationType;
export declare function RoomInformationTypeToJSON(value?: RoomInformationType | null): any;