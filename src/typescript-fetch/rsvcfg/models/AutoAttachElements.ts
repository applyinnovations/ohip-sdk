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
import type { AutoAttachRuleType } from './AutoAttachRuleType';
import {
    AutoAttachRuleTypeFromJSON,
    AutoAttachRuleTypeFromJSONTyped,
    AutoAttachRuleTypeToJSON,
} from './AutoAttachRuleType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Add configuration rule(s) that specify the elements to be automatically attached to the reservation.
 * @export
 * @interface AutoAttachElements
 */
export interface AutoAttachElements {
    /**
     * Auto attachment rule details.
     * @type {Array<AutoAttachRuleType>}
     * @memberof AutoAttachElements
     */
    autoAttachRules?: Array<AutoAttachRuleType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AutoAttachElements
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AutoAttachElements
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AutoAttachElements interface.
 */
export function instanceOfAutoAttachElements(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoAttachElementsFromJSON(json: any): AutoAttachElements {
    return AutoAttachElementsFromJSONTyped(json, false);
}

export function AutoAttachElementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoAttachElements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoAttachRules': !exists(json, 'autoAttachRules') ? undefined : ((json['autoAttachRules'] as Array<any>).map(AutoAttachRuleTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AutoAttachElementsToJSON(value?: AutoAttachElements | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoAttachRules': value.autoAttachRules === undefined ? undefined : ((value.autoAttachRules as Array<any>).map(AutoAttachRuleTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
