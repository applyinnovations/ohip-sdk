/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DestinationCodeType } from './DestinationCodeType';
import {
    DestinationCodeTypeFromJSON,
    DestinationCodeTypeFromJSONTyped,
    DestinationCodeTypeToJSON,
} from './DestinationCodeType';
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
 * @interface PostDestinationCodesRequest
 */
export interface PostDestinationCodesRequest {
    /**
     * List of Destination Codes.
     * @type {Array<DestinationCodeType>}
     * @memberof PostDestinationCodesRequest
     */
    destinationCodes?: Array<DestinationCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostDestinationCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostDestinationCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostDestinationCodesRequest interface.
 */
export function instanceOfPostDestinationCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostDestinationCodesRequestFromJSON(json: any): PostDestinationCodesRequest {
    return PostDestinationCodesRequestFromJSONTyped(json, false);
}

export function PostDestinationCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostDestinationCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destinationCodes': !exists(json, 'destinationCodes') ? undefined : ((json['destinationCodes'] as Array<any>).map(DestinationCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostDestinationCodesRequestToJSON(value?: PostDestinationCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destinationCodes': value.destinationCodes === undefined ? undefined : ((value.destinationCodes as Array<any>).map(DestinationCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

