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
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Criteria type for an AR Account.
 * @export
 * @interface ReversePaymentCriteriaType
 */
export interface ReversePaymentCriteriaType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ReversePaymentCriteriaType
     */
    accountId?: UniqueIDType;
    /**
     * Account Name for the AR Account.
     * @type {string}
     * @memberof ReversePaymentCriteriaType
     */
    accountName?: string;
    /**
     * Account Number for the AR Account.
     * @type {string}
     * @memberof ReversePaymentCriteriaType
     */
    accountNo?: string;
    /**
     * Property where the AR Account exists. This is required.
     * @type {string}
     * @memberof ReversePaymentCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {ProfileId}
     * @memberof ReversePaymentCriteriaType
     */
    profileId?: ProfileId;
    /**
     * 
     * @type {number}
     * @memberof ReversePaymentCriteriaType
     */
    transactionNo?: number;
}

/**
 * Check if a given object implements the ReversePaymentCriteriaType interface.
 */
export function instanceOfReversePaymentCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReversePaymentCriteriaTypeFromJSON(json: any): ReversePaymentCriteriaType {
    return ReversePaymentCriteriaTypeFromJSONTyped(json, false);
}

export function ReversePaymentCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReversePaymentCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'accountId') ? undefined : UniqueIDTypeFromJSON(json['accountId']),
        'accountName': !exists(json, 'accountName') ? undefined : json['accountName'],
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
    };
}

export function ReversePaymentCriteriaTypeToJSON(value?: ReversePaymentCriteriaType | null): any {
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
        'hotelId': value.hotelId,
        'profileId': ProfileIdToJSON(value.profileId),
        'transactionNo': value.transactionNo,
    };
}

