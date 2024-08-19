/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * Provides information about the Tax Type.
 * @export
 * @interface ReservationTaxTypeInfo
 */
export interface ReservationTaxTypeInfo {
    /**
     * Code of the Tax Type.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    code?: string;
    /**
     * A boolean flag for Collecting Agent Tax
     * @type {boolean}
     * @memberof ReservationTaxTypeInfo
     */
    collectingAgentTax?: boolean;
    /**
     * Description of the Tax Type.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    description?: string;
    /**
     * Code of the Hotel.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    hotelId?: string;
    /**
     * Minimun Length of Stay.
     * @type {number}
     * @memberof ReservationTaxTypeInfo
     */
    minimumLengthOfStay?: number;
    /**
     * Print auto adjust information for this tax type on the tax exempt report.
     * @type {boolean}
     * @memberof ReservationTaxTypeInfo
     */
    printAutoAdjust?: boolean;
    /**
     * Number of days after which the guest will be tax exempt. Only used for tax exempt report.
     * @type {number}
     * @memberof ReservationTaxTypeInfo
     */
    reportExemptDays?: number;
    /**
     * Tax percentage. Only used for tax exempt report.
     * @type {number}
     * @memberof ReservationTaxTypeInfo
     */
    reportTaxPercentage?: number;
    /**
     * Tax exempt number on the profile.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    taxExemptNo?: string;
}

/**
 * Check if a given object implements the ReservationTaxTypeInfo interface.
 */
export function instanceOfReservationTaxTypeInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationTaxTypeInfoFromJSON(json: any): ReservationTaxTypeInfo {
    return ReservationTaxTypeInfoFromJSONTyped(json, false);
}

export function ReservationTaxTypeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationTaxTypeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'collectingAgentTax': !exists(json, 'collectingAgentTax') ? undefined : json['collectingAgentTax'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'minimumLengthOfStay': !exists(json, 'minimumLengthOfStay') ? undefined : json['minimumLengthOfStay'],
        'printAutoAdjust': !exists(json, 'printAutoAdjust') ? undefined : json['printAutoAdjust'],
        'reportExemptDays': !exists(json, 'reportExemptDays') ? undefined : json['reportExemptDays'],
        'reportTaxPercentage': !exists(json, 'reportTaxPercentage') ? undefined : json['reportTaxPercentage'],
        'taxExemptNo': !exists(json, 'taxExemptNo') ? undefined : json['taxExemptNo'],
    };
}

export function ReservationTaxTypeInfoToJSON(value?: ReservationTaxTypeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'collectingAgentTax': value.collectingAgentTax,
        'description': value.description,
        'hotelId': value.hotelId,
        'minimumLengthOfStay': value.minimumLengthOfStay,
        'printAutoAdjust': value.printAutoAdjust,
        'reportExemptDays': value.reportExemptDays,
        'reportTaxPercentage': value.reportTaxPercentage,
        'taxExemptNo': value.taxExemptNo,
    };
}

