/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PackageTransactionCodeType } from './PackageTransactionCodeType';
import {
    PackageTransactionCodeTypeFromJSON,
    PackageTransactionCodeTypeFromJSONTyped,
    PackageTransactionCodeTypeToJSON,
} from './PackageTransactionCodeType';

/**
 * 
 * @export
 * @interface PackagePostingRulesType
 */
export interface PackagePostingRulesType {
    /**
     * The alternate transaction code that can be consumed by the guest in place of the transaction code.
     * @type {Array<PackageTransactionCodeType>}
     * @memberof PackagePostingRulesType
     */
    alternateCodesList?: Array<PackageTransactionCodeType>;
    /**
     * 
     * @type {PackageTransactionCodeType}
     * @memberof PackagePostingRulesType
     */
    lossCode?: PackageTransactionCodeType;
    /**
     * 
     * @type {PackageTransactionCodeType}
     * @memberof PackagePostingRulesType
     */
    overageCode?: PackageTransactionCodeType;
    /**
     * 
     * @type {PackageTransactionCodeType}
     * @memberof PackagePostingRulesType
     */
    profitCode?: PackageTransactionCodeType;
    /**
     * 
     * @type {PackageTransactionCodeType}
     * @memberof PackagePostingRulesType
     */
    transactionCode?: PackageTransactionCodeType;
}

/**
 * Check if a given object implements the PackagePostingRulesType interface.
 */
export function instanceOfPackagePostingRulesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackagePostingRulesTypeFromJSON(json: any): PackagePostingRulesType {
    return PackagePostingRulesTypeFromJSONTyped(json, false);
}

export function PackagePostingRulesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagePostingRulesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternateCodesList': !exists(json, 'alternateCodesList') ? undefined : ((json['alternateCodesList'] as Array<any>).map(PackageTransactionCodeTypeFromJSON)),
        'lossCode': !exists(json, 'lossCode') ? undefined : PackageTransactionCodeTypeFromJSON(json['lossCode']),
        'overageCode': !exists(json, 'overageCode') ? undefined : PackageTransactionCodeTypeFromJSON(json['overageCode']),
        'profitCode': !exists(json, 'profitCode') ? undefined : PackageTransactionCodeTypeFromJSON(json['profitCode']),
        'transactionCode': !exists(json, 'transactionCode') ? undefined : PackageTransactionCodeTypeFromJSON(json['transactionCode']),
    };
}

export function PackagePostingRulesTypeToJSON(value?: PackagePostingRulesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternateCodesList': value.alternateCodesList === undefined ? undefined : ((value.alternateCodesList as Array<any>).map(PackageTransactionCodeTypeToJSON)),
        'lossCode': PackageTransactionCodeTypeToJSON(value.lossCode),
        'overageCode': PackageTransactionCodeTypeToJSON(value.overageCode),
        'profitCode': PackageTransactionCodeTypeToJSON(value.profitCode),
        'transactionCode': PackageTransactionCodeTypeToJSON(value.transactionCode),
    };
}
