"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailFolioReportRequestToJSON = exports.EmailFolioReportRequestFromJSONTyped = exports.EmailFolioReportRequestFromJSON = exports.instanceOfEmailFolioReportRequest = void 0;
const runtime_1 = require("../runtime");
const EmailRecipientsType_1 = require("./EmailRecipientsType");
const FolioReportCriteriaType_1 = require("./FolioReportCriteriaType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the EmailFolioReportRequest interface.
 */
function instanceOfEmailFolioReportRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEmailFolioReportRequest = instanceOfEmailFolioReportRequest;
function EmailFolioReportRequestFromJSON(json) {
    return EmailFolioReportRequestFromJSONTyped(json, false);
}
exports.EmailFolioReportRequestFromJSON = EmailFolioReportRequestFromJSON;
function EmailFolioReportRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'emailRecipients': !(0, runtime_1.exists)(json, 'emailRecipients') ? undefined : (0, EmailRecipientsType_1.EmailRecipientsTypeFromJSON)(json['emailRecipients']),
        'folioInfo': !(0, runtime_1.exists)(json, 'folioInfo') ? undefined : (0, FolioReportCriteriaType_1.FolioReportCriteriaTypeFromJSON)(json['folioInfo']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.EmailFolioReportRequestFromJSONTyped = EmailFolioReportRequestFromJSONTyped;
function EmailFolioReportRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'emailRecipients': (0, EmailRecipientsType_1.EmailRecipientsTypeToJSON)(value.emailRecipients),
        'folioInfo': (0, FolioReportCriteriaType_1.FolioReportCriteriaTypeToJSON)(value.folioInfo),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.EmailFolioReportRequestToJSON = EmailFolioReportRequestToJSON;
