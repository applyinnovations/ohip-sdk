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
import type { ARAccountTraceCriteriaType } from './ARAccountTraceCriteriaType';
import {
    ARAccountTraceCriteriaTypeFromJSON,
    ARAccountTraceCriteriaTypeFromJSONTyped,
    ARAccountTraceCriteriaTypeToJSON,
} from './ARAccountTraceCriteriaType';
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
 * Request to create a Trace for an Account.
 * @export
 * @interface AccountTrace
 */
export interface AccountTrace {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AccountTrace
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ARAccountTraceCriteriaType}
     * @memberof AccountTrace
     */
    traceInfo?: ARAccountTraceCriteriaType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AccountTrace
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AccountTrace interface.
 */
export function instanceOfAccountTrace(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountTraceFromJSON(json: any): AccountTrace {
    return AccountTraceFromJSONTyped(json, false);
}

export function AccountTraceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountTrace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'traceInfo': !exists(json, 'traceInfo') ? undefined : ARAccountTraceCriteriaTypeFromJSON(json['traceInfo']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AccountTraceToJSON(value?: AccountTrace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'traceInfo': ARAccountTraceCriteriaTypeToJSON(value.traceInfo),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
