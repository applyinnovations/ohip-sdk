"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalPeriodsToJSON = exports.FiscalPeriodsFromJSONTyped = exports.FiscalPeriodsFromJSON = exports.instanceOfFiscalPeriods = void 0;
const runtime_1 = require("../runtime");
const FiscalPeriodsCycleFiscalPeriods_1 = require("./FiscalPeriodsCycleFiscalPeriods");
const FiscalPeriodsType_1 = require("./FiscalPeriodsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the FiscalPeriods interface.
 */
function instanceOfFiscalPeriods(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFiscalPeriods = instanceOfFiscalPeriods;
function FiscalPeriodsFromJSON(json) {
    return FiscalPeriodsFromJSONTyped(json, false);
}
exports.FiscalPeriodsFromJSON = FiscalPeriodsFromJSON;
function FiscalPeriodsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cycleFiscalPeriods': !(0, runtime_1.exists)(json, 'cycleFiscalPeriods') ? undefined : (0, FiscalPeriodsCycleFiscalPeriods_1.FiscalPeriodsCycleFiscalPeriodsFromJSON)(json['cycleFiscalPeriods']),
        'fiscalPeriods': !(0, runtime_1.exists)(json, 'fiscalPeriods') ? undefined : (0, FiscalPeriodsType_1.FiscalPeriodsTypeFromJSON)(json['fiscalPeriods']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.FiscalPeriodsFromJSONTyped = FiscalPeriodsFromJSONTyped;
function FiscalPeriodsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cycleFiscalPeriods': (0, FiscalPeriodsCycleFiscalPeriods_1.FiscalPeriodsCycleFiscalPeriodsToJSON)(value.cycleFiscalPeriods),
        'fiscalPeriods': (0, FiscalPeriodsType_1.FiscalPeriodsTypeToJSON)(value.fiscalPeriods),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.FiscalPeriodsToJSON = FiscalPeriodsToJSON;
