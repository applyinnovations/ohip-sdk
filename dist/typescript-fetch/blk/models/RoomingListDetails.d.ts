/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { RoomingListReservationsType } from './RoomingListReservationsType';
import type { RoomingListSharesType } from './RoomingListSharesType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for creation of block rooming list. This object contains the details with unique identifiers for the created block reservations. Also Success,Warnings and Errors related to this operation.
 * @export
 * @interface RoomingListDetails
 */
export interface RoomingListDetails {
    /**
     *
     * @type {Links}
     * @memberof RoomingListDetails
     */
    links?: Links;
    /**
     *
     * @type {RoomingListReservationsType}
     * @memberof RoomingListDetails
     */
    reservations?: RoomingListReservationsType;
    /**
     *
     * @type {RoomingListSharesType}
     * @memberof RoomingListDetails
     */
    shares?: RoomingListSharesType;
    /**
     *
     * @type {WarningsType}
     * @memberof RoomingListDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the RoomingListDetails interface.
 */
export declare function instanceOfRoomingListDetails(value: object): boolean;
export declare function RoomingListDetailsFromJSON(json: any): RoomingListDetails;
export declare function RoomingListDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomingListDetails;
export declare function RoomingListDetailsToJSON(value?: RoomingListDetails | null): any;