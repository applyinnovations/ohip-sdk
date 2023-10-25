/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { DateRangeType } from './DateRangeType';
import {
    DateRangeTypeFromJSON,
    DateRangeTypeFromJSONTyped,
    DateRangeTypeToJSON,
} from './DateRangeType';

/**
 * To apply additional filter on the posting of an invoice
 * @export
 * @interface ARInvoiceCriteriaTypeAdditionalFilter
 */
export interface ARInvoiceCriteriaTypeAdditionalFilter {
    /**
     * Cashier Id of the Cashier.
     * @type {number}
     * @memberof ARInvoiceCriteriaTypeAdditionalFilter
     */
    cashierId?: number;
    /**
     * Lookup string which will try to match an existing Cheque number's.
     * @type {string}
     * @memberof ARInvoiceCriteriaTypeAdditionalFilter
     */
    checkNumberWildCard?: string;
    /**
     * 
     * @type {DateRangeType}
     * @memberof ARInvoiceCriteriaTypeAdditionalFilter
     */
    dateRange?: DateRangeType;
    /**
     * Filters the results for reference.
     * @type {string}
     * @memberof ARInvoiceCriteriaTypeAdditionalFilter
     */
    referenceWildCard?: string;
    /**
     * Filter the results for supplement.
     * @type {string}
     * @memberof ARInvoiceCriteriaTypeAdditionalFilter
     */
    supplementWildCard?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ARInvoiceCriteriaTypeAdditionalFilter
     */
    transactionCode?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ARInvoiceCriteriaTypeAdditionalFilter
     */
    transactionSubGroup?: Array<string>;
}

/**
 * Check if a given object implements the ARInvoiceCriteriaTypeAdditionalFilter interface.
 */
export function instanceOfARInvoiceCriteriaTypeAdditionalFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARInvoiceCriteriaTypeAdditionalFilterFromJSON(json: any): ARInvoiceCriteriaTypeAdditionalFilter {
    return ARInvoiceCriteriaTypeAdditionalFilterFromJSONTyped(json, false);
}

export function ARInvoiceCriteriaTypeAdditionalFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARInvoiceCriteriaTypeAdditionalFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'checkNumberWildCard': !exists(json, 'checkNumberWildCard') ? undefined : json['checkNumberWildCard'],
        'dateRange': !exists(json, 'dateRange') ? undefined : DateRangeTypeFromJSON(json['dateRange']),
        'referenceWildCard': !exists(json, 'referenceWildCard') ? undefined : json['referenceWildCard'],
        'supplementWildCard': !exists(json, 'supplementWildCard') ? undefined : json['supplementWildCard'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionSubGroup': !exists(json, 'transactionSubGroup') ? undefined : json['transactionSubGroup'],
    };
}

export function ARInvoiceCriteriaTypeAdditionalFilterToJSON(value?: ARInvoiceCriteriaTypeAdditionalFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierId': value.cashierId,
        'checkNumberWildCard': value.checkNumberWildCard,
        'dateRange': DateRangeTypeToJSON(value.dateRange),
        'referenceWildCard': value.referenceWildCard,
        'supplementWildCard': value.supplementWildCard,
        'transactionCode': value.transactionCode,
        'transactionSubGroup': value.transactionSubGroup,
    };
}

