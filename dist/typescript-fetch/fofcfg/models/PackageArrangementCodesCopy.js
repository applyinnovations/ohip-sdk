"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageArrangementCodesCopyToJSON = exports.PackageArrangementCodesCopyFromJSONTyped = exports.PackageArrangementCodesCopyFromJSON = exports.instanceOfPackageArrangementCodesCopy = void 0;
const runtime_1 = require("../runtime");
const CopyConfigurationCodeType_1 = require("./CopyConfigurationCodeType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the PackageArrangementCodesCopy interface.
 */
function instanceOfPackageArrangementCodesCopy(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPackageArrangementCodesCopy = instanceOfPackageArrangementCodesCopy;
function PackageArrangementCodesCopyFromJSON(json) {
    return PackageArrangementCodesCopyFromJSONTyped(json, false);
}
exports.PackageArrangementCodesCopyFromJSON = PackageArrangementCodesCopyFromJSON;
function PackageArrangementCodesCopyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'packageArrangementCode': !(0, runtime_1.exists)(json, 'packageArrangementCode') ? undefined : (json['packageArrangementCode'].map(CopyConfigurationCodeType_1.CopyConfigurationCodeTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.PackageArrangementCodesCopyFromJSONTyped = PackageArrangementCodesCopyFromJSONTyped;
function PackageArrangementCodesCopyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'packageArrangementCode': value.packageArrangementCode === undefined ? undefined : (value.packageArrangementCode.map(CopyConfigurationCodeType_1.CopyConfigurationCodeTypeToJSON)),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.PackageArrangementCodesCopyToJSON = PackageArrangementCodesCopyToJSON;
