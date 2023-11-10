/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * User defined information(UDF) for the hotel.
 * @export
 * @interface HotelUserDefinedFieldType
 */
export interface HotelUserDefinedFieldType {
    /**
     * The UDF Category for this information.
     * @type {string}
     * @memberof HotelUserDefinedFieldType
     */
    category?: string;
    /**
     * The UDF Type for this information.
     * @type {string}
     * @memberof HotelUserDefinedFieldType
     */
    infoType?: string;
    /**
     * The UDF attribute for this information.
     * @type {string}
     * @memberof HotelUserDefinedFieldType
     */
    information?: string;
}
/**
 * Check if a given object implements the HotelUserDefinedFieldType interface.
 */
export declare function instanceOfHotelUserDefinedFieldType(value: object): boolean;
export declare function HotelUserDefinedFieldTypeFromJSON(json: any): HotelUserDefinedFieldType;
export declare function HotelUserDefinedFieldTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelUserDefinedFieldType;
export declare function HotelUserDefinedFieldTypeToJSON(value?: HotelUserDefinedFieldType | null): any;
