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
import type { BlockLostBookingCodeType } from './BlockLostBookingCodeType';
import {
    BlockLostBookingCodeTypeFromJSON,
    BlockLostBookingCodeTypeFromJSONTyped,
    BlockLostBookingCodeTypeToJSON,
} from './BlockLostBookingCodeType';
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
 * @interface PostBlockLostBookingCodesRequest
 */
export interface PostBlockLostBookingCodesRequest {
    /**
     * List of Block Lost Booking Codes.
     * @type {Array<BlockLostBookingCodeType>}
     * @memberof PostBlockLostBookingCodesRequest
     */
    blockLostBookingCodes?: Array<BlockLostBookingCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostBlockLostBookingCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostBlockLostBookingCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostBlockLostBookingCodesRequest interface.
 */
export function instanceOfPostBlockLostBookingCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostBlockLostBookingCodesRequestFromJSON(json: any): PostBlockLostBookingCodesRequest {
    return PostBlockLostBookingCodesRequestFromJSONTyped(json, false);
}

export function PostBlockLostBookingCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostBlockLostBookingCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockLostBookingCodes': !exists(json, 'blockLostBookingCodes') ? undefined : ((json['blockLostBookingCodes'] as Array<any>).map(BlockLostBookingCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostBlockLostBookingCodesRequestToJSON(value?: PostBlockLostBookingCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockLostBookingCodes': value.blockLostBookingCodes === undefined ? undefined : ((value.blockLostBookingCodes as Array<any>).map(BlockLostBookingCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

