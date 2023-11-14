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
exports.EventNoteTypeToJSON = exports.EventNoteTypeFromJSONTyped = exports.EventNoteTypeFromJSON = exports.instanceOfEventNoteType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the EventNoteType interface.
 */
function instanceOfEventNoteType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEventNoteType = instanceOfEventNoteType;
function EventNoteTypeFromJSON(json) {
    return EventNoteTypeFromJSONTyped(json, false);
}
exports.EventNoteTypeFromJSON = EventNoteTypeFromJSON;
function EventNoteTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'comment': !(0, runtime_1.exists)(json, 'comment') ? undefined : json['comment'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'internal': !(0, runtime_1.exists)(json, 'internal') ? undefined : json['internal'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'noteCode': !(0, runtime_1.exists)(json, 'noteCode') ? undefined : json['noteCode'],
        'noteId': !(0, runtime_1.exists)(json, 'noteId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['noteId']),
        'noteTitle': !(0, runtime_1.exists)(json, 'noteTitle') ? undefined : json['noteTitle'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
    };
}
exports.EventNoteTypeFromJSONTyped = EventNoteTypeFromJSONTyped;
function EventNoteTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'comment': value.comment,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'internal': value.internal,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'noteCode': value.noteCode,
        'noteId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.noteId),
        'noteTitle': value.noteTitle,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substring(0, 10)),
        'sequence': value.sequence,
    };
}
exports.EventNoteTypeToJSON = EventNoteTypeToJSON;