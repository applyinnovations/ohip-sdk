/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BedTaxReportingType } from './BedTaxReportingType';
import type { BillingPrivilegesType } from './BillingPrivilegesType';
import type { FolioTextsTypeInner } from './FolioTextsTypeInner';
import type { ResCompAccountingType } from './ResCompAccountingType';
import type { ResPeriodicFolioType } from './ResPeriodicFolioType';
import type { ResPreConfiguredRoutingInstrType } from './ResPreConfiguredRoutingInstrType';
import type { ResRevenueBalanceType } from './ResRevenueBalanceType';
import type { ReservationTaxTypeInfo } from './ReservationTaxTypeInfo';
/**
 * Cashiering Information for the reservation.
 * @export
 * @interface ResCashieringType
 */
export interface ResCashieringType {
    /**
     *
     * @type {BedTaxReportingType}
     * @memberof ResCashieringType
     */
    bedTaxReporting?: BedTaxReportingType;
    /**
     *
     * @type {BillingPrivilegesType}
     * @memberof ResCashieringType
     */
    billingPrivileges?: BillingPrivilegesType;
    /**
     *
     * @type {ResCompAccountingType}
     * @memberof ResCashieringType
     */
    compAccounting?: ResCompAccountingType;
    /**
     * The guest from whom payment has to be recovered (direct guest).
     * @type {boolean}
     * @memberof ResCashieringType
     */
    financiallyResponsible?: boolean;
    /**
     * This stores the description for the type of tax calculation especially with tax exemption, etc.
     * @type {Array<FolioTextsTypeInner>}
     * @memberof ResCashieringType
     */
    folioTexts?: Array<FolioTextsTypeInner>;
    /**
     * Date of the last Room And Tax posting. Used primarily to know the date in case of Advance Billing.
     * @type {string}
     * @memberof ResCashieringType
     */
    lastRoomAndTaxPostedDate?: string;
    /**
     *
     * @type {ResPeriodicFolioType}
     * @memberof ResCashieringType
     */
    periodicFolio?: ResPeriodicFolioType;
    /**
     * In case of Appartment style billing indicates whether a prorated amount should be used for an Apartment Style Billing rate.
     * @type {boolean}
     * @memberof ResCashieringType
     */
    proratedBilling?: boolean;
    /**
     *
     * @type {ResPreConfiguredRoutingInstrType}
     * @memberof ResCashieringType
     */
    reservationPreConfiguredRoutingInstruction?: ResPreConfiguredRoutingInstrType;
    /**
     *
     * @type {ResRevenueBalanceType}
     * @memberof ResCashieringType
     */
    revenuesAndBalances?: ResRevenueBalanceType;
    /**
     * This attribute is to verify if reverse advance check-in is allowed for the reservation.
     * @type {boolean}
     * @memberof ResCashieringType
     */
    reverseAdvanceCheckInAllowed?: boolean;
    /**
     * This attribute is to verify if reverse check-in is allowed for the reservation.
     * @type {boolean}
     * @memberof ResCashieringType
     */
    reverseCheckInAllowed?: boolean;
    /**
     *
     * @type {ReservationTaxTypeInfo}
     * @memberof ResCashieringType
     */
    taxType?: ReservationTaxTypeInfo;
    /**
     * Specifies whether reservation has a financial transaction associated with it.
     * @type {boolean}
     * @memberof ResCashieringType
     */
    transactionsPosted?: boolean;
}
/**
 * Check if a given object implements the ResCashieringType interface.
 */
export declare function instanceOfResCashieringType(value: object): boolean;
export declare function ResCashieringTypeFromJSON(json: any): ResCashieringType;
export declare function ResCashieringTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResCashieringType;
export declare function ResCashieringTypeToJSON(value?: ResCashieringType | null): any;
