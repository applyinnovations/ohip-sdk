"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CateringPackagesToJSON = exports.CateringPackagesFromJSONTyped = exports.CateringPackagesFromJSON = exports.instanceOfCateringPackages = void 0;
const runtime_1 = require("../runtime");
const CateringPackageType_1 = require("./CateringPackageType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CateringPackages interface.
 */
function instanceOfCateringPackages(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringPackages = instanceOfCateringPackages;
function CateringPackagesFromJSON(json) {
    return CateringPackagesFromJSONTyped(json, false);
}
exports.CateringPackagesFromJSON = CateringPackagesFromJSON;
function CateringPackagesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cateringPackageList': !(0, runtime_1.exists)(json, 'cateringPackageList') ? undefined : (json['cateringPackageList'].map(CateringPackageType_1.CateringPackageTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CateringPackagesFromJSONTyped = CateringPackagesFromJSONTyped;
function CateringPackagesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cateringPackageList': value.cateringPackageList === undefined ? undefined : (value.cateringPackageList.map(CateringPackageType_1.CateringPackageTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CateringPackagesToJSON = CateringPackagesToJSON;
