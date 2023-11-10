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
import type { BlockRefusedReasonsType } from './BlockRefusedReasonsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostBlockRefusedReasonspostBloRequest
 */
export interface PostBlockRefusedReasonspostBloRequest {
    /**
     *
     * @type {BlockRefusedReasonsType}
     * @memberof PostBlockRefusedReasonspostBloRequest
     */
    blockRefusedReasons?: BlockRefusedReasonsType;
    /**
     *
     * @type {Links}
     * @memberof PostBlockRefusedReasonspostBloRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostBlockRefusedReasonspostBloRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostBlockRefusedReasonspostBloRequest interface.
 */
export declare function instanceOfPostBlockRefusedReasonspostBloRequest(value: object): boolean;
export declare function PostBlockRefusedReasonspostBloRequestFromJSON(json: any): PostBlockRefusedReasonspostBloRequest;
export declare function PostBlockRefusedReasonspostBloRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostBlockRefusedReasonspostBloRequest;
export declare function PostBlockRefusedReasonspostBloRequestToJSON(value?: PostBlockRefusedReasonspostBloRequest | null): any;
