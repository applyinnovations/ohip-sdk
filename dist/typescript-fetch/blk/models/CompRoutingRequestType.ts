/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CompRoutingStatusType } from './CompRoutingStatusType';
import {
    CompRoutingStatusTypeFromJSON,
    CompRoutingStatusTypeFromJSONTyped,
    CompRoutingStatusTypeToJSON,
} from './CompRoutingStatusType';
import type { UserInfoType } from './UserInfoType';
import {
    UserInfoTypeFromJSON,
    UserInfoTypeFromJSONTyped,
    UserInfoTypeToJSON,
} from './UserInfoType';

/**
 * Type for the details of a Comp Routing Request
 * @export
 * @interface CompRoutingRequestType
 */
export interface CompRoutingRequestType {
    /**
     * 
     * @type {string}
     * @memberof CompRoutingRequestType
     */
    comments?: string;
    /**
     * 
     * @type {UserInfoType}
     * @memberof CompRoutingRequestType
     */
    declinedBy?: UserInfoType;
    /**
     * 
     * @type {UserInfoType}
     * @memberof CompRoutingRequestType
     */
    requestedBy?: UserInfoType;
    /**
     * 
     * @type {CompRoutingStatusType}
     * @memberof CompRoutingRequestType
     */
    status?: CompRoutingStatusType;
}

/**
 * Check if a given object implements the CompRoutingRequestType interface.
 */
export function instanceOfCompRoutingRequestType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompRoutingRequestTypeFromJSON(json: any): CompRoutingRequestType {
    return CompRoutingRequestTypeFromJSONTyped(json, false);
}

export function CompRoutingRequestTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompRoutingRequestType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'declinedBy': !exists(json, 'declinedBy') ? undefined : UserInfoTypeFromJSON(json['declinedBy']),
        'requestedBy': !exists(json, 'requestedBy') ? undefined : UserInfoTypeFromJSON(json['requestedBy']),
        'status': !exists(json, 'status') ? undefined : CompRoutingStatusTypeFromJSON(json['status']),
    };
}

export function CompRoutingRequestTypeToJSON(value?: CompRoutingRequestType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comments': value.comments,
        'declinedBy': UserInfoTypeToJSON(value.declinedBy),
        'requestedBy': UserInfoTypeToJSON(value.requestedBy),
        'status': CompRoutingStatusTypeToJSON(value.status),
    };
}

