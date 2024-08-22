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

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { TemplateRoomMaintenanceReasonType } from './TemplateRoomMaintenanceReasonType';
import {
    TemplateRoomMaintenanceReasonTypeFromJSON,
    TemplateRoomMaintenanceReasonTypeFromJSONTyped,
    TemplateRoomMaintenanceReasonTypeToJSON,
} from './TemplateRoomMaintenanceReasonType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching template room maintenance reasons.
 * @export
 * @interface TemplateRoomMaintenanceReasonsDetails
 */
export interface TemplateRoomMaintenanceReasonsDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateRoomMaintenanceReasonsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Details for room maintenance reason at template level.
     * @type {Array<TemplateRoomMaintenanceReasonType>}
     * @memberof TemplateRoomMaintenanceReasonsDetails
     */
    templateRoomMaintenanceReasons?: Array<TemplateRoomMaintenanceReasonType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateRoomMaintenanceReasonsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateRoomMaintenanceReasonsDetails interface.
 */
export function instanceOfTemplateRoomMaintenanceReasonsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateRoomMaintenanceReasonsDetailsFromJSON(json: any): TemplateRoomMaintenanceReasonsDetails {
    return TemplateRoomMaintenanceReasonsDetailsFromJSONTyped(json, false);
}

export function TemplateRoomMaintenanceReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateRoomMaintenanceReasonsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateRoomMaintenanceReasons': !exists(json, 'templateRoomMaintenanceReasons') ? undefined : ((json['templateRoomMaintenanceReasons'] as Array<any>).map(TemplateRoomMaintenanceReasonTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateRoomMaintenanceReasonsDetailsToJSON(value?: TemplateRoomMaintenanceReasonsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateRoomMaintenanceReasons': value.templateRoomMaintenanceReasons === undefined ? undefined : ((value.templateRoomMaintenanceReasons as Array<any>).map(TemplateRoomMaintenanceReasonTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

