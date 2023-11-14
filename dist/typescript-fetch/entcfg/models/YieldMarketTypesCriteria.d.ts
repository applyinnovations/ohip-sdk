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
import type { WarningsType } from './WarningsType';
/**
 * Request object for creating new Yield Market Types.
 * @export
 * @interface YieldMarketTypesCriteria
 */
export interface YieldMarketTypesCriteria {
    /**
     * If the yield market code does not return a result, this alternative yield market code is used instead.
     * @type {string}
     * @memberof YieldMarketTypesCriteria
     */
    alternativeCode?: string;
    /**
     * Yield Market Code.
     * @type {string}
     * @memberof YieldMarketTypesCriteria
     */
    code?: string;
    /**
     * Indicates the default yield market type.
     * @type {boolean}
     * @memberof YieldMarketTypesCriteria
     */
    _default?: boolean;
    /**
     * Description for the yield market code.
     * @type {string}
     * @memberof YieldMarketTypesCriteria
     */
    description?: string;
    /**
     * Hotel code for which the yield market type belong to.
     * @type {string}
     * @memberof YieldMarketTypesCriteria
     */
    hotelId?: string;
    /**
     *
     * @type {Links}
     * @memberof YieldMarketTypesCriteria
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof YieldMarketTypesCriteria
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the YieldMarketTypesCriteria interface.
 */
export declare function instanceOfYieldMarketTypesCriteria(value: object): boolean;
export declare function YieldMarketTypesCriteriaFromJSON(json: any): YieldMarketTypesCriteria;
export declare function YieldMarketTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): YieldMarketTypesCriteria;
export declare function YieldMarketTypesCriteriaToJSON(value?: YieldMarketTypesCriteria | null): any;