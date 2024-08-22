"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomClassTemplatesDetailsToJSON = exports.RoomClassTemplatesDetailsFromJSONTyped = exports.RoomClassTemplatesDetailsFromJSON = exports.instanceOfRoomClassTemplatesDetails = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const RoomClassTemplateType_1 = require("./RoomClassTemplateType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the RoomClassTemplatesDetails interface.
 */
function instanceOfRoomClassTemplatesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomClassTemplatesDetails = instanceOfRoomClassTemplatesDetails;
function RoomClassTemplatesDetailsFromJSON(json) {
    return RoomClassTemplatesDetailsFromJSONTyped(json, false);
}
exports.RoomClassTemplatesDetailsFromJSON = RoomClassTemplatesDetailsFromJSON;
function RoomClassTemplatesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'roomClassTemplates': !(0, runtime_1.exists)(json, 'roomClassTemplates') ? undefined : (json['roomClassTemplates'].map(RoomClassTemplateType_1.RoomClassTemplateTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.RoomClassTemplatesDetailsFromJSONTyped = RoomClassTemplatesDetailsFromJSONTyped;
function RoomClassTemplatesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'roomClassTemplates': value.roomClassTemplates === undefined ? undefined : (value.roomClassTemplates.map(RoomClassTemplateType_1.RoomClassTemplateTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.RoomClassTemplatesDetailsToJSON = RoomClassTemplatesDetailsToJSON;
