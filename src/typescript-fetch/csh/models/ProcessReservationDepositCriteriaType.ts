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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { DepositProcessType } from './DepositProcessType';
import {
    DepositProcessTypeFromJSON,
    DepositProcessTypeFromJSONTyped,
    DepositProcessTypeToJSON,
} from './DepositProcessType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';

/**
 * Criteria to process reservation deposit.
 * @export
 * @interface ProcessReservationDepositCriteriaType
 */
export interface ProcessReservationDepositCriteriaType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ProcessReservationDepositCriteriaType
     */
    amount?: CurrencyAmountType;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof ProcessReservationDepositCriteriaType
     */
    cashierId?: number;
    /**
     * 
     * @type {DepositProcessType}
     * @memberof ProcessReservationDepositCriteriaType
     */
    depositProcessType?: DepositProcessType;
    /**
     * Hotel code of the reservation.
     * @type {string}
     * @memberof ProcessReservationDepositCriteriaType
     */
    hotelId?: string;
    /**
     * The Percentage would be transferred to the Guest Ledger of the Psuedo Posting Room if the DepositProcessingType = Keep/Return otherwise it will be transferred to the Guest Ledger of the current reservation.
     * @type {number}
     * @memberof ProcessReservationDepositCriteriaType
     */
    percentage?: number;
    /**
     * 
     * @type {ReservationId}
     * @memberof ProcessReservationDepositCriteriaType
     */
    reservationId?: ReservationId;
}

/**
 * Check if a given object implements the ProcessReservationDepositCriteriaType interface.
 */
export function instanceOfProcessReservationDepositCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProcessReservationDepositCriteriaTypeFromJSON(json: any): ProcessReservationDepositCriteriaType {
    return ProcessReservationDepositCriteriaTypeFromJSONTyped(json, false);
}

export function ProcessReservationDepositCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessReservationDepositCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'depositProcessType': !exists(json, 'depositProcessType') ? undefined : DepositProcessTypeFromJSON(json['depositProcessType']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'percentage': !exists(json, 'percentage') ? undefined : json['percentage'],
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
    };
}

export function ProcessReservationDepositCriteriaTypeToJSON(value?: ProcessReservationDepositCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'cashierId': value.cashierId,
        'depositProcessType': DepositProcessTypeToJSON(value.depositProcessType),
        'hotelId': value.hotelId,
        'percentage': value.percentage,
        'reservationId': ReservationIdToJSON(value.reservationId),
    };
}

