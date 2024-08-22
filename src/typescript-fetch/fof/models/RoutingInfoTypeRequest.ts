/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CompRoutingRequestType } from './CompRoutingRequestType';
import {
    CompRoutingRequestTypeFromJSON,
    CompRoutingRequestTypeFromJSONTyped,
    CompRoutingRequestTypeToJSON,
} from './CompRoutingRequestType';
import type { RoutingInstructionType } from './RoutingInstructionType';
import {
    RoutingInstructionTypeFromJSON,
    RoutingInstructionTypeFromJSONTyped,
    RoutingInstructionTypeToJSON,
} from './RoutingInstructionType';

/**
 * Comp Accounting Request routing
 * @export
 * @interface RoutingInfoTypeRequest
 */
export interface RoutingInfoTypeRequest {
    /**
     * 
     * @type {CompRoutingRequestType}
     * @memberof RoutingInfoTypeRequest
     */
    compRequestInfo?: CompRoutingRequestType;
    /**
     * Set of routing instructions associated to this routing type.
     * @type {Array<RoutingInstructionType>}
     * @memberof RoutingInfoTypeRequest
     */
    instructions?: Array<RoutingInstructionType>;
}

/**
 * Check if a given object implements the RoutingInfoTypeRequest interface.
 */
export function instanceOfRoutingInfoTypeRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoutingInfoTypeRequestFromJSON(json: any): RoutingInfoTypeRequest {
    return RoutingInfoTypeRequestFromJSONTyped(json, false);
}

export function RoutingInfoTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInfoTypeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compRequestInfo': !exists(json, 'compRequestInfo') ? undefined : CompRoutingRequestTypeFromJSON(json['compRequestInfo']),
        'instructions': !exists(json, 'instructions') ? undefined : ((json['instructions'] as Array<any>).map(RoutingInstructionTypeFromJSON)),
    };
}

export function RoutingInfoTypeRequestToJSON(value?: RoutingInfoTypeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compRequestInfo': CompRoutingRequestTypeToJSON(value.compRequestInfo),
        'instructions': value.instructions === undefined ? undefined : ((value.instructions as Array<any>).map(RoutingInstructionTypeToJSON)),
    };
}

