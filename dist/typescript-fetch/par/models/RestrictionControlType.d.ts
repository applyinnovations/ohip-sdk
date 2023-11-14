/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * The RestrictionControlType is used to indicate the applicability of the restriction.
 * @export
 * @interface RestrictionControlType
 */
export interface RestrictionControlType {
    /**
     * Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified.
     * @type {string}
     * @memberof RestrictionControlType
     */
    bookingChannelCode?: string;
    /**
     * Indicates the restriction is applicable at the House Level. When this is true all other attributes are ignored.
     * @type {boolean}
     * @memberof RestrictionControlType
     */
    house?: boolean;
    /**
     * Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified.
     * @type {string}
     * @memberof RestrictionControlType
     */
    ratePlanCategory?: string;
    /**
     * Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified.
     * @type {string}
     * @memberof RestrictionControlType
     */
    ratePlanCode?: string;
    /**
     * Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified.
     * @type {string}
     * @memberof RestrictionControlType
     */
    roomClass?: string;
    /**
     * Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified.
     * @type {string}
     * @memberof RestrictionControlType
     */
    roomType?: string;
}
/**
 * Check if a given object implements the RestrictionControlType interface.
 */
export declare function instanceOfRestrictionControlType(value: object): boolean;
export declare function RestrictionControlTypeFromJSON(json: any): RestrictionControlType;
export declare function RestrictionControlTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestrictionControlType;
export declare function RestrictionControlTypeToJSON(value?: RestrictionControlType | null): any;