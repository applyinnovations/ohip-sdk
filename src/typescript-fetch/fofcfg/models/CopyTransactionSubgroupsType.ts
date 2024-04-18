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
import type { TemplateTransactionSubgroupIDType } from './TemplateTransactionSubgroupIDType';
import {
    TemplateTransactionSubgroupIDTypeFromJSON,
    TemplateTransactionSubgroupIDTypeFromJSONTyped,
    TemplateTransactionSubgroupIDTypeToJSON,
} from './TemplateTransactionSubgroupIDType';

/**
 * Copy information required to copy transaction subgroup type
 * @export
 * @interface CopyTransactionSubgroupsType
 */
export interface CopyTransactionSubgroupsType {
    /**
     * 
     * @type {Array<string>}
     * @memberof CopyTransactionSubgroupsType
     */
    hotels?: Array<string>;
    /**
     * List of template transaction subgroup IDs
     * @type {Array<TemplateTransactionSubgroupIDType>}
     * @memberof CopyTransactionSubgroupsType
     */
    transactionSubgroups?: Array<TemplateTransactionSubgroupIDType>;
}

/**
 * Check if a given object implements the CopyTransactionSubgroupsType interface.
 */
export function instanceOfCopyTransactionSubgroupsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyTransactionSubgroupsTypeFromJSON(json: any): CopyTransactionSubgroupsType {
    return CopyTransactionSubgroupsTypeFromJSONTyped(json, false);
}

export function CopyTransactionSubgroupsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyTransactionSubgroupsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotels': !exists(json, 'hotels') ? undefined : json['hotels'],
        'transactionSubgroups': !exists(json, 'transactionSubgroups') ? undefined : ((json['transactionSubgroups'] as Array<any>).map(TemplateTransactionSubgroupIDTypeFromJSON)),
    };
}

export function CopyTransactionSubgroupsTypeToJSON(value?: CopyTransactionSubgroupsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotels': value.hotels,
        'transactionSubgroups': value.transactionSubgroups === undefined ? undefined : ((value.transactionSubgroups as Array<any>).map(TemplateTransactionSubgroupIDTypeToJSON)),
    };
}
