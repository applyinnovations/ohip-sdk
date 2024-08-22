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
 * @interface InterfaceControlLangType
 */
export interface InterfaceControlLangType {
    /**
     * Hotel Code of the hotel interface.
     * @type {string}
     * @memberof InterfaceControlLangType
     */
    hotelId?: string;
    /**
     * Logo of the hotel interface.
     * @type {string}
     * @memberof InterfaceControlLangType
     */
    logo?: string;
    /**
     * Internal code of a translation language setup.
     * @type {number}
     * @memberof InterfaceControlLangType
     */
    internalCode?: number;
    /**
     * Selector of a translation language setup.
     * @type {string}
     * @memberof InterfaceControlLangType
     */
    selector?: string;
    /**
     * Language code of a translation language setup.
     * @type {string}
     * @memberof InterfaceControlLangType
     */
    languageCode?: string;
}
/**
 * Check if a given object implements the InterfaceControlLangType interface.
 */
export declare function instanceOfInterfaceControlLangType(value: object): boolean;
export declare function InterfaceControlLangTypeFromJSON(json: any): InterfaceControlLangType;
export declare function InterfaceControlLangTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceControlLangType;
export declare function InterfaceControlLangTypeToJSON(value?: InterfaceControlLangType | null): any;
