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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { PreCheckInRuleType } from './PreCheckInRuleType';
import {
    PreCheckInRuleTypeFromJSON,
    PreCheckInRuleTypeFromJSONTyped,
    PreCheckInRuleTypeToJSON,
} from './PreCheckInRuleType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for modifying an existing Pre Check-In Rule
 * @export
 * @interface PreCheckInRulesToBeChanged
 */
export interface PreCheckInRulesToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PreCheckInRulesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of Pre Check-In Rules List
     * @type {Array<PreCheckInRuleType>}
     * @memberof PreCheckInRulesToBeChanged
     */
    preCheckInRules?: Array<PreCheckInRuleType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PreCheckInRulesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PreCheckInRulesToBeChanged interface.
 */
export function instanceOfPreCheckInRulesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PreCheckInRulesToBeChangedFromJSON(json: any): PreCheckInRulesToBeChanged {
    return PreCheckInRulesToBeChangedFromJSONTyped(json, false);
}

export function PreCheckInRulesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreCheckInRulesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'preCheckInRules': !exists(json, 'preCheckInRules') ? undefined : ((json['preCheckInRules'] as Array<any>).map(PreCheckInRuleTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PreCheckInRulesToBeChangedToJSON(value?: PreCheckInRulesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'preCheckInRules': value.preCheckInRules === undefined ? undefined : ((value.preCheckInRules as Array<any>).map(PreCheckInRuleTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

