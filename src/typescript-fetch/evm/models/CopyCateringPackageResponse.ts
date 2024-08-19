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

import { exists, mapValues } from '../runtime';
import type { CateringEventsProcessedInfoType } from './CateringEventsProcessedInfoType';
import {
    CateringEventsProcessedInfoTypeFromJSON,
    CateringEventsProcessedInfoTypeFromJSONTyped,
    CateringEventsProcessedInfoTypeToJSON,
} from './CateringEventsProcessedInfoType';
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
 * Response object for copying packages.
 * @export
 * @interface CopyCateringPackageResponse
 */
export interface CopyCateringPackageResponse {
    /**
     * Status/Info of the processed packages.
     * @type {Array<CateringEventsProcessedInfoType>}
     * @memberof CopyCateringPackageResponse
     */
    copyCateringPackageProcessedInfoList?: Array<CateringEventsProcessedInfoType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CopyCateringPackageResponse
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof CopyCateringPackageResponse
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CopyCateringPackageResponse interface.
 */
export function instanceOfCopyCateringPackageResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyCateringPackageResponseFromJSON(json: any): CopyCateringPackageResponse {
    return CopyCateringPackageResponseFromJSONTyped(json, false);
}

export function CopyCateringPackageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyCateringPackageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyCateringPackageProcessedInfoList': !exists(json, 'copyCateringPackageProcessedInfoList') ? undefined : ((json['copyCateringPackageProcessedInfoList'] as Array<any>).map(CateringEventsProcessedInfoTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CopyCateringPackageResponseToJSON(value?: CopyCateringPackageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyCateringPackageProcessedInfoList': value.copyCateringPackageProcessedInfoList === undefined ? undefined : ((value.copyCateringPackageProcessedInfoList as Array<any>).map(CateringEventsProcessedInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

