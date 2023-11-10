/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Details of single room type
 * @export
 * @interface RateRoomTypeDetailType
 */
export interface RateRoomTypeDetailType {
    /**
     * Room type code
     * @type {string}
     * @memberof RateRoomTypeDetailType
     */
    code?: string;
    /**
     * Text description for the room type
     * @type {string}
     * @memberof RateRoomTypeDetailType
     */
    description?: string;
    /**
     * True if room type will not be associated with physical rooms included in inventory
     * @type {boolean}
     * @memberof RateRoomTypeDetailType
     */
    pseudo?: boolean;
    /**
     * This is the minimum amount of which room can be sold
     * @type {number}
     * @memberof RateRoomTypeDetailType
     */
    rateFloor?: number;
}
/**
 * Check if a given object implements the RateRoomTypeDetailType interface.
 */
export declare function instanceOfRateRoomTypeDetailType(value: object): boolean;
export declare function RateRoomTypeDetailTypeFromJSON(json: any): RateRoomTypeDetailType;
export declare function RateRoomTypeDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateRoomTypeDetailType;
export declare function RateRoomTypeDetailTypeToJSON(value?: RateRoomTypeDetailType | null): any;
