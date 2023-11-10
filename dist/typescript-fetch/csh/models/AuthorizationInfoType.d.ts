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
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 *
 * @export
 * @interface AuthorizationInfoType
 */
export interface AuthorizationInfoType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof AuthorizationInfoType
     */
    approvalAmount?: CurrencyAmountType;
    /**
     * The approval code authenticates the authorization.
     * @type {string}
     * @memberof AuthorizationInfoType
     */
    approvalCode?: string;
    /**
     * Unique Authorization Sequence for the authorization and settlement.
     * @type {number}
     * @memberof AuthorizationInfoType
     */
    originalAuthSequence?: number;
    /**
     * Vendor transaction id for the authorization.
     * @type {string}
     * @memberof AuthorizationInfoType
     */
    vendorTranId?: string;
}
/**
 * Check if a given object implements the AuthorizationInfoType interface.
 */
export declare function instanceOfAuthorizationInfoType(value: object): boolean;
export declare function AuthorizationInfoTypeFromJSON(json: any): AuthorizationInfoType;
export declare function AuthorizationInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationInfoType;
export declare function AuthorizationInfoTypeToJSON(value?: AuthorizationInfoType | null): any;
