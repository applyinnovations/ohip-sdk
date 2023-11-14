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
import type { FolioStatusType } from './FolioStatusType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Information about comp folio that was auto settled.
 * @export
 * @interface AutoSettleCompFolioType
 */
export interface AutoSettleCompFolioType {
    /**
     * The Fiscal Bill number of this posting
     * @type {string}
     * @memberof AutoSettleCompFolioType
     */
    fiscalBillNo?: string;
    /**
     * Date of Folio Generation.
     * @type {Date}
     * @memberof AutoSettleCompFolioType
     */
    folioDate?: Date;
    /**
     * Folio Number.
     * @type {number}
     * @memberof AutoSettleCompFolioType
     */
    folioNo?: number;
    /**
     * The folio number with prefix value.
     * @type {string}
     * @memberof AutoSettleCompFolioType
     */
    folioNoWithPrefix?: string;
    /**
     * Unique sequence number. Used to identify the current folio tax record.
     * @type {number}
     * @memberof AutoSettleCompFolioType
     */
    folioSeqNo?: number;
    /**
     *
     * @type {FolioStatusType}
     * @memberof AutoSettleCompFolioType
     */
    folioStatus?: FolioStatusType;
    /**
     * The name of the Folio Type used for the Folio Number sequence.
     * @type {string}
     * @memberof AutoSettleCompFolioType
     */
    folioTypeName?: string;
    /**
     * Comp folio window that was attempted to be auto settled.
     * @type {number}
     * @memberof AutoSettleCompFolioType
     */
    folioView?: number;
    /**
     * Internal window ID which is unique to the reservation. This ID can only be used for reference.
     * @type {string}
     * @memberof AutoSettleCompFolioType
     */
    internalFolioWindowID?: string;
    /**
     * Invoice No after the folio is generated. Same invoice number may be referred in multiple folios
     * @type {number}
     * @memberof AutoSettleCompFolioType
     */
    invoiceNo?: number;
    /**
     *
     * @type {UniqueIDType}
     * @memberof AutoSettleCompFolioType
     */
    payeeId?: UniqueIDType;
    /**
     * Name of the payee.
     * @type {string}
     * @memberof AutoSettleCompFolioType
     */
    payeeName?: string;
}
/**
 * Check if a given object implements the AutoSettleCompFolioType interface.
 */
export declare function instanceOfAutoSettleCompFolioType(value: object): boolean;
export declare function AutoSettleCompFolioTypeFromJSON(json: any): AutoSettleCompFolioType;
export declare function AutoSettleCompFolioTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoSettleCompFolioType;
export declare function AutoSettleCompFolioTypeToJSON(value?: AutoSettleCompFolioType | null): any;