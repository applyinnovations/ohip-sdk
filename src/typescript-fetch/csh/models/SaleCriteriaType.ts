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
import type { FolioReasonType } from './FolioReasonType';
import {
    FolioReasonTypeFromJSON,
    FolioReasonTypeFromJSONTyped,
    FolioReasonTypeToJSON,
} from './FolioReasonType';
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

/**
 * Criteria type for posting charges.
 * @export
 * @interface SaleCriteriaType
 */
export interface SaleCriteriaType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof SaleCriteriaType
     */
    cashierId?: number;
    /**
     * Collection of Charges to be posted.
     * @type {Array<ChargeCriteriaType>}
     * @memberof SaleCriteriaType
     */
    charges?: Array<ChargeCriteriaType>;
    /**
     * 
     * @type {FiscalServiceType}
     * @memberof SaleCriteriaType
     */
    fiscalFolioInfo?: FiscalServiceType;
    /**
     * Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected.
     * @type {string}
     * @memberof SaleCriteriaType
     */
    fiscalTerminalId?: string;
    /**
     * Custom Folio Name Value Informatoin to be saved
     * @type {Array<NameValueHeaderDetailType>}
     * @memberof SaleCriteriaType
     */
    folioNameValue?: Array<NameValueHeaderDetailType>;
    /**
     * Property where the charges are to be posted.
     * @type {string}
     * @memberof SaleCriteriaType
     */
    hotelId?: string;
    /**
     * Date of the Audit. This is used when postings are being created using the Income Audit functionality.
     * @type {string}
     * @memberof SaleCriteriaType
     */
    incomeAuditDate?: string;
    /**
     * The payment information to be posted.
     * @type {Array<PaymentCriteriaType>}
     * @memberof SaleCriteriaType
     */
    payments?: Array<PaymentCriteriaType>;
    /**
     * 
     * @type {FolioReasonType}
     * @memberof SaleCriteriaType
     */
    reason?: FolioReasonType;
    /**
     * Transaction service type which the Folio is being associated.
     * @type {string}
     * @memberof SaleCriteriaType
     */
    trxServiceType?: string;
}

/**
 * Check if a given object implements the SaleCriteriaType interface.
 */
export function instanceOfSaleCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SaleCriteriaTypeFromJSON(json: any): SaleCriteriaType {
    return SaleCriteriaTypeFromJSONTyped(json, false);
}

export function SaleCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaleCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'charges': !exists(json, 'charges') ? undefined : ((json['charges'] as Array<any>).map(ChargeCriteriaTypeFromJSON)),
        'fiscalFolioInfo': !exists(json, 'fiscalFolioInfo') ? undefined : FiscalServiceTypeFromJSON(json['fiscalFolioInfo']),
        'fiscalTerminalId': !exists(json, 'fiscalTerminalId') ? undefined : json['fiscalTerminalId'],
        'folioNameValue': !exists(json, 'folioNameValue') ? undefined : ((json['folioNameValue'] as Array<any>).map(NameValueHeaderDetailTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'incomeAuditDate': !exists(json, 'incomeAuditDate') ? undefined : json['incomeAuditDate'],
        'payments': !exists(json, 'payments') ? undefined : ((json['payments'] as Array<any>).map(PaymentCriteriaTypeFromJSON)),
        'reason': !exists(json, 'reason') ? undefined : FolioReasonTypeFromJSON(json['reason']),
        'trxServiceType': !exists(json, 'trxServiceType') ? undefined : json['trxServiceType'],
    };
}

export function SaleCriteriaTypeToJSON(value?: SaleCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierId': value.cashierId,
        'charges': value.charges === undefined ? undefined : ((value.charges as Array<any>).map(ChargeCriteriaTypeToJSON)),
        'fiscalFolioInfo': FiscalServiceTypeToJSON(value.fiscalFolioInfo),
        'fiscalTerminalId': value.fiscalTerminalId,
        'folioNameValue': value.folioNameValue === undefined ? undefined : ((value.folioNameValue as Array<any>).map(NameValueHeaderDetailTypeToJSON)),
        'hotelId': value.hotelId,
        'incomeAuditDate': value.incomeAuditDate,
        'payments': value.payments === undefined ? undefined : ((value.payments as Array<any>).map(PaymentCriteriaTypeToJSON)),
        'reason': FolioReasonTypeToJSON(value.reason),
        'trxServiceType': value.trxServiceType,
    };
}

