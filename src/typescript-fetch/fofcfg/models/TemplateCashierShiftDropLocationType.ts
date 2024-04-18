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
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';

/**
 * Contains Common Master configuration detail.
 * @export
 * @interface TemplateCashierShiftDropLocationType
 */
export interface TemplateCashierShiftDropLocationType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof TemplateCashierShiftDropLocationType
     */
    code?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof TemplateCashierShiftDropLocationType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof TemplateCashierShiftDropLocationType
     */
    displayOrder?: number;
}

/**
 * Check if a given object implements the TemplateCashierShiftDropLocationType interface.
 */
export function instanceOfTemplateCashierShiftDropLocationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateCashierShiftDropLocationTypeFromJSON(json: any): TemplateCashierShiftDropLocationType {
    return TemplateCashierShiftDropLocationTypeFromJSONTyped(json, false);
}

export function TemplateCashierShiftDropLocationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateCashierShiftDropLocationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'displayOrder': !exists(json, 'displayOrder') ? undefined : json['displayOrder'],
    };
}

export function TemplateCashierShiftDropLocationTypeToJSON(value?: TemplateCashierShiftDropLocationType | null): any {
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
