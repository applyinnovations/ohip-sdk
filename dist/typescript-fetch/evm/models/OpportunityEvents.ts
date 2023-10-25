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
import type { OpportunityBlockInfoType } from './OpportunityBlockInfoType';
import {
    OpportunityBlockInfoTypeFromJSON,
    OpportunityBlockInfoTypeFromJSONTyped,
    OpportunityBlockInfoTypeToJSON,
} from './OpportunityBlockInfoType';
import type { OpportunityEventInfoType } from './OpportunityEventInfoType';
import {
    OpportunityEventInfoTypeFromJSON,
    OpportunityEventInfoTypeFromJSONTyped,
    OpportunityEventInfoTypeToJSON,
} from './OpportunityEventInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Object containing details of the catering events which will be added to the Opportunity Block.
 * @export
 * @interface OpportunityEvents
 */
export interface OpportunityEvents {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof OpportunityEvents
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {OpportunityBlockInfoType}
     * @memberof OpportunityEvents
     */
    opportunityBlockInfo?: OpportunityBlockInfoType;
    /**
     * Catering Event information getting added for Opportunity Block.
     * @type {Array<OpportunityEventInfoType>}
     * @memberof OpportunityEvents
     */
    opportunityEventDetails?: Array<OpportunityEventInfoType>;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof OpportunityEvents
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the OpportunityEvents interface.
 */
export function instanceOfOpportunityEvents(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OpportunityEventsFromJSON(json: any): OpportunityEvents {
    return OpportunityEventsFromJSONTyped(json, false);
}

export function OpportunityEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpportunityEvents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'opportunityBlockInfo': !exists(json, 'opportunityBlockInfo') ? undefined : OpportunityBlockInfoTypeFromJSON(json['opportunityBlockInfo']),
        'opportunityEventDetails': !exists(json, 'opportunityEventDetails') ? undefined : ((json['opportunityEventDetails'] as Array<any>).map(OpportunityEventInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function OpportunityEventsToJSON(value?: OpportunityEvents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'opportunityBlockInfo': OpportunityBlockInfoTypeToJSON(value.opportunityBlockInfo),
        'opportunityEventDetails': value.opportunityEventDetails === undefined ? undefined : ((value.opportunityEventDetails as Array<any>).map(OpportunityEventInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

