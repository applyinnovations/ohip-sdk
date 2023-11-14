/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ARAccountRefType } from './ARAccountRefType';
import {
    ARAccountRefTypeFromJSON,
    ARAccountRefTypeFromJSONTyped,
    ARAccountRefTypeToJSON,
} from './ARAccountRefType';
import type { CardPaymentProcessingType } from './CardPaymentProcessingType';
import {
    CardPaymentProcessingTypeFromJSON,
    CardPaymentProcessingTypeFromJSONTyped,
    CardPaymentProcessingTypeToJSON,
} from './CardPaymentProcessingType';

/**
 * Card Payment Transaction Code configuration details.
 * @export
 * @interface CardPaymentTrxSetupType
 */
export interface CardPaymentTrxSetupType {
    /**
     * 
     * @type {ARAccountRefType}
     * @memberof CardPaymentTrxSetupType
     */
    accountReceivable?: ARAccountRefType;
    /**
     * Commission percentage on the payment.
     * @type {number}
     * @memberof CardPaymentTrxSetupType
     */
    commission?: number;
    /**
     * Display code of the payment Transaction Code.
     * @type {string}
     * @memberof CardPaymentTrxSetupType
     */
    displayCode?: string;
    /**
     * Card Payment's internal interface code.
     * @type {string}
     * @memberof CardPaymentTrxSetupType
     */
    interfaceCode?: string;
    /**
     * 
     * @type {CardPaymentProcessingType}
     * @memberof CardPaymentTrxSetupType
     */
    processingType?: CardPaymentProcessingType;
}

/**
 * Check if a given object implements the CardPaymentTrxSetupType interface.
 */
export function instanceOfCardPaymentTrxSetupType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CardPaymentTrxSetupTypeFromJSON(json: any): CardPaymentTrxSetupType {
    return CardPaymentTrxSetupTypeFromJSONTyped(json, false);
}

export function CardPaymentTrxSetupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardPaymentTrxSetupType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountReceivable': !exists(json, 'accountReceivable') ? undefined : ARAccountRefTypeFromJSON(json['accountReceivable']),
        'commission': !exists(json, 'commission') ? undefined : json['commission'],
        'displayCode': !exists(json, 'displayCode') ? undefined : json['displayCode'],
        'interfaceCode': !exists(json, 'interfaceCode') ? undefined : json['interfaceCode'],
        'processingType': !exists(json, 'processingType') ? undefined : CardPaymentProcessingTypeFromJSON(json['processingType']),
    };
}

export function CardPaymentTrxSetupTypeToJSON(value?: CardPaymentTrxSetupType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountReceivable': ARAccountRefTypeToJSON(value.accountReceivable),
        'commission': value.commission,
        'displayCode': value.displayCode,
        'interfaceCode': value.interfaceCode,
        'processingType': CardPaymentProcessingTypeToJSON(value.processingType),
    };
}
