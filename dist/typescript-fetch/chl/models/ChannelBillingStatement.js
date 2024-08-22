"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelBillingStatementToJSON = exports.ChannelBillingStatementFromJSONTyped = exports.ChannelBillingStatementFromJSON = exports.instanceOfChannelBillingStatement = void 0;
const runtime_1 = require("../runtime");
const ChannelBillingStatementType_1 = require("./ChannelBillingStatementType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ChannelBillingStatement interface.
 */
function instanceOfChannelBillingStatement(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelBillingStatement = instanceOfChannelBillingStatement;
function ChannelBillingStatementFromJSON(json) {
    return ChannelBillingStatementFromJSONTyped(json, false);
}
exports.ChannelBillingStatementFromJSON = ChannelBillingStatementFromJSON;
function ChannelBillingStatementFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelBillingStatement': !(0, runtime_1.exists)(json, 'channelBillingStatement') ? undefined : (0, ChannelBillingStatementType_1.ChannelBillingStatementTypeFromJSON)(json['channelBillingStatement']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ChannelBillingStatementFromJSONTyped = ChannelBillingStatementFromJSONTyped;
function ChannelBillingStatementToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelBillingStatement': (0, ChannelBillingStatementType_1.ChannelBillingStatementTypeToJSON)(value.channelBillingStatement),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ChannelBillingStatementToJSON = ChannelBillingStatementToJSON;
