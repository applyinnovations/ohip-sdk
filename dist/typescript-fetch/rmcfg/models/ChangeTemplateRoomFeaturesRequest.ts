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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { TemplateRoomFeatureConfigType } from './TemplateRoomFeatureConfigType';
import {
    TemplateRoomFeatureConfigTypeFromJSON,
    TemplateRoomFeatureConfigTypeFromJSONTyped,
    TemplateRoomFeatureConfigTypeToJSON,
} from './TemplateRoomFeatureConfigType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface ChangeTemplateRoomFeaturesRequest
 */
export interface ChangeTemplateRoomFeaturesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeTemplateRoomFeaturesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Template room feature details.
     * @type {Array<TemplateRoomFeatureConfigType>}
     * @memberof ChangeTemplateRoomFeaturesRequest
     */
    templateRoomFeatures?: Array<TemplateRoomFeatureConfigType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeTemplateRoomFeaturesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeTemplateRoomFeaturesRequest interface.
 */
export function instanceOfChangeTemplateRoomFeaturesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeTemplateRoomFeaturesRequestFromJSON(json: any): ChangeTemplateRoomFeaturesRequest {
    return ChangeTemplateRoomFeaturesRequestFromJSONTyped(json, false);
}

export function ChangeTemplateRoomFeaturesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeTemplateRoomFeaturesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateRoomFeatures': !exists(json, 'templateRoomFeatures') ? undefined : ((json['templateRoomFeatures'] as Array<any>).map(TemplateRoomFeatureConfigTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeTemplateRoomFeaturesRequestToJSON(value?: ChangeTemplateRoomFeaturesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateRoomFeatures': value.templateRoomFeatures === undefined ? undefined : ((value.templateRoomFeatures as Array<any>).map(TemplateRoomFeatureConfigTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

