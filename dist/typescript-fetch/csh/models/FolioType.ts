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
import type { FolioStatusType } from './FolioStatusType';
import {
    FolioStatusTypeFromJSON,
    FolioStatusTypeFromJSONTyped,
    FolioStatusTypeToJSON,
} from './FolioStatusType';
import type { PayeeInfoType } from './PayeeInfoType';
import {
    PayeeInfoTypeFromJSON,
    PayeeInfoTypeFromJSONTyped,
    PayeeInfoTypeToJSON,
} from './PayeeInfoType';
import type { SummaryPostingType } from './SummaryPostingType';
import {
    SummaryPostingTypeFromJSON,
    SummaryPostingTypeFromJSONTyped,
    SummaryPostingTypeToJSON,
} from './SummaryPostingType';

/**
 * Represents a single page in a reservation's ledger which will contain transactions and payee information.
 * @export
 * @interface FolioType
 */
export interface FolioType {
    /**
     * Flag to check Folio Conversion Allowed.
     * @type {boolean}
     * @memberof FolioType
     */
    allowConvertFolioYn?: boolean;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof FolioType
     */
    end?: Date;
    /**
     * The Fiscal Bill number of this posting
     * @type {string}
     * @memberof FolioType
     */
    fiscalBillNo?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof FolioType
     */
    folioAmount?: CurrencyAmountType;
    /**
     * Date of Folio Generation.
     * @type {Date}
     * @memberof FolioType
     */
    folioDate?: Date;
    /**
     * Folio Number.
     * @type {number}
     * @memberof FolioType
     */
    folioNo?: number;
    /**
     * The folio number with prefix value.
     * @type {string}
     * @memberof FolioType
     */
    folioNoWithPrefix?: string;
    /**
     * Unique sequence number. Used to identify the current folio tax record.
     * @type {number}
     * @memberof FolioType
     */
    folioSeqNo?: number;
    /**
     * 
     * @type {FolioStatusType}
     * @memberof FolioType
     */
    folioStatus?: FolioStatusType;
    /**
     * The name of the Folio Type used for the Folio Number sequence.
     * @type {string}
     * @memberof FolioType
     */
    folioTypeName?: string;
    /**
     * Internal window ID which is unique to the reservation. This ID can only be used for reference.
     * @type {string}
     * @memberof FolioType
     */
    internalFolioWindowID?: string;
    /**
     * Invoice No after the folio is generated. Same invoice number may be referred in multiple folios
     * @type {number}
     * @memberof FolioType
     */
    invoiceNo?: number;
    /**
     * 
     * @type {PayeeInfoType}
     * @memberof FolioType
     */
    payeeInfo?: PayeeInfoType;
    /**
     * List of postings.
     * @type {Array<SummaryPostingType>}
     * @memberof FolioType
     */
    postings?: Array<SummaryPostingType>;
    /**
     * Folio Revison number.
     * @type {number}
     * @memberof FolioType
     */
    revisionNo?: number;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof FolioType
     */
    start?: Date;
}

/**
 * Check if a given object implements the FolioType interface.
 */
export function instanceOfFolioType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioTypeFromJSON(json: any): FolioType {
    return FolioTypeFromJSONTyped(json, false);
}

export function FolioTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowConvertFolioYn': !exists(json, 'allowConvertFolioYn') ? undefined : json['allowConvertFolioYn'],
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'fiscalBillNo': !exists(json, 'fiscalBillNo') ? undefined : json['fiscalBillNo'],
        'folioAmount': !exists(json, 'folioAmount') ? undefined : CurrencyAmountTypeFromJSON(json['folioAmount']),
        'folioDate': !exists(json, 'folioDate') ? undefined : (new Date(json['folioDate'])),
        'folioNo': !exists(json, 'folioNo') ? undefined : json['folioNo'],
        'folioNoWithPrefix': !exists(json, 'folioNoWithPrefix') ? undefined : json['folioNoWithPrefix'],
        'folioSeqNo': !exists(json, 'folioSeqNo') ? undefined : json['folioSeqNo'],
        'folioStatus': !exists(json, 'folioStatus') ? undefined : FolioStatusTypeFromJSON(json['folioStatus']),
        'folioTypeName': !exists(json, 'folioTypeName') ? undefined : json['folioTypeName'],
        'internalFolioWindowID': !exists(json, 'internalFolioWindowID') ? undefined : json['internalFolioWindowID'],
        'invoiceNo': !exists(json, 'invoiceNo') ? undefined : json['invoiceNo'],
        'payeeInfo': !exists(json, 'payeeInfo') ? undefined : PayeeInfoTypeFromJSON(json['payeeInfo']),
        'postings': !exists(json, 'postings') ? undefined : ((json['postings'] as Array<any>).map(SummaryPostingTypeFromJSON)),
        'revisionNo': !exists(json, 'revisionNo') ? undefined : json['revisionNo'],
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
    };
}

export function FolioTypeToJSON(value?: FolioType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowConvertFolioYn': value.allowConvertFolioYn,
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0,10)),
        'fiscalBillNo': value.fiscalBillNo,
        'folioAmount': CurrencyAmountTypeToJSON(value.folioAmount),
        'folioDate': value.folioDate === undefined ? undefined : (value.folioDate.toISOString().substr(0,10)),
        'folioNo': value.folioNo,
        'folioNoWithPrefix': value.folioNoWithPrefix,
        'folioSeqNo': value.folioSeqNo,
        'folioStatus': FolioStatusTypeToJSON(value.folioStatus),
        'folioTypeName': value.folioTypeName,
        'internalFolioWindowID': value.internalFolioWindowID,
        'invoiceNo': value.invoiceNo,
        'payeeInfo': PayeeInfoTypeToJSON(value.payeeInfo),
        'postings': value.postings === undefined ? undefined : ((value.postings as Array<any>).map(SummaryPostingTypeToJSON)),
        'revisionNo': value.revisionNo,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0,10)),
    };
}

