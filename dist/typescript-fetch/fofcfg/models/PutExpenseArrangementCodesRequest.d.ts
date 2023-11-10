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
import type { ExpenseArrangementCodesType } from './ExpenseArrangementCodesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PutExpenseArrangementCodesRequest
 */
export interface PutExpenseArrangementCodesRequest {
    /**
     *
     * @type {ExpenseArrangementCodesType}
     * @memberof PutExpenseArrangementCodesRequest
     */
    expenseArrangementCodes?: ExpenseArrangementCodesType;
    /**
     *
     * @type {Links}
     * @memberof PutExpenseArrangementCodesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PutExpenseArrangementCodesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutExpenseArrangementCodesRequest interface.
 */
export declare function instanceOfPutExpenseArrangementCodesRequest(value: object): boolean;
export declare function PutExpenseArrangementCodesRequestFromJSON(json: any): PutExpenseArrangementCodesRequest;
export declare function PutExpenseArrangementCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutExpenseArrangementCodesRequest;
export declare function PutExpenseArrangementCodesRequestToJSON(value?: PutExpenseArrangementCodesRequest | null): any;
