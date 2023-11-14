/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ARAccountShortInfoType } from './ARAccountShortInfoType';
import {
    ARAccountShortInfoTypeFromJSON,
    ARAccountShortInfoTypeFromJSONTyped,
    ARAccountShortInfoTypeToJSON,
} from './ARAccountShortInfoType';
import type { AddressInfoType } from './AddressInfoType';
import {
    AddressInfoTypeFromJSON,
    AddressInfoTypeFromJSONTyped,
    AddressInfoTypeToJSON,
} from './AddressInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Payee information.
 * @export
 * @interface PayeeInfoType
 */
export interface PayeeInfoType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof PayeeInfoType
     */
    payeeId?: UniqueIDType;
    /**
     * Name of the payee.
     * @type {string}
     * @memberof PayeeInfoType
     */
    payeeName?: string;
    /**
     * 
     * @type {AddressInfoType}
     * @memberof PayeeInfoType
     */
    payeeAddress?: AddressInfoType;
    /**
     * Payee multiple address count.
     * @type {number}
     * @memberof PayeeInfoType
     */
    payeeAddressCount?: number;
    /**
     * Reference currency of the payee.
     * @type {string}
     * @memberof PayeeInfoType
     */
    payeeReferenceCurrency?: string;
    /**
     * 
     * @type {ARAccountShortInfoType}
     * @memberof PayeeInfoType
     */
    payeeAccountInfo?: ARAccountShortInfoType;
    /**
     * The tax number of the payee.
     * @type {string}
     * @memberof PayeeInfoType
     */
    payeeTaxNumber?: string;
}

/**
 * Check if a given object implements the PayeeInfoType interface.
 */
export function instanceOfPayeeInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PayeeInfoTypeFromJSON(json: any): PayeeInfoType {
    return PayeeInfoTypeFromJSONTyped(json, false);
}

export function PayeeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payeeId': !exists(json, 'payeeId') ? undefined : UniqueIDTypeFromJSON(json['payeeId']),
        'payeeName': !exists(json, 'payeeName') ? undefined : json['payeeName'],
        'payeeAddress': !exists(json, 'payeeAddress') ? undefined : AddressInfoTypeFromJSON(json['payeeAddress']),
        'payeeAddressCount': !exists(json, 'payeeAddressCount') ? undefined : json['payeeAddressCount'],
        'payeeReferenceCurrency': !exists(json, 'payeeReferenceCurrency') ? undefined : json['payeeReferenceCurrency'],
        'payeeAccountInfo': !exists(json, 'payeeAccountInfo') ? undefined : ARAccountShortInfoTypeFromJSON(json['payeeAccountInfo']),
        'payeeTaxNumber': !exists(json, 'payeeTaxNumber') ? undefined : json['payeeTaxNumber'],
    };
}

export function PayeeInfoTypeToJSON(value?: PayeeInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payeeId': UniqueIDTypeToJSON(value.payeeId),
        'payeeName': value.payeeName,
        'payeeAddress': AddressInfoTypeToJSON(value.payeeAddress),
        'payeeAddressCount': value.payeeAddressCount,
        'payeeReferenceCurrency': value.payeeReferenceCurrency,
        'payeeAccountInfo': ARAccountShortInfoTypeToJSON(value.payeeAccountInfo),
        'payeeTaxNumber': value.payeeTaxNumber,
    };
}
