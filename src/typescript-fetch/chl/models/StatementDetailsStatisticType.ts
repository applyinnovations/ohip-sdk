/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ContractFeeTypeType } from './ContractFeeTypeType';
import {
    ContractFeeTypeTypeFromJSON,
    ContractFeeTypeTypeFromJSONTyped,
    ContractFeeTypeTypeToJSON,
} from './ContractFeeTypeType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Channel statement details statistics.
 * @export
 * @interface StatementDetailsStatisticType
 */
export interface StatementDetailsStatisticType {
    /**
     * Holds channel of the statement details statistic By Channel.
     * @type {string}
     * @memberof StatementDetailsStatisticType
     */
    bookingChannelCode?: string;
    /**
     * Holds channel type of the statement details statistic By Channel Type.
     * @type {string}
     * @memberof StatementDetailsStatisticType
     */
    bookingChannelType?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof StatementDetailsStatisticType
     */
    contractAmount?: CurrencyAmountType;
    /**
     * Channel billing statement details record count grouped by Resort/Channel/Channel Type/Fee Type.
     * @type {number}
     * @memberof StatementDetailsStatisticType
     */
    detailsCount?: number;
    /**
     * 
     * @type {ContractFeeTypeType}
     * @memberof StatementDetailsStatisticType
     */
    feeType?: ContractFeeTypeType;
    /**
     * Holds the property for the statement detail statistic By resort.
     * @type {string}
     * @memberof StatementDetailsStatisticType
     */
    hotelId?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof StatementDetailsStatisticType
     */
    invoiceAmount?: CurrencyAmountType;
}

/**
 * Check if a given object implements the StatementDetailsStatisticType interface.
 */
export function instanceOfStatementDetailsStatisticType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatementDetailsStatisticTypeFromJSON(json: any): StatementDetailsStatisticType {
    return StatementDetailsStatisticTypeFromJSONTyped(json, false);
}

export function StatementDetailsStatisticTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatementDetailsStatisticType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'bookingChannelType': !exists(json, 'bookingChannelType') ? undefined : json['bookingChannelType'],
        'contractAmount': !exists(json, 'contractAmount') ? undefined : CurrencyAmountTypeFromJSON(json['contractAmount']),
        'detailsCount': !exists(json, 'detailsCount') ? undefined : json['detailsCount'],
        'feeType': !exists(json, 'feeType') ? undefined : ContractFeeTypeTypeFromJSON(json['feeType']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'invoiceAmount': !exists(json, 'invoiceAmount') ? undefined : CurrencyAmountTypeFromJSON(json['invoiceAmount']),
    };
}

export function StatementDetailsStatisticTypeToJSON(value?: StatementDetailsStatisticType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelCode': value.bookingChannelCode,
        'bookingChannelType': value.bookingChannelType,
        'contractAmount': CurrencyAmountTypeToJSON(value.contractAmount),
        'detailsCount': value.detailsCount,
        'feeType': ContractFeeTypeTypeToJSON(value.feeType),
        'hotelId': value.hotelId,
        'invoiceAmount': CurrencyAmountTypeToJSON(value.invoiceAmount),
    };
}
