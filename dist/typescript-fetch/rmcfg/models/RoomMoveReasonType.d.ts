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
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * Contains Common Master configuration detail.
 * @export
 * @interface RoomMoveReasonType
 */
export interface RoomMoveReasonType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof RoomMoveReasonType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof RoomMoveReasonType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof RoomMoveReasonType
     */
    displayOrder?: number;
}
/**
 * Check if a given object implements the RoomMoveReasonType interface.
 */
export declare function instanceOfRoomMoveReasonType(value: object): boolean;
export declare function RoomMoveReasonTypeFromJSON(json: any): RoomMoveReasonType;
export declare function RoomMoveReasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomMoveReasonType;
export declare function RoomMoveReasonTypeToJSON(value?: RoomMoveReasonType | null): any;
