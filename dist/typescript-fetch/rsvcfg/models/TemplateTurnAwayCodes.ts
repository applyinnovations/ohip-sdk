/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { TemplateTurnAwayCodeType } from './TemplateTurnAwayCodeType';
import {
    TemplateTurnAwayCodeTypeFromJSON,
    TemplateTurnAwayCodeTypeFromJSONTyped,
    TemplateTurnAwayCodeTypeToJSON,
} from './TemplateTurnAwayCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching template turnaway codes.
 * @export
 * @interface TemplateTurnAwayCodes
 */
export interface TemplateTurnAwayCodes {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateTurnAwayCodes
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of template turnaway codes
     * @type {Array<TemplateTurnAwayCodeType>}
     * @memberof TemplateTurnAwayCodes
     */
    turnAwayCodes?: Array<TemplateTurnAwayCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateTurnAwayCodes
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateTurnAwayCodes interface.
 */
export function instanceOfTemplateTurnAwayCodes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateTurnAwayCodesFromJSON(json: any): TemplateTurnAwayCodes {
    return TemplateTurnAwayCodesFromJSONTyped(json, false);
}

export function TemplateTurnAwayCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateTurnAwayCodes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'turnAwayCodes': !exists(json, 'turnAwayCodes') ? undefined : ((json['turnAwayCodes'] as Array<any>).map(TemplateTurnAwayCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateTurnAwayCodesToJSON(value?: TemplateTurnAwayCodes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'turnAwayCodes': value.turnAwayCodes === undefined ? undefined : ((value.turnAwayCodes as Array<any>).map(TemplateTurnAwayCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

