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
 * 
 * @export
 * @interface VisaInfoType
 */
export interface VisaInfoType {
    /**
     * 
     * @type {string}
     * @memberof VisaInfoType
     */
    visaExpiryDate?: string;
    /**
     * 
     * @type {string}
     * @memberof VisaInfoType
     */
    visaIssueDate?: string;
    /**
     * 
     * @type {string}
     * @memberof VisaInfoType
     */
    visaNumber?: string;
}

/**
 * Check if a given object implements the VisaInfoType interface.
 */
export function instanceOfVisaInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VisaInfoTypeFromJSON(json: any): VisaInfoType {
    return VisaInfoTypeFromJSONTyped(json, false);
}

export function VisaInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VisaInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'visaExpiryDate': !exists(json, 'visaExpiryDate') ? undefined : json['visaExpiryDate'],
        'visaIssueDate': !exists(json, 'visaIssueDate') ? undefined : json['visaIssueDate'],
        'visaNumber': !exists(json, 'visaNumber') ? undefined : json['visaNumber'],
    };
}

export function VisaInfoTypeToJSON(value?: VisaInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'visaExpiryDate': value.visaExpiryDate,
        'visaIssueDate': value.visaIssueDate,
        'visaNumber': value.visaNumber,
    };
}
