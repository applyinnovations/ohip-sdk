/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Room Condition Template Type
 * @export
 * @interface RoomCondtionTemplateType
 */
export interface RoomCondtionTemplateType {
    /**
     *
     * @type {string}
     * @memberof RoomCondtionTemplateType
     */
    code?: string;
    /**
     * Comments for the room condition.
     * @type {string}
     * @memberof RoomCondtionTemplateType
     */
    comments?: string;
    /**
     * Description for the room condition.
     * @type {string}
     * @memberof RoomCondtionTemplateType
     */
    description?: string;
    /**
     * Indicates types of assignment.
     * @type {boolean}
     * @memberof RoomCondtionTemplateType
     */
    displayInRoomAssignment?: boolean;
    /**
     *
     * @type {number}
     * @memberof RoomCondtionTemplateType
     */
    displaySeq?: number;
    /**
     *
     * @type {boolean}
     * @memberof RoomCondtionTemplateType
     */
    inactive?: boolean;
}
/**
 * Check if a given object implements the RoomCondtionTemplateType interface.
 */
export declare function instanceOfRoomCondtionTemplateType(value: object): boolean;
export declare function RoomCondtionTemplateTypeFromJSON(json: any): RoomCondtionTemplateType;
export declare function RoomCondtionTemplateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomCondtionTemplateType;
export declare function RoomCondtionTemplateTypeToJSON(value?: RoomCondtionTemplateType | null): any;
