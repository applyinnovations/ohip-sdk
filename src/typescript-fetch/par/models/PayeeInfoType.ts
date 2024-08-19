/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
     * @type {ARAccountShortInfoType}
     * @memberof PayeeInfoType
     */
    payeeAccountInfo?: ARAccountShortInfoType;
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
     * Reference currency of the payee.
     * @type {string}
     * @memberof PayeeInfoType
     */
    payeeReferenceCurrency?: string;
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
        
        'payeeAccountInfo': !exists(json, 'payeeAccountInfo') ? undefined : ARAccountShortInfoTypeFromJSON(json['payeeAccountInfo']),
        'payeeAddress': !exists(json, 'payeeAddress') ? undefined : AddressInfoTypeFromJSON(json['payeeAddress']),
        'payeeAddressCount': !exists(json, 'payeeAddressCount') ? undefined : json['payeeAddressCount'],
        'payeeId': !exists(json, 'payeeId') ? undefined : UniqueIDTypeFromJSON(json['payeeId']),
        'payeeName': !exists(json, 'payeeName') ? undefined : json['payeeName'],
        'payeeReferenceCurrency': !exists(json, 'payeeReferenceCurrency') ? undefined : json['payeeReferenceCurrency'],
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
        
        'payeeAccountInfo': ARAccountShortInfoTypeToJSON(value.payeeAccountInfo),
        'payeeAddress': AddressInfoTypeToJSON(value.payeeAddress),
        'payeeAddressCount': value.payeeAddressCount,
        'payeeId': UniqueIDTypeToJSON(value.payeeId),
        'payeeName': value.payeeName,
        'payeeReferenceCurrency': value.payeeReferenceCurrency,
        'payeeTaxNumber': value.payeeTaxNumber,
    };
}

