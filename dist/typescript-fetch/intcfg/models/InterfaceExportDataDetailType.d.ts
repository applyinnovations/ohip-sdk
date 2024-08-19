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
 * This gives information of export detail of a hotel interface.
 * @export
 * @interface InterfaceExportDataDetailType
 */
export interface InterfaceExportDataDetailType {
    /**
     * Specifies the table where the event data is stored.
     * @type {string}
     * @memberof InterfaceExportDataDetailType
     */
    sourceTableName?: string;
    /**
     * Specifies the column name found in the table.
     * @type {string}
     * @memberof InterfaceExportDataDetailType
     */
    columnName?: string;
    /**
     * Specifies the type of data in the column.
     * @type {string}
     * @memberof InterfaceExportDataDetailType
     */
    dataType?: string;
    /**
     * Specifies the length of data in the column.
     * @type {number}
     * @memberof InterfaceExportDataDetailType
     */
    dataLength?: number;
    /**
     * Specifies the tag name found in the export.
     * @type {string}
     * @memberof InterfaceExportDataDetailType
     */
    xMLTagName?: string;
    /**
     * Specifies whether the column is chosen to be included in the export.
     * @type {boolean}
     * @memberof InterfaceExportDataDetailType
     */
    columnSelected?: boolean;
}
/**
 * Check if a given object implements the InterfaceExportDataDetailType interface.
 */
export declare function instanceOfInterfaceExportDataDetailType(value: object): boolean;
export declare function InterfaceExportDataDetailTypeFromJSON(json: any): InterfaceExportDataDetailType;
export declare function InterfaceExportDataDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceExportDataDetailType;
export declare function InterfaceExportDataDetailTypeToJSON(value?: InterfaceExportDataDetailType | null): any;
