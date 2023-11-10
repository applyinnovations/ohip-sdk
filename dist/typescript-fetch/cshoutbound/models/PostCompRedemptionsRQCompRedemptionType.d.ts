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
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 * Information about a Complimentary Redemption for posting.
 * @export
 * @interface PostCompRedemptionsRQCompRedemptionType
 */
export interface PostCompRedemptionsRQCompRedemptionType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PostCompRedemptionsRQCompRedemptionType
     */
    amount?: CurrencyAmountType;
    /**
     * The associated redemption code.
     * @type {string}
     * @memberof PostCompRedemptionsRQCompRedemptionType
     */
    code?: string;
    /**
     * Description of the Complimentary Redemption code.
     * @type {string}
     * @memberof PostCompRedemptionsRQCompRedemptionType
     */
    description?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof PostCompRedemptionsRQCompRedemptionType
     */
    availableAmount?: CurrencyAmountType;
    /**
     * Approval Code of the Complimentary Redemption.
     * @type {string}
     * @memberof PostCompRedemptionsRQCompRedemptionType
     */
    approvalCode?: string;
}
/**
 * Check if a given object implements the PostCompRedemptionsRQCompRedemptionType interface.
 */
export declare function instanceOfPostCompRedemptionsRQCompRedemptionType(value: object): boolean;
export declare function PostCompRedemptionsRQCompRedemptionTypeFromJSON(json: any): PostCompRedemptionsRQCompRedemptionType;
export declare function PostCompRedemptionsRQCompRedemptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCompRedemptionsRQCompRedemptionType;
export declare function PostCompRedemptionsRQCompRedemptionTypeToJSON(value?: PostCompRedemptionsRQCompRedemptionType | null): any;
