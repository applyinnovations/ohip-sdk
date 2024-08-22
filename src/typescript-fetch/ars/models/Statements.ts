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
import type { ARStatementType } from './ARStatementType';
import {
    ARStatementTypeFromJSON,
    ARStatementTypeFromJSONTyped,
    ARStatementTypeToJSON,
} from './ARStatementType';
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
     * @type {Array<InstanceLink>}
     * @memberof Statements
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof Statements
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the Statements interface.
 */
export function instanceOfStatements(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatementsFromJSON(json: any): Statements {
    return StatementsFromJSONTyped(json, false);
}

export function StatementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Statements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aRStatements': !exists(json, 'aRStatements') ? undefined : ((json['aRStatements'] as Array<any>).map(ARStatementTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function StatementsToJSON(value?: Statements | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aRStatements': value.aRStatements === undefined ? undefined : ((value.aRStatements as Array<any>).map(ARStatementTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

