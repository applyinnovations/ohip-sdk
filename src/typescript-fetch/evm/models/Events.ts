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
import type { BlocksType } from './BlocksType';
import {
    BlocksTypeFromJSON,
    BlocksTypeFromJSONTyped,
    BlocksTypeToJSON,
} from './BlocksType';
import type { EventSummariesInfoType } from './EventSummariesInfoType';
import {
    EventSummariesInfoTypeFromJSON,
    EventSummariesInfoTypeFromJSONTyped,
    EventSummariesInfoTypeToJSON,
} from './EventSummariesInfoType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MasterInfoType } from './MasterInfoType';
import {
    MasterInfoTypeFromJSON,
    MasterInfoTypeFromJSONTyped,
    MasterInfoTypeToJSON,
} from './MasterInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching events.
 * @export
 * @interface Events
 */
export interface Events {
    /**
     * 
     * @type {BlocksType}
     * @memberof Events
     */
    blockInfo?: BlocksType;
    /**
     * 
     * @type {EventSummariesInfoType}
     * @memberof Events
     */
    eventSummaries?: EventSummariesInfoType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof Events
     */
    links?: Array<InstanceLink>;
    /**
     * Refer to Generic common types document
     * @type {Array<MasterInfoType>}
     * @memberof Events
     */
    masterInfoList?: Array<MasterInfoType>;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof Events
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the Events interface.
 */
export function instanceOfEvents(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventsFromJSON(json: any): Events {
    return EventsFromJSONTyped(json, false);
}

export function EventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Events {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockInfo': !exists(json, 'blockInfo') ? undefined : BlocksTypeFromJSON(json['blockInfo']),
        'eventSummaries': !exists(json, 'eventSummaries') ? undefined : EventSummariesInfoTypeFromJSON(json['eventSummaries']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'masterInfoList': !exists(json, 'masterInfoList') ? undefined : ((json['masterInfoList'] as Array<any>).map(MasterInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function EventsToJSON(value?: Events | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockInfo': BlocksTypeToJSON(value.blockInfo),
        'eventSummaries': EventSummariesInfoTypeToJSON(value.eventSummaries),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'masterInfoList': value.masterInfoList === undefined ? undefined : ((value.masterInfoList as Array<any>).map(MasterInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

