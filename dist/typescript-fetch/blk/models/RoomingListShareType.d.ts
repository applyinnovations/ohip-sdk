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
import type { EffectiveRatesType } from './EffectiveRatesType';
import type { RoomingListShareReservationType } from './RoomingListShareReservationType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Specifies a group of two or more rooming list reservations that need to be created as shared reservations.
 * @export
 * @interface RoomingListShareType
 */
export interface RoomingListShareType {
    /**
     *
     * @type {EffectiveRatesType}
     * @memberof RoomingListShareType
     */
    effectiveRates?: EffectiveRatesType;
    /**
     * Contains information about the rooming list reservation that is to be shared and specifies the type of share that is to be created.
     * @type {Array<RoomingListShareReservationType>}
     * @memberof RoomingListShareType
     */
    reservation?: Array<RoomingListShareReservationType>;
    /**
     *
     * @type {TimeSpanType}
     * @memberof RoomingListShareType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the RoomingListShareType interface.
 */
export declare function instanceOfRoomingListShareType(value: object): boolean;
export declare function RoomingListShareTypeFromJSON(json: any): RoomingListShareType;
export declare function RoomingListShareTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomingListShareType;
export declare function RoomingListShareTypeToJSON(value?: RoomingListShareType | null): any;