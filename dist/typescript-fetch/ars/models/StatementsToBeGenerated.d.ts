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
import type { ARGenerateStatementCriteriaType } from './ARGenerateStatementCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Operation to generate AR Statements. This will validate and check if there exists any invoices to be included in the Statement based on the criteria used. If Statement Numbering is used, this will return a statement number to use in report as well as report sequence id to identify statement's invoices.
 * @export
 * @interface StatementsToBeGenerated
 */
export interface StatementsToBeGenerated {
    /**
     *
     * @type {ARGenerateStatementCriteriaType}
     * @memberof StatementsToBeGenerated
     */
    criteria?: ARGenerateStatementCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof StatementsToBeGenerated
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof StatementsToBeGenerated
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the StatementsToBeGenerated interface.
 */
export declare function instanceOfStatementsToBeGenerated(value: object): boolean;
export declare function StatementsToBeGeneratedFromJSON(json: any): StatementsToBeGenerated;
export declare function StatementsToBeGeneratedFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatementsToBeGenerated;
export declare function StatementsToBeGeneratedToJSON(value?: StatementsToBeGenerated | null): any;