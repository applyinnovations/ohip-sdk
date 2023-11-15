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
exports.ChannelAccountContractInformationTypeToJSON = exports.ChannelAccountContractInformationTypeFromJSONTyped = exports.ChannelAccountContractInformationTypeFromJSON = exports.instanceOfChannelAccountContractInformationType = void 0;
const runtime_1 = require("../runtime");
const ContractElementInformationType_1 = require("./ContractElementInformationType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ChannelAccountContractInformationType interface.
 */
function instanceOfChannelAccountContractInformationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelAccountContractInformationType = instanceOfChannelAccountContractInformationType;
function ChannelAccountContractInformationTypeFromJSON(json) {
    return ChannelAccountContractInformationTypeFromJSONTyped(json, false);
}
exports.ChannelAccountContractInformationTypeFromJSON = ChannelAccountContractInformationTypeFromJSON;
function ChannelAccountContractInformationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'beginDate': !(0, runtime_1.exists)(json, 'beginDate') ? undefined : json['beginDate'],
        'channelAccountContractElements': !(0, runtime_1.exists)(json, 'channelAccountContractElements') ? undefined : (json['channelAccountContractElements'].map(ContractElementInformationType_1.ContractElementInformationTypeFromJSON)),
        'contractId': !(0, runtime_1.exists)(json, 'contractId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['contractId']),
        'contractNo': !(0, runtime_1.exists)(json, 'contractNo') ? undefined : json['contractNo'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'markStatementsToRegenerate': !(0, runtime_1.exists)(json, 'markStatementsToRegenerate') ? undefined : json['markStatementsToRegenerate'],
        'note': !(0, runtime_1.exists)(json, 'note') ? undefined : json['note'],
    };
}
exports.ChannelAccountContractInformationTypeFromJSONTyped = ChannelAccountContractInformationTypeFromJSONTyped;
function ChannelAccountContractInformationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'beginDate': value.beginDate,
        'channelAccountContractElements': value.channelAccountContractElements === undefined ? undefined : (value.channelAccountContractElements.map(ContractElementInformationType_1.ContractElementInformationTypeToJSON)),
        'contractId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.contractId),
        'contractNo': value.contractNo,
        'endDate': value.endDate,
        'markStatementsToRegenerate': value.markStatementsToRegenerate,
        'note': value.note,
    };
}
exports.ChannelAccountContractInformationTypeToJSON = ChannelAccountContractInformationTypeToJSON;
