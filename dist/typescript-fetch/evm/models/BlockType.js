"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockTypeToJSON = exports.BlockTypeFromJSONTyped = exports.BlockTypeFromJSON = exports.instanceOfBlockType = void 0;
const runtime_1 = require("../runtime");
const AttachmentType_1 = require("./AttachmentType");
const BlockDetailsType_1 = require("./BlockDetailsType");
const BlockInventoryItemType_1 = require("./BlockInventoryItemType");
const BlockOwnersType_1 = require("./BlockOwnersType");
const BlockRestrictionsType_1 = require("./BlockRestrictionsType");
const BlockStatisticsSummaryType_1 = require("./BlockStatisticsSummaryType");
const BlockStatisticsType_1 = require("./BlockStatisticsType");
const BlockTraceType_1 = require("./BlockTraceType");
const BlockTypeBlockProfiles_1 = require("./BlockTypeBlockProfiles");
const BlockTypeBlockSecurity_1 = require("./BlockTypeBlockSecurity");
const BlockTypeComments_1 = require("./BlockTypeComments");
const BlockWashScheduleType_1 = require("./BlockWashScheduleType");
const CateringType_1 = require("./CateringType");
const ExternalReferenceType_1 = require("./ExternalReferenceType");
const IndicatorType_1 = require("./IndicatorType");
const SellMessageConfigsType_1 = require("./SellMessageConfigsType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the BlockType interface.
 */
function instanceOfBlockType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockType = instanceOfBlockType;
function BlockTypeFromJSON(json) {
    return BlockTypeFromJSONTyped(json, false);
}
exports.BlockTypeFromJSON = BlockTypeFromJSON;
function BlockTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attachments': !(0, runtime_1.exists)(json, 'attachments') ? undefined : (json['attachments'].map(AttachmentType_1.AttachmentTypeFromJSON)),
        'blockDetails': !(0, runtime_1.exists)(json, 'blockDetails') ? undefined : (0, BlockDetailsType_1.BlockDetailsTypeFromJSON)(json['blockDetails']),
        'blockIdList': !(0, runtime_1.exists)(json, 'blockIdList') ? undefined : (json['blockIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'blockIndicators': !(0, runtime_1.exists)(json, 'blockIndicators') ? undefined : (json['blockIndicators'].map(IndicatorType_1.IndicatorTypeFromJSON)),
        'blockOwners': !(0, runtime_1.exists)(json, 'blockOwners') ? undefined : (0, BlockOwnersType_1.BlockOwnersTypeFromJSON)(json['blockOwners']),
        'blockProfiles': !(0, runtime_1.exists)(json, 'blockProfiles') ? undefined : (0, BlockTypeBlockProfiles_1.BlockTypeBlockProfilesFromJSON)(json['blockProfiles']),
        'blockSecurity': !(0, runtime_1.exists)(json, 'blockSecurity') ? undefined : (0, BlockTypeBlockSecurity_1.BlockTypeBlockSecurityFromJSON)(json['blockSecurity']),
        'blockStatistics': !(0, runtime_1.exists)(json, 'blockStatistics') ? undefined : (0, BlockStatisticsType_1.BlockStatisticsTypeFromJSON)(json['blockStatistics']),
        'catering': !(0, runtime_1.exists)(json, 'catering') ? undefined : (0, CateringType_1.CateringTypeFromJSON)(json['catering']),
        'comments': !(0, runtime_1.exists)(json, 'comments') ? undefined : (0, BlockTypeComments_1.BlockTypeCommentsFromJSON)(json['comments']),
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'externalReferences': !(0, runtime_1.exists)(json, 'externalReferences') ? undefined : (json['externalReferences'].map(ExternalReferenceType_1.ExternalReferenceTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inventoryItems': !(0, runtime_1.exists)(json, 'inventoryItems') ? undefined : (json['inventoryItems'].map(BlockInventoryItemType_1.BlockInventoryItemTypeFromJSON)),
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'markAsRecentlyAccessed': !(0, runtime_1.exists)(json, 'markAsRecentlyAccessed') ? undefined : json['markAsRecentlyAccessed'],
        'restrictions': !(0, runtime_1.exists)(json, 'restrictions') ? undefined : (0, BlockRestrictionsType_1.BlockRestrictionsTypeFromJSON)(json['restrictions']),
        'sellMessages': !(0, runtime_1.exists)(json, 'sellMessages') ? undefined : (0, SellMessageConfigsType_1.SellMessageConfigsTypeFromJSON)(json['sellMessages']),
        'statistics': !(0, runtime_1.exists)(json, 'statistics') ? undefined : (json['statistics'].map(BlockStatisticsSummaryType_1.BlockStatisticsSummaryTypeFromJSON)),
        'traces': !(0, runtime_1.exists)(json, 'traces') ? undefined : (json['traces'].map(BlockTraceType_1.BlockTraceTypeFromJSON)),
        'washSchedules': !(0, runtime_1.exists)(json, 'washSchedules') ? undefined : (json['washSchedules'].map(BlockWashScheduleType_1.BlockWashScheduleTypeFromJSON)),
    };
}
exports.BlockTypeFromJSONTyped = BlockTypeFromJSONTyped;
function BlockTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attachments': value.attachments === undefined ? undefined : (value.attachments.map(AttachmentType_1.AttachmentTypeToJSON)),
        'blockDetails': (0, BlockDetailsType_1.BlockDetailsTypeToJSON)(value.blockDetails),
        'blockIdList': value.blockIdList === undefined ? undefined : (value.blockIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'blockIndicators': value.blockIndicators === undefined ? undefined : (value.blockIndicators.map(IndicatorType_1.IndicatorTypeToJSON)),
        'blockOwners': (0, BlockOwnersType_1.BlockOwnersTypeToJSON)(value.blockOwners),
        'blockProfiles': (0, BlockTypeBlockProfiles_1.BlockTypeBlockProfilesToJSON)(value.blockProfiles),
        'blockSecurity': (0, BlockTypeBlockSecurity_1.BlockTypeBlockSecurityToJSON)(value.blockSecurity),
        'blockStatistics': (0, BlockStatisticsType_1.BlockStatisticsTypeToJSON)(value.blockStatistics),
        'catering': (0, CateringType_1.CateringTypeToJSON)(value.catering),
        'comments': (0, BlockTypeComments_1.BlockTypeCommentsToJSON)(value.comments),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'externalReferences': value.externalReferences === undefined ? undefined : (value.externalReferences.map(ExternalReferenceType_1.ExternalReferenceTypeToJSON)),
        'hotelId': value.hotelId,
        'inventoryItems': value.inventoryItems === undefined ? undefined : (value.inventoryItems.map(BlockInventoryItemType_1.BlockInventoryItemTypeToJSON)),
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'markAsRecentlyAccessed': value.markAsRecentlyAccessed,
        'restrictions': (0, BlockRestrictionsType_1.BlockRestrictionsTypeToJSON)(value.restrictions),
        'sellMessages': (0, SellMessageConfigsType_1.SellMessageConfigsTypeToJSON)(value.sellMessages),
        'statistics': value.statistics === undefined ? undefined : (value.statistics.map(BlockStatisticsSummaryType_1.BlockStatisticsSummaryTypeToJSON)),
        'traces': value.traces === undefined ? undefined : (value.traces.map(BlockTraceType_1.BlockTraceTypeToJSON)),
        'washSchedules': value.washSchedules === undefined ? undefined : (value.washSchedules.map(BlockWashScheduleType_1.BlockWashScheduleTypeToJSON)),
    };
}
exports.BlockTypeToJSON = BlockTypeToJSON;
