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
import type { CreateARInvoiceCriteriaType } from './CreateARInvoiceCriteriaType';
import {
    CreateARInvoiceCriteriaTypeFromJSON,
    CreateARInvoiceCriteriaTypeFromJSONTyped,
    CreateARInvoiceCriteriaTypeToJSON,
} from './CreateARInvoiceCriteriaType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request to create a new Invoice for an Account.
 * @export
 * @interface ArInvoice
 */
export interface ArInvoice {
    /**
     * 
     * @type {CreateARInvoiceCriteriaType}
     * @memberof ArInvoice
     */
    invoice?: CreateARInvoiceCriteriaType;
    /**
     * 
     * @type {Links}
     * @memberof ArInvoice
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof ArInvoice
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ArInvoice interface.
 */
export function instanceOfArInvoice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArInvoiceFromJSON(json: any): ArInvoice {
    return ArInvoiceFromJSONTyped(json, false);
}

export function ArInvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArInvoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoice': !exists(json, 'invoice') ? undefined : CreateARInvoiceCriteriaTypeFromJSON(json['invoice']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ArInvoiceToJSON(value?: ArInvoice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoice': CreateARInvoiceCriteriaTypeToJSON(value.invoice),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
