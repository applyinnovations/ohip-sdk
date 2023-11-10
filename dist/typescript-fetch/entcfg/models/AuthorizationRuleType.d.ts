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
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 * Configured rule for computing the amount to authorize.
 * @export
 * @interface AuthorizationRuleType
 */
export interface AuthorizationRuleType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof AuthorizationRuleType
     */
    amount?: CurrencyAmountType;
    /**
     * The authorization rule code.
     * @type {number}
     * @memberof AuthorizationRuleType
     */
    code?: number;
    /**
     * A percentage value if the authorization rule is percentage based.
     * @type {number}
     * @memberof AuthorizationRuleType
     */
    percent?: number;
}
/**
 * Check if a given object implements the AuthorizationRuleType interface.
 */
export declare function instanceOfAuthorizationRuleType(value: object): boolean;
export declare function AuthorizationRuleTypeFromJSON(json: any): AuthorizationRuleType;
export declare function AuthorizationRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationRuleType;
export declare function AuthorizationRuleTypeToJSON(value?: AuthorizationRuleType | null): any;
