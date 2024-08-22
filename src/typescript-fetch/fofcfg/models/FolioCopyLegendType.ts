/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Search criteria to fetch folio copy legends information.
 * @export
 * @interface FolioCopyLegendType
 */
export interface FolioCopyLegendType {
    /**
     * Term code to be searched.
     * @type {string}
     * @memberof FolioCopyLegendType
     */
    code?: string;
    /**
     * Term description
     * @type {string}
     * @memberof FolioCopyLegendType
     */
    description?: string;
    /**
     * Language code to be searched.
     * @type {string}
     * @memberof FolioCopyLegendType
     */
    languageCode?: string;
}

/**
 * Check if a given object implements the FolioCopyLegendType interface.
 */
export function instanceOfFolioCopyLegendType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioCopyLegendTypeFromJSON(json: any): FolioCopyLegendType {
    return FolioCopyLegendTypeFromJSONTyped(json, false);
}

export function FolioCopyLegendTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioCopyLegendType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'languageCode': !exists(json, 'languageCode') ? undefined : json['languageCode'],
    };
}

export function FolioCopyLegendTypeToJSON(value?: FolioCopyLegendType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'languageCode': value.languageCode,
    };
}

