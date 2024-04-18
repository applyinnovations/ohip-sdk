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
import type { ConfigRoomType } from './ConfigRoomType';
/**
 * This type holds collection of rooms with complete information.
 * @export
 * @interface ConfigRoomsType
 */
export interface ConfigRoomsType {
    /**
     * Hotel Code of the rooms.
     * @type {string}
     * @memberof ConfigRoomsType
     */
    hotelId?: string;
    /**
     *
     * @type {Array<ConfigRoomType>}
     * @memberof ConfigRoomsType
     */
    room?: Array<ConfigRoomType>;
}
/**
 * Check if a given object implements the ConfigRoomsType interface.
 */
export declare function instanceOfConfigRoomsType(value: object): boolean;
export declare function ConfigRoomsTypeFromJSON(json: any): ConfigRoomsType;
export declare function ConfigRoomsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigRoomsType;
export declare function ConfigRoomsTypeToJSON(value?: ConfigRoomsType | null): any;