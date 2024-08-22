/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MarketCodeColorsType } from './MarketCodeColorsType';
import {
    MarketCodeColorsTypeFromJSON,
    MarketCodeColorsTypeFromJSONTyped,
    MarketCodeColorsTypeToJSON,
} from './MarketCodeColorsType';
import type { TranslationTextType50 } from './TranslationTextType50';
import {
    TranslationTextType50FromJSON,
    TranslationTextType50FromJSONTyped,
    TranslationTextType50ToJSON,
} from './TranslationTextType50';

/**
 * Common code type for code, description, seq and inactive
 * @export
 * @interface TemplateMarketCodeType
 */
export interface TemplateMarketCodeType {
    /**
     * Chain code for the code type.
     * @type {string}
     * @memberof TemplateMarketCodeType
     */
    chainCode?: string;
    /**
     * Code for the code type.
     * @type {string}
     * @memberof TemplateMarketCodeType
     */
    code?: string;
    /**
     * 
     * @type {TranslationTextType50}
     * @memberof TemplateMarketCodeType
     */
    description?: TranslationTextType50;
    /**
     * 
     * @type {MarketCodeColorsType}
     * @memberof TemplateMarketCodeType
     */
    displayColor?: MarketCodeColorsType;
    /**
     * Group code to which this code type belongs.
     * @type {string}
     * @memberof TemplateMarketCodeType
     */
    groupCode?: string;
    /**
     * Indicates the code type is inactive or not.
     * @type {boolean}
     * @memberof TemplateMarketCodeType
     */
    inactive?: boolean;
    /**
     * Display sequence for the code type.
     * @type {number}
     * @memberof TemplateMarketCodeType
     */
    sequence?: number;
}

/**
 * Check if a given object implements the TemplateMarketCodeType interface.
 */
export function instanceOfTemplateMarketCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateMarketCodeTypeFromJSON(json: any): TemplateMarketCodeType {
    return TemplateMarketCodeTypeFromJSONTyped(json, false);
}

export function TemplateMarketCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateMarketCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainCode': !exists(json, 'chainCode') ? undefined : json['chainCode'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType50FromJSON(json['description']),
        'displayColor': !exists(json, 'displayColor') ? undefined : MarketCodeColorsTypeFromJSON(json['displayColor']),
        'groupCode': !exists(json, 'groupCode') ? undefined : json['groupCode'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
    };
}

export function TemplateMarketCodeTypeToJSON(value?: TemplateMarketCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chainCode': value.chainCode,
        'code': value.code,
        'description': TranslationTextType50ToJSON(value.description),
        'displayColor': MarketCodeColorsTypeToJSON(value.displayColor),
        'groupCode': value.groupCode,
        'inactive': value.inactive,
        'sequence': value.sequence,
    };
}

