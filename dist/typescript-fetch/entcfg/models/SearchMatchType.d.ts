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
 * Search match indicating attribute and the matching value.
 * @export
 * @interface SearchMatchType
 */
export interface SearchMatchType {
    /**
     * Search match attribute.
     * @type {string}
     * @memberof SearchMatchType
     */
    attribute?: string;
    /**
     * Search match value.
     * @type {string}
     * @memberof SearchMatchType
     */
    value?: string;
}
/**
 * Check if a given object implements the SearchMatchType interface.
 */
export declare function instanceOfSearchMatchType(value: object): boolean;
export declare function SearchMatchTypeFromJSON(json: any): SearchMatchType;
export declare function SearchMatchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchMatchType;
export declare function SearchMatchTypeToJSON(value?: SearchMatchType | null): any;