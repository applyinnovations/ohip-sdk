/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { DateRangeType } from './DateRangeType';
import {
    DateRangeTypeFromJSON,
    DateRangeTypeFromJSONTyped,
    DateRangeTypeToJSON,
} from './DateRangeType';

/**
 * Statements criteria for AR Accounts.
 * @export
 * @interface ARStatementCriteriaType
 */
export interface ARStatementCriteriaType {
    /**
     * The date specified in this field determines the balance forward date and balance forward total that is printed on the statement. (A balance forward shows the net amount for all invoices and payments (debits and credits) prior to the balance forward date as a single total, rather than itemizing them individually on the statement.)
     * @type {string}
     * @memberof ARStatementCriteriaType
     */
    balanceForwardDate?: string;
    /**
     * 
     * @type {DateRangeType}
     * @memberof ARStatementCriteriaType
     */
    filterDate?: DateRangeType;
    /**
     * Flag to indicate if the associated Folios for the Invoices are to be included along with the the Statement.
     * @type {boolean}
     * @memberof ARStatementCriteriaType
     */
    inclFolios?: boolean;
    /**
     * Flag to indicate if Previousely Printed Invoices are to be included in the Statement. This is based on the Functionality for AR PRINTED INVOICES.
     * @type {boolean}
     * @memberof ARStatementCriteriaType
     */
    inclPrinted?: boolean;
    /**
     * Flag to indicate if Zero Balances Invoices are to be included in the Statement.
     * @type {boolean}
     * @memberof ARStatementCriteriaType
     */
    inclZero?: boolean;
    /**
     * Text which will be printed on the Invoice.
     * @type {string}
     * @memberof ARStatementCriteriaType
     */
    statementText?: string;
}

/**
 * Check if a given object implements the ARStatementCriteriaType interface.
 */
export function instanceOfARStatementCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARStatementCriteriaTypeFromJSON(json: any): ARStatementCriteriaType {
    return ARStatementCriteriaTypeFromJSONTyped(json, false);
}

export function ARStatementCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARStatementCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balanceForwardDate': !exists(json, 'balanceForwardDate') ? undefined : json['balanceForwardDate'],
        'filterDate': !exists(json, 'filterDate') ? undefined : DateRangeTypeFromJSON(json['filterDate']),
        'inclFolios': !exists(json, 'inclFolios') ? undefined : json['inclFolios'],
        'inclPrinted': !exists(json, 'inclPrinted') ? undefined : json['inclPrinted'],
        'inclZero': !exists(json, 'inclZero') ? undefined : json['inclZero'],
        'statementText': !exists(json, 'statementText') ? undefined : json['statementText'],
    };
}

export function ARStatementCriteriaTypeToJSON(value?: ARStatementCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balanceForwardDate': value.balanceForwardDate,
        'filterDate': DateRangeTypeToJSON(value.filterDate),
        'inclFolios': value.inclFolios,
        'inclPrinted': value.inclPrinted,
        'inclZero': value.inclZero,
        'statementText': value.statementText,
    };
}

