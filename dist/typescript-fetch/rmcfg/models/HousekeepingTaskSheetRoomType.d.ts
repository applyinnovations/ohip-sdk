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
import type { HousekeepingCreditsType } from './HousekeepingCreditsType';
import type { HousekeepingTaskSheetRoomTypeRuleCredit } from './HousekeepingTaskSheetRoomTypeRuleCredit';
/**
 * Details used for storing information about a housekeeping room
 * @export
 * @interface HousekeepingTaskSheetRoomType
 */
export interface HousekeepingTaskSheetRoomType {
    /**
     * Specifies the building to which the housekeeping room is mapped to. This element will be used only if the BUILDINGS parameter is active.
     * @type {string}
     * @memberof HousekeepingTaskSheetRoomType
     */
    building?: string;
    /**
     * Specifies the day section code. This element will be used only if the HOUSEKEEPING_SECTIONS parameter is active.
     * @type {string}
     * @memberof HousekeepingTaskSheetRoomType
     */
    daySectionCode?: string;
    /**
     * Specifies the evening section code. This element will be used only if the HOUSEKEEPING_SECTIONS parameter is active.
     * @type {string}
     * @memberof HousekeepingTaskSheetRoomType
     */
    eveningSectionCode?: string;
    /**
     * Specifies the floor to which the housekeeping room is mapped to
     * @type {string}
     * @memberof HousekeepingTaskSheetRoomType
     */
    floor?: string;
    /**
     * Specifies the hotel code of the housekeeping room
     * @type {string}
     * @memberof HousekeepingTaskSheetRoomType
     */
    hotelId?: string;
    /**
     * Specifies the housekeeping room code
     * @type {string}
     * @memberof HousekeepingTaskSheetRoomType
     */
    room?: string;
    /**
     * This element will be used only if the value of HOUSEKEEPING_CREDITS setting is set to ROOM. Room credits can be defined for Stayover, Turndown, Departure and Pickup. For Turndown Credits to be used, the TURNDOWN parameter should be active and HOUSEKEEPING_CREDITS setting should be set to a value other than NONE. For Pickup Credits to be used, the PICKUP_STATUS parameter should be active.
     * @type {Array<HousekeepingCreditsType>}
     * @memberof HousekeepingTaskSheetRoomType
     */
    roomCredit?: Array<HousekeepingCreditsType>;
    /**
     * Specifies the housekeeping room type
     * @type {string}
     * @memberof HousekeepingTaskSheetRoomType
     */
    roomType?: string;
    /**
     *
     * @type {HousekeepingTaskSheetRoomTypeRuleCredit}
     * @memberof HousekeepingTaskSheetRoomType
     */
    ruleCredit?: HousekeepingTaskSheetRoomTypeRuleCredit;
    /**
     * Specifies the sorting sequence number for the housekeeping room
     * @type {number}
     * @memberof HousekeepingTaskSheetRoomType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the HousekeepingTaskSheetRoomType interface.
 */
export declare function instanceOfHousekeepingTaskSheetRoomType(value: object): boolean;
export declare function HousekeepingTaskSheetRoomTypeFromJSON(json: any): HousekeepingTaskSheetRoomType;
export declare function HousekeepingTaskSheetRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingTaskSheetRoomType;
export declare function HousekeepingTaskSheetRoomTypeToJSON(value?: HousekeepingTaskSheetRoomType | null): any;