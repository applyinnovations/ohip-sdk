"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegotiatedRatesDetailsToJSON = exports.NegotiatedRatesDetailsFromJSONTyped = exports.NegotiatedRatesDetailsFromJSON = exports.instanceOfNegotiatedRatesDetails = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the NegotiatedRatesDetails interface.
 */
function instanceOfNegotiatedRatesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNegotiatedRatesDetails = instanceOfNegotiatedRatesDetails;
function NegotiatedRatesDetailsFromJSON(json) {
    return NegotiatedRatesDetailsFromJSONTyped(json, false);
}
exports.NegotiatedRatesDetailsFromJSON = NegotiatedRatesDetailsFromJSON;
function NegotiatedRatesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.NegotiatedRatesDetailsFromJSONTyped = NegotiatedRatesDetailsFromJSONTyped;
function NegotiatedRatesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.NegotiatedRatesDetailsToJSON = NegotiatedRatesDetailsToJSON;