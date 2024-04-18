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
import type { TranslationTextType50 } from './TranslationTextType50';
import {
    TranslationTextType50FromJSON,
    TranslationTextType50FromJSONTyped,
    TranslationTextType50ToJSON,
} from './TranslationTextType50';
import type { TurnAwayTypeType } from './TurnAwayTypeType';
import {
    TurnAwayTypeTypeFromJSON,
    TurnAwayTypeTypeFromJSONTyped,
    TurnAwayTypeTypeToJSON,
} from './TurnAwayTypeType';

/**
 * Base details common between hotel and template TurnAway codes.
 * @export
 * @interface TemplateTurnAwayCodeType
 */
export interface TemplateTurnAwayCodeType {
    /**
     * Determines whether this TurnAway code can be deleted.
     * @type {boolean}
     * @memberof TemplateTurnAwayCodeType
     */
    canDelete?: boolean;
    /**
     * TurnAway code
     * @type {string}
     * @memberof TemplateTurnAwayCodeType
     */
    code?: string;
    /**
     * 
     * @type {TranslationTextType50}
     * @memberof TemplateTurnAwayCodeType
     */
    description?: TranslationTextType50;
    /**
     * Sequence of TurnAway code.
     * @type {number}
     * @memberof TemplateTurnAwayCodeType
     */
    displaySequence?: number;
    /**
     * Inactive flag for a TurnAway code.
     * @type {boolean}
     * @memberof TemplateTurnAwayCodeType
     */
    inactive?: boolean;
    /**
     * 
     * @type {TurnAwayTypeType}
     * @memberof TemplateTurnAwayCodeType
     */
    turnAwayType?: TurnAwayTypeType;
}

/**
 * Check if a given object implements the TemplateTurnAwayCodeType interface.
 */
export function instanceOfTemplateTurnAwayCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateTurnAwayCodeTypeFromJSON(json: any): TemplateTurnAwayCodeType {
    return TemplateTurnAwayCodeTypeFromJSONTyped(json, false);
}

export function TemplateTurnAwayCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateTurnAwayCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'canDelete': !exists(json, 'canDelete') ? undefined : json['canDelete'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType50FromJSON(json['description']),
        'displaySequence': !exists(json, 'displaySequence') ? undefined : json['displaySequence'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'turnAwayType': !exists(json, 'turnAwayType') ? undefined : TurnAwayTypeTypeFromJSON(json['turnAwayType']),
    };
}

export function TemplateTurnAwayCodeTypeToJSON(value?: TemplateTurnAwayCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'canDelete': value.canDelete,
        'code': value.code,
        'description': TranslationTextType50ToJSON(value.description),
        'displaySequence': value.displaySequence,
        'inactive': value.inactive,
        'turnAwayType': TurnAwayTypeTypeToJSON(value.turnAwayType),
    };
}
