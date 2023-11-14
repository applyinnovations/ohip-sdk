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
exports.ChannelBillingStatementSummariesToJSON = exports.ChannelBillingStatementSummariesFromJSONTyped = exports.ChannelBillingStatementSummariesFromJSON = exports.instanceOfChannelBillingStatementSummaries = void 0;
const runtime_1 = require("../runtime");
const ChannelBillingStatementSummariesType_1 = require("./ChannelBillingStatementSummariesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ChannelBillingStatementSummaries interface.
 */
function instanceOfChannelBillingStatementSummaries(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChannelBillingStatementSummaries = instanceOfChannelBillingStatementSummaries;
function ChannelBillingStatementSummariesFromJSON(json) {
    return ChannelBillingStatementSummariesFromJSONTyped(json, false);
}
exports.ChannelBillingStatementSummariesFromJSON = ChannelBillingStatementSummariesFromJSON;
function ChannelBillingStatementSummariesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelBillingStatementsSummary': !(0, runtime_1.exists)(json, 'channelBillingStatementsSummary') ? undefined : (0, ChannelBillingStatementSummariesType_1.ChannelBillingStatementSummariesTypeFromJSON)(json['channelBillingStatementsSummary']),
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ChannelBillingStatementSummariesFromJSONTyped = ChannelBillingStatementSummariesFromJSONTyped;
function ChannelBillingStatementSummariesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channelBillingStatementsSummary': (0, ChannelBillingStatementSummariesType_1.ChannelBillingStatementSummariesTypeToJSON)(value.channelBillingStatementsSummary),
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ChannelBillingStatementSummariesToJSON = ChannelBillingStatementSummariesToJSON;