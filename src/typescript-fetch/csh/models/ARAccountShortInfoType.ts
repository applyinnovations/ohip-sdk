/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ARAccountStatusType } from './ARAccountStatusType';
import {
    ARAccountStatusTypeFromJSON,
    ARAccountStatusTypeFromJSONTyped,
    ARAccountStatusTypeToJSON,
} from './ARAccountStatusType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Accounts Receivabales Account details type charged for batched posting.
 * @export
 * @interface ARAccountShortInfoType
 */
export interface ARAccountShortInfoType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ARAccountShortInfoType
     */
    accountId?: UniqueIDType;
    /**
     * Name of the AR Account.
     * @type {string}
     * @memberof ARAccountShortInfoType
     */
    accountName?: string;
    /**
     * The Account Number for the Account.
     * @type {string}
     * @memberof ARAccountShortInfoType
     */
    accountNo?: string;
    /**
     * 
     * @type {ARAccountStatusType}
     * @memberof ARAccountShortInfoType
     */
    status?: ARAccountStatusType;
}

/**
 * Check if a given object implements the ARAccountShortInfoType interface.
 */
export function instanceOfARAccountShortInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARAccountShortInfoTypeFromJSON(json: any): ARAccountShortInfoType {
    return ARAccountShortInfoTypeFromJSONTyped(json, false);
}

export function ARAccountShortInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAccountShortInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'accountId') ? undefined : UniqueIDTypeFromJSON(json['accountId']),
        'accountName': !exists(json, 'accountName') ? undefined : json['accountName'],
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'status': !exists(json, 'status') ? undefined : ARAccountStatusTypeFromJSON(json['status']),
    };
}

export function ARAccountShortInfoTypeToJSON(value?: ARAccountShortInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': UniqueIDTypeToJSON(value.accountId),
        'accountName': value.accountName,
        'accountNo': value.accountNo,
        'status': ARAccountStatusTypeToJSON(value.status),
    };
}

