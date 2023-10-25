/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Company Information of the Profile.
 * @export
 * @interface CompanyInfoType
 */
export interface CompanyInfoType {
    /**
     * Department of the Profile.
     * @type {string}
     * @memberof CompanyInfoType
     */
    department?: string;
    /**
     * Legal Company.
     * @type {string}
     * @memberof CompanyInfoType
     */
    legalCompany?: string;
    /**
     * Business Title or Position of the profile.
     * @type {string}
     * @memberof CompanyInfoType
     */
    position?: string;
}

/**
 * Check if a given object implements the CompanyInfoType interface.
 */
export function instanceOfCompanyInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyInfoTypeFromJSON(json: any): CompanyInfoType {
    return CompanyInfoTypeFromJSONTyped(json, false);
}

export function CompanyInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'department': !exists(json, 'department') ? undefined : json['department'],
        'legalCompany': !exists(json, 'legalCompany') ? undefined : json['legalCompany'],
        'position': !exists(json, 'position') ? undefined : json['position'],
    };
}

export function CompanyInfoTypeToJSON(value?: CompanyInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'department': value.department,
        'legalCompany': value.legalCompany,
        'position': value.position,
    };
}

