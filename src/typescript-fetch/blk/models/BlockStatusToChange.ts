/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChangeBlockStatusType } from './ChangeBlockStatusType';
import {
    ChangeBlockStatusTypeFromJSON,
    ChangeBlockStatusTypeFromJSONTyped,
    ChangeBlockStatusTypeToJSON,
} from './ChangeBlockStatusType';
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
 * Request object for changing the booking status of the business block.
 * @export
 * @interface BlockStatusToChange
 */
export interface BlockStatusToChange {
    /**
     * Indicator if the request is to be submitted as a background process.
     * @type {boolean}
     * @memberof BlockStatusToChange
     */
    backgroundProcessMode?: boolean;
    /**
     * Contains the booking status of the business block.
     * @type {object}
     * @memberof BlockStatusToChange
     */
    blocksStatus?: object;
    /**
     * 
     * @type {ChangeBlockStatusType}
     * @memberof BlockStatusToChange
     */
    changeBlockStatus?: ChangeBlockStatusType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockStatusToChange
     */
    links?: Array<InstanceLink>;
    /**
     * Indicator if the request is a verification on whether the block status can be changed.
     * @type {boolean}
     * @memberof BlockStatusToChange
     */
    verificationOnly?: boolean;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockStatusToChange
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockStatusToChange interface.
 */
export function instanceOfBlockStatusToChange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockStatusToChangeFromJSON(json: any): BlockStatusToChange {
    return BlockStatusToChangeFromJSONTyped(json, false);
}

export function BlockStatusToChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatusToChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backgroundProcessMode': !exists(json, 'backgroundProcessMode') ? undefined : json['backgroundProcessMode'],
        'blocksStatus': !exists(json, 'blocksStatus') ? undefined : json['blocksStatus'],
        'changeBlockStatus': !exists(json, 'changeBlockStatus') ? undefined : ChangeBlockStatusTypeFromJSON(json['changeBlockStatus']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'verificationOnly': !exists(json, 'verificationOnly') ? undefined : json['verificationOnly'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockStatusToChangeToJSON(value?: BlockStatusToChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backgroundProcessMode': value.backgroundProcessMode,
        'blocksStatus': value.blocksStatus,
        'changeBlockStatus': ChangeBlockStatusTypeToJSON(value.changeBlockStatus),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'verificationOnly': value.verificationOnly,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
