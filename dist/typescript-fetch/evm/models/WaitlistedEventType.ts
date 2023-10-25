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
import type { BlockType } from './BlockType';
import {
    BlockTypeFromJSON,
    BlockTypeFromJSONTyped,
    BlockTypeToJSON,
} from './BlockType';
import type { CateringEventResourceType } from './CateringEventResourceType';
import {
    CateringEventResourceTypeFromJSON,
    CateringEventResourceTypeFromJSONTyped,
    CateringEventResourceTypeToJSON,
} from './CateringEventResourceType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { EventDetailType } from './EventDetailType';
import {
    EventDetailTypeFromJSON,
    EventDetailTypeFromJSONTyped,
    EventDetailTypeToJSON,
} from './EventDetailType';
import type { EventFunctionSpaceType } from './EventFunctionSpaceType';
import {
    EventFunctionSpaceTypeFromJSON,
    EventFunctionSpaceTypeFromJSONTyped,
    EventFunctionSpaceTypeToJSON,
} from './EventFunctionSpaceType';
import type { EventInfoType } from './EventInfoType';
import {
    EventInfoTypeFromJSON,
    EventInfoTypeFromJSONTyped,
    EventInfoTypeToJSON,
} from './EventInfoType';
import type { EventNoteType } from './EventNoteType';
import {
    EventNoteTypeFromJSON,
    EventNoteTypeFromJSONTyped,
    EventNoteTypeToJSON,
} from './EventNoteType';
import type { EventPrimaryInfoType } from './EventPrimaryInfoType';
import {
    EventPrimaryInfoTypeFromJSON,
    EventPrimaryInfoTypeFromJSONTyped,
    EventPrimaryInfoTypeToJSON,
} from './EventPrimaryInfoType';
import type { EventProcessInstructionsType } from './EventProcessInstructionsType';
import {
    EventProcessInstructionsTypeFromJSON,
    EventProcessInstructionsTypeFromJSONTyped,
    EventProcessInstructionsTypeToJSON,
} from './EventProcessInstructionsType';
import type { EventRevenuesInformationType } from './EventRevenuesInformationType';
import {
    EventRevenuesInformationTypeFromJSON,
    EventRevenuesInformationTypeFromJSONTyped,
    EventRevenuesInformationTypeToJSON,
} from './EventRevenuesInformationType';
import type { IndicatorType } from './IndicatorType';
import {
    IndicatorTypeFromJSON,
    IndicatorTypeFromJSONTyped,
    IndicatorTypeToJSON,
} from './IndicatorType';
import type { LightEventDetailType } from './LightEventDetailType';
import {
    LightEventDetailTypeFromJSON,
    LightEventDetailTypeFromJSONTyped,
    LightEventDetailTypeToJSON,
} from './LightEventDetailType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Catering Event information.
 * @export
 * @interface WaitlistedEventType
 */
export interface WaitlistedEventType {
    /**
     * Pertain event few information about events.
     * @type {Array<LightEventDetailType>}
     * @memberof WaitlistedEventType
     */
    altEventsDetail?: Array<LightEventDetailType>;
    /**
     * Pertain event information.
     * @type {Array<EventInfoType>}
     * @memberof WaitlistedEventType
     */
    currentEventsHoldingFunctionSpace?: Array<EventInfoType>;
    /**
     * 
     * @type {BlockType}
     * @memberof WaitlistedEventType
     */
    eventBlockInfo?: BlockType;
    /**
     * 
     * @type {EventDetailType}
     * @memberof WaitlistedEventType
     */
    eventDetail?: EventDetailType;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof WaitlistedEventType
     */
    eventIndicators?: Array<IndicatorType>;
    /**
     * Pertain event information.
     * @type {Array<EventNoteType>}
     * @memberof WaitlistedEventType
     */
    eventNotes?: Array<EventNoteType>;
    /**
     * 
     * @type {EventPrimaryInfoType}
     * @memberof WaitlistedEventType
     */
    eventPrimaryInfo?: EventPrimaryInfoType;
    /**
     * Event resources information.
     * @type {Array<CateringEventResourceType>}
     * @memberof WaitlistedEventType
     */
    eventResources?: Array<CateringEventResourceType>;
    /**
     * 
     * @type {EventRevenuesInformationType}
     * @memberof WaitlistedEventType
     */
    eventRevenues?: EventRevenuesInformationType;
    /**
     * 
     * @type {EventFunctionSpaceType}
     * @memberof WaitlistedEventType
     */
    functionSpaceInformation?: EventFunctionSpaceType;
    /**
     * 
     * @type {LightEventDetailType}
     * @memberof WaitlistedEventType
     */
    masterEventDetail?: LightEventDetailType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof WaitlistedEventType
     */
    onTheBooksRevenue?: CurrencyAmountType;
    /**
     * Waitlist priority to determine event that gets function space when it becomes available.
     * @type {number}
     * @memberof WaitlistedEventType
     */
    priority?: number;
    /**
     * 
     * @type {EventProcessInstructionsType}
     * @memberof WaitlistedEventType
     */
    processInstructions?: EventProcessInstructionsType;
    /**
     * Pertain event few information about events.
     * @type {Array<LightEventDetailType>}
     * @memberof WaitlistedEventType
     */
    subEventsDetail?: Array<LightEventDetailType>;
    /**
     * Date when waitlist was modified.
     * @type {Date}
     * @memberof WaitlistedEventType
     */
    updateDate?: Date;
    /**
     * User id who modified the waitlist record.
     * @type {number}
     * @memberof WaitlistedEventType
     */
    updateUser?: number;
    /**
     * Date when function space got waitlisted.
     * @type {Date}
     * @memberof WaitlistedEventType
     */
    waitlistDate?: Date;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof WaitlistedEventType
     */
    waitlistId?: UniqueIDType;
}

/**
 * Check if a given object implements the WaitlistedEventType interface.
 */
export function instanceOfWaitlistedEventType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WaitlistedEventTypeFromJSON(json: any): WaitlistedEventType {
    return WaitlistedEventTypeFromJSONTyped(json, false);
}

export function WaitlistedEventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaitlistedEventType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'altEventsDetail': !exists(json, 'altEventsDetail') ? undefined : ((json['altEventsDetail'] as Array<any>).map(LightEventDetailTypeFromJSON)),
        'currentEventsHoldingFunctionSpace': !exists(json, 'currentEventsHoldingFunctionSpace') ? undefined : ((json['currentEventsHoldingFunctionSpace'] as Array<any>).map(EventInfoTypeFromJSON)),
        'eventBlockInfo': !exists(json, 'eventBlockInfo') ? undefined : BlockTypeFromJSON(json['eventBlockInfo']),
        'eventDetail': !exists(json, 'eventDetail') ? undefined : EventDetailTypeFromJSON(json['eventDetail']),
        'eventIndicators': !exists(json, 'eventIndicators') ? undefined : ((json['eventIndicators'] as Array<any>).map(IndicatorTypeFromJSON)),
        'eventNotes': !exists(json, 'eventNotes') ? undefined : ((json['eventNotes'] as Array<any>).map(EventNoteTypeFromJSON)),
        'eventPrimaryInfo': !exists(json, 'eventPrimaryInfo') ? undefined : EventPrimaryInfoTypeFromJSON(json['eventPrimaryInfo']),
        'eventResources': !exists(json, 'eventResources') ? undefined : ((json['eventResources'] as Array<any>).map(CateringEventResourceTypeFromJSON)),
        'eventRevenues': !exists(json, 'eventRevenues') ? undefined : EventRevenuesInformationTypeFromJSON(json['eventRevenues']),
        'functionSpaceInformation': !exists(json, 'functionSpaceInformation') ? undefined : EventFunctionSpaceTypeFromJSON(json['functionSpaceInformation']),
        'masterEventDetail': !exists(json, 'masterEventDetail') ? undefined : LightEventDetailTypeFromJSON(json['masterEventDetail']),
        'onTheBooksRevenue': !exists(json, 'onTheBooksRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['onTheBooksRevenue']),
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'processInstructions': !exists(json, 'processInstructions') ? undefined : EventProcessInstructionsTypeFromJSON(json['processInstructions']),
        'subEventsDetail': !exists(json, 'subEventsDetail') ? undefined : ((json['subEventsDetail'] as Array<any>).map(LightEventDetailTypeFromJSON)),
        'updateDate': !exists(json, 'updateDate') ? undefined : (new Date(json['updateDate'])),
        'updateUser': !exists(json, 'updateUser') ? undefined : json['updateUser'],
        'waitlistDate': !exists(json, 'waitlistDate') ? undefined : (new Date(json['waitlistDate'])),
        'waitlistId': !exists(json, 'waitlistId') ? undefined : UniqueIDTypeFromJSON(json['waitlistId']),
    };
}

export function WaitlistedEventTypeToJSON(value?: WaitlistedEventType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'altEventsDetail': value.altEventsDetail === undefined ? undefined : ((value.altEventsDetail as Array<any>).map(LightEventDetailTypeToJSON)),
        'currentEventsHoldingFunctionSpace': value.currentEventsHoldingFunctionSpace === undefined ? undefined : ((value.currentEventsHoldingFunctionSpace as Array<any>).map(EventInfoTypeToJSON)),
        'eventBlockInfo': BlockTypeToJSON(value.eventBlockInfo),
        'eventDetail': EventDetailTypeToJSON(value.eventDetail),
        'eventIndicators': value.eventIndicators === undefined ? undefined : ((value.eventIndicators as Array<any>).map(IndicatorTypeToJSON)),
        'eventNotes': value.eventNotes === undefined ? undefined : ((value.eventNotes as Array<any>).map(EventNoteTypeToJSON)),
        'eventPrimaryInfo': EventPrimaryInfoTypeToJSON(value.eventPrimaryInfo),
        'eventResources': value.eventResources === undefined ? undefined : ((value.eventResources as Array<any>).map(CateringEventResourceTypeToJSON)),
        'eventRevenues': EventRevenuesInformationTypeToJSON(value.eventRevenues),
        'functionSpaceInformation': EventFunctionSpaceTypeToJSON(value.functionSpaceInformation),
        'masterEventDetail': LightEventDetailTypeToJSON(value.masterEventDetail),
        'onTheBooksRevenue': CurrencyAmountTypeToJSON(value.onTheBooksRevenue),
        'priority': value.priority,
        'processInstructions': EventProcessInstructionsTypeToJSON(value.processInstructions),
        'subEventsDetail': value.subEventsDetail === undefined ? undefined : ((value.subEventsDetail as Array<any>).map(LightEventDetailTypeToJSON)),
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate.toISOString().substr(0,10)),
        'updateUser': value.updateUser,
        'waitlistDate': value.waitlistDate === undefined ? undefined : (value.waitlistDate.toISOString().substr(0,10)),
        'waitlistId': UniqueIDTypeToJSON(value.waitlistId),
    };
}

