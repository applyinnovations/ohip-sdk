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
import type { AssociatedBillInfoType } from './AssociatedBillInfoType';
import type { FiscalServiceType } from './FiscalServiceType';
import type { FolioStatusType } from './FolioStatusType';
import type { ReservationId } from './ReservationId';
/**
 * Criteria for Voiding a Folio.
 * @export
 * @interface VoidFolioCriteriaType
 */
export interface VoidFolioCriteriaType {
    /**
     *
     * @type {AssociatedBillInfoType}
     * @memberof VoidFolioCriteriaType
     */
    associatedBillInfo?: AssociatedBillInfoType;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof VoidFolioCriteriaType
     */
    cashierId?: number;
    /**
     * The Fiscal Bill number of this posting
     * @type {string}
     * @memberof VoidFolioCriteriaType
     */
    fiscalBillNo?: string;
    /**
     * Folio Queue name to generate a credit bill for fiscal service.
     * @type {string}
     * @memberof VoidFolioCriteriaType
     */
    fiscalCreditBillQueueName?: string;
    /**
     *
     * @type {FiscalServiceType}
     * @memberof VoidFolioCriteriaType
     */
    fiscalFolioInfo?: FiscalServiceType;
    /**
     * Date of Folio Generation.
     * @type {Date}
     * @memberof VoidFolioCriteriaType
     */
    folioDate?: Date;
    /**
     * Folio Number.
     * @type {number}
     * @memberof VoidFolioCriteriaType
     */
    folioNo?: number;
    /**
     * The folio number with prefix value.
     * @type {string}
     * @memberof VoidFolioCriteriaType
     */
    folioNoWithPrefix?: string;
    /**
     * Unique sequence number. Used to identify the current folio tax record.
     * @type {number}
     * @memberof VoidFolioCriteriaType
     */
    folioSeqNo?: number;
    /**
     *
     * @type {FolioStatusType}
     * @memberof VoidFolioCriteriaType
     */
    folioStatus?: FolioStatusType;
    /**
     * The name of the Folio Type used for the Folio Number sequence.
     * @type {string}
     * @memberof VoidFolioCriteriaType
     */
    folioTypeName?: string;
    /**
     * Property where the Folio exists which has to be voided.
     * @type {string}
     * @memberof VoidFolioCriteriaType
     */
    hotelId?: string;
    /**
     * Internal window ID which is unique to the reservation. This ID can only be used for reference.
     * @type {string}
     * @memberof VoidFolioCriteriaType
     */
    internalFolioWindowID?: string;
    /**
     * Invoice No after the folio is generated. Same invoice number may be referred in multiple folios
     * @type {number}
     * @memberof VoidFolioCriteriaType
     */
    invoiceNo?: number;
    /**
     *
     * @type {ReservationId}
     * @memberof VoidFolioCriteriaType
     */
    reservationId?: ReservationId;
}
/**
 * Check if a given object implements the VoidFolioCriteriaType interface.
 */
export declare function instanceOfVoidFolioCriteriaType(value: object): boolean;
export declare function VoidFolioCriteriaTypeFromJSON(json: any): VoidFolioCriteriaType;
export declare function VoidFolioCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VoidFolioCriteriaType;
export declare function VoidFolioCriteriaTypeToJSON(value?: VoidFolioCriteriaType | null): any;