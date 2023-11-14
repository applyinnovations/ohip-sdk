/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARStatementHistoryType } from './ARStatementHistoryType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Statement History.
 * @export
 * @interface StatementHistory
 */
export interface StatementHistory {
    /**
     *
     * @type {Array<ARStatementHistoryType>}
     * @memberof StatementHistory
     */
    aRStatementHistory?: Array<ARStatementHistoryType>;
    /**
     *
     * @type {Links}
     * @memberof StatementHistory
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof StatementHistory
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the StatementHistory interface.
 */
export declare function instanceOfStatementHistory(value: object): boolean;
export declare function StatementHistoryFromJSON(json: any): StatementHistory;
export declare function StatementHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatementHistory;
export declare function StatementHistoryToJSON(value?: StatementHistory | null): any;