/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AuthorizationInfoType } from './AuthorizationInfoType';
import type { CashieringPaymentMethodType } from './CashieringPaymentMethodType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response to the credit card authorization request.
 * @export
 * @interface AuthorizationInfo
 */
export interface AuthorizationInfo {
    /**
     *
     * @type {AuthorizationInfoType}
     * @memberof AuthorizationInfo
     */
    authInfo?: AuthorizationInfoType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof AuthorizationInfo
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {CashieringPaymentMethodType}
     * @memberof AuthorizationInfo
     */
    payment?: CashieringPaymentMethodType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AuthorizationInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the AuthorizationInfo interface.
 */
export declare function instanceOfAuthorizationInfo(value: object): boolean;
export declare function AuthorizationInfoFromJSON(json: any): AuthorizationInfo;
export declare function AuthorizationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationInfo;
export declare function AuthorizationInfoToJSON(value?: AuthorizationInfo | null): any;
