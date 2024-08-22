/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommissionProcessingAgentType } from './CommissionProcessingAgentType';
import {
    CommissionProcessingAgentTypeFromJSON,
    CommissionProcessingAgentTypeFromJSONTyped,
    CommissionProcessingAgentTypeToJSON,
} from './CommissionProcessingAgentType';
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
 * Request Type for setting instructions for commission processing on Agent or Reservation level.
 * @export
 * @interface SetProcessingInstructions
 */
export interface SetProcessingInstructions {
    /**
     * Commission processing instructions for an Agent.
     * @type {Array<CommissionProcessingAgentType>}
     * @memberof SetProcessingInstructions
     */
    agents?: Array<CommissionProcessingAgentType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof SetProcessingInstructions
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SetProcessingInstructions
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the SetProcessingInstructions interface.
 */
export function instanceOfSetProcessingInstructions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SetProcessingInstructionsFromJSON(json: any): SetProcessingInstructions {
    return SetProcessingInstructionsFromJSONTyped(json, false);
}

export function SetProcessingInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetProcessingInstructions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agents': !exists(json, 'agents') ? undefined : ((json['agents'] as Array<any>).map(CommissionProcessingAgentTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function SetProcessingInstructionsToJSON(value?: SetProcessingInstructions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agents': value.agents === undefined ? undefined : ((value.agents as Array<any>).map(CommissionProcessingAgentTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

