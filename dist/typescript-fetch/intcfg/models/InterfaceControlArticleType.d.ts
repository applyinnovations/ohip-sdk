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
 * @interface InterfaceControlArticleType
 */
export interface InterfaceControlArticleType {
    /**
     * Hotel Code of the hotel interface.
     * @type {string}
     * @memberof InterfaceControlArticleType
     */
    hotelId?: string;
    /**
     * Logo of the hotel interface.
     * @type {string}
     * @memberof InterfaceControlArticleType
     */
    logo?: string;
    /**
     * Internal code of a translation article setup.
     * @type {number}
     * @memberof InterfaceControlArticleType
     */
    internalCode?: number;
    /**
     * Selector of a translation article setup.
     * @type {string}
     * @memberof InterfaceControlArticleType
     */
    selector?: string;
    /**
     * Article Number of a translation article setup.
     * @type {string}
     * @memberof InterfaceControlArticleType
     */
    articleNo?: string;
    /**
     * Description of a translation article setup.
     * @type {string}
     * @memberof InterfaceControlArticleType
     */
    description?: string;
}
/**
 * Check if a given object implements the InterfaceControlArticleType interface.
 */
export declare function instanceOfInterfaceControlArticleType(value: object): boolean;
export declare function InterfaceControlArticleTypeFromJSON(json: any): InterfaceControlArticleType;
export declare function InterfaceControlArticleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceControlArticleType;
export declare function InterfaceControlArticleTypeToJSON(value?: InterfaceControlArticleType | null): any;
