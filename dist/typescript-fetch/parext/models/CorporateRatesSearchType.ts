/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Availability Extension API
 * APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2.0.0
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CorporateRatesSearchType
 */
export interface CorporateRatesSearchType {
    /**
     * Corporate Id
     * @type {string}
     * @memberof CorporateRatesSearchType
     */
    corporateId?: string;
    /**
     * Rate Plan Set code to filter Rate Plans based on the predefined set.
     * @type {Array<string>}
     * @memberof CorporateRatesSearchType
     */
    ratePlanSets?: Array<string>;
}

/**
 * Check if a given object implements the CorporateRatesSearchType interface.
 */
export function instanceOfCorporateRatesSearchType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CorporateRatesSearchTypeFromJSON(json: any): CorporateRatesSearchType {
    return CorporateRatesSearchTypeFromJSONTyped(json, false);
}

export function CorporateRatesSearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CorporateRatesSearchType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'ratePlanSets': !exists(json, 'ratePlanSets') ? undefined : json['ratePlanSets'],
    };
}

export function CorporateRatesSearchTypeToJSON(value?: CorporateRatesSearchType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'ratePlanSets': value.ratePlanSets,
    };
}

