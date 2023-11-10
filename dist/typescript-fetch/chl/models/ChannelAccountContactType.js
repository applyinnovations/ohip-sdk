"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelAccountContactTypeToJSON = exports.ChannelAccountContactTypeFromJSONTyped = exports.ChannelAccountContactTypeFromJSON = exports.instanceOfChannelAccountContactType = void 0;
const runtime_1 = require("../runtime");
const ChannelAccountContactTypeEmails_1 = require("./ChannelAccountContactTypeEmails");
const ChannelAccountContactTypeTelephones_1 = require("./ChannelAccountContactTypeTelephones");
/**
 * Check if a given object implements the ChannelAccountContactType interface.
 */
function instanceOfChannelAccountContactType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelAccountContactType = instanceOfChannelAccountContactType;
function ChannelAccountContactTypeFromJSON(json) {
    return ChannelAccountContactTypeFromJSONTyped(json, false);
}
exports.ChannelAccountContactTypeFromJSON = ChannelAccountContactTypeFromJSON;
function ChannelAccountContactTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'emails': !(0, runtime_1.exists)(json, 'emails') ? undefined : (0, ChannelAccountContactTypeEmails_1.ChannelAccountContactTypeEmailsFromJSON)(json['emails']),
        'telephones': !(0, runtime_1.exists)(json, 'telephones') ? undefined : (0, ChannelAccountContactTypeTelephones_1.ChannelAccountContactTypeTelephonesFromJSON)(json['telephones']),
    };
}
exports.ChannelAccountContactTypeFromJSONTyped = ChannelAccountContactTypeFromJSONTyped;
function ChannelAccountContactTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'emails': (0, ChannelAccountContactTypeEmails_1.ChannelAccountContactTypeEmailsToJSON)(value.emails),
        'telephones': (0, ChannelAccountContactTypeTelephones_1.ChannelAccountContactTypeTelephonesToJSON)(value.telephones),
    };
}
exports.ChannelAccountContactTypeToJSON = ChannelAccountContactTypeToJSON;
