"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionCodesDetailsToJSON = exports.CompetitionCodesDetailsFromJSONTyped = exports.CompetitionCodesDetailsFromJSON = exports.instanceOfCompetitionCodesDetails = void 0;
const runtime_1 = require("../runtime");
const CompetitionCodeType_1 = require("./CompetitionCodeType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CompetitionCodesDetails interface.
 */
function instanceOfCompetitionCodesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCompetitionCodesDetails = instanceOfCompetitionCodesDetails;
function CompetitionCodesDetailsFromJSON(json) {
    return CompetitionCodesDetailsFromJSONTyped(json, false);
}
exports.CompetitionCodesDetailsFromJSON = CompetitionCodesDetailsFromJSON;
function CompetitionCodesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'competitionCodes': !(0, runtime_1.exists)(json, 'competitionCodes') ? undefined : (json['competitionCodes'].map(CompetitionCodeType_1.CompetitionCodeTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CompetitionCodesDetailsFromJSONTyped = CompetitionCodesDetailsFromJSONTyped;
function CompetitionCodesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'competitionCodes': value.competitionCodes === undefined ? undefined : (value.competitionCodes.map(CompetitionCodeType_1.CompetitionCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CompetitionCodesDetailsToJSON = CompetitionCodesDetailsToJSON;
