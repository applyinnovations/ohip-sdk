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
import type { ARAccountInvoicesPaymentsType } from './ARAccountInvoicesPaymentsType';
import {
    ARAccountInvoicesPaymentsTypeFromJSON,
    ARAccountInvoicesPaymentsTypeFromJSONTyped,
    ARAccountInvoicesPaymentsTypeToJSON,
} from './ARAccountInvoicesPaymentsType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { TrxInfoType } from './TrxInfoType';
import {
    TrxInfoTypeFromJSON,
    TrxInfoTypeFromJSONTyped,
    TrxInfoTypeToJSON,
} from './TrxInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for the fetch invoice and payments details request.
 * @export
 * @interface InvoicesPayments
 */
export interface InvoicesPayments {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof InvoicesPayments
     */
    count?: number;
    /**
     * Account Invoice information.
     * @type {Array<ARAccountInvoicesPaymentsType>}
     * @memberof InvoicesPayments
     */
    details?: Array<ARAccountInvoicesPaymentsType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof InvoicesPayments
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof InvoicesPayments
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof InvoicesPayments
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof InvoicesPayments
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof InvoicesPayments
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof InvoicesPayments
     */
    totalResults?: number;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof InvoicesPayments
     */
    trxCodesInfo?: Array<TrxInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof InvoicesPayments
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the InvoicesPayments interface.
 */
export function instanceOfInvoicesPayments(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InvoicesPaymentsFromJSON(json: any): InvoicesPayments {
    return InvoicesPaymentsFromJSONTyped(json, false);
}

export function InvoicesPaymentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoicesPayments {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'details': !exists(json, 'details') ? undefined : ((json['details'] as Array<any>).map(ARAccountInvoicesPaymentsTypeFromJSON)),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'trxCodesInfo': !exists(json, 'trxCodesInfo') ? undefined : ((json['trxCodesInfo'] as Array<any>).map(TrxInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function InvoicesPaymentsToJSON(value?: InvoicesPayments | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'details': value.details === undefined ? undefined : ((value.details as Array<any>).map(ARAccountInvoicesPaymentsTypeToJSON)),
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'trxCodesInfo': value.trxCodesInfo === undefined ? undefined : ((value.trxCodesInfo as Array<any>).map(TrxInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
