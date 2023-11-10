/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { NumberDescriptionsType } from './NumberDescriptionsType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PutNumberDescriptionsRequest
 */
export interface PutNumberDescriptionsRequest {
    /**
     *
     * @type {Links}
     * @memberof PutNumberDescriptionsRequest
     */
    links?: Links;
    /**
     *
     * @type {NumberDescriptionsType}
     * @memberof PutNumberDescriptionsRequest
     */
    numberDescriptions?: NumberDescriptionsType;
    /**
     *
     * @type {WarningsType}
     * @memberof PutNumberDescriptionsRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutNumberDescriptionsRequest interface.
 */
export declare function instanceOfPutNumberDescriptionsRequest(value: object): boolean;
export declare function PutNumberDescriptionsRequestFromJSON(json: any): PutNumberDescriptionsRequest;
export declare function PutNumberDescriptionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutNumberDescriptionsRequest;
export declare function PutNumberDescriptionsRequestToJSON(value?: PutNumberDescriptionsRequest | null): any;
