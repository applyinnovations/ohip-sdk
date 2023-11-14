/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BedTaxReportingType } from './BedTaxReportingType';
import {
    BedTaxReportingTypeFromJSON,
    BedTaxReportingTypeFromJSONTyped,
    BedTaxReportingTypeToJSON,
} from './BedTaxReportingType';
import type { BillingPrivilegesType } from './BillingPrivilegesType';
import {
    BillingPrivilegesTypeFromJSON,
    BillingPrivilegesTypeFromJSONTyped,
    BillingPrivilegesTypeToJSON,
} from './BillingPrivilegesType';
import type { FolioTextsType } from './FolioTextsType';
import {
    FolioTextsTypeFromJSON,
    FolioTextsTypeFromJSONTyped,
    FolioTextsTypeToJSON,
} from './FolioTextsType';
import type { ResCompAccountingType } from './ResCompAccountingType';
import {
    ResCompAccountingTypeFromJSON,
    ResCompAccountingTypeFromJSONTyped,
    ResCompAccountingTypeToJSON,
} from './ResCompAccountingType';
import type { ResPreConfiguredRoutingInstrType } from './ResPreConfiguredRoutingInstrType';
import {
    ResPreConfiguredRoutingInstrTypeFromJSON,
    ResPreConfiguredRoutingInstrTypeFromJSONTyped,
    ResPreConfiguredRoutingInstrTypeToJSON,
} from './ResPreConfiguredRoutingInstrType';
import type { ResRevenueBalanceType } from './ResRevenueBalanceType';
import {
    ResRevenueBalanceTypeFromJSON,
    ResRevenueBalanceTypeFromJSONTyped,
    ResRevenueBalanceTypeToJSON,
} from './ResRevenueBalanceType';
import type { ReservationTaxTypeInfo } from './ReservationTaxTypeInfo';
import {
    ReservationTaxTypeInfoFromJSON,
    ReservationTaxTypeInfoFromJSONTyped,
    ReservationTaxTypeInfoToJSON,
} from './ReservationTaxTypeInfo';

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
     * 
     * @type {FolioTextsType}
     * @memberof ResCashieringType
     */
    folioTexts?: FolioTextsType;
    /**
     * Date of the last Room And Tax posting. Used primarily to know the date in case of Advance Billing.
     * @type {Date}
     * @memberof ResCashieringType
     */
    lastRoomAndTaxPostedDate?: Date;
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
export function instanceOfResCashieringType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResCashieringTypeFromJSON(json: any): ResCashieringType {
    return ResCashieringTypeFromJSONTyped(json, false);
}

export function ResCashieringTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResCashieringType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bedTaxReporting': !exists(json, 'bedTaxReporting') ? undefined : BedTaxReportingTypeFromJSON(json['bedTaxReporting']),
        'billingPrivileges': !exists(json, 'billingPrivileges') ? undefined : BillingPrivilegesTypeFromJSON(json['billingPrivileges']),
        'compAccounting': !exists(json, 'compAccounting') ? undefined : ResCompAccountingTypeFromJSON(json['compAccounting']),
        'folioTexts': !exists(json, 'folioTexts') ? undefined : FolioTextsTypeFromJSON(json['folioTexts']),
        'lastRoomAndTaxPostedDate': !exists(json, 'lastRoomAndTaxPostedDate') ? undefined : (new Date(json['lastRoomAndTaxPostedDate'])),
        'reservationPreConfiguredRoutingInstruction': !exists(json, 'reservationPreConfiguredRoutingInstruction') ? undefined : ResPreConfiguredRoutingInstrTypeFromJSON(json['reservationPreConfiguredRoutingInstruction']),
        'revenuesAndBalances': !exists(json, 'revenuesAndBalances') ? undefined : ResRevenueBalanceTypeFromJSON(json['revenuesAndBalances']),
        'reverseAdvanceCheckInAllowed': !exists(json, 'reverseAdvanceCheckInAllowed') ? undefined : json['reverseAdvanceCheckInAllowed'],
        'reverseCheckInAllowed': !exists(json, 'reverseCheckInAllowed') ? undefined : json['reverseCheckInAllowed'],
        'taxType': !exists(json, 'taxType') ? undefined : ReservationTaxTypeInfoFromJSON(json['taxType']),
        'transactionsPosted': !exists(json, 'transactionsPosted') ? undefined : json['transactionsPosted'],
    };
}

export function ResCashieringTypeToJSON(value?: ResCashieringType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bedTaxReporting': BedTaxReportingTypeToJSON(value.bedTaxReporting),
        'billingPrivileges': BillingPrivilegesTypeToJSON(value.billingPrivileges),
        'compAccounting': ResCompAccountingTypeToJSON(value.compAccounting),
        'folioTexts': FolioTextsTypeToJSON(value.folioTexts),
        'lastRoomAndTaxPostedDate': value.lastRoomAndTaxPostedDate === undefined ? undefined : (value.lastRoomAndTaxPostedDate.toISOString().substring(0,10)),
        'reservationPreConfiguredRoutingInstruction': ResPreConfiguredRoutingInstrTypeToJSON(value.reservationPreConfiguredRoutingInstruction),
        'revenuesAndBalances': ResRevenueBalanceTypeToJSON(value.revenuesAndBalances),
        'reverseAdvanceCheckInAllowed': value.reverseAdvanceCheckInAllowed,
        'reverseCheckInAllowed': value.reverseCheckInAllowed,
        'taxType': ReservationTaxTypeInfoToJSON(value.taxType),
        'transactionsPosted': value.transactionsPosted,
    };
}
