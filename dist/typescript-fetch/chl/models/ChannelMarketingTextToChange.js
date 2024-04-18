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
exports.ChannelMarketingTextToChangeToJSON = exports.ChannelMarketingTextToChangeFromJSONTyped = exports.ChannelMarketingTextToChangeFromJSON = exports.instanceOfChannelMarketingTextToChange = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const MarketingTextType_1 = require("./MarketingTextType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ChannelMarketingTextToChange interface.
 */
function instanceOfChannelMarketingTextToChange(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelMarketingTextToChange = instanceOfChannelMarketingTextToChange;
function ChannelMarketingTextToChangeFromJSON(json) {
    return ChannelMarketingTextToChangeFromJSONTyped(json, false);
}
exports.ChannelMarketingTextToChangeFromJSON = ChannelMarketingTextToChangeFromJSON;
function ChannelMarketingTextToChangeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'changeChannelMarketingTexts': !(0, runtime_1.exists)(json, 'changeChannelMarketingTexts') ? undefined : (json['changeChannelMarketingTexts'].map(MarketingTextType_1.MarketingTextTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ChannelMarketingTextToChangeFromJSONTyped = ChannelMarketingTextToChangeFromJSONTyped;
function ChannelMarketingTextToChangeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'changeChannelMarketingTexts': value.changeChannelMarketingTexts === undefined ? undefined : (value.changeChannelMarketingTexts.map(MarketingTextType_1.MarketingTextTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ChannelMarketingTextToChangeToJSON = ChannelMarketingTextToChangeToJSON;