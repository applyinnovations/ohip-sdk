/**
 * OPERA Cloud Block Reservation Asynchronous API
 * APIs to cater Block Reservation related asynchronous functionality in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RoomAllocationDetailsType } from './RoomAllocationDetailsType';
/**
 *
 * @export
 * @interface RoomAllocationDateType
 */
export interface RoomAllocationDateType {
    /**
     * The block date for which the allocation details are listed.
     * @type {string}
     * @memberof RoomAllocationDateType
     */
    allocationDate?: string;
    /**
     *
     * @type {Array<RoomAllocationDetailsType>}
     * @memberof RoomAllocationDateType
     */
    allocations?: Array<RoomAllocationDetailsType>;
}
/**
 * Check if a given object implements the RoomAllocationDateType interface.
 */
export declare function instanceOfRoomAllocationDateType(value: object): boolean;
export declare function RoomAllocationDateTypeFromJSON(json: any): RoomAllocationDateType;
export declare function RoomAllocationDateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomAllocationDateType;
export declare function RoomAllocationDateTypeToJSON(value?: RoomAllocationDateType | null): any;
