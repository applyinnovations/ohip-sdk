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
import type { AdjustmentDetailsType } from './AdjustmentDetailsType';
import type { CustomChargeExemptionType } from './CustomChargeExemptionType';
import type { ReservationId } from './ReservationId';
/**
 *
 * @export
 * @interface TrxAdjustCriteriaType
 */
export interface TrxAdjustCriteriaType {
    /**
     * The AR Account Number for the Account.
     * @type {string}
     * @memberof TrxAdjustCriteriaType
     */
    aRAccountNo?: string;
    /**
     * The AR Invoice Number for the Account.
     * @type {number}
     * @memberof TrxAdjustCriteriaType
     */
    aRInvoiceNo?: number;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof TrxAdjustCriteriaType
     */
    cashierId?: number;
    /**
     * List of Custom Charge Exemptions.
     * @type {Array<CustomChargeExemptionType>}
     * @memberof TrxAdjustCriteriaType
     */
    customChargeExemptionDetails?: Array<CustomChargeExemptionType>;
    /**
     *
     * @type {AdjustmentDetailsType}
     * @memberof TrxAdjustCriteriaType
     */
    details?: AdjustmentDetailsType;
    /**
     * Property code where the reservation transaction exists.
     * @type {string}
     * @memberof TrxAdjustCriteriaType
     */
    hotelId?: string;
    /**
     * Date of the Audit. This is used when postings are being created using the Income Audit functionality.
     * @type {string}
     * @memberof TrxAdjustCriteriaType
     */
    incomeAuditDate?: string;
    /**
     *
     * @type {ReservationId}
     * @memberof TrxAdjustCriteriaType
     */
    reservationId?: ReservationId;
    /**
     * The unique transaction number of this transaction.
     * @type {Array<number>}
     * @memberof TrxAdjustCriteriaType
     */
    transactionList?: Array<number>;
}
/**
 * Check if a given object implements the TrxAdjustCriteriaType interface.
 */
export declare function instanceOfTrxAdjustCriteriaType(value: object): boolean;
export declare function TrxAdjustCriteriaTypeFromJSON(json: any): TrxAdjustCriteriaType;
export declare function TrxAdjustCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrxAdjustCriteriaType;
export declare function TrxAdjustCriteriaTypeToJSON(value?: TrxAdjustCriteriaType | null): any;
