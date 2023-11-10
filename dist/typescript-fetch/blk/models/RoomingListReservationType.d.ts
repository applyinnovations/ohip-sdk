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
import type { ErrorsType } from './ErrorsType';
import type { HotelReservationType } from './HotelReservationType';
import type { RoutingInfoListType } from './RoutingInfoListType';
/**
 * This is used when changing block reservations in bulk.
 * @export
 * @interface RoomingListReservationType
 */
export interface RoomingListReservationType {
    /**
     *
     * @type {ErrorsType}
     * @memberof RoomingListReservationType
     */
    errors?: ErrorsType;
    /**
     *
     * @type {HotelReservationType}
     * @memberof RoomingListReservationType
     */
    hotelReservation?: HotelReservationType;
    /**
     * Unique identifier that identifies the sequence of an individual rooming list reservation. The sequence will be maintained across every request and response.
     * @type {number}
     * @memberof RoomingListReservationType
     */
    roomingListSequence?: number;
    /**
     *
     * @type {RoutingInfoListType}
     * @memberof RoomingListReservationType
     */
    routingInstructions?: RoutingInfoListType;
    /**
     * Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors.
     * @type {object}
     * @memberof RoomingListReservationType
     */
    success?: object;
}
/**
 * Check if a given object implements the RoomingListReservationType interface.
 */
export declare function instanceOfRoomingListReservationType(value: object): boolean;
export declare function RoomingListReservationTypeFromJSON(json: any): RoomingListReservationType;
export declare function RoomingListReservationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomingListReservationType;
export declare function RoomingListReservationTypeToJSON(value?: RoomingListReservationType | null): any;
