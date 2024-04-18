/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExternalDeviceConfigurationType } from './ExternalDeviceConfigurationType';
import {
    ExternalDeviceConfigurationTypeFromJSON,
    ExternalDeviceConfigurationTypeFromJSONTyped,
    ExternalDeviceConfigurationTypeToJSON,
} from './ExternalDeviceConfigurationType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request to change the external device activated for the hotel and its configurations.
 * @export
 * @interface ChangeExternalDeviceConfigurations
 */
export interface ChangeExternalDeviceConfigurations {
    /**
     * 
     * @type {ExternalDeviceConfigurationType}
     * @memberof ChangeExternalDeviceConfigurations
     */
    externalDeviceConfigurations?: ExternalDeviceConfigurationType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeExternalDeviceConfigurations
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeExternalDeviceConfigurations
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeExternalDeviceConfigurations interface.
 */
export function instanceOfChangeExternalDeviceConfigurations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeExternalDeviceConfigurationsFromJSON(json: any): ChangeExternalDeviceConfigurations {
    return ChangeExternalDeviceConfigurationsFromJSONTyped(json, false);
}

export function ChangeExternalDeviceConfigurationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeExternalDeviceConfigurations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalDeviceConfigurations': !exists(json, 'externalDeviceConfigurations') ? undefined : ExternalDeviceConfigurationTypeFromJSON(json['externalDeviceConfigurations']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeExternalDeviceConfigurationsToJSON(value?: ChangeExternalDeviceConfigurations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'externalDeviceConfigurations': ExternalDeviceConfigurationTypeToJSON(value.externalDeviceConfigurations),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
