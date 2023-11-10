"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResvRoutingCriteriaTypeFolioGuestInfoToJSON = exports.ResvRoutingCriteriaTypeFolioGuestInfoFromJSONTyped = exports.ResvRoutingCriteriaTypeFolioGuestInfoFromJSON = exports.instanceOfResvRoutingCriteriaTypeFolioGuestInfo = void 0;
const runtime_1 = require("../runtime");
const ProfileIdList_1 = require("./ProfileIdList");
/**
 * Check if a given object implements the ResvRoutingCriteriaTypeFolioGuestInfo interface.
 */
function instanceOfResvRoutingCriteriaTypeFolioGuestInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResvRoutingCriteriaTypeFolioGuestInfo = instanceOfResvRoutingCriteriaTypeFolioGuestInfo;
function ResvRoutingCriteriaTypeFolioGuestInfoFromJSON(json) {
    return ResvRoutingCriteriaTypeFolioGuestInfoFromJSONTyped(json, false);
}
exports.ResvRoutingCriteriaTypeFolioGuestInfoFromJSON = ResvRoutingCriteriaTypeFolioGuestInfoFromJSON;
function ResvRoutingCriteriaTypeFolioGuestInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (0, ProfileIdList_1.ProfileIdListFromJSON)(json['profileIdList']),
    };
}
exports.ResvRoutingCriteriaTypeFolioGuestInfoFromJSONTyped = ResvRoutingCriteriaTypeFolioGuestInfoFromJSONTyped;
function ResvRoutingCriteriaTypeFolioGuestInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'profileIdList': (0, ProfileIdList_1.ProfileIdListToJSON)(value.profileIdList),
    };
}
exports.ResvRoutingCriteriaTypeFolioGuestInfoToJSON = ResvRoutingCriteriaTypeFolioGuestInfoToJSON;
