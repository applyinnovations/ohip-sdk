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
import type { BlockStatusCodeType } from './BlockStatusCodeType';
import {
    BlockStatusCodeTypeFromJSON,
    BlockStatusCodeTypeFromJSONTyped,
    BlockStatusCodeTypeToJSON,
} from './BlockStatusCodeType';
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
 * Response object for fetching block status codes.
 * @export
 * @interface StatusCodeDetails
 */
export interface StatusCodeDetails {
    /**
     * Block status code information.
     * @type {Array<BlockStatusCodeType>}
     * @memberof StatusCodeDetails
     */
    blockStatusCodes?: Array<BlockStatusCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof StatusCodeDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof StatusCodeDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the StatusCodeDetails interface.
 */
export function instanceOfStatusCodeDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatusCodeDetailsFromJSON(json: any): StatusCodeDetails {
    return StatusCodeDetailsFromJSONTyped(json, false);
}

export function StatusCodeDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusCodeDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockStatusCodes': !exists(json, 'blockStatusCodes') ? undefined : ((json['blockStatusCodes'] as Array<any>).map(BlockStatusCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function StatusCodeDetailsToJSON(value?: StatusCodeDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockStatusCodes': value.blockStatusCodes === undefined ? undefined : ((value.blockStatusCodes as Array<any>).map(BlockStatusCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

