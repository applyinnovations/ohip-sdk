/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { DepositMaturityType } from './DepositMaturityType';
import {
    DepositMaturityTypeFromJSON,
    DepositMaturityTypeFromJSONTyped,
    DepositMaturityTypeToJSON,
} from './DepositMaturityType';

/**
 * Deposit maturity information type.
 * @export
 * @interface DepositMaturityInfoType
 */
export interface DepositMaturityInfoType {
    /**
     * 
     * @type {DepositMaturityType}
     * @memberof DepositMaturityInfoType
     */
    depositMaturityType?: DepositMaturityType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof DepositMaturityInfoType
     */
    totalAmountDue?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof DepositMaturityInfoType
     */
    totalAmountTransferrable?: CurrencyAmountType;
}

/**
 * Check if a given object implements the DepositMaturityInfoType interface.
 */
export function instanceOfDepositMaturityInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepositMaturityInfoTypeFromJSON(json: any): DepositMaturityInfoType {
    return DepositMaturityInfoTypeFromJSONTyped(json, false);
}

export function DepositMaturityInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositMaturityInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'depositMaturityType': !exists(json, 'depositMaturityType') ? undefined : DepositMaturityTypeFromJSON(json['depositMaturityType']),
        'totalAmountDue': !exists(json, 'totalAmountDue') ? undefined : CurrencyAmountTypeFromJSON(json['totalAmountDue']),
        'totalAmountTransferrable': !exists(json, 'totalAmountTransferrable') ? undefined : CurrencyAmountTypeFromJSON(json['totalAmountTransferrable']),
    };
}

export function DepositMaturityInfoTypeToJSON(value?: DepositMaturityInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'depositMaturityType': DepositMaturityTypeToJSON(value.depositMaturityType),
        'totalAmountDue': CurrencyAmountTypeToJSON(value.totalAmountDue),
        'totalAmountTransferrable': CurrencyAmountTypeToJSON(value.totalAmountTransferrable),
    };
}
