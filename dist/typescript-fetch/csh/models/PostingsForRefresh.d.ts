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
import type { PostingsInfoType } from './PostingsInfoType';
import type { WarningsType } from './WarningsType';
/**
 * Response object that lists the transactions that can be refreshed when a routing instruction set is refreshed.
 * @export
 * @interface PostingsForRefresh
 */
export interface PostingsForRefresh {
    /**
     *
     * @type {Links}
     * @memberof PostingsForRefresh
     */
    links?: Links;
    /**
     *
     * @type {PostingsInfoType}
     * @memberof PostingsForRefresh
     */
    postingsForRoomRouting?: PostingsInfoType;
    /**
     *
     * @type {WarningsType}
     * @memberof PostingsForRefresh
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostingsForRefresh interface.
 */
export declare function instanceOfPostingsForRefresh(value: object): boolean;
export declare function PostingsForRefreshFromJSON(json: any): PostingsForRefresh;
export declare function PostingsForRefreshFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostingsForRefresh;
export declare function PostingsForRefreshToJSON(value?: PostingsForRefresh | null): any;
