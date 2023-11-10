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
exports.ChannelAccountContractCopyDetailsTypeToJSON = exports.ChannelAccountContractCopyDetailsTypeFromJSONTyped = exports.ChannelAccountContractCopyDetailsTypeFromJSON = exports.instanceOfChannelAccountContractCopyDetailsType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ChannelAccountContractCopyDetailsType interface.
 */
function instanceOfChannelAccountContractCopyDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelAccountContractCopyDetailsType = instanceOfChannelAccountContractCopyDetailsType;
function ChannelAccountContractCopyDetailsTypeFromJSON(json) {
    return ChannelAccountContractCopyDetailsTypeFromJSONTyped(json, false);
}
exports.ChannelAccountContractCopyDetailsTypeFromJSON = ChannelAccountContractCopyDetailsTypeFromJSON;
function ChannelAccountContractCopyDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'beginDate': !(0, runtime_1.exists)(json, 'beginDate') ? undefined : (new Date(json['beginDate'])),
        'contractNo': !(0, runtime_1.exists)(json, 'contractNo') ? undefined : json['contractNo'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'note': !(0, runtime_1.exists)(json, 'note') ? undefined : json['note'],
        'retainContractNo': !(0, runtime_1.exists)(json, 'retainContractNo') ? undefined : json['retainContractNo'],
        'sourceContractId': !(0, runtime_1.exists)(json, 'sourceContractId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['sourceContractId']),
        'sourceProfileId': !(0, runtime_1.exists)(json, 'sourceProfileId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['sourceProfileId']),
    };
}
exports.ChannelAccountContractCopyDetailsTypeFromJSONTyped = ChannelAccountContractCopyDetailsTypeFromJSONTyped;
function ChannelAccountContractCopyDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'beginDate': value.beginDate === undefined ? undefined : (value.beginDate.toISOString().substr(0, 10)),
        'contractNo': value.contractNo,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0, 10)),
        'note': value.note,
        'retainContractNo': value.retainContractNo,
        'sourceContractId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.sourceContractId),
        'sourceProfileId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.sourceProfileId),
    };
}
exports.ChannelAccountContractCopyDetailsTypeToJSON = ChannelAccountContractCopyDetailsTypeToJSON;
