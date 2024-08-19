/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { ServiceRequest } from './ServiceRequest';
import {
    ServiceRequestFromJSON,
    ServiceRequestFromJSONTyped,
    ServiceRequestToJSON,
} from './ServiceRequest';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for service requests.
 * @export
 * @interface ServiceRequestsInfo
 */
export interface ServiceRequestsInfo {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ServiceRequestsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Service request.
     * @type {Array<ServiceRequest>}
     * @memberof ServiceRequestsInfo
     */
    serviceRequestsDetails?: Array<ServiceRequest>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ServiceRequestsInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ServiceRequestsInfo interface.
 */
export function instanceOfServiceRequestsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServiceRequestsInfoFromJSON(json: any): ServiceRequestsInfo {
    return ServiceRequestsInfoFromJSONTyped(json, false);
}

export function ServiceRequestsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceRequestsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'serviceRequestsDetails': !exists(json, 'serviceRequestsDetails') ? undefined : ((json['serviceRequestsDetails'] as Array<any>).map(ServiceRequestFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ServiceRequestsInfoToJSON(value?: ServiceRequestsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'serviceRequestsDetails': value.serviceRequestsDetails === undefined ? undefined : ((value.serviceRequestsDetails as Array<any>).map(ServiceRequestToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

