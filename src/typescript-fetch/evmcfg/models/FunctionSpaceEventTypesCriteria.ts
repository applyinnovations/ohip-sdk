/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EventTypesType } from './EventTypesType';
import {
    EventTypesTypeFromJSON,
    EventTypesTypeFromJSONTyped,
    EventTypesTypeToJSON,
} from './EventTypesType';
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
 * Request object to create new Function Space Event Types.
 * @export
 * @interface FunctionSpaceEventTypesCriteria
 */
export interface FunctionSpaceEventTypesCriteria {
    /**
     * 
     * @type {EventTypesType}
     * @memberof FunctionSpaceEventTypesCriteria
     */
    eventTypes?: EventTypesType;
    /**
     * 
     * @type {Links}
     * @memberof FunctionSpaceEventTypesCriteria
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof FunctionSpaceEventTypesCriteria
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the FunctionSpaceEventTypesCriteria interface.
 */
export function instanceOfFunctionSpaceEventTypesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FunctionSpaceEventTypesCriteriaFromJSON(json: any): FunctionSpaceEventTypesCriteria {
    return FunctionSpaceEventTypesCriteriaFromJSONTyped(json, false);
}

export function FunctionSpaceEventTypesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceEventTypesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventTypes': !exists(json, 'eventTypes') ? undefined : EventTypesTypeFromJSON(json['eventTypes']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function FunctionSpaceEventTypesCriteriaToJSON(value?: FunctionSpaceEventTypesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eventTypes': EventTypesTypeToJSON(value.eventTypes),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
