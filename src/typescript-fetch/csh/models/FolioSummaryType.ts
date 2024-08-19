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
import type { ExchangeRateInfoType } from './ExchangeRateInfoType';
import {
    ExchangeRateInfoTypeFromJSON,
    ExchangeRateInfoTypeFromJSONTyped,
    ExchangeRateInfoTypeToJSON,
} from './ExchangeRateInfoType';
import type { FolioStatusType } from './FolioStatusType';
import {
    FolioStatusTypeFromJSON,
    FolioStatusTypeFromJSONTyped,
    FolioStatusTypeToJSON,
} from './FolioStatusType';
import type { FolioSummaryTypeReservationInfo } from './FolioSummaryTypeReservationInfo';
import {
    FolioSummaryTypeReservationInfoFromJSON,
    FolioSummaryTypeReservationInfoFromJSONTyped,
    FolioSummaryTypeReservationInfoToJSON,
} from './FolioSummaryTypeReservationInfo';
import type { PayeeInfoType } from './PayeeInfoType';
import {
    PayeeInfoTypeFromJSON,
    PayeeInfoTypeFromJSONTyped,
    PayeeInfoTypeToJSON,
} from './PayeeInfoType';
import type { ProfileInfoType } from './ProfileInfoType';
import {
    ProfileInfoTypeFromJSON,
    ProfileInfoTypeFromJSONTyped,
    ProfileInfoTypeToJSON,
} from './ProfileInfoType';
import type { SummaryPostingType } from './SummaryPostingType';
import {
    SummaryPostingTypeFromJSON,
    SummaryPostingTypeFromJSONTyped,
    SummaryPostingTypeToJSON,
} from './SummaryPostingType';
import type { SupportingDocumentType } from './SupportingDocumentType';
import {
    SupportingDocumentTypeFromJSON,
    SupportingDocumentTypeFromJSONTyped,
    SupportingDocumentTypeToJSON,
} from './SupportingDocumentType';

/**
 * Contains Folio Details including payee information and the reservation which it's attached to.
 * @export
 * @interface FolioSummaryType
 */
export interface FolioSummaryType {
    /**
     * Account Code.
     * @type {number}
     * @memberof FolioSummaryType
     */
    accountCode?: number;
    /**
     * Flag to check Folio generated from Acoount Receivables.
     * @type {boolean}
     * @memberof FolioSummaryType
     */
    accountReceivablesFolio?: boolean;
    /**
     * 
     * @type {ProfileInfoType}
     * @memberof FolioSummaryType
     */
    addresseeInfo?: ProfileInfoType;
    /**
     * Flag to check Folio Conversion Allowed.
     * @type {boolean}
     * @memberof FolioSummaryType
     */
    allowConvertFolioYn?: boolean;
    /**
     * Indicates if this folio is linked to an anonymized Guest/Payee/Addressee.
     * @type {boolean}
     * @memberof FolioSummaryType
     */
    anonymizedFolio?: boolean;
    /**
     * Bill Number.
     * @type {Array<string>}
     * @memberof FolioSummaryType
     */
    associatedBills?: Array<string>;
    /**
     * Indicates if the folio is a Credit Folio.
     * @type {boolean}
     * @memberof FolioSummaryType
     */
    creditFolio?: boolean;
    /**
     * Custom Number.
     * @type {Array<string>}
     * @memberof FolioSummaryType
     */
    customNumbers?: Array<string>;
    /**
     * Indicates if the folio is a Debit Folio.
     * @type {boolean}
     * @memberof FolioSummaryType
     */
    debitFolio?: boolean;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof FolioSummaryType
     */
    end?: string;
    /**
     * The Fiscal Bill number of this posting
     * @type {string}
     * @memberof FolioSummaryType
     */
    fiscalBillNo?: string;
    /**
     * Bill Number returned by the Fiscal Printer.
     * @type {string}
     * @memberof FolioSummaryType
     */
    fiscalFolioNo?: string;
    /**
     * 
     * @type {ExchangeRateInfoType}
     * @memberof FolioSummaryType
     */
    fiscalInvoicingCurrencyInfo?: ExchangeRateInfoType;
    /**
     * Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected.
     * @type {string}
     * @memberof FolioSummaryType
     */
    fiscalTerminalId?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof FolioSummaryType
     */
    folioAmount?: CurrencyAmountType;
    /**
     * Date of Folio Generation.
     * @type {string}
     * @memberof FolioSummaryType
     */
    folioDate?: string;
    /**
     * Folio Number.
     * @type {number}
     * @memberof FolioSummaryType
     */
    folioNo?: number;
    /**
     * The folio number with prefix value.
     * @type {string}
     * @memberof FolioSummaryType
     */
    folioNoWithPrefix?: string;
    /**
     * Unique sequence number. Used to identify the current folio tax record.
     * @type {number}
     * @memberof FolioSummaryType
     */
    folioSeqNo?: number;
    /**
     * 
     * @type {FolioStatusType}
     * @memberof FolioSummaryType
     */
    folioStatus?: FolioStatusType;
    /**
     * The name of the Folio Type used for the Folio Number sequence.
     * @type {string}
     * @memberof FolioSummaryType
     */
    folioTypeName?: string;
    /**
     * 
     * @type {number}
     * @memberof FolioSummaryType
     */
    folioWindowNo?: number;
    /**
     * Fiscal folio flag to call fiscal Information folio web service.
     * @type {boolean}
     * @memberof FolioSummaryType
     */
    generateFiscalFolio?: boolean;
    /**
     * Flag to call fiscal web service for a supporting document.
     * @type {boolean}
     * @memberof FolioSummaryType
     */
    generateFiscalSupportingDoc?: boolean;
    /**
     * Internal window ID which is unique to the reservation. This ID can only be used for reference.
     * @type {string}
     * @memberof FolioSummaryType
     */
    internalFolioWindowID?: string;
    /**
     * Invoice No after the folio is generated. Same invoice number may be referred in multiple folios
     * @type {number}
     * @memberof FolioSummaryType
     */
    invoiceNo?: number;
    /**
     * Flag to indicate if an Official Receipt is generated for the folio window. Applicable only in the Philippines.
     * @type {boolean}
     * @memberof FolioSummaryType
     */
    officialBIRReceiptExists?: boolean;
    /**
     * Opera Fiscal Folio Status for the Folio.
     * @type {string}
     * @memberof FolioSummaryType
     */
    operaFiscalFolioStatus?: string;
    /**
     * Stores the fiscal folio status for the partner system.
     * @type {string}
     * @memberof FolioSummaryType
     */
    partnerFiscalFolioStatus?: string;
    /**
     * Indicates if the folio is a Passer By Folio.
     * @type {boolean}
     * @memberof FolioSummaryType
     */
    passerbyFolio?: boolean;
    /**
     * 
     * @type {PayeeInfoType}
     * @memberof FolioSummaryType
     */
    payeeInfo?: PayeeInfoType;
    /**
     * 
     * @type {SummaryPostingType}
     * @memberof FolioSummaryType
     */
    payment?: SummaryPostingType;
    /**
     * Bill Payment transaction Number.
     * @type {number}
     * @memberof FolioSummaryType
     */
    paymentTrxNo?: number;
    /**
     * Number for Post-It transactions.
     * @type {number}
     * @memberof FolioSummaryType
     */
    postItNo?: number;
    /**
     * Folio Queue name.
     * @type {string}
     * @memberof FolioSummaryType
     */
    queueName?: string;
    /**
     * 
     * @type {FolioSummaryTypeReservationInfo}
     * @memberof FolioSummaryType
     */
    reservationInfo?: FolioSummaryTypeReservationInfo;
    /**
     * Folio Revision number.
     * @type {number}
     * @memberof FolioSummaryType
     */
    revisionNo?: number;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof FolioSummaryType
     */
    start?: string;
    /**
     * 
     * @type {SupportingDocumentType}
     * @memberof FolioSummaryType
     */
    supportingDocument?: SupportingDocumentType;
    /**
     * Contains service type for transaction code.
     * @type {string}
     * @memberof FolioSummaryType
     */
    trxServiceType?: string;
}

/**
 * Check if a given object implements the FolioSummaryType interface.
 */
export function instanceOfFolioSummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioSummaryTypeFromJSON(json: any): FolioSummaryType {
    return FolioSummaryTypeFromJSONTyped(json, false);
}

export function FolioSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioSummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountCode': !exists(json, 'accountCode') ? undefined : json['accountCode'],
        'accountReceivablesFolio': !exists(json, 'accountReceivablesFolio') ? undefined : json['accountReceivablesFolio'],
        'addresseeInfo': !exists(json, 'addresseeInfo') ? undefined : ProfileInfoTypeFromJSON(json['addresseeInfo']),
        'allowConvertFolioYn': !exists(json, 'allowConvertFolioYn') ? undefined : json['allowConvertFolioYn'],
        'anonymizedFolio': !exists(json, 'anonymizedFolio') ? undefined : json['anonymizedFolio'],
        'associatedBills': !exists(json, 'associatedBills') ? undefined : json['associatedBills'],
        'creditFolio': !exists(json, 'creditFolio') ? undefined : json['creditFolio'],
        'customNumbers': !exists(json, 'customNumbers') ? undefined : json['customNumbers'],
        'debitFolio': !exists(json, 'debitFolio') ? undefined : json['debitFolio'],
        'end': !exists(json, 'end') ? undefined : json['end'],
        'fiscalBillNo': !exists(json, 'fiscalBillNo') ? undefined : json['fiscalBillNo'],
        'fiscalFolioNo': !exists(json, 'fiscalFolioNo') ? undefined : json['fiscalFolioNo'],
        'fiscalInvoicingCurrencyInfo': !exists(json, 'fiscalInvoicingCurrencyInfo') ? undefined : ExchangeRateInfoTypeFromJSON(json['fiscalInvoicingCurrencyInfo']),
        'fiscalTerminalId': !exists(json, 'fiscalTerminalId') ? undefined : json['fiscalTerminalId'],
        'folioAmount': !exists(json, 'folioAmount') ? undefined : CurrencyAmountTypeFromJSON(json['folioAmount']),
        'folioDate': !exists(json, 'folioDate') ? undefined : json['folioDate'],
        'folioNo': !exists(json, 'folioNo') ? undefined : json['folioNo'],
        'folioNoWithPrefix': !exists(json, 'folioNoWithPrefix') ? undefined : json['folioNoWithPrefix'],
        'folioSeqNo': !exists(json, 'folioSeqNo') ? undefined : json['folioSeqNo'],
        'folioStatus': !exists(json, 'folioStatus') ? undefined : FolioStatusTypeFromJSON(json['folioStatus']),
        'folioTypeName': !exists(json, 'folioTypeName') ? undefined : json['folioTypeName'],
        'folioWindowNo': !exists(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'generateFiscalFolio': !exists(json, 'generateFiscalFolio') ? undefined : json['generateFiscalFolio'],
        'generateFiscalSupportingDoc': !exists(json, 'generateFiscalSupportingDoc') ? undefined : json['generateFiscalSupportingDoc'],
        'internalFolioWindowID': !exists(json, 'internalFolioWindowID') ? undefined : json['internalFolioWindowID'],
        'invoiceNo': !exists(json, 'invoiceNo') ? undefined : json['invoiceNo'],
        'officialBIRReceiptExists': !exists(json, 'officialBIRReceiptExists') ? undefined : json['officialBIRReceiptExists'],
        'operaFiscalFolioStatus': !exists(json, 'operaFiscalFolioStatus') ? undefined : json['operaFiscalFolioStatus'],
        'partnerFiscalFolioStatus': !exists(json, 'partnerFiscalFolioStatus') ? undefined : json['partnerFiscalFolioStatus'],
        'passerbyFolio': !exists(json, 'passerbyFolio') ? undefined : json['passerbyFolio'],
        'payeeInfo': !exists(json, 'payeeInfo') ? undefined : PayeeInfoTypeFromJSON(json['payeeInfo']),
        'payment': !exists(json, 'payment') ? undefined : SummaryPostingTypeFromJSON(json['payment']),
        'paymentTrxNo': !exists(json, 'paymentTrxNo') ? undefined : json['paymentTrxNo'],
        'postItNo': !exists(json, 'postItNo') ? undefined : json['postItNo'],
        'queueName': !exists(json, 'queueName') ? undefined : json['queueName'],
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : FolioSummaryTypeReservationInfoFromJSON(json['reservationInfo']),
        'revisionNo': !exists(json, 'revisionNo') ? undefined : json['revisionNo'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'supportingDocument': !exists(json, 'supportingDocument') ? undefined : SupportingDocumentTypeFromJSON(json['supportingDocument']),
        'trxServiceType': !exists(json, 'trxServiceType') ? undefined : json['trxServiceType'],
    };
}

export function FolioSummaryTypeToJSON(value?: FolioSummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountCode': value.accountCode,
        'accountReceivablesFolio': value.accountReceivablesFolio,
        'addresseeInfo': ProfileInfoTypeToJSON(value.addresseeInfo),
        'allowConvertFolioYn': value.allowConvertFolioYn,
        'anonymizedFolio': value.anonymizedFolio,
        'associatedBills': value.associatedBills,
        'creditFolio': value.creditFolio,
        'customNumbers': value.customNumbers,
        'debitFolio': value.debitFolio,
        'end': value.end,
        'fiscalBillNo': value.fiscalBillNo,
        'fiscalFolioNo': value.fiscalFolioNo,
        'fiscalInvoicingCurrencyInfo': ExchangeRateInfoTypeToJSON(value.fiscalInvoicingCurrencyInfo),
        'fiscalTerminalId': value.fiscalTerminalId,
        'folioAmount': CurrencyAmountTypeToJSON(value.folioAmount),
        'folioDate': value.folioDate,
        'folioNo': value.folioNo,
        'folioNoWithPrefix': value.folioNoWithPrefix,
        'folioSeqNo': value.folioSeqNo,
        'folioStatus': FolioStatusTypeToJSON(value.folioStatus),
        'folioTypeName': value.folioTypeName,
        'folioWindowNo': value.folioWindowNo,
        'generateFiscalFolio': value.generateFiscalFolio,
        'generateFiscalSupportingDoc': value.generateFiscalSupportingDoc,
        'internalFolioWindowID': value.internalFolioWindowID,
        'invoiceNo': value.invoiceNo,
        'officialBIRReceiptExists': value.officialBIRReceiptExists,
        'operaFiscalFolioStatus': value.operaFiscalFolioStatus,
        'partnerFiscalFolioStatus': value.partnerFiscalFolioStatus,
        'passerbyFolio': value.passerbyFolio,
        'payeeInfo': PayeeInfoTypeToJSON(value.payeeInfo),
        'payment': SummaryPostingTypeToJSON(value.payment),
        'paymentTrxNo': value.paymentTrxNo,
        'postItNo': value.postItNo,
        'queueName': value.queueName,
        'reservationInfo': FolioSummaryTypeReservationInfoToJSON(value.reservationInfo),
        'revisionNo': value.revisionNo,
        'start': value.start,
        'supportingDocument': SupportingDocumentTypeToJSON(value.supportingDocument),
        'trxServiceType': value.trxServiceType,
    };
}

