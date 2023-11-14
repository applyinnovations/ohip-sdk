"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSpaceAttributesTypeToJSON = exports.EventSpaceAttributesTypeFromJSONTyped = exports.EventSpaceAttributesTypeFromJSON = exports.instanceOfEventSpaceAttributesType = void 0;
const runtime_1 = require("../runtime");
const SpaceAreaType_1 = require("./SpaceAreaType");
/**
 * Check if a given object implements the EventSpaceAttributesType interface.
 */
function instanceOfEventSpaceAttributesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventSpaceAttributesType = instanceOfEventSpaceAttributesType;
function EventSpaceAttributesTypeFromJSON(json) {
    return EventSpaceAttributesTypeFromJSONTyped(json, false);
}
exports.EventSpaceAttributesTypeFromJSON = EventSpaceAttributesTypeFromJSON;
function EventSpaceAttributesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alternate': !(0, runtime_1.exists)(json, 'alternate') ? undefined : json['alternate'],
        'comboElement': !(0, runtime_1.exists)(json, 'comboElement') ? undefined : json['comboElement'],
        'comboRoom': !(0, runtime_1.exists)(json, 'comboRoom') ? undefined : json['comboRoom'],
        'comboSpace': !(0, runtime_1.exists)(json, 'comboSpace') ? undefined : json['comboSpace'],
        'maximumOccupancy': !(0, runtime_1.exists)(json, 'maximumOccupancy') ? undefined : json['maximumOccupancy'],
        'shareable': !(0, runtime_1.exists)(json, 'shareable') ? undefined : json['shareable'],
        'spaceArea': !(0, runtime_1.exists)(json, 'spaceArea') ? undefined : (0, SpaceAreaType_1.SpaceAreaTypeFromJSON)(json['spaceArea']),
    };
}
exports.EventSpaceAttributesTypeFromJSONTyped = EventSpaceAttributesTypeFromJSONTyped;
function EventSpaceAttributesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alternate': value.alternate,
        'comboElement': value.comboElement,
        'comboRoom': value.comboRoom,
        'comboSpace': value.comboSpace,
        'maximumOccupancy': value.maximumOccupancy,
        'shareable': value.shareable,
        'spaceArea': (0, SpaceAreaType_1.SpaceAreaTypeToJSON)(value.spaceArea),
    };
}
exports.EventSpaceAttributesTypeToJSON = EventSpaceAttributesTypeToJSON;