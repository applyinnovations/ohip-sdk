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
import type { CreditCardUniqueIdType } from './CreditCardUniqueIdType';
import {
    CreditCardUniqueIdTypeFromJSON,
    CreditCardUniqueIdTypeFromJSONTyped,
    CreditCardUniqueIdTypeToJSON,
} from './CreditCardUniqueIdType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface GetCreditCardUniqueIdRequest
 */
export interface GetCreditCardUniqueIdRequest {
    /**
     * 
     * @type {CreditCardUniqueIdType}
     * @memberof GetCreditCardUniqueIdRequest
     */
    creditCardUniqueId?: CreditCardUniqueIdType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GetCreditCardUniqueIdRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the GetCreditCardUniqueIdRequest interface.
 */
export function instanceOfGetCreditCardUniqueIdRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCreditCardUniqueIdRequestFromJSON(json: any): GetCreditCardUniqueIdRequest {
    return GetCreditCardUniqueIdRequestFromJSONTyped(json, false);
}

export function GetCreditCardUniqueIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCreditCardUniqueIdRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'creditCardUniqueId': !exists(json, 'creditCardUniqueId') ? undefined : CreditCardUniqueIdTypeFromJSON(json['creditCardUniqueId']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function GetCreditCardUniqueIdRequestToJSON(value?: GetCreditCardUniqueIdRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'creditCardUniqueId': CreditCardUniqueIdTypeToJSON(value.creditCardUniqueId),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

