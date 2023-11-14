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
import type { SearchMatchType } from './SearchMatchType';
/**
 * List of Generic Name-Value-Pair Parameters used for super search matches.
 * @export
 * @interface SearchMatchesType
 */
export interface SearchMatchesType extends Array<SearchMatchType> {
}
/**
 * Check if a given object implements the SearchMatchesType interface.
 */
export declare function instanceOfSearchMatchesType(value: object): boolean;
export declare function SearchMatchesTypeFromJSON(json: any): SearchMatchesType;
export declare function SearchMatchesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchMatchesType;
export declare function SearchMatchesTypeToJSON(value?: SearchMatchesType | null): any;