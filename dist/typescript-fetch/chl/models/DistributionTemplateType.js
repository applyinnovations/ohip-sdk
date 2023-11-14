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
exports.DistributionTemplateTypeToJSON = exports.DistributionTemplateTypeFromJSONTyped = exports.DistributionTemplateTypeFromJSON = exports.instanceOfDistributionTemplateType = void 0;
const runtime_1 = require("../runtime");
const DistributionTemplateChannelRatesType_1 = require("./DistributionTemplateChannelRatesType");
/**
 * Check if a given object implements the DistributionTemplateType interface.
 */
function instanceOfDistributionTemplateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDistributionTemplateType = instanceOfDistributionTemplateType;
function DistributionTemplateTypeFromJSON(json) {
    return DistributionTemplateTypeFromJSONTyped(json, false);
}
exports.DistributionTemplateTypeFromJSON = DistributionTemplateTypeFromJSON;
function DistributionTemplateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelRates': !(0, runtime_1.exists)(json, 'channelRates') ? undefined : (0, DistributionTemplateChannelRatesType_1.DistributionTemplateChannelRatesTypeFromJSON)(json['channelRates']),
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'displaySequence': !(0, runtime_1.exists)(json, 'displaySequence') ? undefined : json['displaySequence'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'negotiatedRate': !(0, runtime_1.exists)(json, 'negotiatedRate') ? undefined : json['negotiatedRate'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.DistributionTemplateTypeFromJSONTyped = DistributionTemplateTypeFromJSONTyped;
function DistributionTemplateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelRates': (0, DistributionTemplateChannelRatesType_1.DistributionTemplateChannelRatesTypeToJSON)(value.channelRates),
        'code': value.code,
        'description': value.description,
        'displaySequence': value.displaySequence,
        'inactive': value.inactive,
        'negotiatedRate': value.negotiatedRate,
        'type': value.type,
    };
}
exports.DistributionTemplateTypeToJSON = DistributionTemplateTypeToJSON;