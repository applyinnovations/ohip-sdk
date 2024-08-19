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
import type { ChargeCriteriaType } from './ChargeCriteriaType';
import {
    ChargeCriteriaTypeFromJSON,
    ChargeCriteriaTypeFromJSONTyped,
    ChargeCriteriaTypeToJSON,
} from './ChargeCriteriaType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';

/**
 * Criteria type for posting charges.
 * @export
 * @interface BillingChargesCriteriaType
 */
export interface BillingChargesCriteriaType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof BillingChargesCriteriaType
     */
    cashierId?: number;
    /**
     * Collection of Charges to be posted.
     * @type {Array<ChargeCriteriaType>}
     * @memberof BillingChargesCriteriaType
     */
    charges?: Array<ChargeCriteriaType>;
    /**
     * Property where the charges are to be posted.
     * @type {string}
     * @memberof BillingChargesCriteriaType
     */
    hotelId?: string;
    /**
     * Date of the Audit. This is used when postings are being created using the Income Audit functionality.
     * @type {string}
     * @memberof BillingChargesCriteriaType
     */
    incomeAuditDate?: string;
    /**
     * Flag to indicate it is part of a PostIt Sale.
     * @type {boolean}
     * @memberof BillingChargesCriteriaType
     */
    postIt?: boolean;
    /**
     * 
     * @type {ReservationId}
     * @memberof BillingChargesCriteriaType
     */
    reservationId?: ReservationId;
    /**
     * Flag to indicate that current posting is a Welcome Offer Posting.
     * @type {boolean}
     * @memberof BillingChargesCriteriaType
     */
    welcomeOfferPosting?: boolean;
}

/**
 * Check if a given object implements the BillingChargesCriteriaType interface.
 */
export function instanceOfBillingChargesCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BillingChargesCriteriaTypeFromJSON(json: any): BillingChargesCriteriaType {
    return BillingChargesCriteriaTypeFromJSONTyped(json, false);
}

export function BillingChargesCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingChargesCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'charges': !exists(json, 'charges') ? undefined : ((json['charges'] as Array<any>).map(ChargeCriteriaTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'incomeAuditDate': !exists(json, 'incomeAuditDate') ? undefined : json['incomeAuditDate'],
        'postIt': !exists(json, 'postIt') ? undefined : json['postIt'],
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'welcomeOfferPosting': !exists(json, 'welcomeOfferPosting') ? undefined : json['welcomeOfferPosting'],
    };
}

export function BillingChargesCriteriaTypeToJSON(value?: BillingChargesCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierId': value.cashierId,
        'charges': value.charges === undefined ? undefined : ((value.charges as Array<any>).map(ChargeCriteriaTypeToJSON)),
        'hotelId': value.hotelId,
        'incomeAuditDate': value.incomeAuditDate,
        'postIt': value.postIt,
        'reservationId': ReservationIdToJSON(value.reservationId),
        'welcomeOfferPosting': value.welcomeOfferPosting,
    };
}

