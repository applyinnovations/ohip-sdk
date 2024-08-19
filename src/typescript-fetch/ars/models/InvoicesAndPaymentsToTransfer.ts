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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { TransferARInvoicesCriteriaType } from './TransferARInvoicesCriteriaType';
import {
    TransferARInvoicesCriteriaTypeFromJSON,
    TransferARInvoicesCriteriaTypeFromJSONTyped,
    TransferARInvoicesCriteriaTypeToJSON,
} from './TransferARInvoicesCriteriaType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request for transferring invoice(s) in AR.
 * @export
 * @interface InvoicesAndPaymentsToTransfer
 */
export interface InvoicesAndPaymentsToTransfer {
    /**
     * 
     * @type {TransferARInvoicesCriteriaType}
     * @memberof InvoicesAndPaymentsToTransfer
     */
    criteria?: TransferARInvoicesCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof InvoicesAndPaymentsToTransfer
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof InvoicesAndPaymentsToTransfer
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the InvoicesAndPaymentsToTransfer interface.
 */
export function instanceOfInvoicesAndPaymentsToTransfer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InvoicesAndPaymentsToTransferFromJSON(json: any): InvoicesAndPaymentsToTransfer {
    return InvoicesAndPaymentsToTransferFromJSONTyped(json, false);
}

export function InvoicesAndPaymentsToTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoicesAndPaymentsToTransfer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : TransferARInvoicesCriteriaTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function InvoicesAndPaymentsToTransferToJSON(value?: InvoicesAndPaymentsToTransfer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': TransferARInvoicesCriteriaTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

