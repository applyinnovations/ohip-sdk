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
import type { RoomHierarchyTypeType } from './RoomHierarchyTypeType';
/**
 * Room hierarchy search type to fetch room hierarchies
 * @export
 * @interface RoomHierarchySearchType
 */
export interface RoomHierarchySearchType {
    /**
     * From code to process
     * @type {string}
     * @memberof RoomHierarchySearchType
     */
    fromCode?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof RoomHierarchySearchType
     */
    hotelCodes?: Array<string>;
    /**
     *
     * @type {RoomHierarchyTypeType}
     * @memberof RoomHierarchySearchType
     */
    roomHierarchyType?: RoomHierarchyTypeType;
    /**
     * To code to process
     * @type {string}
     * @memberof RoomHierarchySearchType
     */
    toCode?: string;
}
/**
 * Check if a given object implements the RoomHierarchySearchType interface.
 */
export declare function instanceOfRoomHierarchySearchType(value: object): boolean;
export declare function RoomHierarchySearchTypeFromJSON(json: any): RoomHierarchySearchType;
export declare function RoomHierarchySearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomHierarchySearchType;
export declare function RoomHierarchySearchTypeToJSON(value?: RoomHierarchySearchType | null): any;
