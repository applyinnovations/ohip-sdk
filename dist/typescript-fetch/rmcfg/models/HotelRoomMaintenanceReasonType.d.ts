/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Base common structure for Room Maintenance at both hotel and template levels.
 * @export
 * @interface HotelRoomMaintenanceReasonType
 */
export interface HotelRoomMaintenanceReasonType {
    /**
     * Identification code for a particular room maintenance reason.
     * @type {string}
     * @memberof HotelRoomMaintenanceReasonType
     */
    code?: string;
    /**
     * Description of a particular room maintenance reason.
     * @type {string}
     * @memberof HotelRoomMaintenanceReasonType
     */
    description?: string;
    /**
     * Hotel code that a particular room maintenance reason belongs to.
     * @type {string}
     * @memberof HotelRoomMaintenanceReasonType
     */
    hotelId?: string;
    /**
     * Inactive flag for a particular room maintenance reason.
     * @type {boolean}
     * @memberof HotelRoomMaintenanceReasonType
     */
    inactive?: boolean;
    /**
     * Indicates the sell sequence for a particular room maintenance reason.
     * @type {number}
     * @memberof HotelRoomMaintenanceReasonType
     */
    sellSequence?: number;
}
/**
 * Check if a given object implements the HotelRoomMaintenanceReasonType interface.
 */
export declare function instanceOfHotelRoomMaintenanceReasonType(value: object): boolean;
export declare function HotelRoomMaintenanceReasonTypeFromJSON(json: any): HotelRoomMaintenanceReasonType;
export declare function HotelRoomMaintenanceReasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelRoomMaintenanceReasonType;
export declare function HotelRoomMaintenanceReasonTypeToJSON(value?: HotelRoomMaintenanceReasonType | null): any;
