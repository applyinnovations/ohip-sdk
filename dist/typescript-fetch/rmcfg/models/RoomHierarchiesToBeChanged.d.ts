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
import type { InstanceLink } from './InstanceLink';
import type { RoomHierarchyType } from './RoomHierarchyType';
import type { WarningType } from './WarningType';
/**
 * Request to change room hierarchies
 * @export
 * @interface RoomHierarchiesToBeChanged
 */
export interface RoomHierarchiesToBeChanged {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RoomHierarchiesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Holds collection of room hierarchies
     * @type {Array<RoomHierarchyType>}
     * @memberof RoomHierarchiesToBeChanged
     */
    roomHierarchies?: Array<RoomHierarchyType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomHierarchiesToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RoomHierarchiesToBeChanged interface.
 */
export declare function instanceOfRoomHierarchiesToBeChanged(value: object): boolean;
export declare function RoomHierarchiesToBeChangedFromJSON(json: any): RoomHierarchiesToBeChanged;
export declare function RoomHierarchiesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomHierarchiesToBeChanged;
export declare function RoomHierarchiesToBeChangedToJSON(value?: RoomHierarchiesToBeChanged | null): any;