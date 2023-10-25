/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { ServiceRequestCodeType } from './ServiceRequestCodeType';
import {
    ServiceRequestCodeTypeFromJSON,
    ServiceRequestCodeTypeFromJSONTyped,
    ServiceRequestCodeTypeToJSON,
} from './ServiceRequestCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing existing service request codes.
 * @export
 * @interface ServiceRequestCodesToBeChanged
 */
export interface ServiceRequestCodesToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ServiceRequestCodesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Details for service request code type.
     * @type {Array<ServiceRequestCodeType>}
     * @memberof ServiceRequestCodesToBeChanged
     */
    serviceRequestCodes?: Array<ServiceRequestCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ServiceRequestCodesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ServiceRequestCodesToBeChanged interface.
 */
export function instanceOfServiceRequestCodesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServiceRequestCodesToBeChangedFromJSON(json: any): ServiceRequestCodesToBeChanged {
    return ServiceRequestCodesToBeChangedFromJSONTyped(json, false);
}

export function ServiceRequestCodesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceRequestCodesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'serviceRequestCodes': !exists(json, 'serviceRequestCodes') ? undefined : ((json['serviceRequestCodes'] as Array<any>).map(ServiceRequestCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ServiceRequestCodesToBeChangedToJSON(value?: ServiceRequestCodesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'serviceRequestCodes': value.serviceRequestCodes === undefined ? undefined : ((value.serviceRequestCodes as Array<any>).map(ServiceRequestCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

