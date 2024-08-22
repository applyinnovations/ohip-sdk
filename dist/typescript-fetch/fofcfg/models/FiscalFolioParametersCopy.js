"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalFolioParametersCopyToJSON = exports.FiscalFolioParametersCopyFromJSONTyped = exports.FiscalFolioParametersCopyFromJSON = exports.instanceOfFiscalFolioParametersCopy = void 0;
const runtime_1 = require("../runtime");
const CopyFiscalFolioParametersType_1 = require("./CopyFiscalFolioParametersType");
const GenericHotelCodeCodeType_1 = require("./GenericHotelCodeCodeType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the FiscalFolioParametersCopy interface.
 */
function instanceOfFiscalFolioParametersCopy(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFiscalFolioParametersCopy = instanceOfFiscalFolioParametersCopy;
function FiscalFolioParametersCopyFromJSON(json) {
    return FiscalFolioParametersCopyFromJSONTyped(json, false);
}
exports.FiscalFolioParametersCopyFromJSON = FiscalFolioParametersCopyFromJSON;
function FiscalFolioParametersCopyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fiscalFolioParameter': !(0, runtime_1.exists)(json, 'fiscalFolioParameter') ? undefined : (json['fiscalFolioParameter'].map(GenericHotelCodeCodeType_1.GenericHotelCodeCodeTypeFromJSON)),
        'fiscalFolioParameters': !(0, runtime_1.exists)(json, 'fiscalFolioParameters') ? undefined : (json['fiscalFolioParameters'].map(CopyFiscalFolioParametersType_1.CopyFiscalFolioParametersTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.FiscalFolioParametersCopyFromJSONTyped = FiscalFolioParametersCopyFromJSONTyped;
function FiscalFolioParametersCopyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fiscalFolioParameter': value.fiscalFolioParameter === undefined ? undefined : (value.fiscalFolioParameter.map(GenericHotelCodeCodeType_1.GenericHotelCodeCodeTypeToJSON)),
        'fiscalFolioParameters': value.fiscalFolioParameters === undefined ? undefined : (value.fiscalFolioParameters.map(CopyFiscalFolioParametersType_1.CopyFiscalFolioParametersTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.FiscalFolioParametersCopyToJSON = FiscalFolioParametersCopyToJSON;
