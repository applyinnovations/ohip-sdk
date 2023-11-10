/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ImportRoomsType
 */
export interface ImportRoomsType {
    /**
     * Translation table for incoming messages.
     * @type {string}
     * @memberof ImportRoomsType
     */
    inXlatId?: string;
    /**
     * Indicator for support of Input/Output Lines for Hotel Room Categories.
     * @type {boolean}
     * @memberof ImportRoomsType
     */
    ioLines?: boolean;
    /**
     * Translation table for outgoing messages.
     * @type {string}
     * @memberof ImportRoomsType
     */
    ouXlatId?: string;
    /**
     * Indicator for Requires line number setup, from Import Rooms related information of a Hotel Interface.
     * @type {boolean}
     * @memberof ImportRoomsType
     */
    requiresLineNumberSetup?: boolean;
    /**
     * Concatenated label of Hotel Room Categories for which SendToInterface flag should be set as true.
     * @type {string}
     * @memberof ImportRoomsType
     */
    selectedRoomTypes?: string;
    /**
     * Indicator for Virtual number setup, from Import Rooms related information of a Hotel Interface.
     * @type {boolean}
     * @memberof ImportRoomsType
     */
    virtualNumberSetup?: boolean;
}
/**
 * Check if a given object implements the ImportRoomsType interface.
 */
export declare function instanceOfImportRoomsType(value: object): boolean;
export declare function ImportRoomsTypeFromJSON(json: any): ImportRoomsType;
export declare function ImportRoomsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportRoomsType;
export declare function ImportRoomsTypeToJSON(value?: ImportRoomsType | null): any;
