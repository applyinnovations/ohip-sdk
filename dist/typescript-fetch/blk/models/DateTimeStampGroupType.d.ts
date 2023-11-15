/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface DateTimeStampGroupType
 */
export interface DateTimeStampGroupType {
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof DateTimeStampGroupType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof DateTimeStampGroupType
     */
    creatorId?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof DateTimeStampGroupType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof DateTimeStampGroupType
     */
    lastModifyDateTime?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof DateTimeStampGroupType
     */
    purgeDate?: string;
}
/**
 * Check if a given object implements the DateTimeStampGroupType interface.
 */
export declare function instanceOfDateTimeStampGroupType(value: object): boolean;
export declare function DateTimeStampGroupTypeFromJSON(json: any): DateTimeStampGroupType;
export declare function DateTimeStampGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateTimeStampGroupType;
export declare function DateTimeStampGroupTypeToJSON(value?: DateTimeStampGroupType | null): any;
