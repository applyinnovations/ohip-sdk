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
exports.ImageCodeTypeToJSON = exports.ImageCodeTypeFromJSONTyped = exports.ImageCodeTypeFromJSON = exports.ImageCodeType = void 0;
/**
 *
 * @export
 */
exports.ImageCodeType = {
    LogoChain: 'LogoChain',
    Logo: 'Logo',
    Profile: 'Profile',
    Nationality: 'Nationality',
    User: 'User',
    ToolbarItemCode: 'ToolbarItemCode',
    Chain: 'Chain',
    MembershipType: 'MembershipType',
    MembershipLevel: 'MembershipLevel',
    Resort: 'Resort',
    RoomTypeChain: 'RoomTypeChain',
    RoomType: 'RoomType',
    RoomNumber: 'RoomNumber',
    OooReasonChain: 'OooReasonChain',
    OooReason: 'OooReason',
    RoomMaintChain: 'RoomMaintChain',
    RoomMaintenance: 'RoomMaintenance',
    RoomMaintIssue: 'RoomMaintIssue',
    FloorPlan: 'FloorPlan',
    SiteLayout: 'SiteLayout',
    Attraction: 'Attraction',
    PropertyMap: 'PropertyMap',
    InvItemChain: 'InvItemChain',
    InvItem: 'InvItem',
    PackageChain: 'PackageChain',
    Package: 'Package',
    Pool: 'Pool',
    RoomConditionChain: 'RoomConditionChain',
    RoomCondition: 'RoomCondition',
    FunctionSpace: 'FunctionSpace',
    FunctionSetupStyle: 'FunctionSetupStyle',
    TrackItTypeChain: 'TrackItTypeChain',
    TrackItType: 'TrackItType',
    Height: 'Height',
    Width: 'Width'
};
function ImageCodeTypeFromJSON(json) {
    return ImageCodeTypeFromJSONTyped(json, false);
}
exports.ImageCodeTypeFromJSON = ImageCodeTypeFromJSON;
function ImageCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ImageCodeTypeFromJSONTyped = ImageCodeTypeFromJSONTyped;
function ImageCodeTypeToJSON(value) {
    return value;
}
exports.ImageCodeTypeToJSON = ImageCodeTypeToJSON;
