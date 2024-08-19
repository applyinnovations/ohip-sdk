"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockReservationsCriteriaTypeToJSON = exports.BlockReservationsCriteriaTypeFromJSONTyped = exports.BlockReservationsCriteriaTypeFromJSON = exports.instanceOfBlockReservationsCriteriaType = void 0;
const runtime_1 = require("../runtime");
const BlockApplyChangesToType_1 = require("./BlockApplyChangesToType");
const BlockReservationId_1 = require("./BlockReservationId");
const BlockReservationsCriteriaTypeStayOn_1 = require("./BlockReservationsCriteriaTypeStayOn");
/**
 * Check if a given object implements the BlockReservationsCriteriaType interface.
 */
function instanceOfBlockReservationsCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockReservationsCriteriaType = instanceOfBlockReservationsCriteriaType;
function BlockReservationsCriteriaTypeFromJSON(json) {
    return BlockReservationsCriteriaTypeFromJSONTyped(json, false);
}
exports.BlockReservationsCriteriaTypeFromJSON = BlockReservationsCriteriaTypeFromJSON;
function BlockReservationsCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'applyChangesTo': !(0, runtime_1.exists)(json, 'applyChangesTo') ? undefined : (0, BlockApplyChangesToType_1.BlockApplyChangesToTypeFromJSON)(json['applyChangesTo']),
        'reservations': !(0, runtime_1.exists)(json, 'reservations') ? undefined : (json['reservations'].map(BlockReservationId_1.BlockReservationIdFromJSON)),
        'stayOn': !(0, runtime_1.exists)(json, 'stayOn') ? undefined : (0, BlockReservationsCriteriaTypeStayOn_1.BlockReservationsCriteriaTypeStayOnFromJSON)(json['stayOn']),
    };
}
exports.BlockReservationsCriteriaTypeFromJSONTyped = BlockReservationsCriteriaTypeFromJSONTyped;
function BlockReservationsCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'applyChangesTo': (0, BlockApplyChangesToType_1.BlockApplyChangesToTypeToJSON)(value.applyChangesTo),
        'reservations': value.reservations === undefined ? undefined : (value.reservations.map(BlockReservationId_1.BlockReservationIdToJSON)),
        'stayOn': (0, BlockReservationsCriteriaTypeStayOn_1.BlockReservationsCriteriaTypeStayOnToJSON)(value.stayOn),
    };
}
exports.BlockReservationsCriteriaTypeToJSON = BlockReservationsCriteriaTypeToJSON;
