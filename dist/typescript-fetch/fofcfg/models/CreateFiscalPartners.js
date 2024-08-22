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
exports.CreateFiscalPartnersToJSON = exports.CreateFiscalPartnersFromJSONTyped = exports.CreateFiscalPartnersFromJSON = exports.instanceOfCreateFiscalPartners = void 0;
const runtime_1 = require("../runtime");
const FiscalPartnerType_1 = require("./FiscalPartnerType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CreateFiscalPartners interface.
 */
function instanceOfCreateFiscalPartners(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCreateFiscalPartners = instanceOfCreateFiscalPartners;
function CreateFiscalPartnersFromJSON(json) {
    return CreateFiscalPartnersFromJSONTyped(json, false);
}
exports.CreateFiscalPartnersFromJSON = CreateFiscalPartnersFromJSON;
function CreateFiscalPartnersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fiscalPeriods': !(0, runtime_1.exists)(json, 'fiscalPeriods') ? undefined : (json['fiscalPeriods'].map(FiscalPartnerType_1.FiscalPartnerTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CreateFiscalPartnersFromJSONTyped = CreateFiscalPartnersFromJSONTyped;
function CreateFiscalPartnersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fiscalPeriods': value.fiscalPeriods === undefined ? undefined : (value.fiscalPeriods.map(FiscalPartnerType_1.FiscalPartnerTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CreateFiscalPartnersToJSON = CreateFiscalPartnersToJSON;
