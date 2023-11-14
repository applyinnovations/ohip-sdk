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
import type { Links } from './Links';
import type { MarketingRegionsType } from './MarketingRegionsType';
import type { WarningsType } from './WarningsType';
/**
 * Response object for fetching Marketing Regions.
 * @export
 * @interface MarketingRegionsDetails
 */
export interface MarketingRegionsDetails {
    /**
     *
     * @type {Links}
     * @memberof MarketingRegionsDetails
     */
    links?: Links;
    /**
     *
     * @type {MarketingRegionsType}
     * @memberof MarketingRegionsDetails
     */
    marketingRegions?: MarketingRegionsType;
    /**
     *
     * @type {WarningsType}
     * @memberof MarketingRegionsDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the MarketingRegionsDetails interface.
 */
export declare function instanceOfMarketingRegionsDetails(value: object): boolean;
export declare function MarketingRegionsDetailsFromJSON(json: any): MarketingRegionsDetails;
export declare function MarketingRegionsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingRegionsDetails;
export declare function MarketingRegionsDetailsToJSON(value?: MarketingRegionsDetails | null): any;