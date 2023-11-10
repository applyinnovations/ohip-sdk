/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockIdList } from './BlockIdList';
/**
 * Key information about the block for a reservation.
 * @export
 * @interface ReservationBlockType
 */
export interface ReservationBlockType {
    /**
     *
     * @type {BlockIdList}
     * @memberof ReservationBlockType
     */
    blockIdList?: BlockIdList;
    /**
     * The Name of the block that is attached to the reservation.
     * @type {string}
     * @memberof ReservationBlockType
     */
    blockName?: string;
    /**
     * This is the HotelCode of the Block.
     * @type {string}
     * @memberof ReservationBlockType
     */
    hotelId?: string;
}
/**
 * Check if a given object implements the ReservationBlockType interface.
 */
export declare function instanceOfReservationBlockType(value: object): boolean;
export declare function ReservationBlockTypeFromJSON(json: any): ReservationBlockType;
export declare function ReservationBlockTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationBlockType;
export declare function ReservationBlockTypeToJSON(value?: ReservationBlockType | null): any;
