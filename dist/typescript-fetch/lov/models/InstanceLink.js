"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud List of Values Management API
 * APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceLinkToJSON = exports.InstanceLinkFromJSONTyped = exports.InstanceLinkFromJSON = exports.instanceOfInstanceLink = exports.InstanceLinkMethodEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.InstanceLinkMethodEnum = {
    Get: 'GET',
    Post: 'POST',
    Put: 'PUT',
    Delete: 'DELETE',
    Patch: 'PATCH',
    Options: 'OPTIONS',
    Head: 'HEAD'
};
/**
 * Check if a given object implements the InstanceLink interface.
 */
function instanceOfInstanceLink(value) {
    let isInstance = true;
    isInstance = isInstance && "href" in value;
    isInstance = isInstance && "method" in value;
    isInstance = isInstance && "operationId" in value;
    isInstance = isInstance && "rel" in value;
    return isInstance;
}
exports.instanceOfInstanceLink = instanceOfInstanceLink;
function InstanceLinkFromJSON(json) {
    return InstanceLinkFromJSONTyped(json, false);
}
exports.InstanceLinkFromJSON = InstanceLinkFromJSON;
function InstanceLinkFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'href': json['href'],
        'method': json['method'],
        'operationId': json['operationId'],
        'rel': json['rel'],
        'targetSchema': !(0, runtime_1.exists)(json, 'targetSchema') ? undefined : json['targetSchema'],
        'templated': !(0, runtime_1.exists)(json, 'templated') ? undefined : json['templated'],
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
    };
}
exports.InstanceLinkFromJSONTyped = InstanceLinkFromJSONTyped;
function InstanceLinkToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'href': value.href,
        'method': value.method,
        'operationId': value.operationId,
        'rel': value.rel,
        'targetSchema': value.targetSchema,
        'templated': value.templated,
        'title': value.title,
    };
}
exports.InstanceLinkToJSON = InstanceLinkToJSON;
