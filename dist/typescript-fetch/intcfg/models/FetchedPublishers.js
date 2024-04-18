"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchedPublishersToJSON = exports.FetchedPublishersFromJSONTyped = exports.FetchedPublishersFromJSON = exports.instanceOfFetchedPublishers = void 0;
const runtime_1 = require("../runtime");
const ExternalSystemType_1 = require("./ExternalSystemType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the FetchedPublishers interface.
 */
function instanceOfFetchedPublishers(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFetchedPublishers = instanceOfFetchedPublishers;
function FetchedPublishersFromJSON(json) {
    return FetchedPublishersFromJSONTyped(json, false);
}
exports.FetchedPublishersFromJSON = FetchedPublishersFromJSON;
function FetchedPublishersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publishers': !(0, runtime_1.exists)(json, 'publishers') ? undefined : (json['publishers'].map(ExternalSystemType_1.ExternalSystemTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.FetchedPublishersFromJSONTyped = FetchedPublishersFromJSONTyped;
function FetchedPublishersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'publishers': value.publishers === undefined ? undefined : (value.publishers.map(ExternalSystemType_1.ExternalSystemTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.FetchedPublishersToJSON = FetchedPublishersToJSON;