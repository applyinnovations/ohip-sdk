"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomClassTemplateCriteriaToJSON = exports.RoomClassTemplateCriteriaFromJSONTyped = exports.RoomClassTemplateCriteriaFromJSON = exports.instanceOfRoomClassTemplateCriteria = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RoomClassTemplateType_1 = require("./RoomClassTemplateType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the RoomClassTemplateCriteria interface.
 */
function instanceOfRoomClassTemplateCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomClassTemplateCriteria = instanceOfRoomClassTemplateCriteria;
function RoomClassTemplateCriteriaFromJSON(json) {
    return RoomClassTemplateCriteriaFromJSONTyped(json, false);
}
exports.RoomClassTemplateCriteriaFromJSON = RoomClassTemplateCriteriaFromJSON;
function RoomClassTemplateCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'roomClassTemplate': !(0, runtime_1.exists)(json, 'roomClassTemplate') ? undefined : (0, RoomClassTemplateType_1.RoomClassTemplateTypeFromJSON)(json['roomClassTemplate']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.RoomClassTemplateCriteriaFromJSONTyped = RoomClassTemplateCriteriaFromJSONTyped;
function RoomClassTemplateCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'roomClassTemplate': (0, RoomClassTemplateType_1.RoomClassTemplateTypeToJSON)(value.roomClassTemplate),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.RoomClassTemplateCriteriaToJSON = RoomClassTemplateCriteriaToJSON;
