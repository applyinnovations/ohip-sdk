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
import type { ARStatementType } from './ARStatementType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Details of the Statement to generate.
 * @export
 * @interface Statements
 */
export interface Statements {
    /**
     *
     * @type {Array<ARStatementType>}
     * @memberof Statements
     */
    aRStatements?: Array<ARStatementType>;
    /**
     *
     * @type {Links}
     * @memberof Statements
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof Statements
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the Statements interface.
 */
export declare function instanceOfStatements(value: object): boolean;
export declare function StatementsFromJSON(json: any): Statements;
export declare function StatementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Statements;
export declare function StatementsToJSON(value?: Statements | null): any;