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
import type { ReversePaymentCriteriaType } from './ReversePaymentCriteriaType';
import {
    ReversePaymentCriteriaTypeFromJSON,
    ReversePaymentCriteriaTypeFromJSONTyped,
    ReversePaymentCriteriaTypeToJSON,
} from './ReversePaymentCriteriaType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request for reverse AR payment
 * @export
 * @interface ReversePayment
 */
export interface ReversePayment {
    /**
     * 
     * @type {ReversePaymentCriteriaType}
     * @memberof ReversePayment
     */
    arPayment?: ReversePaymentCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ReversePayment
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReversePayment
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ReversePayment interface.
 */
export function instanceOfReversePayment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReversePaymentFromJSON(json: any): ReversePayment {
    return ReversePaymentFromJSONTyped(json, false);
}

export function ReversePaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReversePayment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arPayment': !exists(json, 'arPayment') ? undefined : ReversePaymentCriteriaTypeFromJSON(json['arPayment']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ReversePaymentToJSON(value?: ReversePayment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arPayment': ReversePaymentCriteriaTypeToJSON(value.arPayment),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

