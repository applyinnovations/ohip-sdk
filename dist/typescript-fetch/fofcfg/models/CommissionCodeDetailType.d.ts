/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CommissionCodeInfoType } from './CommissionCodeInfoType';
/**
 * Commission code detail.
 * @export
 * @interface CommissionCodeDetailType
 */
export interface CommissionCodeDetailType {
    /**
     *
     * @type {CommissionCodeInfoType}
     * @memberof CommissionCodeDetailType
     */
    commissionCodeInfo?: CommissionCodeInfoType;
}
/**
 * Check if a given object implements the CommissionCodeDetailType interface.
 */
export declare function instanceOfCommissionCodeDetailType(value: object): boolean;
export declare function CommissionCodeDetailTypeFromJSON(json: any): CommissionCodeDetailType;
export declare function CommissionCodeDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommissionCodeDetailType;
export declare function CommissionCodeDetailTypeToJSON(value?: CommissionCodeDetailType | null): any;