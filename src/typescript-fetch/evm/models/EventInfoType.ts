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

/**
 * Catering Event information.
 * @export
 * @interface EventInfoType
 */
export interface EventInfoType {
    /**
     * Pertain event few information about events.
     * @type {Array<LightEventDetailType>}
     * @memberof EventInfoType
     */
    altEventsDetail?: Array<LightEventDetailType>;
    /**
     * 
     * @type {BlockType}
     * @memberof EventInfoType
     */
    eventBlockInfo?: BlockType;
    /**
     * 
     * @type {EventDetailType}
     * @memberof EventInfoType
     */
    eventDetail?: EventDetailType;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof EventInfoType
     */
    eventIndicators?: Array<IndicatorType>;
    /**
     * Pertain event information.
     * @type {Array<EventNoteType>}
     * @memberof EventInfoType
     */
    eventNotes?: Array<EventNoteType>;
    /**
     * 
     * @type {EventPrimaryInfoType}
     * @memberof EventInfoType
     */
    eventPrimaryInfo?: EventPrimaryInfoType;
    /**
     * Event resources information.
     * @type {Array<CateringEventResourceType>}
     * @memberof EventInfoType
     */
    eventResources?: Array<CateringEventResourceType>;
    /**
     * 
     * @type {EventRevenuesInformationType}
     * @memberof EventInfoType
     */
    eventRevenues?: EventRevenuesInformationType;
    /**
     * 
     * @type {EventFunctionSpaceType}
     * @memberof EventInfoType
     */
    functionSpaceInformation?: EventFunctionSpaceType;
    /**
     * 
     * @type {LightEventDetailType}
     * @memberof EventInfoType
     */
    masterEventDetail?: LightEventDetailType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof EventInfoType
     */
    onTheBooksRevenue?: CurrencyAmountType;
    /**
     * 
     * @type {EventProcessInstructionsType}
     * @memberof EventInfoType
     */
    processInstructions?: EventProcessInstructionsType;
    /**
     * Pertain event few information about events.
     * @type {Array<LightEventDetailType>}
     * @memberof EventInfoType
     */
    subEventsDetail?: Array<LightEventDetailType>;
}

/**
 * Check if a given object implements the EventInfoType interface.
 */
export function instanceOfEventInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventInfoTypeFromJSON(json: any): EventInfoType {
    return EventInfoTypeFromJSONTyped(json, false);
}

export function EventInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'altEventsDetail': !exists(json, 'altEventsDetail') ? undefined : ((json['altEventsDetail'] as Array<any>).map(LightEventDetailTypeFromJSON)),
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
        'processInstructions': !exists(json, 'processInstructions') ? undefined : EventProcessInstructionsTypeFromJSON(json['processInstructions']),
        'subEventsDetail': !exists(json, 'subEventsDetail') ? undefined : ((json['subEventsDetail'] as Array<any>).map(LightEventDetailTypeFromJSON)),
    };
}

export function EventInfoTypeToJSON(value?: EventInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'altEventsDetail': value.altEventsDetail === undefined ? undefined : ((value.altEventsDetail as Array<any>).map(LightEventDetailTypeToJSON)),
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
        'processInstructions': EventProcessInstructionsTypeToJSON(value.processInstructions),
        'subEventsDetail': value.subEventsDetail === undefined ? undefined : ((value.subEventsDetail as Array<any>).map(LightEventDetailTypeToJSON)),
    };
}

