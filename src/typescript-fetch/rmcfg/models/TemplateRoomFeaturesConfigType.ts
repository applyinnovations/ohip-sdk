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

import { exists, mapValues } from '../runtime';
import type { TemplateRoomFeatureConfigType } from './TemplateRoomFeatureConfigType';
import {
    TemplateRoomFeatureConfigTypeFromJSON,
    TemplateRoomFeatureConfigTypeFromJSONTyped,
    TemplateRoomFeatureConfigTypeToJSON,
} from './TemplateRoomFeatureConfigType';

/**
 * Template room feature details.
 * @export
 * @interface TemplateRoomFeaturesConfigType
 */
export interface TemplateRoomFeaturesConfigType extends Array<TemplateRoomFeatureConfigType> {
}

/**
 * Check if a given object implements the TemplateRoomFeaturesConfigType interface.
 */
export function instanceOfTemplateRoomFeaturesConfigType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateRoomFeaturesConfigTypeFromJSON(json: any): TemplateRoomFeaturesConfigType {
    return TemplateRoomFeaturesConfigTypeFromJSONTyped(json, false);
}

export function TemplateRoomFeaturesConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateRoomFeaturesConfigType {
    return json;
}

export function TemplateRoomFeaturesConfigTypeToJSON(value?: TemplateRoomFeaturesConfigType | null): any {
    return value;
}
