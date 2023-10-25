/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';

/**
 * Contains Common Master configuration detail.
 * @export
 * @interface CorporateOperatingUnitType
 */
export interface CorporateOperatingUnitType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof CorporateOperatingUnitType
     */
    code?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof CorporateOperatingUnitType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof CorporateOperatingUnitType
     */
    displayOrder?: number;
}

/**
 * Check if a given object implements the CorporateOperatingUnitType interface.
 */
export function instanceOfCorporateOperatingUnitType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CorporateOperatingUnitTypeFromJSON(json: any): CorporateOperatingUnitType {
    return CorporateOperatingUnitTypeFromJSONTyped(json, false);
}

export function CorporateOperatingUnitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CorporateOperatingUnitType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'displayOrder': !exists(json, 'displayOrder') ? undefined : json['displayOrder'],
    };
}

export function CorporateOperatingUnitTypeToJSON(value?: CorporateOperatingUnitType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': TranslationTextType2000ToJSON(value.description),
        'displayOrder': value.displayOrder,
    };
}

