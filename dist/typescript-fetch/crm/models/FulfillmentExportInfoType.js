"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentExportInfoTypeToJSON = exports.FulfillmentExportInfoTypeFromJSONTyped = exports.FulfillmentExportInfoTypeFromJSON = exports.instanceOfFulfillmentExportInfoType = void 0;
const runtime_1 = require("../runtime");
const ExportLogsDeliveryStatusType_1 = require("./ExportLogsDeliveryStatusType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the FulfillmentExportInfoType interface.
 */
function instanceOfFulfillmentExportInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFulfillmentExportInfoType = instanceOfFulfillmentExportInfoType;
function FulfillmentExportInfoTypeFromJSON(json) {
    return FulfillmentExportInfoTypeFromJSONTyped(json, false);
}
exports.FulfillmentExportInfoTypeFromJSON = FulfillmentExportInfoTypeFromJSON;
function FulfillmentExportInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'deliveryStatus': !(0, runtime_1.exists)(json, 'deliveryStatus') ? undefined : (0, ExportLogsDeliveryStatusType_1.ExportLogsDeliveryStatusTypeFromJSON)(json['deliveryStatus']),
        'excludeExtract': !(0, runtime_1.exists)(json, 'excludeExtract') ? undefined : json['excludeExtract'],
        'extractBatchId': !(0, runtime_1.exists)(json, 'extractBatchId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['extractBatchId']),
        'extractCode': !(0, runtime_1.exists)(json, 'extractCode') ? undefined : json['extractCode'],
        'extractDate': !(0, runtime_1.exists)(json, 'extractDate') ? undefined : (new Date(json['extractDate'])),
        'extractId': !(0, runtime_1.exists)(json, 'extractId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['extractId']),
        'extractLogId': !(0, runtime_1.exists)(json, 'extractLogId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['extractLogId']),
        'membershipCard': !(0, runtime_1.exists)(json, 'membershipCard') ? undefined : json['membershipCard'],
        'membershipId': !(0, runtime_1.exists)(json, 'membershipId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['membershipId']),
    };
}
exports.FulfillmentExportInfoTypeFromJSONTyped = FulfillmentExportInfoTypeFromJSONTyped;
function FulfillmentExportInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'deliveryStatus': (0, ExportLogsDeliveryStatusType_1.ExportLogsDeliveryStatusTypeToJSON)(value.deliveryStatus),
        'excludeExtract': value.excludeExtract,
        'extractBatchId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.extractBatchId),
        'extractCode': value.extractCode,
        'extractDate': value.extractDate === undefined ? undefined : (value.extractDate.toISOString().substr(0, 10)),
        'extractId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.extractId),
        'extractLogId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.extractLogId),
        'membershipCard': value.membershipCard,
        'membershipId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.membershipId),
    };
}
exports.FulfillmentExportInfoTypeToJSON = FulfillmentExportInfoTypeToJSON;
