/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApplicationSettingType } from './ApplicationSettingType';
import {
    ApplicationSettingTypeFromJSON,
    ApplicationSettingTypeFromJSONTyped,
    ApplicationSettingTypeToJSON,
} from './ApplicationSettingType';

/**
 * This element simply groups the different Application Functions.
 * @export
 * @interface ApplicationSettingGroupType
 */
export interface ApplicationSettingGroupType {
    /**
     * 
     * @type {Array<ApplicationSettingType>}
     * @memberof ApplicationSettingGroupType
     */
    appSettings?: Array<ApplicationSettingType>;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSettingGroupType
     */
    groupName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationSettingGroupType
     */
    groupDisplayName?: string;
}

/**
 * Check if a given object implements the ApplicationSettingGroupType interface.
 */
export function instanceOfApplicationSettingGroupType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationSettingGroupTypeFromJSON(json: any): ApplicationSettingGroupType {
    return ApplicationSettingGroupTypeFromJSONTyped(json, false);
}

export function ApplicationSettingGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationSettingGroupType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appSettings': !exists(json, 'appSettings') ? undefined : ((json['appSettings'] as Array<any>).map(ApplicationSettingTypeFromJSON)),
        'groupName': !exists(json, 'groupName') ? undefined : json['groupName'],
        'groupDisplayName': !exists(json, 'groupDisplayName') ? undefined : json['groupDisplayName'],
    };
}

export function ApplicationSettingGroupTypeToJSON(value?: ApplicationSettingGroupType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appSettings': value.appSettings === undefined ? undefined : ((value.appSettings as Array<any>).map(ApplicationSettingTypeToJSON)),
        'groupName': value.groupName,
        'groupDisplayName': value.groupDisplayName,
    };
}

