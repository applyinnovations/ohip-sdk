/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommunicationMethodsEntDetailType } from './CommunicationMethodsEntDetailType';
import {
    CommunicationMethodsEntDetailTypeFromJSON,
    CommunicationMethodsEntDetailTypeFromJSONTyped,
    CommunicationMethodsEntDetailTypeToJSON,
} from './CommunicationMethodsEntDetailType';
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
 * Response object for fetching Communication Methods Ent Details.
 * @export
 * @interface CommunicationMethodsEntDetailsDetails
 */
export interface CommunicationMethodsEntDetailsDetails {
    /**
     * List of Communication Methods Ent Details.
     * @type {Array<CommunicationMethodsEntDetailType>}
     * @memberof CommunicationMethodsEntDetailsDetails
     */
    communicationMethodsEntDetails?: Array<CommunicationMethodsEntDetailType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CommunicationMethodsEntDetailsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CommunicationMethodsEntDetailsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CommunicationMethodsEntDetailsDetails interface.
 */
export function instanceOfCommunicationMethodsEntDetailsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommunicationMethodsEntDetailsDetailsFromJSON(json: any): CommunicationMethodsEntDetailsDetails {
    return CommunicationMethodsEntDetailsDetailsFromJSONTyped(json, false);
}

export function CommunicationMethodsEntDetailsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunicationMethodsEntDetailsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'communicationMethodsEntDetails': !exists(json, 'communicationMethodsEntDetails') ? undefined : ((json['communicationMethodsEntDetails'] as Array<any>).map(CommunicationMethodsEntDetailTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CommunicationMethodsEntDetailsDetailsToJSON(value?: CommunicationMethodsEntDetailsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'communicationMethodsEntDetails': value.communicationMethodsEntDetails === undefined ? undefined : ((value.communicationMethodsEntDetails as Array<any>).map(CommunicationMethodsEntDetailTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

