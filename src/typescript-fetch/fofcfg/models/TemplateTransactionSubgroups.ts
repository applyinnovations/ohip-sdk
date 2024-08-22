/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { TransactionSubgroupType } from './TransactionSubgroupType';
import {
    TransactionSubgroupTypeFromJSON,
    TransactionSubgroupTypeFromJSONTyped,
    TransactionSubgroupTypeToJSON,
} from './TransactionSubgroupType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface TemplateTransactionSubgroups
 */
export interface TemplateTransactionSubgroups {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateTransactionSubgroups
     */
    links?: Array<InstanceLink>;
    /**
     * Template transaction subgroup configurations.
     * @type {Array<TransactionSubgroupType>}
     * @memberof TemplateTransactionSubgroups
     */
    transactionSubgroups?: Array<TransactionSubgroupType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateTransactionSubgroups
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateTransactionSubgroups interface.
 */
export function instanceOfTemplateTransactionSubgroups(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateTransactionSubgroupsFromJSON(json: any): TemplateTransactionSubgroups {
    return TemplateTransactionSubgroupsFromJSONTyped(json, false);
}

export function TemplateTransactionSubgroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateTransactionSubgroups {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'transactionSubgroups': !exists(json, 'transactionSubgroups') ? undefined : ((json['transactionSubgroups'] as Array<any>).map(TransactionSubgroupTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateTransactionSubgroupsToJSON(value?: TemplateTransactionSubgroups | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'transactionSubgroups': value.transactionSubgroups === undefined ? undefined : ((value.transactionSubgroups as Array<any>).map(TransactionSubgroupTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

