/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GamingRequestStatusType } from './GamingRequestStatusType';
import {
    GamingRequestStatusTypeFromJSON,
    GamingRequestStatusTypeFromJSONTyped,
    GamingRequestStatusTypeToJSON,
} from './GamingRequestStatusType';
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
 * Response object for fetch gaming info
 * @export
 * @interface GamingRequestStatusInfo
 */
export interface GamingRequestStatusInfo {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof GamingRequestStatusInfo
     */
    links?: Array<InstanceLink>;
    /**
     * List of guest request status details.
     * @type {Array<GamingRequestStatusType>}
     * @memberof GamingRequestStatusInfo
     */
    statusInfo?: Array<GamingRequestStatusType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GamingRequestStatusInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the GamingRequestStatusInfo interface.
 */
export function instanceOfGamingRequestStatusInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GamingRequestStatusInfoFromJSON(json: any): GamingRequestStatusInfo {
    return GamingRequestStatusInfoFromJSONTyped(json, false);
}

export function GamingRequestStatusInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GamingRequestStatusInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'statusInfo': !exists(json, 'statusInfo') ? undefined : ((json['statusInfo'] as Array<any>).map(GamingRequestStatusTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function GamingRequestStatusInfoToJSON(value?: GamingRequestStatusInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'statusInfo': value.statusInfo === undefined ? undefined : ((value.statusInfo as Array<any>).map(GamingRequestStatusTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

