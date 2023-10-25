/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { ConfigPostingAttributesType } from './ConfigPostingAttributesType';
import {
    ConfigPostingAttributesTypeFromJSON,
    ConfigPostingAttributesTypeFromJSONTyped,
    ConfigPostingAttributesTypeToJSON,
} from './ConfigPostingAttributesType';

/**
 * 
 * @export
 * @interface PackageCodeShortInfoType
 */
export interface PackageCodeShortInfoType {
    /**
     * Package Code.
     * @type {string}
     * @memberof PackageCodeShortInfoType
     */
    code?: string;
    /**
     * Indicates if it is a Package Group or not.
     * @type {boolean}
     * @memberof PackageCodeShortInfoType
     */
    group?: boolean;
    /**
     * 
     * @type {ConfigPostingAttributesType}
     * @memberof PackageCodeShortInfoType
     */
    postingAttributes?: ConfigPostingAttributesType;
    /**
     * 
     * @type {ConfigPackagePrimaryDetailsType}
     * @memberof PackageCodeShortInfoType
     */
    primaryDetails?: ConfigPackagePrimaryDetailsType;
    /**
     * Indicates if package is a redemption package.
     * @type {string}
     * @memberof PackageCodeShortInfoType
     */
    redemptionProductYn?: string;
    /**
     * 
     * @type {ConfigPackageTransactionType}
     * @memberof PackageCodeShortInfoType
     */
    transactionDetails?: ConfigPackageTransactionType;
    /**
     * Flag to check the package code is used in application setting.
     * @type {boolean}
     * @memberof PackageCodeShortInfoType
     */
    usedInAppSetting?: boolean;
}

/**
 * Check if a given object implements the PackageCodeShortInfoType interface.
 */
export function instanceOfPackageCodeShortInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackageCodeShortInfoTypeFromJSON(json: any): PackageCodeShortInfoType {
    return PackageCodeShortInfoTypeFromJSONTyped(json, false);
}

export function PackageCodeShortInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackageCodeShortInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'group': !exists(json, 'group') ? undefined : json['group'],
        'postingAttributes': !exists(json, 'postingAttributes') ? undefined : ConfigPostingAttributesTypeFromJSON(json['postingAttributes']),
        'primaryDetails': !exists(json, 'primaryDetails') ? undefined : ConfigPackagePrimaryDetailsTypeFromJSON(json['primaryDetails']),
        'redemptionProductYn': !exists(json, 'redemptionProductYn') ? undefined : json['redemptionProductYn'],
        'transactionDetails': !exists(json, 'transactionDetails') ? undefined : ConfigPackageTransactionTypeFromJSON(json['transactionDetails']),
        'usedInAppSetting': !exists(json, 'usedInAppSetting') ? undefined : json['usedInAppSetting'],
    };
}

export function PackageCodeShortInfoTypeToJSON(value?: PackageCodeShortInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'group': value.group,
        'postingAttributes': ConfigPostingAttributesTypeToJSON(value.postingAttributes),
        'primaryDetails': ConfigPackagePrimaryDetailsTypeToJSON(value.primaryDetails),
        'redemptionProductYn': value.redemptionProductYn,
        'transactionDetails': ConfigPackageTransactionTypeToJSON(value.transactionDetails),
        'usedInAppSetting': value.usedInAppSetting,
    };
}

