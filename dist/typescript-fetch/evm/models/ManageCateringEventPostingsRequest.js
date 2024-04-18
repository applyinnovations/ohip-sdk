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
exports.ManageCateringEventPostingsRequestToJSON = exports.ManageCateringEventPostingsRequestFromJSONTyped = exports.ManageCateringEventPostingsRequestFromJSON = exports.instanceOfManageCateringEventPostingsRequest = void 0;
const runtime_1 = require("../runtime");
const CateringEventPostingsType_1 = require("./CateringEventPostingsType");
const InstanceLink_1 = require("./InstanceLink");
const ReservationSnapshotsType_1 = require("./ReservationSnapshotsType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ManageCateringEventPostingsRequest interface.
 */
function instanceOfManageCateringEventPostingsRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfManageCateringEventPostingsRequest = instanceOfManageCateringEventPostingsRequest;
function ManageCateringEventPostingsRequestFromJSON(json) {
    return ManageCateringEventPostingsRequestFromJSONTyped(json, false);
}
exports.ManageCateringEventPostingsRequestFromJSON = ManageCateringEventPostingsRequestFromJSON;
function ManageCateringEventPostingsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cateringEventPostings': !(0, runtime_1.exists)(json, 'cateringEventPostings') ? undefined : (0, CateringEventPostingsType_1.CateringEventPostingsTypeFromJSON)(json['cateringEventPostings']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'postingMasterReservations': !(0, runtime_1.exists)(json, 'postingMasterReservations') ? undefined : (0, ReservationSnapshotsType_1.ReservationSnapshotsTypeFromJSON)(json['postingMasterReservations']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ManageCateringEventPostingsRequestFromJSONTyped = ManageCateringEventPostingsRequestFromJSONTyped;
function ManageCateringEventPostingsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cateringEventPostings': (0, CateringEventPostingsType_1.CateringEventPostingsTypeToJSON)(value.cateringEventPostings),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'postingMasterReservations': (0, ReservationSnapshotsType_1.ReservationSnapshotsTypeToJSON)(value.postingMasterReservations),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ManageCateringEventPostingsRequestToJSON = ManageCateringEventPostingsRequestToJSON;