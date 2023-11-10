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
import type { CreditCardTypesType } from './CreditCardTypesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostCreditCardTypesRequest
 */
export interface PostCreditCardTypesRequest {
    /**
     *
     * @type {CreditCardTypesType}
     * @memberof PostCreditCardTypesRequest
     */
    creditCardTypes?: CreditCardTypesType;
    /**
     *
     * @type {Links}
     * @memberof PostCreditCardTypesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PostCreditCardTypesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostCreditCardTypesRequest interface.
 */
export declare function instanceOfPostCreditCardTypesRequest(value: object): boolean;
export declare function PostCreditCardTypesRequestFromJSON(json: any): PostCreditCardTypesRequest;
export declare function PostCreditCardTypesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCreditCardTypesRequest;
export declare function PostCreditCardTypesRequestToJSON(value?: PostCreditCardTypesRequest | null): any;
