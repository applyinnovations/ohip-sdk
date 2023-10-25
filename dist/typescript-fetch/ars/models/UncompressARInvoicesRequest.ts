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
import type { ARInvoiceCriteriaType } from './ARInvoiceCriteriaType';
import {
    ARInvoiceCriteriaTypeFromJSON,
    ARInvoiceCriteriaTypeFromJSONTyped,
    ARInvoiceCriteriaTypeToJSON,
} from './ARInvoiceCriteriaType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface UncompressARInvoicesRequest
 */
export interface UncompressARInvoicesRequest {
    /**
     * 
     * @type {ARInvoiceCriteriaType}
     * @memberof UncompressARInvoicesRequest
     */
    invoiceDetails?: ARInvoiceCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof UncompressARInvoicesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof UncompressARInvoicesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the UncompressARInvoicesRequest interface.
 */
export function instanceOfUncompressARInvoicesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UncompressARInvoicesRequestFromJSON(json: any): UncompressARInvoicesRequest {
    return UncompressARInvoicesRequestFromJSONTyped(json, false);
}

export function UncompressARInvoicesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UncompressARInvoicesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoiceDetails': !exists(json, 'invoiceDetails') ? undefined : ARInvoiceCriteriaTypeFromJSON(json['invoiceDetails']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function UncompressARInvoicesRequestToJSON(value?: UncompressARInvoicesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoiceDetails': ARInvoiceCriteriaTypeToJSON(value.invoiceDetails),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

