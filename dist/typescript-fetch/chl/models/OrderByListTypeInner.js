"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderByListTypeInnerToJSON = exports.OrderByListTypeInnerFromJSONTyped = exports.OrderByListTypeInnerFromJSON = exports.instanceOfOrderByListTypeInner = void 0;
const runtime_1 = require("../runtime");
const OrderByAscDescType_1 = require("./OrderByAscDescType");
/**
 * Check if a given object implements the OrderByListTypeInner interface.
 */
function instanceOfOrderByListTypeInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOrderByListTypeInner = instanceOfOrderByListTypeInner;
function OrderByListTypeInnerFromJSON(json) {
    return OrderByListTypeInnerFromJSONTyped(json, false);
}
exports.OrderByListTypeInnerFromJSON = OrderByListTypeInnerFromJSON;
function OrderByListTypeInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attributeName': !(0, runtime_1.exists)(json, 'attributeName') ? undefined : json['attributeName'],
        'orderType': !(0, runtime_1.exists)(json, 'orderType') ? undefined : (0, OrderByAscDescType_1.OrderByAscDescTypeFromJSON)(json['orderType']),
    };
}
exports.OrderByListTypeInnerFromJSONTyped = OrderByListTypeInnerFromJSONTyped;
function OrderByListTypeInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attributeName': value.attributeName,
        'orderType': (0, OrderByAscDescType_1.OrderByAscDescTypeToJSON)(value.orderType),
    };
}
exports.OrderByListTypeInnerToJSON = OrderByListTypeInnerToJSON;
