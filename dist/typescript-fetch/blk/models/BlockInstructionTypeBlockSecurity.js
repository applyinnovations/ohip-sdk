"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInstructionTypeBlockSecurityToJSON = exports.BlockInstructionTypeBlockSecurityFromJSONTyped = exports.BlockInstructionTypeBlockSecurityFromJSON = exports.instanceOfBlockInstructionTypeBlockSecurity = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BlockInstructionTypeBlockSecurity interface.
 */
function instanceOfBlockInstructionTypeBlockSecurity(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockInstructionTypeBlockSecurity = instanceOfBlockInstructionTypeBlockSecurity;
function BlockInstructionTypeBlockSecurityFromJSON(json) {
    return BlockInstructionTypeBlockSecurityFromJSONTyped(json, false);
}
exports.BlockInstructionTypeBlockSecurityFromJSON = BlockInstructionTypeBlockSecurityFromJSON;
function BlockInstructionTypeBlockSecurityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'advanceCancelDays': !(0, runtime_1.exists)(json, 'advanceCancelDays') ? undefined : json['advanceCancelDays'],
        'allDescriptionDDSecured': !(0, runtime_1.exists)(json, 'allDescriptionDDSecured') ? undefined : json['allDescriptionDDSecured'],
        'commissionableYn': !(0, runtime_1.exists)(json, 'commissionableYn') ? undefined : json['commissionableYn'],
        'daysDepositRequired': !(0, runtime_1.exists)(json, 'daysDepositRequired') ? undefined : json['daysDepositRequired'],
        'housingInformationSecured': !(0, runtime_1.exists)(json, 'housingInformationSecured') ? undefined : json['housingInformationSecured'],
        'ratesSecuredfromAllDisplays': !(0, runtime_1.exists)(json, 'ratesSecuredfromAllDisplays') ? undefined : json['ratesSecuredfromAllDisplays'],
        'ratesSecuredfromGNR': !(0, runtime_1.exists)(json, 'ratesSecuredfromGNR') ? undefined : json['ratesSecuredfromGNR'],
        'returnOneDayAtTimeYn': !(0, runtime_1.exists)(json, 'returnOneDayAtTimeYn') ? undefined : json['returnOneDayAtTimeYn'],
        'securedFromDIdisplayYn': !(0, runtime_1.exists)(json, 'securedFromDIdisplayYn') ? undefined : json['securedFromDIdisplayYn'],
    };
}
exports.BlockInstructionTypeBlockSecurityFromJSONTyped = BlockInstructionTypeBlockSecurityFromJSONTyped;
function BlockInstructionTypeBlockSecurityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'advanceCancelDays': value.advanceCancelDays,
        'allDescriptionDDSecured': value.allDescriptionDDSecured,
        'commissionableYn': value.commissionableYn,
        'daysDepositRequired': value.daysDepositRequired,
        'housingInformationSecured': value.housingInformationSecured,
        'ratesSecuredfromAllDisplays': value.ratesSecuredfromAllDisplays,
        'ratesSecuredfromGNR': value.ratesSecuredfromGNR,
        'returnOneDayAtTimeYn': value.returnOneDayAtTimeYn,
        'securedFromDIdisplayYn': value.securedFromDIdisplayYn,
    };
}
exports.BlockInstructionTypeBlockSecurityToJSON = BlockInstructionTypeBlockSecurityToJSON;