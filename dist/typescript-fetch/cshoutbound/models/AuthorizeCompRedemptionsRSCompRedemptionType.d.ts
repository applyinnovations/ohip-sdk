/**
 * OPERA Cloud Cashiering Outbound API
 * APIs to cater for Cashiering related external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information about a Complimentary Redemption including its approval code.
 * @export
 * @interface AuthorizeCompRedemptionsRSCompRedemptionType
 */
export interface AuthorizeCompRedemptionsRSCompRedemptionType {
    /**
     * The associated Complimentary Redemption code.
     * @type {string}
     * @memberof AuthorizeCompRedemptionsRSCompRedemptionType
     */
    code?: string;
    /**
     * Approval Code of the Complimentary Redemption.
     * @type {string}
     * @memberof AuthorizeCompRedemptionsRSCompRedemptionType
     */
    approvalCode?: string;
}
/**
 * Check if a given object implements the AuthorizeCompRedemptionsRSCompRedemptionType interface.
 */
export declare function instanceOfAuthorizeCompRedemptionsRSCompRedemptionType(value: object): boolean;
export declare function AuthorizeCompRedemptionsRSCompRedemptionTypeFromJSON(json: any): AuthorizeCompRedemptionsRSCompRedemptionType;
export declare function AuthorizeCompRedemptionsRSCompRedemptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizeCompRedemptionsRSCompRedemptionType;
export declare function AuthorizeCompRedemptionsRSCompRedemptionTypeToJSON(value?: AuthorizeCompRedemptionsRSCompRedemptionType | null): any;
