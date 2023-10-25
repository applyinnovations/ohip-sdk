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
import type { CashieringEventType } from './CashieringEventType';
import {
    CashieringEventTypeFromJSON,
    CashieringEventTypeFromJSONTyped,
    CashieringEventTypeToJSON,
} from './CashieringEventType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';

/**
 * Criteria to auto settle comp folios of a reservation.
 * @export
 * @interface AutoSettleCompFoliosCriteriaType
 */
export interface AutoSettleCompFoliosCriteriaType {
    /**
     * Numeric ID of the cashier.
     * @type {number}
     * @memberof AutoSettleCompFoliosCriteriaType
     */
    cashierId?: number;
    /**
     * 
     * @type {CashieringEventType}
     * @memberof AutoSettleCompFoliosCriteriaType
     */
    eventType?: CashieringEventType;
    /**
     * Hotel code of the folios to be auto settled.
     * @type {string}
     * @memberof AutoSettleCompFoliosCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {ReservationId}
     * @memberof AutoSettleCompFoliosCriteriaType
     */
    reservationId?: ReservationId;
}

/**
 * Check if a given object implements the AutoSettleCompFoliosCriteriaType interface.
 */
export function instanceOfAutoSettleCompFoliosCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoSettleCompFoliosCriteriaTypeFromJSON(json: any): AutoSettleCompFoliosCriteriaType {
    return AutoSettleCompFoliosCriteriaTypeFromJSONTyped(json, false);
}

export function AutoSettleCompFoliosCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoSettleCompFoliosCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'eventType': !exists(json, 'eventType') ? undefined : CashieringEventTypeFromJSON(json['eventType']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
    };
}

export function AutoSettleCompFoliosCriteriaTypeToJSON(value?: AutoSettleCompFoliosCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierId': value.cashierId,
        'eventType': CashieringEventTypeToJSON(value.eventType),
        'hotelId': value.hotelId,
        'reservationId': ReservationIdToJSON(value.reservationId),
    };
}

