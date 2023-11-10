"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketGroupsDetailsToJSON = exports.MarketGroupsDetailsFromJSONTyped = exports.MarketGroupsDetailsFromJSON = exports.instanceOfMarketGroupsDetails = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const MarketGroupType_1 = require("./MarketGroupType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the MarketGroupsDetails interface.
 */
function instanceOfMarketGroupsDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMarketGroupsDetails = instanceOfMarketGroupsDetails;
function MarketGroupsDetailsFromJSON(json) {
    return MarketGroupsDetailsFromJSONTyped(json, false);
}
exports.MarketGroupsDetailsFromJSON = MarketGroupsDetailsFromJSON;
function MarketGroupsDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'marketGroups': !(0, runtime_1.exists)(json, 'marketGroups') ? undefined : (json['marketGroups'].map(MarketGroupType_1.MarketGroupTypeFromJSON)),
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.MarketGroupsDetailsFromJSONTyped = MarketGroupsDetailsFromJSONTyped;
function MarketGroupsDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'marketGroups': value.marketGroups === undefined ? undefined : (value.marketGroups.map(MarketGroupType_1.MarketGroupTypeToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.MarketGroupsDetailsToJSON = MarketGroupsDetailsToJSON;
