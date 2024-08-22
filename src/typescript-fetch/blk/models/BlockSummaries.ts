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
import type { BlockSummariesType } from './BlockSummariesType';
import {
    BlockSummariesTypeFromJSON,
    BlockSummariesTypeFromJSONTyped,
    BlockSummariesTypeToJSON,
} from './BlockSummariesType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MasterInfoType } from './MasterInfoType';
import {
    MasterInfoTypeFromJSON,
    MasterInfoTypeFromJSONTyped,
    MasterInfoTypeToJSON,
} from './MasterInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * It also contains Success,Warnings and Errors related to this operation.
 * @export
 * @interface BlockSummaries
 */
export interface BlockSummaries {
    /**
     * 
     * @type {BlockSummariesType}
     * @memberof BlockSummaries
     */
    blockSummaries?: BlockSummariesType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockSummaries
     */
    links?: Array<InstanceLink>;
    /**
     * Refer to Generic common types document.
     * @type {Array<MasterInfoType>}
     * @memberof BlockSummaries
     */
    masterInfoList?: Array<MasterInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockSummaries
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockSummaries interface.
 */
export function instanceOfBlockSummaries(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockSummariesFromJSON(json: any): BlockSummaries {
    return BlockSummariesFromJSONTyped(json, false);
}

export function BlockSummariesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockSummaries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockSummaries': !exists(json, 'blockSummaries') ? undefined : BlockSummariesTypeFromJSON(json['blockSummaries']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'masterInfoList': !exists(json, 'masterInfoList') ? undefined : ((json['masterInfoList'] as Array<any>).map(MasterInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockSummariesToJSON(value?: BlockSummaries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockSummaries': BlockSummariesTypeToJSON(value.blockSummaries),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'masterInfoList': value.masterInfoList === undefined ? undefined : ((value.masterInfoList as Array<any>).map(MasterInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

