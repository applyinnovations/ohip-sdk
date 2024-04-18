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
import type { FunctionSpaceAvailabilityType } from './FunctionSpaceAvailabilityType';
import {
    FunctionSpaceAvailabilityTypeFromJSON,
    FunctionSpaceAvailabilityTypeFromJSONTyped,
    FunctionSpaceAvailabilityTypeToJSON,
} from './FunctionSpaceAvailabilityType';
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
 * Response object for retrieving availability for catering function spaces.
 * @export
 * @interface FunctionSpaceAvailabilityDetails
 */
export interface FunctionSpaceAvailabilityDetails {
    /**
     * Collection of available Function Spaces.
     * @type {Array<FunctionSpaceAvailabilityType>}
     * @memberof FunctionSpaceAvailabilityDetails
     */
    functionSpacesAvailability?: Array<FunctionSpaceAvailabilityType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FunctionSpaceAvailabilityDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof FunctionSpaceAvailabilityDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FunctionSpaceAvailabilityDetails interface.
 */
export function instanceOfFunctionSpaceAvailabilityDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FunctionSpaceAvailabilityDetailsFromJSON(json: any): FunctionSpaceAvailabilityDetails {
    return FunctionSpaceAvailabilityDetailsFromJSONTyped(json, false);
}

export function FunctionSpaceAvailabilityDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceAvailabilityDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'functionSpacesAvailability': !exists(json, 'functionSpacesAvailability') ? undefined : ((json['functionSpacesAvailability'] as Array<any>).map(FunctionSpaceAvailabilityTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FunctionSpaceAvailabilityDetailsToJSON(value?: FunctionSpaceAvailabilityDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'functionSpacesAvailability': value.functionSpacesAvailability === undefined ? undefined : ((value.functionSpacesAvailability as Array<any>).map(FunctionSpaceAvailabilityTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
