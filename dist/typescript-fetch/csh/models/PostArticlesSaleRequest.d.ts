/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { SaleCriteriaType } from './SaleCriteriaType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostArticlesSaleRequest
 */
export interface PostArticlesSaleRequest {
    /**
     *
     * @type {SaleCriteriaType}
     * @memberof PostArticlesSaleRequest
     */
    criteria?: SaleCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof PostArticlesSaleRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostArticlesSaleRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostArticlesSaleRequest interface.
 */
export declare function instanceOfPostArticlesSaleRequest(value: object): boolean;
export declare function PostArticlesSaleRequestFromJSON(json: any): PostArticlesSaleRequest;
export declare function PostArticlesSaleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostArticlesSaleRequest;
export declare function PostArticlesSaleRequestToJSON(value?: PostArticlesSaleRequest | null): any;
