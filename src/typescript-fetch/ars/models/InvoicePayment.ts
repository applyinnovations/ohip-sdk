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
 * 
 * @export
 * @interface InvoicePayment
 */
export interface InvoicePayment {
    /**
     * Account Invoice information.
     * @type {Array<ARAccountInvoicesPaymentsType>}
     * @memberof InvoicePayment
     */
    details?: Array<ARAccountInvoicesPaymentsType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof InvoicePayment
     */
    links?: Array<InstanceLink>;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof InvoicePayment
     */
    trxCodesInfo?: Array<TrxInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof InvoicePayment
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the InvoicePayment interface.
 */
export function instanceOfInvoicePayment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InvoicePaymentFromJSON(json: any): InvoicePayment {
    return InvoicePaymentFromJSONTyped(json, false);
}

export function InvoicePaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoicePayment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'details': !exists(json, 'details') ? undefined : ((json['details'] as Array<any>).map(ARAccountInvoicesPaymentsTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'trxCodesInfo': !exists(json, 'trxCodesInfo') ? undefined : ((json['trxCodesInfo'] as Array<any>).map(TrxInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function InvoicePaymentToJSON(value?: InvoicePayment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'details': value.details === undefined ? undefined : ((value.details as Array<any>).map(ARAccountInvoicesPaymentsTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'trxCodesInfo': value.trxCodesInfo === undefined ? undefined : ((value.trxCodesInfo as Array<any>).map(TrxInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

