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
import type { RoomFeatureType } from './RoomFeatureType';
import type { RoomSectionType } from './RoomSectionType';
/**
 * Room details that may differ from the base existing room. If any of Floor, RoomFeatures, HousekeepingCredits and RoomSection types is not passed together with this type, it means that it is expected to be empty for the new room; otherwise, they will have the value of the base existing room. Connecting rooms attached to the base existing room will not be created for the new room.
 * @export
 * @interface CopyNewRoomType
 */
export interface CopyNewRoomType {
    /**
     *
     * @type {Array<string>}
     * @memberof CopyNewRoomType
     */
    floors?: Array<string>;
    /**
     * Housekeeping credits of the room. This may include stayover, departure, pickup and turndown credits.
     * @type {Array<HousekeepingCreditsType>}
     * @memberof CopyNewRoomType
     */
    housekeepingCredits?: Array<HousekeepingCreditsType>;
    /**
     * A recurring element that identifies the room features.
     * @type {Array<RoomFeatureType>}
     * @memberof CopyNewRoomType
     */
    roomFeatures?: Array<RoomFeatureType>;
    /**
     * Room number of the new room to be created.
     * @type {string}
     * @memberof CopyNewRoomType
     */
    roomId?: string;
    /**
     *
     * @type {RoomSectionType}
     * @memberof CopyNewRoomType
     */
    roomSection?: RoomSectionType;
}
/**
 * Check if a given object implements the CopyNewRoomType interface.
 */
export declare function instanceOfCopyNewRoomType(value: object): boolean;
export declare function CopyNewRoomTypeFromJSON(json: any): CopyNewRoomType;
export declare function CopyNewRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyNewRoomType;
export declare function CopyNewRoomTypeToJSON(value?: CopyNewRoomType | null): any;
