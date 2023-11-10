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
 *
 * @export
 * @interface PostYieldMarketTypesRequest
 */
export interface PostYieldMarketTypesRequest {
    /**
     * If the yield market code does not return a result, this alternative yield market code is used instead.
     * @type {string}
     * @memberof PostYieldMarketTypesRequest
     */
    alternativeCode?: string;
    /**
     * Yield Market Code.
     * @type {string}
     * @memberof PostYieldMarketTypesRequest
     */
    code?: string;
    /**
     * Indicates the default yield market type.
     * @type {boolean}
     * @memberof PostYieldMarketTypesRequest
     */
    _default?: boolean;
    /**
     * Description for the yield market code.
     * @type {string}
     * @memberof PostYieldMarketTypesRequest
     */
    description?: string;
    /**
     * Hotel code for which the yield market type belong to.
     * @type {string}
     * @memberof PostYieldMarketTypesRequest
     */
    hotelId?: string;
    /**
     *
     * @type {Links}
     * @memberof PostYieldMarketTypesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostYieldMarketTypesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostYieldMarketTypesRequest interface.
 */
export declare function instanceOfPostYieldMarketTypesRequest(value: object): boolean;
export declare function PostYieldMarketTypesRequestFromJSON(json: any): PostYieldMarketTypesRequest;
export declare function PostYieldMarketTypesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostYieldMarketTypesRequest;
export declare function PostYieldMarketTypesRequestToJSON(value?: PostYieldMarketTypesRequest | null): any;
