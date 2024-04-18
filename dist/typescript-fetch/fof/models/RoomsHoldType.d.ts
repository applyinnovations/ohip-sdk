/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Hold reason and the list of the rooms that are to be put on hold under that reason.
 * @export
 * @interface RoomsHoldType
 */
export interface RoomsHoldType {
    /**
     * Comments to the rooms being put on hold.
     * @type {string}
     * @memberof RoomsHoldType
     */
    comments?: string;
    /**
     * Resort where room hold is to take place.
     * @type {string}
     * @memberof RoomsHoldType
     */
    hotelId?: string;
    /**
     * List of rooms that are to be put on hold.
     * @type {string}
     * @memberof RoomsHoldType
     */
    reason?: string;
    /**
     * Collection of room numbers that are to be placed on hold.
     * @type {Array<string>}
     * @memberof RoomsHoldType
     */
    rooms?: Array<string>;
}
/**
 * Check if a given object implements the RoomsHoldType interface.
 */
export declare function instanceOfRoomsHoldType(value: object): boolean;
export declare function RoomsHoldTypeFromJSON(json: any): RoomsHoldType;
export declare function RoomsHoldTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomsHoldType;
export declare function RoomsHoldTypeToJSON(value?: RoomsHoldType | null): any;