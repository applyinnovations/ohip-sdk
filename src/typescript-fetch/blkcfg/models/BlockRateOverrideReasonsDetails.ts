/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockRateOverrideReasonType } from './BlockRateOverrideReasonType';
import {
    BlockRateOverrideReasonTypeFromJSON,
    BlockRateOverrideReasonTypeFromJSONTyped,
    BlockRateOverrideReasonTypeToJSON,
} from './BlockRateOverrideReasonType';
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
 * Response object for fetching Block Rate Override Reasons.
 * @export
 * @interface BlockRateOverrideReasonsDetails
 */
export interface BlockRateOverrideReasonsDetails {
    /**
     * List of Block Rate Override Reasons.
     * @type {Array<BlockRateOverrideReasonType>}
     * @memberof BlockRateOverrideReasonsDetails
     */
    blockRateOverrideReasons?: Array<BlockRateOverrideReasonType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockRateOverrideReasonsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockRateOverrideReasonsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockRateOverrideReasonsDetails interface.
 */
export function instanceOfBlockRateOverrideReasonsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockRateOverrideReasonsDetailsFromJSON(json: any): BlockRateOverrideReasonsDetails {
    return BlockRateOverrideReasonsDetailsFromJSONTyped(json, false);
}

export function BlockRateOverrideReasonsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRateOverrideReasonsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockRateOverrideReasons': !exists(json, 'blockRateOverrideReasons') ? undefined : ((json['blockRateOverrideReasons'] as Array<any>).map(BlockRateOverrideReasonTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockRateOverrideReasonsDetailsToJSON(value?: BlockRateOverrideReasonsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockRateOverrideReasons': value.blockRateOverrideReasons === undefined ? undefined : ((value.blockRateOverrideReasons as Array<any>).map(BlockRateOverrideReasonTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
