/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FunctionSpaceLocationType } from './FunctionSpaceLocationType';
import {
    FunctionSpaceLocationTypeFromJSON,
    FunctionSpaceLocationTypeFromJSONTyped,
    FunctionSpaceLocationTypeToJSON,
} from './FunctionSpaceLocationType';
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
 * 
 * @export
 * @interface PostFunctionSpaceLocationsRequest
 */
export interface PostFunctionSpaceLocationsRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostFunctionSpaceLocationsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * List of the function space locations to be configured or fetched
     * @type {Array<FunctionSpaceLocationType>}
     * @memberof PostFunctionSpaceLocationsRequest
     */
    locations?: Array<FunctionSpaceLocationType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostFunctionSpaceLocationsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostFunctionSpaceLocationsRequest interface.
 */
export function instanceOfPostFunctionSpaceLocationsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostFunctionSpaceLocationsRequestFromJSON(json: any): PostFunctionSpaceLocationsRequest {
    return PostFunctionSpaceLocationsRequestFromJSONTyped(json, false);
}

export function PostFunctionSpaceLocationsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostFunctionSpaceLocationsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'locations': !exists(json, 'locations') ? undefined : ((json['locations'] as Array<any>).map(FunctionSpaceLocationTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostFunctionSpaceLocationsRequestToJSON(value?: PostFunctionSpaceLocationsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'locations': value.locations === undefined ? undefined : ((value.locations as Array<any>).map(FunctionSpaceLocationTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

