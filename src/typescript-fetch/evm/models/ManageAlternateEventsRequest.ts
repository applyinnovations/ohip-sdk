/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EventInfoType } from './EventInfoType';
import {
    EventInfoTypeFromJSON,
    EventInfoTypeFromJSONTyped,
    EventInfoTypeToJSON,
} from './EventInfoType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ManageAlternateEventsInstructionType } from './ManageAlternateEventsInstructionType';
import {
    ManageAlternateEventsInstructionTypeFromJSON,
    ManageAlternateEventsInstructionTypeFromJSONTyped,
    ManageAlternateEventsInstructionTypeToJSON,
} from './ManageAlternateEventsInstructionType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface ManageAlternateEventsRequest
 */
export interface ManageAlternateEventsRequest {
    /**
     * Pertain event information.
     * @type {Array<EventInfoType>}
     * @memberof ManageAlternateEventsRequest
     */
    alternateEvents?: Array<EventInfoType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ManageAlternateEventsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ManageAlternateEventsInstructionType}
     * @memberof ManageAlternateEventsRequest
     */
    manageAlternateEventsInstruction?: ManageAlternateEventsInstructionType;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof ManageAlternateEventsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ManageAlternateEventsRequest interface.
 */
export function instanceOfManageAlternateEventsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ManageAlternateEventsRequestFromJSON(json: any): ManageAlternateEventsRequest {
    return ManageAlternateEventsRequestFromJSONTyped(json, false);
}

export function ManageAlternateEventsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageAlternateEventsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternateEvents': !exists(json, 'alternateEvents') ? undefined : ((json['alternateEvents'] as Array<any>).map(EventInfoTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'manageAlternateEventsInstruction': !exists(json, 'manageAlternateEventsInstruction') ? undefined : ManageAlternateEventsInstructionTypeFromJSON(json['manageAlternateEventsInstruction']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ManageAlternateEventsRequestToJSON(value?: ManageAlternateEventsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternateEvents': value.alternateEvents === undefined ? undefined : ((value.alternateEvents as Array<any>).map(EventInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'manageAlternateEventsInstruction': ManageAlternateEventsInstructionTypeToJSON(value.manageAlternateEventsInstruction),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

