/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConfigPackagePrimaryDetailsType } from './ConfigPackagePrimaryDetailsType';
import {
    ConfigPackagePrimaryDetailsTypeFromJSON,
    ConfigPackagePrimaryDetailsTypeFromJSONTyped,
    ConfigPackagePrimaryDetailsTypeToJSON,
} from './ConfigPackagePrimaryDetailsType';
import type { ConfigPackageTransactionType } from './ConfigPackageTransactionType';
import {
    ConfigPackageTransactionTypeFromJSON,
    ConfigPackageTransactionTypeFromJSONTyped,
    ConfigPackageTransactionTypeToJSON,
} from './ConfigPackageTransactionType';
import type { ConfigPackageUsageDetailType } from './ConfigPackageUsageDetailType';
import {
    ConfigPackageUsageDetailTypeFromJSON,
    ConfigPackageUsageDetailTypeFromJSONTyped,
    ConfigPackageUsageDetailTypeToJSON,
} from './ConfigPackageUsageDetailType';
import type { ConfigPostingAttributesType } from './ConfigPostingAttributesType';
import {
    ConfigPostingAttributesTypeFromJSON,
    ConfigPostingAttributesTypeFromJSONTyped,
    ConfigPostingAttributesTypeToJSON,
} from './ConfigPostingAttributesType';

/**
 * 
 * @export
 * @interface PackageCodeHeaderType
 */
export interface PackageCodeHeaderType {
    /**
     * 
     * @type {ConfigPostingAttributesType}
     * @memberof PackageCodeHeaderType
     */
    postingAttributes?: ConfigPostingAttributesType;
    /**
     * 
     * @type {ConfigPackagePrimaryDetailsType}
     * @memberof PackageCodeHeaderType
     */
    primaryDetails?: ConfigPackagePrimaryDetailsType;
    /**
     * 
     * @type {ConfigPackageTransactionType}
     * @memberof PackageCodeHeaderType
     */
    transactionDetails?: ConfigPackageTransactionType;
    /**
     * 
     * @type {ConfigPackageUsageDetailType}
     * @memberof PackageCodeHeaderType
     */
    usageDetails?: ConfigPackageUsageDetailType;
}

/**
 * Check if a given object implements the PackageCodeHeaderType interface.
 */
export function instanceOfPackageCodeHeaderType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackageCodeHeaderTypeFromJSON(json: any): PackageCodeHeaderType {
    return PackageCodeHeaderTypeFromJSONTyped(json, false);
}

export function PackageCodeHeaderTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageCodeHeaderType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'postingAttributes': !exists(json, 'postingAttributes') ? undefined : ConfigPostingAttributesTypeFromJSON(json['postingAttributes']),
        'primaryDetails': !exists(json, 'primaryDetails') ? undefined : ConfigPackagePrimaryDetailsTypeFromJSON(json['primaryDetails']),
        'transactionDetails': !exists(json, 'transactionDetails') ? undefined : ConfigPackageTransactionTypeFromJSON(json['transactionDetails']),
        'usageDetails': !exists(json, 'usageDetails') ? undefined : ConfigPackageUsageDetailTypeFromJSON(json['usageDetails']),
    };
}

export function PackageCodeHeaderTypeToJSON(value?: PackageCodeHeaderType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'postingAttributes': ConfigPostingAttributesTypeToJSON(value.postingAttributes),
        'primaryDetails': ConfigPackagePrimaryDetailsTypeToJSON(value.primaryDetails),
        'transactionDetails': ConfigPackageTransactionTypeToJSON(value.transactionDetails),
        'usageDetails': ConfigPackageUsageDetailTypeToJSON(value.usageDetails),
    };
}

