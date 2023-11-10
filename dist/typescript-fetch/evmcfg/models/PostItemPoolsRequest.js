"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostItemPoolsRequestToJSON = exports.PostItemPoolsRequestFromJSONTyped = exports.PostItemPoolsRequestFromJSON = exports.instanceOfPostItemPoolsRequest = void 0;
const runtime_1 = require("../runtime");
const ItemPoolsType_1 = require("./ItemPoolsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PostItemPoolsRequest interface.
 */
function instanceOfPostItemPoolsRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostItemPoolsRequest = instanceOfPostItemPoolsRequest;
function PostItemPoolsRequestFromJSON(json) {
    return PostItemPoolsRequestFromJSONTyped(json, false);
}
exports.PostItemPoolsRequestFromJSON = PostItemPoolsRequestFromJSON;
function PostItemPoolsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'itemPools': !(0, runtime_1.exists)(json, 'itemPools') ? undefined : (0, ItemPoolsType_1.ItemPoolsTypeFromJSON)(json['itemPools']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PostItemPoolsRequestFromJSONTyped = PostItemPoolsRequestFromJSONTyped;
function PostItemPoolsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'itemPools': (0, ItemPoolsType_1.ItemPoolsTypeToJSON)(value.itemPools),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PostItemPoolsRequestToJSON = PostItemPoolsRequestToJSON;
