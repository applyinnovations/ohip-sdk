/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This contains a generic code and description information.
 * @export
 * @interface CommissionPaymentMethodType
 */
export interface CommissionPaymentMethodType {
    /**
     * Code.
     * @type {string}
     * @memberof CommissionPaymentMethodType
     */
    code?: string;
    /**
     * description.
     * @type {string}
     * @memberof CommissionPaymentMethodType
     */
    description?: string;
    /**
     * Payment format if the payment method is EFT.
     * @type {string}
     * @memberof CommissionPaymentMethodType
     */
    format?: string;
}
/**
 * Check if a given object implements the CommissionPaymentMethodType interface.
 */
export declare function instanceOfCommissionPaymentMethodType(value: object): boolean;
export declare function CommissionPaymentMethodTypeFromJSON(json: any): CommissionPaymentMethodType;
export declare function CommissionPaymentMethodTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommissionPaymentMethodType;
export declare function CommissionPaymentMethodTypeToJSON(value?: CommissionPaymentMethodType | null): any;