/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { WaitlistedEventProcessingInstructionsType } from './WaitlistedEventProcessingInstructionsType';
import {
    WaitlistedEventProcessingInstructionsTypeFromJSON,
    WaitlistedEventProcessingInstructionsTypeFromJSONTyped,
    WaitlistedEventProcessingInstructionsTypeToJSON,
} from './WaitlistedEventProcessingInstructionsType';
import type { WaitlistedEventType } from './WaitlistedEventType';
import {
    WaitlistedEventTypeFromJSON,
    WaitlistedEventTypeFromJSONTyped,
    WaitlistedEventTypeToJSON,
} from './WaitlistedEventType';
import type { WaitlistedEventsSearchType } from './WaitlistedEventsSearchType';
import {
    WaitlistedEventsSearchTypeFromJSON,
    WaitlistedEventsSearchTypeFromJSONTyped,
    WaitlistedEventsSearchTypeToJSON,
} from './WaitlistedEventsSearchType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for managing waitlisted catering events.
 * @export
 * @interface ManageWaitlistedEvents
 */
export interface ManageWaitlistedEvents {
    /**
     * 
     * @type {WaitlistedEventsSearchType}
     * @memberof ManageWaitlistedEvents
     */
    criteria?: WaitlistedEventsSearchType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ManageWaitlistedEvents
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {WaitlistedEventProcessingInstructionsType}
     * @memberof ManageWaitlistedEvents
     */
    processingInstructions?: WaitlistedEventProcessingInstructionsType;
    /**
     * Pertain waitlisted event Information.
     * @type {Array<WaitlistedEventType>}
     * @memberof ManageWaitlistedEvents
     */
    waitlistedEvents?: Array<WaitlistedEventType>;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof ManageWaitlistedEvents
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ManageWaitlistedEvents interface.
 */
export function instanceOfManageWaitlistedEvents(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ManageWaitlistedEventsFromJSON(json: any): ManageWaitlistedEvents {
    return ManageWaitlistedEventsFromJSONTyped(json, false);
}

export function ManageWaitlistedEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManageWaitlistedEvents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : WaitlistedEventsSearchTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'processingInstructions': !exists(json, 'processingInstructions') ? undefined : WaitlistedEventProcessingInstructionsTypeFromJSON(json['processingInstructions']),
        'waitlistedEvents': !exists(json, 'waitlistedEvents') ? undefined : ((json['waitlistedEvents'] as Array<any>).map(WaitlistedEventTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ManageWaitlistedEventsToJSON(value?: ManageWaitlistedEvents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': WaitlistedEventsSearchTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'processingInstructions': WaitlistedEventProcessingInstructionsTypeToJSON(value.processingInstructions),
        'waitlistedEvents': value.waitlistedEvents === undefined ? undefined : ((value.waitlistedEvents as Array<any>).map(WaitlistedEventTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

