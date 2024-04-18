"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventInfoTypeToJSON = exports.EventInfoTypeFromJSONTyped = exports.EventInfoTypeFromJSON = exports.instanceOfEventInfoType = void 0;
const runtime_1 = require("../runtime");
const BlockType_1 = require("./BlockType");
const CateringEventResourceType_1 = require("./CateringEventResourceType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const EventDetailType_1 = require("./EventDetailType");
const EventFunctionSpaceType_1 = require("./EventFunctionSpaceType");
const EventNoteType_1 = require("./EventNoteType");
const EventPrimaryInfoType_1 = require("./EventPrimaryInfoType");
const EventProcessInstructionsType_1 = require("./EventProcessInstructionsType");
const EventRevenuesInformationType_1 = require("./EventRevenuesInformationType");
const IndicatorType_1 = require("./IndicatorType");
const LightEventDetailType_1 = require("./LightEventDetailType");
/**
 * Check if a given object implements the EventInfoType interface.
 */
function instanceOfEventInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventInfoType = instanceOfEventInfoType;
function EventInfoTypeFromJSON(json) {
    return EventInfoTypeFromJSONTyped(json, false);
}
exports.EventInfoTypeFromJSON = EventInfoTypeFromJSON;
function EventInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'altEventsDetail': !(0, runtime_1.exists)(json, 'altEventsDetail') ? undefined : (json['altEventsDetail'].map(LightEventDetailType_1.LightEventDetailTypeFromJSON)),
        'eventBlockInfo': !(0, runtime_1.exists)(json, 'eventBlockInfo') ? undefined : (0, BlockType_1.BlockTypeFromJSON)(json['eventBlockInfo']),
        'eventDetail': !(0, runtime_1.exists)(json, 'eventDetail') ? undefined : (0, EventDetailType_1.EventDetailTypeFromJSON)(json['eventDetail']),
        'eventIndicators': !(0, runtime_1.exists)(json, 'eventIndicators') ? undefined : (json['eventIndicators'].map(IndicatorType_1.IndicatorTypeFromJSON)),
        'eventNotes': !(0, runtime_1.exists)(json, 'eventNotes') ? undefined : (json['eventNotes'].map(EventNoteType_1.EventNoteTypeFromJSON)),
        'eventPrimaryInfo': !(0, runtime_1.exists)(json, 'eventPrimaryInfo') ? undefined : (0, EventPrimaryInfoType_1.EventPrimaryInfoTypeFromJSON)(json['eventPrimaryInfo']),
        'eventResources': !(0, runtime_1.exists)(json, 'eventResources') ? undefined : (json['eventResources'].map(CateringEventResourceType_1.CateringEventResourceTypeFromJSON)),
        'eventRevenues': !(0, runtime_1.exists)(json, 'eventRevenues') ? undefined : (0, EventRevenuesInformationType_1.EventRevenuesInformationTypeFromJSON)(json['eventRevenues']),
        'functionSpaceInformation': !(0, runtime_1.exists)(json, 'functionSpaceInformation') ? undefined : (0, EventFunctionSpaceType_1.EventFunctionSpaceTypeFromJSON)(json['functionSpaceInformation']),
        'masterEventDetail': !(0, runtime_1.exists)(json, 'masterEventDetail') ? undefined : (0, LightEventDetailType_1.LightEventDetailTypeFromJSON)(json['masterEventDetail']),
        'onTheBooksRevenue': !(0, runtime_1.exists)(json, 'onTheBooksRevenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['onTheBooksRevenue']),
        'processInstructions': !(0, runtime_1.exists)(json, 'processInstructions') ? undefined : (0, EventProcessInstructionsType_1.EventProcessInstructionsTypeFromJSON)(json['processInstructions']),
        'subEventsDetail': !(0, runtime_1.exists)(json, 'subEventsDetail') ? undefined : (json['subEventsDetail'].map(LightEventDetailType_1.LightEventDetailTypeFromJSON)),
    };
}
exports.EventInfoTypeFromJSONTyped = EventInfoTypeFromJSONTyped;
function EventInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'altEventsDetail': value.altEventsDetail === undefined ? undefined : (value.altEventsDetail.map(LightEventDetailType_1.LightEventDetailTypeToJSON)),
        'eventBlockInfo': (0, BlockType_1.BlockTypeToJSON)(value.eventBlockInfo),
        'eventDetail': (0, EventDetailType_1.EventDetailTypeToJSON)(value.eventDetail),
        'eventIndicators': value.eventIndicators === undefined ? undefined : (value.eventIndicators.map(IndicatorType_1.IndicatorTypeToJSON)),
        'eventNotes': value.eventNotes === undefined ? undefined : (value.eventNotes.map(EventNoteType_1.EventNoteTypeToJSON)),
        'eventPrimaryInfo': (0, EventPrimaryInfoType_1.EventPrimaryInfoTypeToJSON)(value.eventPrimaryInfo),
        'eventResources': value.eventResources === undefined ? undefined : (value.eventResources.map(CateringEventResourceType_1.CateringEventResourceTypeToJSON)),
        'eventRevenues': (0, EventRevenuesInformationType_1.EventRevenuesInformationTypeToJSON)(value.eventRevenues),
        'functionSpaceInformation': (0, EventFunctionSpaceType_1.EventFunctionSpaceTypeToJSON)(value.functionSpaceInformation),
        'masterEventDetail': (0, LightEventDetailType_1.LightEventDetailTypeToJSON)(value.masterEventDetail),
        'onTheBooksRevenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.onTheBooksRevenue),
        'processInstructions': (0, EventProcessInstructionsType_1.EventProcessInstructionsTypeToJSON)(value.processInstructions),
        'subEventsDetail': value.subEventsDetail === undefined ? undefined : (value.subEventsDetail.map(LightEventDetailType_1.LightEventDetailTypeToJSON)),
    };
}
exports.EventInfoTypeToJSON = EventInfoTypeToJSON;