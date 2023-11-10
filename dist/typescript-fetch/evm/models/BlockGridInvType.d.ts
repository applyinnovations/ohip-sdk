/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Indicates the inventory values ( occupancy or availability ) per person occupancy.
 * @export
 * @interface BlockGridInvType
 */
export interface BlockGridInvType {
    /**
     * Indicates the cutoff date.Date when inventory left in the block will be cut-off.
     * @type {Date}
     * @memberof BlockGridInvType
     */
    cutoffDate?: Date;
    /**
     * Indicates the four person inventory value ( occupancy or availability ).
     * @type {number}
     * @memberof BlockGridInvType
     */
    fourPerson?: number;
    /**
     * Indicates the one person inventory value ( occupancy or availability ).
     * @type {number}
     * @memberof BlockGridInvType
     */
    onePerson?: number;
    /**
     * Indicates the sell limit
     * @type {number}
     * @memberof BlockGridInvType
     */
    sellLimit?: number;
    /**
     * Indicates the three person inventory value ( occupancy or availability ).
     * @type {number}
     * @memberof BlockGridInvType
     */
    threePerson?: number;
    /**
     * Indicates the two person inventory value ( occupancy or availability ).
     * @type {number}
     * @memberof BlockGridInvType
     */
    twoPerson?: number;
}
/**
 * Check if a given object implements the BlockGridInvType interface.
 */
export declare function instanceOfBlockGridInvType(value: object): boolean;
export declare function BlockGridInvTypeFromJSON(json: any): BlockGridInvType;
export declare function BlockGridInvTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockGridInvType;
export declare function BlockGridInvTypeToJSON(value?: BlockGridInvType | null): any;
