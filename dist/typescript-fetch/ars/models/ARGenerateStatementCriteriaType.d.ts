/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARStatementCriteriaType } from './ARStatementCriteriaType';
import type { ARStatementType } from './ARStatementType';
/**
 * Criteria to process AR Printed Statements - create history and update invoices.
 * @export
 * @interface ARGenerateStatementCriteriaType
 */
export interface ARGenerateStatementCriteriaType {
    /**
     *
     * @type {ARStatementCriteriaType}
     * @memberof ARGenerateStatementCriteriaType
     */
    statementCriteria?: ARStatementCriteriaType;
    /**
     * Details of printed Statements received by Fetch Operation and sent to be printed. Statements type includes report sequence number and report file name.
     * @type {Array<ARStatementType>}
     * @memberof ARGenerateStatementCriteriaType
     */
    statements?: Array<ARStatementType>;
}
/**
 * Check if a given object implements the ARGenerateStatementCriteriaType interface.
 */
export declare function instanceOfARGenerateStatementCriteriaType(value: object): boolean;
export declare function ARGenerateStatementCriteriaTypeFromJSON(json: any): ARGenerateStatementCriteriaType;
export declare function ARGenerateStatementCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARGenerateStatementCriteriaType;
export declare function ARGenerateStatementCriteriaTypeToJSON(value?: ARGenerateStatementCriteriaType | null): any;
