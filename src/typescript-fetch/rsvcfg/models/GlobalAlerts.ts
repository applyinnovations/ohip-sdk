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
import type { GlobalAlertsType } from './GlobalAlertsType';
import {
    GlobalAlertsTypeFromJSON,
    GlobalAlertsTypeFromJSONTyped,
    GlobalAlertsTypeToJSON,
} from './GlobalAlertsType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for creating a new Global Alert.
 * @export
 * @interface GlobalAlerts
 */
export interface GlobalAlerts {
    /**
     * 
     * @type {GlobalAlertsType}
     * @memberof GlobalAlerts
     */
    globalAlerts?: GlobalAlertsType;
    /**
     * 
     * @type {Links}
     * @memberof GlobalAlerts
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof GlobalAlerts
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the GlobalAlerts interface.
 */
export function instanceOfGlobalAlerts(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GlobalAlertsFromJSON(json: any): GlobalAlerts {
    return GlobalAlertsFromJSONTyped(json, false);
}

export function GlobalAlertsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAlerts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'globalAlerts': !exists(json, 'globalAlerts') ? undefined : GlobalAlertsTypeFromJSON(json['globalAlerts']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function GlobalAlertsToJSON(value?: GlobalAlerts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'globalAlerts': GlobalAlertsTypeToJSON(value.globalAlerts),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
