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
import type { RoomTypesSummaryType } from './RoomTypesSummaryType';
import type { TranslationTextType50 } from './TranslationTextType50';
/**
 * Common code type for code, description, seq and inactive
 * @export
 * @interface RoomClassType
 */
export interface RoomClassType {
    /**
     * Code for the code type.
     * @type {string}
     * @memberof RoomClassType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType50}
     * @memberof RoomClassType
     */
    description?: TranslationTextType50;
    /**
     * Hotel code for the code type.
     * @type {string}
     * @memberof RoomClassType
     */
    hotelId?: string;
    /**
     * Indicates the code type is inactive or not.
     * @type {boolean}
     * @memberof RoomClassType
     */
    inactive?: boolean;
    /**
     *
     * @type {RoomTypesSummaryType}
     * @memberof RoomClassType
     */
    roomTypes?: RoomTypesSummaryType;
    /**
     * Display sequence for the code type.
     * @type {number}
     * @memberof RoomClassType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the RoomClassType interface.
 */
export declare function instanceOfRoomClassType(value: object): boolean;
export declare function RoomClassTypeFromJSON(json: any): RoomClassType;
export declare function RoomClassTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomClassType;
export declare function RoomClassTypeToJSON(value?: RoomClassType | null): any;