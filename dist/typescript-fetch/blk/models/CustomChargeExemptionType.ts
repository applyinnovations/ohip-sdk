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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { CustomChargeExemptionDateType } from './CustomChargeExemptionDateType';
import {
    CustomChargeExemptionDateTypeFromJSON,
    CustomChargeExemptionDateTypeFromJSONTyped,
    CustomChargeExemptionDateTypeToJSON,
} from './CustomChargeExemptionDateType';
import type { CustomChargeQuantityType } from './CustomChargeQuantityType';
import {
    CustomChargeQuantityTypeFromJSON,
    CustomChargeQuantityTypeFromJSONTyped,
    CustomChargeQuantityTypeToJSON,
} from './CustomChargeQuantityType';
import type { ExcludedDateType } from './ExcludedDateType';
import {
    ExcludedDateTypeFromJSON,
    ExcludedDateTypeFromJSONTyped,
    ExcludedDateTypeToJSON,
} from './ExcludedDateType';

/**
 * Contains custom charges exemption information.
 * @export
 * @interface CustomChargeExemptionType
 */
export interface CustomChargeExemptionType {
    /**
     * Contains List of Custom Charge Exemption information for a day.
     * @type {Array<CustomChargeExemptionDateType>}
     * @memberof CustomChargeExemptionType
     */
    customChargeDates?: Array<CustomChargeExemptionDateType>;
    /**
     * 
     * @type {CustomChargeQuantityType}
     * @memberof CustomChargeExemptionType
     */
    customChargeQuantity?: CustomChargeQuantityType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof CustomChargeExemptionType
     */
    customChargesExemption?: CodeDescriptionType;
    /**
     * Contains list of dates which are valid for custom charge exemptions.
     * @type {Array<ExcludedDateType>}
     * @memberof CustomChargeExemptionType
     */
    excludedDates?: Array<ExcludedDateType>;
    /**
     * Exemption Percentage
     * @type {number}
     * @memberof CustomChargeExemptionType
     */
    percentage?: number;
    /**
     * Flag specifying if custom charge exemptions is property level or not.
     * @type {boolean}
     * @memberof CustomChargeExemptionType
     */
    propertyExemption?: boolean;
}

/**
 * Check if a given object implements the CustomChargeExemptionType interface.
 */
export function instanceOfCustomChargeExemptionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomChargeExemptionTypeFromJSON(json: any): CustomChargeExemptionType {
    return CustomChargeExemptionTypeFromJSONTyped(json, false);
}

export function CustomChargeExemptionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomChargeExemptionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customChargeDates': !exists(json, 'customChargeDates') ? undefined : ((json['customChargeDates'] as Array<any>).map(CustomChargeExemptionDateTypeFromJSON)),
        'customChargeQuantity': !exists(json, 'customChargeQuantity') ? undefined : CustomChargeQuantityTypeFromJSON(json['customChargeQuantity']),
        'customChargesExemption': !exists(json, 'customChargesExemption') ? undefined : CodeDescriptionTypeFromJSON(json['customChargesExemption']),
        'excludedDates': !exists(json, 'excludedDates') ? undefined : ((json['excludedDates'] as Array<any>).map(ExcludedDateTypeFromJSON)),
        'percentage': !exists(json, 'percentage') ? undefined : json['percentage'],
        'propertyExemption': !exists(json, 'propertyExemption') ? undefined : json['propertyExemption'],
    };
}

export function CustomChargeExemptionTypeToJSON(value?: CustomChargeExemptionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customChargeDates': value.customChargeDates === undefined ? undefined : ((value.customChargeDates as Array<any>).map(CustomChargeExemptionDateTypeToJSON)),
        'customChargeQuantity': CustomChargeQuantityTypeToJSON(value.customChargeQuantity),
        'customChargesExemption': CodeDescriptionTypeToJSON(value.customChargesExemption),
        'excludedDates': value.excludedDates === undefined ? undefined : ((value.excludedDates as Array<any>).map(ExcludedDateTypeToJSON)),
        'percentage': value.percentage,
        'propertyExemption': value.propertyExemption,
    };
}

