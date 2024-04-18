/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface HotelInterfaceSchemaType
 */
export interface HotelInterfaceSchemaType {
    /**
     * Hotel Code
     * @type {string}
     * @memberof HotelInterfaceSchemaType
     */
    hotelId?: string;
    /**
     * Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create.
     * @type {string}
     * @memberof HotelInterfaceSchemaType
     */
    logo?: string;
    /**
     * Action Name
     * @type {string}
     * @memberof HotelInterfaceSchemaType
     */
    actionName?: string;
    /**
     * Schema Name
     * @type {string}
     * @memberof HotelInterfaceSchemaType
     */
    schemaName?: string;
    /**
     * Schema
     * @type {string}
     * @memberof HotelInterfaceSchemaType
     */
    schema?: string;
    /**
     * Date time stamp of a Hotel Interface Schema.
     * @type {string}
     * @memberof HotelInterfaceSchemaType
     */
    insertDate?: string;
    /**
     * ifcType
     * @type {string}
     * @memberof HotelInterfaceSchemaType
     */
    ifcType?: string;
}
/**
 * Check if a given object implements the HotelInterfaceSchemaType interface.
 */
export declare function instanceOfHotelInterfaceSchemaType(value: object): boolean;
export declare function HotelInterfaceSchemaTypeFromJSON(json: any): HotelInterfaceSchemaType;
export declare function HotelInterfaceSchemaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInterfaceSchemaType;
export declare function HotelInterfaceSchemaTypeToJSON(value?: HotelInterfaceSchemaType | null): any;