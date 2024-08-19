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
import type { AutoFolioSettlementCriteriaType } from './AutoFolioSettlementCriteriaType';
import type { CashieringEventType } from './CashieringEventType';
import type { PaymentMethodSearchType } from './PaymentMethodSearchType';
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface AutoSettlementType
 */
export interface AutoSettlementType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof AutoSettlementType
     */
    cashierId?: number;
    /**
     *
     * @type {CashieringEventType}
     * @memberof AutoSettlementType
     */
    eventType?: CashieringEventType;
    /**
     * Folio windows to do auto auto settlement.
     * @type {Array<string>}
     * @memberof AutoSettlementType
     */
    folioWindowsToSettle?: Array<string>;
    /**
     * Folio windows to transfer.
     * @type {Array<string>}
     * @memberof AutoSettlementType
     */
    folioWindowsToTransfer?: Array<string>;
    /**
     * Property code.
     * @type {string}
     * @memberof AutoSettlementType
     */
    hotelId?: string;
    /**
     * Dictates whether to include negative postings for auto settlement.
     * @type {boolean}
     * @memberof AutoSettlementType
     */
    includeCreditCardBalance?: boolean;
    /**
     * Indicates the minimum window balance to do auto settlement.
     * @type {number}
     * @memberof AutoSettlementType
     */
    minimumWindowBalance?: number;
    /**
     * Defines the payment method to search reservations.
     * @type {Array<PaymentMethodSearchType>}
     * @memberof AutoSettlementType
     */
    paymentMethods?: Array<PaymentMethodSearchType>;
    /**
     *
     * @type {AutoFolioSettlementCriteriaType}
     * @memberof AutoSettlementType
     */
    reservationCriteria?: AutoFolioSettlementCriteriaType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof AutoSettlementType
     */
    reservationIdList?: Array<UniqueIDType>;
}
/**
 * Check if a given object implements the AutoSettlementType interface.
 */
export declare function instanceOfAutoSettlementType(value: object): boolean;
export declare function AutoSettlementTypeFromJSON(json: any): AutoSettlementType;
export declare function AutoSettlementTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoSettlementType;
export declare function AutoSettlementTypeToJSON(value?: AutoSettlementType | null): any;
