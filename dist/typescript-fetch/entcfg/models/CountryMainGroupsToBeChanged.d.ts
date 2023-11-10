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
import type { CountryMainGroupsType } from './CountryMainGroupsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request object for changing Country Main Groups.
 * @export
 * @interface CountryMainGroupsToBeChanged
 */
export interface CountryMainGroupsToBeChanged {
    /**
     *
     * @type {CountryMainGroupsType}
     * @memberof CountryMainGroupsToBeChanged
     */
    countryMainGroups?: CountryMainGroupsType;
    /**
     *
     * @type {Links}
     * @memberof CountryMainGroupsToBeChanged
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CountryMainGroupsToBeChanged
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CountryMainGroupsToBeChanged interface.
 */
export declare function instanceOfCountryMainGroupsToBeChanged(value: object): boolean;
export declare function CountryMainGroupsToBeChangedFromJSON(json: any): CountryMainGroupsToBeChanged;
export declare function CountryMainGroupsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountryMainGroupsToBeChanged;
export declare function CountryMainGroupsToBeChangedToJSON(value?: CountryMainGroupsToBeChanged | null): any;
