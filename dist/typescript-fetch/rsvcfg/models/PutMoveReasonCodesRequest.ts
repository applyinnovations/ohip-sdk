/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { MoveReasonCodeType } from './MoveReasonCodeType';
import {
    MoveReasonCodeTypeFromJSON,
    MoveReasonCodeTypeFromJSONTyped,
    MoveReasonCodeTypeToJSON,
} from './MoveReasonCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PutMoveReasonCodesRequest
 */
export interface PutMoveReasonCodesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutMoveReasonCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * List of Move Reason Codes.
     * @type {Array<MoveReasonCodeType>}
     * @memberof PutMoveReasonCodesRequest
     */
    moveReasonCodes?: Array<MoveReasonCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutMoveReasonCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutMoveReasonCodesRequest interface.
 */
export function instanceOfPutMoveReasonCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutMoveReasonCodesRequestFromJSON(json: any): PutMoveReasonCodesRequest {
    return PutMoveReasonCodesRequestFromJSONTyped(json, false);
}

export function PutMoveReasonCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutMoveReasonCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'moveReasonCodes': !exists(json, 'moveReasonCodes') ? undefined : ((json['moveReasonCodes'] as Array<any>).map(MoveReasonCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutMoveReasonCodesRequestToJSON(value?: PutMoveReasonCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'moveReasonCodes': value.moveReasonCodes === undefined ? undefined : ((value.moveReasonCodes as Array<any>).map(MoveReasonCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

