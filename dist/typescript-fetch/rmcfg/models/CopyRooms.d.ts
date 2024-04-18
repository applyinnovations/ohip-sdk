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
import type { CopyRoomType } from './CopyRoomType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for creating multiple rooms based on an existing room. New rooms may have different floor preferences, room features, housekeeping credits and room sections. The rest of the details except for attached connecting rooms will be copied from the base existing room. Component rooms are not allowed to be copied.
 * @export
 * @interface CopyRooms
 */
export interface CopyRooms {
    /**
     *
     * @type {CopyRoomType}
     * @memberof CopyRooms
     */
    copyRoom?: CopyRoomType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CopyRooms
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CopyRooms
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CopyRooms interface.
 */
export declare function instanceOfCopyRooms(value: object): boolean;
export declare function CopyRoomsFromJSON(json: any): CopyRooms;
export declare function CopyRoomsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyRooms;
export declare function CopyRoomsToJSON(value?: CopyRooms | null): any;