/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
 * @interface TaxTypeType
 */
export interface TaxTypeType {
    /**
     * Code of the Tax Type.
     * @type {string}
     * @memberof TaxTypeType
     */
    code?: string;
    /**
     * A boolean flag for Collecting Agent Tax
     * @type {boolean}
     * @memberof TaxTypeType
     */
    collectingAgentTax?: boolean;
    /**
     * Description of the Tax Type.
     * @type {string}
     * @memberof TaxTypeType
     */
    description?: string;
    /**
     * Code of the Hotel.
     * @type {string}
     * @memberof TaxTypeType
     */
    hotelId?: string;
    /**
     * Minimun Length of Stay.
     * @type {number}
     * @memberof TaxTypeType
     */
    minimumLengthOfStay?: number;
    /**
     * Print auto adjust information for this tax type on the tax exempt report.
     * @type {boolean}
     * @memberof TaxTypeType
     */
    printAutoAdjust?: boolean;
    /**
     * Number of days after which the guest will be tax exempt. Only used for tax exempt report.
     * @type {number}
     * @memberof TaxTypeType
     */
    reportExemptDays?: number;
    /**
     * Tax percentage. Only used for tax exempt report.
     * @type {number}
     * @memberof TaxTypeType
     */
    reportTaxPercentage?: number;
}

/**
 * Check if a given object implements the TaxTypeType interface.
 */
export function instanceOfTaxTypeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxTypeTypeFromJSON(json: any): TaxTypeType {
    return TaxTypeTypeFromJSONTyped(json, false);
}

export function TaxTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxTypeType {
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
    };
}

export function TaxTypeTypeToJSON(value?: TaxTypeType | null): any {
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
    };
}

