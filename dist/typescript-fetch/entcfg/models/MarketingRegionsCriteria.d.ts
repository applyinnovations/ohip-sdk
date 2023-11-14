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
 * Request object for creating Marketing Regions.
 * @export
 * @interface MarketingRegionsCriteria
 */
export interface MarketingRegionsCriteria {
    /**
     *
     * @type {Links}
     * @memberof MarketingRegionsCriteria
     */
    links?: Links;
    /**
     *
     * @type {MarketingRegionsType}
     * @memberof MarketingRegionsCriteria
     */
    marketingRegions?: MarketingRegionsType;
    /**
     *
     * @type {WarningsType}
     * @memberof MarketingRegionsCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the MarketingRegionsCriteria interface.
 */
export declare function instanceOfMarketingRegionsCriteria(value: object): boolean;
export declare function MarketingRegionsCriteriaFromJSON(json: any): MarketingRegionsCriteria;
export declare function MarketingRegionsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingRegionsCriteria;
export declare function MarketingRegionsCriteriaToJSON(value?: MarketingRegionsCriteria | null): any;