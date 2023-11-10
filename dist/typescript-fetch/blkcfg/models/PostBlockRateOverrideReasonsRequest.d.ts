/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockRateOverrideReasonsType } from './BlockRateOverrideReasonsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostBlockRateOverrideReasonsRequest
 */
export interface PostBlockRateOverrideReasonsRequest {
    /**
     *
     * @type {BlockRateOverrideReasonsType}
     * @memberof PostBlockRateOverrideReasonsRequest
     */
    blockRateOverrideReasons?: BlockRateOverrideReasonsType;
    /**
     *
     * @type {Links}
     * @memberof PostBlockRateOverrideReasonsRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostBlockRateOverrideReasonsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostBlockRateOverrideReasonsRequest interface.
 */
export declare function instanceOfPostBlockRateOverrideReasonsRequest(value: object): boolean;
export declare function PostBlockRateOverrideReasonsRequestFromJSON(json: any): PostBlockRateOverrideReasonsRequest;
export declare function PostBlockRateOverrideReasonsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostBlockRateOverrideReasonsRequest;
export declare function PostBlockRateOverrideReasonsRequestToJSON(value?: PostBlockRateOverrideReasonsRequest | null): any;
