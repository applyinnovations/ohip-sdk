/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockId } from './BlockId';
import {
    BlockIdFromJSON,
    BlockIdFromJSONTyped,
    BlockIdToJSON,
} from './BlockId';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { EffectiveRateType } from './EffectiveRateType';
import {
    EffectiveRateTypeFromJSON,
    EffectiveRateTypeFromJSONTyped,
    EffectiveRateTypeToJSON,
} from './EffectiveRateType';
import type { GuestCountsType } from './GuestCountsType';
import {
    GuestCountsTypeFromJSON,
    GuestCountsTypeFromJSONTyped,
    GuestCountsTypeToJSON,
} from './GuestCountsType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { ReservationPackageType } from './ReservationPackageType';
import {
    ReservationPackageTypeFromJSON,
    ReservationPackageTypeFromJSONTyped,
    ReservationPackageTypeToJSON,
} from './ReservationPackageType';
import type { ReservationProfileType } from './ReservationProfileType';
import {
    ReservationProfileTypeFromJSON,
    ReservationProfileTypeFromJSONTyped,
    ReservationProfileTypeToJSON,
} from './ReservationProfileType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * Search type can either be based on a reservation or based on a quotation. If a reservation name id is passed then most criteria are ignored.
 * @export
 * @interface ValidateRateInfoCriteria
 */
export interface ValidateRateInfoCriteria {
    /**
     * 
     * @type {BlockId}
     * @memberof ValidateRateInfoCriteria
     */
    blockId?: BlockId;
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof ValidateRateInfoCriteria
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof ValidateRateInfoCriteria
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof ValidateRateInfoCriteria
     */
    decimalPlaces?: number;
    /**
     * This field is only required when the criteria is meant for a detailed results. The date for the rate detail is needed.
     * @type {string}
     * @memberof ValidateRateInfoCriteria
     */
    detailDate?: string;
    /**
     * Collection of effective rate amount per guest on specific dates.
     * @type {Array<EffectiveRateType>}
     * @memberof ValidateRateInfoCriteria
     */
    effectiveRates?: Array<EffectiveRateType>;
    /**
     * 
     * @type {GuestCountsType}
     * @memberof ValidateRateInfoCriteria
     */
    guestCounts?: GuestCountsType;
    /**
     * 
     * @type {number}
     * @memberof ValidateRateInfoCriteria
     */
    quantity?: number;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ValidateRateInfoCriteria
     */
    ratePlanCode?: string;
    /**
     * 
     * @type {ReservationId}
     * @memberof ValidateRateInfoCriteria
     */
    reservationId?: ReservationId;
    /**
     * A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges.
     * @type {Array<ReservationPackageType>}
     * @memberof ValidateRateInfoCriteria
     */
    reservationPackages?: Array<ReservationPackageType>;
    /**
     * Refer to Generic common types document.
     * @type {Array<ReservationProfileType>}
     * @memberof ValidateRateInfoCriteria
     */
    reservationProfiles?: Array<ReservationProfileType>;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ValidateRateInfoCriteria
     */
    resvRateAmount?: CurrencyAmountType;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ValidateRateInfoCriteria
     */
    roomType?: string;
    /**
     * Flag to indicate if summary information is required.
     * @type {boolean}
     * @memberof ValidateRateInfoCriteria
     */
    summaryInfo?: boolean;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof ValidateRateInfoCriteria
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the ValidateRateInfoCriteria interface.
 */
export function instanceOfValidateRateInfoCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ValidateRateInfoCriteriaFromJSON(json: any): ValidateRateInfoCriteria {
    return ValidateRateInfoCriteriaFromJSONTyped(json, false);
}

export function ValidateRateInfoCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidateRateInfoCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !exists(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'detailDate': !exists(json, 'detailDate') ? undefined : json['detailDate'],
        'effectiveRates': !exists(json, 'effectiveRates') ? undefined : ((json['effectiveRates'] as Array<any>).map(EffectiveRateTypeFromJSON)),
        'guestCounts': !exists(json, 'guestCounts') ? undefined : GuestCountsTypeFromJSON(json['guestCounts']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'reservationPackages': !exists(json, 'reservationPackages') ? undefined : ((json['reservationPackages'] as Array<any>).map(ReservationPackageTypeFromJSON)),
        'reservationProfiles': !exists(json, 'reservationProfiles') ? undefined : ((json['reservationProfiles'] as Array<any>).map(ReservationProfileTypeFromJSON)),
        'resvRateAmount': !exists(json, 'resvRateAmount') ? undefined : CurrencyAmountTypeFromJSON(json['resvRateAmount']),
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'summaryInfo': !exists(json, 'summaryInfo') ? undefined : json['summaryInfo'],
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function ValidateRateInfoCriteriaToJSON(value?: ValidateRateInfoCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockId': BlockIdToJSON(value.blockId),
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'detailDate': value.detailDate,
        'effectiveRates': value.effectiveRates === undefined ? undefined : ((value.effectiveRates as Array<any>).map(EffectiveRateTypeToJSON)),
        'guestCounts': GuestCountsTypeToJSON(value.guestCounts),
        'quantity': value.quantity,
        'ratePlanCode': value.ratePlanCode,
        'reservationId': ReservationIdToJSON(value.reservationId),
        'reservationPackages': value.reservationPackages === undefined ? undefined : ((value.reservationPackages as Array<any>).map(ReservationPackageTypeToJSON)),
        'reservationProfiles': value.reservationProfiles === undefined ? undefined : ((value.reservationProfiles as Array<any>).map(ReservationProfileTypeToJSON)),
        'resvRateAmount': CurrencyAmountTypeToJSON(value.resvRateAmount),
        'roomType': value.roomType,
        'summaryInfo': value.summaryInfo,
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}

