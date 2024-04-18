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
import type { ARInvoiceCategory } from './ARInvoiceCategory';
import {
    ARInvoiceCategoryFromJSON,
    ARInvoiceCategoryFromJSONTyped,
    ARInvoiceCategoryToJSON,
} from './ARInvoiceCategory';
import type { CashierInfoType } from './CashierInfoType';
import {
    CashierInfoTypeFromJSON,
    CashierInfoTypeFromJSONTyped,
    CashierInfoTypeToJSON,
} from './CashierInfoType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { FiscalResponseType } from './FiscalResponseType';
import {
    FiscalResponseTypeFromJSON,
    FiscalResponseTypeFromJSONTyped,
    FiscalResponseTypeToJSON,
} from './FiscalResponseType';
import type { FolioStatusType } from './FolioStatusType';
import {
    FolioStatusTypeFromJSON,
    FolioStatusTypeFromJSONTyped,
    FolioStatusTypeToJSON,
} from './FolioStatusType';
import type { FolioTextsTypeInner } from './FolioTextsTypeInner';
import {
    FolioTextsTypeInnerFromJSON,
    FolioTextsTypeInnerFromJSONTyped,
    FolioTextsTypeInnerToJSON,
} from './FolioTextsTypeInner';
import type { MarketCodeInfoType } from './MarketCodeInfoType';
import {
    MarketCodeInfoTypeFromJSON,
    MarketCodeInfoTypeFromJSONTyped,
    MarketCodeInfoTypeToJSON,
} from './MarketCodeInfoType';
import type { ProfileInfoType } from './ProfileInfoType';
import {
    ProfileInfoTypeFromJSON,
    ProfileInfoTypeFromJSONTyped,
    ProfileInfoTypeToJSON,
} from './ProfileInfoType';
import type { ResPaymentCardType } from './ResPaymentCardType';
import {
    ResPaymentCardTypeFromJSON,
    ResPaymentCardTypeFromJSONTyped,
    ResPaymentCardTypeToJSON,
} from './ResPaymentCardType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { ReservationInfoType } from './ReservationInfoType';
import {
    ReservationInfoTypeFromJSON,
    ReservationInfoTypeFromJSONTyped,
    ReservationInfoTypeToJSON,
} from './ReservationInfoType';
import type { RoomClassCodeInfoType } from './RoomClassCodeInfoType';
import {
    RoomClassCodeInfoTypeFromJSON,
    RoomClassCodeInfoTypeFromJSONTyped,
    RoomClassCodeInfoTypeToJSON,
} from './RoomClassCodeInfoType';
import type { SourceCodeInfoType } from './SourceCodeInfoType';
import {
    SourceCodeInfoTypeFromJSON,
    SourceCodeInfoTypeFromJSONTyped,
    SourceCodeInfoTypeToJSON,
} from './SourceCodeInfoType';
import type { TrxInfoType } from './TrxInfoType';
import {
    TrxInfoTypeFromJSON,
    TrxInfoTypeFromJSONTyped,
    TrxInfoTypeToJSON,
} from './TrxInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Details of an AR Invoice.
 * @export
 * @interface AccountInvoiceInfoType
 */
export interface AccountInvoiceInfoType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof AccountInvoiceInfoType
     */
    accountId?: UniqueIDType;
    /**
     * Name of the AR Account.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    accountName?: string;
    /**
     * The Account Number for the Account.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    accountNo?: string;
    /**
     * 
     * @type {ProfileInfoType}
     * @memberof AccountInvoiceInfoType
     */
    addresseeInfo?: ProfileInfoType;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInvoiceInfoType
     */
    adjusted?: boolean;
    /**
     * The Aging age of the invoice
     * @type {number}
     * @memberof AccountInvoiceInfoType
     */
    age?: number;
    /**
     * Flag to check Partail Transfer Allowed.
     * @type {boolean}
     * @memberof AccountInvoiceInfoType
     */
    allowPartialTransferYn?: boolean;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof AccountInvoiceInfoType
     */
    amount?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof AccountInvoiceInfoType
     */
    balance?: CurrencyAmountType;
    /**
     * Flag to indicate if postings or adjustments can be made to the invoice.
     * @type {boolean}
     * @memberof AccountInvoiceInfoType
     */
    canBeModified?: boolean;
    /**
     * 
     * @type {CashierInfoType}
     * @memberof AccountInvoiceInfoType
     */
    cashierInfo?: CashierInfoType;
    /**
     * Close date of the invoice.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    closeDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInvoiceInfoType
     */
    compressed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    compressedDate?: string;
    /**
     * Unique Custom Numbers associated with this record.
     * @type {Array<string>}
     * @memberof AccountInvoiceInfoType
     */
    customNumbers?: Array<string>;
    /**
     * The Fiscal Bill number of this posting
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    fiscalBillNo?: string;
    /**
     * 
     * @type {FiscalResponseType}
     * @memberof AccountInvoiceInfoType
     */
    fiscalResponseType?: FiscalResponseType;
    /**
     * Date of Folio Generation.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    folioDate?: string;
    /**
     * Folio Number.
     * @type {number}
     * @memberof AccountInvoiceInfoType
     */
    folioNo?: number;
    /**
     * The folio number with prefix value.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    folioNoWithPrefix?: string;
    /**
     * 
     * @type {FolioStatusType}
     * @memberof AccountInvoiceInfoType
     */
    folioStatus?: FolioStatusType;
    /**
     * This stores the description for the type of tax calculation especially with tax exemption, etc.
     * @type {Array<FolioTextsTypeInner>}
     * @memberof AccountInvoiceInfoType
     */
    folioTexts?: Array<FolioTextsTypeInner>;
    /**
     * The name of the Folio Type used for the Folio Number sequence.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    folioTypeName?: string;
    /**
     * Name of the Guest who consumed these transactions.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    guestName?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof AccountInvoiceInfoType
     */
    guestProfileId?: UniqueIDType;
    /**
     * Property where the invoice exists.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    hotelId?: string;
    /**
     * Internal window ID which is unique to the reservation. This ID can only be used for reference.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    internalFolioWindowID?: string;
    /**
     * Invoice No after the folio is generated. Same invoice number may be referred in multiple folios
     * @type {number}
     * @memberof AccountInvoiceInfoType
     */
    invoiceNo?: number;
    /**
     * 
     * @type {ARInvoiceCategory}
     * @memberof AccountInvoiceInfoType
     */
    invoiceType?: ARInvoiceCategory;
    /**
     * 
     * @type {MarketCodeInfoType}
     * @memberof AccountInvoiceInfoType
     */
    market?: MarketCodeInfoType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof AccountInvoiceInfoType
     */
    originalAmount?: CurrencyAmountType;
    /**
     * 
     * @type {number}
     * @memberof AccountInvoiceInfoType
     */
    parentInvoiceNo?: number;
    /**
     * 
     * @type {ResPaymentCardType}
     * @memberof AccountInvoiceInfoType
     */
    paymentCard?: ResPaymentCardType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof AccountInvoiceInfoType
     */
    payments?: CurrencyAmountType;
    /**
     * Posting date of the invoice.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    postingDate?: string;
    /**
     * Flag to check Invoice Statement is Printed.
     * @type {boolean}
     * @memberof AccountInvoiceInfoType
     */
    printed?: boolean;
    /**
     * Invoice Statement Printed Date.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    printedDate?: string;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    reference?: string;
    /**
     * User-defined posting remark.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    remark?: string;
    /**
     * 
     * @type {ReservationId}
     * @memberof AccountInvoiceInfoType
     */
    reservationId?: ReservationId;
    /**
     * 
     * @type {ReservationInfoType}
     * @memberof AccountInvoiceInfoType
     */
    reservationInfo?: ReservationInfoType;
    /**
     * Revenue date ID of the invoice.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    revenueDate?: string;
    /**
     * 
     * @type {RoomClassCodeInfoType}
     * @memberof AccountInvoiceInfoType
     */
    roomClass?: RoomClassCodeInfoType;
    /**
     * 
     * @type {SourceCodeInfoType}
     * @memberof AccountInvoiceInfoType
     */
    source?: SourceCodeInfoType;
    /**
     * Statementno of the invoice.
     * @type {number}
     * @memberof AccountInvoiceInfoType
     */
    statementNo?: number;
    /**
     * Status of the invoice.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    status?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof AccountInvoiceInfoType
     */
    storedDebitFolioId?: UniqueIDType;
    /**
     * Name of the Stored Debit Folio.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    storedDebitFolioName?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof AccountInvoiceInfoType
     */
    storedFolioId?: UniqueIDType;
    /**
     * Name of the Stored Folio.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    storedFolioName?: string;
    /**
     * Transaction code of the invoice.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    transactionCode?: string;
    /**
     * Transaction Date of the invoice.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    transactionDate?: string;
    /**
     * 
     * @type {TrxInfoType}
     * @memberof AccountInvoiceInfoType
     */
    transactionInfo?: TrxInfoType;
    /**
     * Unique Transaction Identifier of the Invoice.
     * @type {number}
     * @memberof AccountInvoiceInfoType
     */
    transactionNo?: number;
    /**
     * Transfer date of the invoice.
     * @type {string}
     * @memberof AccountInvoiceInfoType
     */
    transferDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInvoiceInfoType
     */
    transferredIn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountInvoiceInfoType
     */
    transferredOut?: boolean;
}

/**
 * Check if a given object implements the AccountInvoiceInfoType interface.
 */
export function instanceOfAccountInvoiceInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountInvoiceInfoTypeFromJSON(json: any): AccountInvoiceInfoType {
    return AccountInvoiceInfoTypeFromJSONTyped(json, false);
}

export function AccountInvoiceInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountInvoiceInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'accountId') ? undefined : UniqueIDTypeFromJSON(json['accountId']),
        'accountName': !exists(json, 'accountName') ? undefined : json['accountName'],
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'addresseeInfo': !exists(json, 'addresseeInfo') ? undefined : ProfileInfoTypeFromJSON(json['addresseeInfo']),
        'adjusted': !exists(json, 'adjusted') ? undefined : json['adjusted'],
        'age': !exists(json, 'age') ? undefined : json['age'],
        'allowPartialTransferYn': !exists(json, 'allowPartialTransferYn') ? undefined : json['allowPartialTransferYn'],
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'canBeModified': !exists(json, 'canBeModified') ? undefined : json['canBeModified'],
        'cashierInfo': !exists(json, 'cashierInfo') ? undefined : CashierInfoTypeFromJSON(json['cashierInfo']),
        'closeDate': !exists(json, 'closeDate') ? undefined : json['closeDate'],
        'compressed': !exists(json, 'compressed') ? undefined : json['compressed'],
        'compressedDate': !exists(json, 'compressedDate') ? undefined : json['compressedDate'],
        'customNumbers': !exists(json, 'customNumbers') ? undefined : json['customNumbers'],
        'fiscalBillNo': !exists(json, 'fiscalBillNo') ? undefined : json['fiscalBillNo'],
        'fiscalResponseType': !exists(json, 'fiscalResponseType') ? undefined : FiscalResponseTypeFromJSON(json['fiscalResponseType']),
        'folioDate': !exists(json, 'folioDate') ? undefined : json['folioDate'],
        'folioNo': !exists(json, 'folioNo') ? undefined : json['folioNo'],
        'folioNoWithPrefix': !exists(json, 'folioNoWithPrefix') ? undefined : json['folioNoWithPrefix'],
        'folioStatus': !exists(json, 'folioStatus') ? undefined : FolioStatusTypeFromJSON(json['folioStatus']),
        'folioTexts': !exists(json, 'folioTexts') ? undefined : ((json['folioTexts'] as Array<any>).map(FolioTextsTypeInnerFromJSON)),
        'folioTypeName': !exists(json, 'folioTypeName') ? undefined : json['folioTypeName'],
        'guestName': !exists(json, 'guestName') ? undefined : json['guestName'],
        'guestProfileId': !exists(json, 'guestProfileId') ? undefined : UniqueIDTypeFromJSON(json['guestProfileId']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'internalFolioWindowID': !exists(json, 'internalFolioWindowID') ? undefined : json['internalFolioWindowID'],
        'invoiceNo': !exists(json, 'invoiceNo') ? undefined : json['invoiceNo'],
        'invoiceType': !exists(json, 'invoiceType') ? undefined : ARInvoiceCategoryFromJSON(json['invoiceType']),
        'market': !exists(json, 'market') ? undefined : MarketCodeInfoTypeFromJSON(json['market']),
        'originalAmount': !exists(json, 'originalAmount') ? undefined : CurrencyAmountTypeFromJSON(json['originalAmount']),
        'parentInvoiceNo': !exists(json, 'parentInvoiceNo') ? undefined : json['parentInvoiceNo'],
        'paymentCard': !exists(json, 'paymentCard') ? undefined : ResPaymentCardTypeFromJSON(json['paymentCard']),
        'payments': !exists(json, 'payments') ? undefined : CurrencyAmountTypeFromJSON(json['payments']),
        'postingDate': !exists(json, 'postingDate') ? undefined : json['postingDate'],
        'printed': !exists(json, 'printed') ? undefined : json['printed'],
        'printedDate': !exists(json, 'printedDate') ? undefined : json['printedDate'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : ReservationInfoTypeFromJSON(json['reservationInfo']),
        'revenueDate': !exists(json, 'revenueDate') ? undefined : json['revenueDate'],
        'roomClass': !exists(json, 'roomClass') ? undefined : RoomClassCodeInfoTypeFromJSON(json['roomClass']),
        'source': !exists(json, 'source') ? undefined : SourceCodeInfoTypeFromJSON(json['source']),
        'statementNo': !exists(json, 'statementNo') ? undefined : json['statementNo'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'storedDebitFolioId': !exists(json, 'storedDebitFolioId') ? undefined : UniqueIDTypeFromJSON(json['storedDebitFolioId']),
        'storedDebitFolioName': !exists(json, 'storedDebitFolioName') ? undefined : json['storedDebitFolioName'],
        'storedFolioId': !exists(json, 'storedFolioId') ? undefined : UniqueIDTypeFromJSON(json['storedFolioId']),
        'storedFolioName': !exists(json, 'storedFolioName') ? undefined : json['storedFolioName'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionDate': !exists(json, 'transactionDate') ? undefined : json['transactionDate'],
        'transactionInfo': !exists(json, 'transactionInfo') ? undefined : TrxInfoTypeFromJSON(json['transactionInfo']),
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
        'transferDate': !exists(json, 'transferDate') ? undefined : json['transferDate'],
        'transferredIn': !exists(json, 'transferredIn') ? undefined : json['transferredIn'],
        'transferredOut': !exists(json, 'transferredOut') ? undefined : json['transferredOut'],
    };
}

export function AccountInvoiceInfoTypeToJSON(value?: AccountInvoiceInfoType | null): any {
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
        'addresseeInfo': ProfileInfoTypeToJSON(value.addresseeInfo),
        'adjusted': value.adjusted,
        'age': value.age,
        'allowPartialTransferYn': value.allowPartialTransferYn,
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'canBeModified': value.canBeModified,
        'cashierInfo': CashierInfoTypeToJSON(value.cashierInfo),
        'closeDate': value.closeDate,
        'compressed': value.compressed,
        'compressedDate': value.compressedDate,
        'customNumbers': value.customNumbers,
        'fiscalBillNo': value.fiscalBillNo,
        'fiscalResponseType': FiscalResponseTypeToJSON(value.fiscalResponseType),
        'folioDate': value.folioDate,
        'folioNo': value.folioNo,
        'folioNoWithPrefix': value.folioNoWithPrefix,
        'folioStatus': FolioStatusTypeToJSON(value.folioStatus),
        'folioTexts': value.folioTexts === undefined ? undefined : ((value.folioTexts as Array<any>).map(FolioTextsTypeInnerToJSON)),
        'folioTypeName': value.folioTypeName,
        'guestName': value.guestName,
        'guestProfileId': UniqueIDTypeToJSON(value.guestProfileId),
        'hotelId': value.hotelId,
        'internalFolioWindowID': value.internalFolioWindowID,
        'invoiceNo': value.invoiceNo,
        'invoiceType': ARInvoiceCategoryToJSON(value.invoiceType),
        'market': MarketCodeInfoTypeToJSON(value.market),
        'originalAmount': CurrencyAmountTypeToJSON(value.originalAmount),
        'parentInvoiceNo': value.parentInvoiceNo,
        'paymentCard': ResPaymentCardTypeToJSON(value.paymentCard),
        'payments': CurrencyAmountTypeToJSON(value.payments),
        'postingDate': value.postingDate,
        'printed': value.printed,
        'printedDate': value.printedDate,
        'reference': value.reference,
        'remark': value.remark,
        'reservationId': ReservationIdToJSON(value.reservationId),
        'reservationInfo': ReservationInfoTypeToJSON(value.reservationInfo),
        'revenueDate': value.revenueDate,
        'roomClass': RoomClassCodeInfoTypeToJSON(value.roomClass),
        'source': SourceCodeInfoTypeToJSON(value.source),
        'statementNo': value.statementNo,
        'status': value.status,
        'storedDebitFolioId': UniqueIDTypeToJSON(value.storedDebitFolioId),
        'storedDebitFolioName': value.storedDebitFolioName,
        'storedFolioId': UniqueIDTypeToJSON(value.storedFolioId),
        'storedFolioName': value.storedFolioName,
        'transactionCode': value.transactionCode,
        'transactionDate': value.transactionDate,
        'transactionInfo': TrxInfoTypeToJSON(value.transactionInfo),
        'transactionNo': value.transactionNo,
        'transferDate': value.transferDate,
        'transferredIn': value.transferredIn,
        'transferredOut': value.transferredOut,
    };
}
