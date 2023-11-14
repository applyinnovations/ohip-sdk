/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TotalType } from './TotalType';
import {
    TotalTypeFromJSON,
    TotalTypeFromJSONTyped,
    TotalTypeToJSON,
} from './TotalType';

/**
 * 
 * @export
 * @interface AdditionalGuestAmountType
 */
export interface AdditionalGuestAmountType {
    /**
     * 
     * @type {string}
     * @memberof AdditionalGuestAmountType
     */
    ageQualifyingCode?: AdditionalGuestAmountTypeAgeQualifyingCodeEnum;
    /**
     * 
     * @type {TotalType}
     * @memberof AdditionalGuestAmountType
     */
    amount?: TotalType;
}


/**
 * @export
 */
export const AdditionalGuestAmountTypeAgeQualifyingCodeEnum = {
    Adult: 'ADULT',
    Child: 'CHILD',
    Other: 'OTHER',
    Childbucket1: 'CHILDBUCKET1',
    Childbucket2: 'CHILDBUCKET2',
    Childbucket3: 'CHILDBUCKET3',
    Childbucket4: 'CHILDBUCKET4',
    Childbucket5: 'CHILDBUCKET5'
} as const;
export type AdditionalGuestAmountTypeAgeQualifyingCodeEnum = typeof AdditionalGuestAmountTypeAgeQualifyingCodeEnum[keyof typeof AdditionalGuestAmountTypeAgeQualifyingCodeEnum];


/**
 * Check if a given object implements the AdditionalGuestAmountType interface.
 */
export function instanceOfAdditionalGuestAmountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdditionalGuestAmountTypeFromJSON(json: any): AdditionalGuestAmountType {
    return AdditionalGuestAmountTypeFromJSONTyped(json, false);
}

export function AdditionalGuestAmountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdditionalGuestAmountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ageQualifyingCode': !exists(json, 'ageQualifyingCode') ? undefined : json['ageQualifyingCode'],
        'amount': !exists(json, 'amount') ? undefined : TotalTypeFromJSON(json['amount']),
    };
}

export function AdditionalGuestAmountTypeToJSON(value?: AdditionalGuestAmountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ageQualifyingCode': value.ageQualifyingCode,
        'amount': TotalTypeToJSON(value.amount),
    };
}
