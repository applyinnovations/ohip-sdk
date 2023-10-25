/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
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
     * Code of the Hotel.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    hotelId?: string;
    /**
     * Code of the Tax Type.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    code?: string;
    /**
     * Description of the Tax Type.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    description?: string;
    /**
     * A boolean flag for Collecting Agent Tax
     * @type {boolean}
     * @memberof ReservationTaxTypeInfo
     */
    collectingAgentTax?: boolean;
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
    reportTaxPerc?: number;
    /**
     * Minimun Length of Stay.
     * @type {number}
     * @memberof ReservationTaxTypeInfo
     */
    minimumLengthOfStay?: number;
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
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'collectingAgentTax': !exists(json, 'collectingAgentTax') ? undefined : json['collectingAgentTax'],
        'printAutoAdjust': !exists(json, 'printAutoAdjust') ? undefined : json['printAutoAdjust'],
        'reportExemptDays': !exists(json, 'reportExemptDays') ? undefined : json['reportExemptDays'],
        'reportTaxPerc': !exists(json, 'reportTaxPerc') ? undefined : json['reportTaxPerc'],
        'minimumLengthOfStay': !exists(json, 'minimumLengthOfStay') ? undefined : json['minimumLengthOfStay'],
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
        
        'hotelId': value.hotelId,
        'code': value.code,
        'description': value.description,
        'collectingAgentTax': value.collectingAgentTax,
        'printAutoAdjust': value.printAutoAdjust,
        'reportExemptDays': value.reportExemptDays,
        'reportTaxPerc': value.reportTaxPerc,
        'minimumLengthOfStay': value.minimumLengthOfStay,
        'taxExemptNo': value.taxExemptNo,
    };
}

