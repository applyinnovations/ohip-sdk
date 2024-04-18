/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A HotelPackageSchedule type.
 * @export
 * @interface ReservationPackageScheduleType
 */
export interface ReservationPackageScheduleType {
    /**
     * Computed Reservation Price of the package. Calculation Will Be Performed Based On Other Parameters.
     * @type {number}
     * @memberof ReservationPackageScheduleType
     */
    computedResvPrice?: number;
    /**
     * The date the package was used or can be used.
     * @type {string}
     * @memberof ReservationPackageScheduleType
     */
    consumptionDate?: string;
    /**
     * The original allowance per unit of the package if it has been changed.
     * @type {number}
     * @memberof ReservationPackageScheduleType
     */
    originalUnitAllowance?: number;
    /**
     * The original price per unit of the package if it has been changed.
     * @type {number}
     * @memberof ReservationPackageScheduleType
     */
    originalUnitPrice?: number;
    /**
     * The date of the Reservation when this package is applicable. This can be different from the date the package will be consumed. Example are next day packages. Reservation date is when the package is applied to the guest and Consumption date is when the guest can consume the package.
     * @type {string}
     * @memberof ReservationPackageScheduleType
     */
    reservationDate?: string;
    /**
     * The total quantity of the package for this date, calculated based on the calculation rule as defined in the PackageHeaderType
     * @type {number}
     * @memberof ReservationPackageScheduleType
     */
    totalQuantity?: number;
    /**
     * The allowance per unit of the package.
     * @type {number}
     * @memberof ReservationPackageScheduleType
     */
    unitAllowance?: number;
    /**
     * The price per unit of the package.
     * @type {number}
     * @memberof ReservationPackageScheduleType
     */
    unitPrice?: number;
}

/**
 * Check if a given object implements the ReservationPackageScheduleType interface.
 */
export function instanceOfReservationPackageScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationPackageScheduleTypeFromJSON(json: any): ReservationPackageScheduleType {
    return ReservationPackageScheduleTypeFromJSONTyped(json, false);
}

export function ReservationPackageScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPackageScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'computedResvPrice': !exists(json, 'computedResvPrice') ? undefined : json['computedResvPrice'],
        'consumptionDate': !exists(json, 'consumptionDate') ? undefined : json['consumptionDate'],
        'originalUnitAllowance': !exists(json, 'originalUnitAllowance') ? undefined : json['originalUnitAllowance'],
        'originalUnitPrice': !exists(json, 'originalUnitPrice') ? undefined : json['originalUnitPrice'],
        'reservationDate': !exists(json, 'reservationDate') ? undefined : json['reservationDate'],
        'totalQuantity': !exists(json, 'totalQuantity') ? undefined : json['totalQuantity'],
        'unitAllowance': !exists(json, 'unitAllowance') ? undefined : json['unitAllowance'],
        'unitPrice': !exists(json, 'unitPrice') ? undefined : json['unitPrice'],
    };
}

export function ReservationPackageScheduleTypeToJSON(value?: ReservationPackageScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'computedResvPrice': value.computedResvPrice,
        'consumptionDate': value.consumptionDate,
        'originalUnitAllowance': value.originalUnitAllowance,
        'originalUnitPrice': value.originalUnitPrice,
        'reservationDate': value.reservationDate,
        'totalQuantity': value.totalQuantity,
        'unitAllowance': value.unitAllowance,
        'unitPrice': value.unitPrice,
    };
}
