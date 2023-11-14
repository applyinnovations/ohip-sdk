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
exports.ChannelAccountSummaryTypeToJSON = exports.ChannelAccountSummaryTypeFromJSONTyped = exports.ChannelAccountSummaryTypeFromJSON = exports.instanceOfChannelAccountSummaryType = void 0;
const runtime_1 = require("../runtime");
const AddressInfoType_1 = require("./AddressInfoType");
const ChannelAccountDetailsType_1 = require("./ChannelAccountDetailsType");
const CodeListType_1 = require("./CodeListType");
const EmailInfoType_1 = require("./EmailInfoType");
const IndicatorsType_1 = require("./IndicatorsType");
const TelephoneInfoType_1 = require("./TelephoneInfoType");
const UniqueIDListType_1 = require("./UniqueIDListType");
/**
 * Check if a given object implements the ChannelAccountSummaryType interface.
 */
function instanceOfChannelAccountSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelAccountSummaryType = instanceOfChannelAccountSummaryType;
function ChannelAccountSummaryTypeFromJSON(json) {
    return ChannelAccountSummaryTypeFromJSONTyped(json, false);
}
exports.ChannelAccountSummaryTypeFromJSON = ChannelAccountSummaryTypeFromJSON;
function ChannelAccountSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountDetails': !(0, runtime_1.exists)(json, 'accountDetails') ? undefined : (0, ChannelAccountDetailsType_1.ChannelAccountDetailsTypeFromJSON)(json['accountDetails']),
        'addressInfo': !(0, runtime_1.exists)(json, 'addressInfo') ? undefined : (0, AddressInfoType_1.AddressInfoTypeFromJSON)(json['addressInfo']),
        'channelAccountIndicators': !(0, runtime_1.exists)(json, 'channelAccountIndicators') ? undefined : (0, IndicatorsType_1.IndicatorsTypeFromJSON)(json['channelAccountIndicators']),
        'contractEndsOn': !(0, runtime_1.exists)(json, 'contractEndsOn') ? undefined : (new Date(json['contractEndsOn'])),
        'emailInfo': !(0, runtime_1.exists)(json, 'emailInfo') ? undefined : (0, EmailInfoType_1.EmailInfoTypeFromJSON)(json['emailInfo']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotels': !(0, runtime_1.exists)(json, 'hotels') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['hotels']),
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (0, UniqueIDListType_1.UniqueIDListTypeFromJSON)(json['profileIdList']),
        'telephoneInfo': !(0, runtime_1.exists)(json, 'telephoneInfo') ? undefined : (0, TelephoneInfoType_1.TelephoneInfoTypeFromJSON)(json['telephoneInfo']),
    };
}
exports.ChannelAccountSummaryTypeFromJSONTyped = ChannelAccountSummaryTypeFromJSONTyped;
function ChannelAccountSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountDetails': (0, ChannelAccountDetailsType_1.ChannelAccountDetailsTypeToJSON)(value.accountDetails),
        'addressInfo': (0, AddressInfoType_1.AddressInfoTypeToJSON)(value.addressInfo),
        'channelAccountIndicators': (0, IndicatorsType_1.IndicatorsTypeToJSON)(value.channelAccountIndicators),
        'contractEndsOn': value.contractEndsOn === undefined ? undefined : (value.contractEndsOn.toISOString().substring(0, 10)),
        'emailInfo': (0, EmailInfoType_1.EmailInfoTypeToJSON)(value.emailInfo),
        'hotelId': value.hotelId,
        'hotels': (0, CodeListType_1.CodeListTypeToJSON)(value.hotels),
        'inactive': value.inactive,
        'profileIdList': (0, UniqueIDListType_1.UniqueIDListTypeToJSON)(value.profileIdList),
        'telephoneInfo': (0, TelephoneInfoType_1.TelephoneInfoTypeToJSON)(value.telephoneInfo),
    };
}
exports.ChannelAccountSummaryTypeToJSON = ChannelAccountSummaryTypeToJSON;