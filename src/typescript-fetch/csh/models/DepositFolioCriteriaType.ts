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
import type { ChargeCriteriaType } from './ChargeCriteriaType';
import {
    ChargeCriteriaTypeFromJSON,
    ChargeCriteriaTypeFromJSONTyped,
    ChargeCriteriaTypeToJSON,
} from './ChargeCriteriaType';
import type { FiscalServiceType } from './FiscalServiceType';
import {
    FiscalServiceTypeFromJSON,
    FiscalServiceTypeFromJSONTyped,
    FiscalServiceTypeToJSON,
} from './FiscalServiceType';
import type { NameValueHeaderDetailType } from './NameValueHeaderDetailType';
import {
    NameValueHeaderDetailTypeFromJSON,
    NameValueHeaderDetailTypeFromJSONTyped,
    NameValueHeaderDetailTypeToJSON,
} from './NameValueHeaderDetailType';
import type { PaymentCriteriaType } from './PaymentCriteriaType';
import {
    PaymentCriteriaTypeFromJSON,
    PaymentCriteriaTypeFromJSONTyped,
    PaymentCriteriaTypeToJSON,
} from './PaymentCriteriaType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { ReservationPaymentMethodType } from './ReservationPaymentMethodType';
import {
    ReservationPaymentMethodTypeFromJSON,
    ReservationPaymentMethodTypeFromJSONTyped,
    ReservationPaymentMethodTypeToJSON,
} from './ReservationPaymentMethodType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * The Deposit folio posting and payments information.
 * @export
 * @interface DepositFolioCriteriaType
 */
export interface DepositFolioCriteriaType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof DepositFolioCriteriaType
     */
    cashierId?: number;
    /**
     * Collection of Charges to be posted.
     * @type {Array<ChargeCriteriaType>}
     * @memberof DepositFolioCriteriaType
     */
    charges?: Array<ChargeCriteriaType>;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof DepositFolioCriteriaType
     */
    depositPolicyId?: UniqueIDType;
    /**
     * 
     * @type {FiscalServiceType}
     * @memberof DepositFolioCriteriaType
     */
    fiscalFolioInfo?: FiscalServiceType;
    /**
     * Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected.
     * @type {string}
     * @memberof DepositFolioCriteriaType
     */
    fiscalTerminalId?: string;
    /**
     * Custom Folio Name Value Informatoin to be saved
     * @type {Array<NameValueHeaderDetailType>}
     * @memberof DepositFolioCriteriaType
     */
    folioNameValue?: Array<NameValueHeaderDetailType>;
    /**
     * New guarantee code associated with reservation.
     * @type {string}
     * @memberof DepositFolioCriteriaType
     */
    guaranteeCode?: string;
    /**
     * Property where the charges are to be posted.
     * @type {string}
     * @memberof DepositFolioCriteriaType
     */
    hotelId?: string;
    /**
     * Date of the Audit. This is used when postings are being created using the Income Audit functionality.
     * @type {string}
     * @memberof DepositFolioCriteriaType
     */
    incomeAuditDate?: string;
    /**
     * Manual Folio Number used for deposit folio.This applies to certain country requirements.
     * @type {number}
     * @memberof DepositFolioCriteriaType
     */
    manualFolioNo?: number;
    /**
     * Flag to indicate if the Inventory check has to be overridden when the guarantee code of the reservation is changed.
     * @type {boolean}
     * @memberof DepositFolioCriteriaType
     */
    overrideInventoryCheck?: boolean;
    /**
     * 
     * @type {ReservationPaymentMethodType}
     * @memberof DepositFolioCriteriaType
     */
    paymentMethod?: ReservationPaymentMethodType;
    /**
     * The payment information to be posted.
     * @type {Array<PaymentCriteriaType>}
     * @memberof DepositFolioCriteriaType
     */
    payments?: Array<PaymentCriteriaType>;
    /**
     * 
     * @type {ProfileId}
     * @memberof DepositFolioCriteriaType
     */
    profileId?: ProfileId;
    /**
     * 
     * @type {ReservationId}
     * @memberof DepositFolioCriteriaType
     */
    reservationId?: ReservationId;
    /**
     * This flag signifies that generated Folio is Normal or Simple Folio. Certain countries of the World mandate a simple folio when the invoice amount is less than defined threshold.
     * @type {boolean}
     * @memberof DepositFolioCriteriaType
     */
    simpleFolio?: boolean;
    /**
     * Transaction service type which the Folio is being associated.
     * @type {string}
     * @memberof DepositFolioCriteriaType
     */
    trxServiceType?: string;
}

/**
 * Check if a given object implements the DepositFolioCriteriaType interface.
 */
export function instanceOfDepositFolioCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepositFolioCriteriaTypeFromJSON(json: any): DepositFolioCriteriaType {
    return DepositFolioCriteriaTypeFromJSONTyped(json, false);
}

export function DepositFolioCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositFolioCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'charges': !exists(json, 'charges') ? undefined : ((json['charges'] as Array<any>).map(ChargeCriteriaTypeFromJSON)),
        'depositPolicyId': !exists(json, 'depositPolicyId') ? undefined : UniqueIDTypeFromJSON(json['depositPolicyId']),
        'fiscalFolioInfo': !exists(json, 'fiscalFolioInfo') ? undefined : FiscalServiceTypeFromJSON(json['fiscalFolioInfo']),
        'fiscalTerminalId': !exists(json, 'fiscalTerminalId') ? undefined : json['fiscalTerminalId'],
        'folioNameValue': !exists(json, 'folioNameValue') ? undefined : ((json['folioNameValue'] as Array<any>).map(NameValueHeaderDetailTypeFromJSON)),
        'guaranteeCode': !exists(json, 'guaranteeCode') ? undefined : json['guaranteeCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'incomeAuditDate': !exists(json, 'incomeAuditDate') ? undefined : json['incomeAuditDate'],
        'manualFolioNo': !exists(json, 'manualFolioNo') ? undefined : json['manualFolioNo'],
        'overrideInventoryCheck': !exists(json, 'overrideInventoryCheck') ? undefined : json['overrideInventoryCheck'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : ReservationPaymentMethodTypeFromJSON(json['paymentMethod']),
        'payments': !exists(json, 'payments') ? undefined : ((json['payments'] as Array<any>).map(PaymentCriteriaTypeFromJSON)),
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'simpleFolio': !exists(json, 'simpleFolio') ? undefined : json['simpleFolio'],
        'trxServiceType': !exists(json, 'trxServiceType') ? undefined : json['trxServiceType'],
    };
}

export function DepositFolioCriteriaTypeToJSON(value?: DepositFolioCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierId': value.cashierId,
        'charges': value.charges === undefined ? undefined : ((value.charges as Array<any>).map(ChargeCriteriaTypeToJSON)),
        'depositPolicyId': UniqueIDTypeToJSON(value.depositPolicyId),
        'fiscalFolioInfo': FiscalServiceTypeToJSON(value.fiscalFolioInfo),
        'fiscalTerminalId': value.fiscalTerminalId,
        'folioNameValue': value.folioNameValue === undefined ? undefined : ((value.folioNameValue as Array<any>).map(NameValueHeaderDetailTypeToJSON)),
        'guaranteeCode': value.guaranteeCode,
        'hotelId': value.hotelId,
        'incomeAuditDate': value.incomeAuditDate,
        'manualFolioNo': value.manualFolioNo,
        'overrideInventoryCheck': value.overrideInventoryCheck,
        'paymentMethod': ReservationPaymentMethodTypeToJSON(value.paymentMethod),
        'payments': value.payments === undefined ? undefined : ((value.payments as Array<any>).map(PaymentCriteriaTypeToJSON)),
        'profileId': ProfileIdToJSON(value.profileId),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'simpleFolio': value.simpleFolio,
        'trxServiceType': value.trxServiceType,
    };
}
