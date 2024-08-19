/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * This stores the information for Bed Tax Reporting. Mainly used in Maldives.
 * @export
 * @interface BedTaxReportingType
 */
export interface BedTaxReportingType {
    /**
     * Tax Registration Number for Maldives Bed Tax Reporting.
     * @type {number}
     * @memberof BedTaxReportingType
     */
    taxRegistrationNo?: number;
    /**
     * Number of days for which the Maldives tax is applicable.
     * @type {number}
     * @memberof BedTaxReportingType
     */
    taxableDays?: number;
    /**
     * Visa Expiration Date used for Maldives Bed Tax Reporting
     * @type {string}
     * @memberof BedTaxReportingType
     */
    visaExpiryDate?: string;
    /**
     * Visa Issue Date used for Maldives Bed Tax Reporting.
     * @type {string}
     * @memberof BedTaxReportingType
     */
    visaIssueDate?: string;
    /**
     * Visa number used for Maldives Bed Tax Reporting
     * @type {string}
     * @memberof BedTaxReportingType
     */
    visaNumber?: string;
}

/**
 * Check if a given object implements the BedTaxReportingType interface.
 */
export function instanceOfBedTaxReportingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BedTaxReportingTypeFromJSON(json: any): BedTaxReportingType {
    return BedTaxReportingTypeFromJSONTyped(json, false);
}

export function BedTaxReportingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BedTaxReportingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'taxRegistrationNo': !exists(json, 'taxRegistrationNo') ? undefined : json['taxRegistrationNo'],
        'taxableDays': !exists(json, 'taxableDays') ? undefined : json['taxableDays'],
        'visaExpiryDate': !exists(json, 'visaExpiryDate') ? undefined : json['visaExpiryDate'],
        'visaIssueDate': !exists(json, 'visaIssueDate') ? undefined : json['visaIssueDate'],
        'visaNumber': !exists(json, 'visaNumber') ? undefined : json['visaNumber'],
    };
}

export function BedTaxReportingTypeToJSON(value?: BedTaxReportingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'taxRegistrationNo': value.taxRegistrationNo,
        'taxableDays': value.taxableDays,
        'visaExpiryDate': value.visaExpiryDate,
        'visaIssueDate': value.visaIssueDate,
        'visaNumber': value.visaNumber,
    };
}

