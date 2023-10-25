/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommentInfoType } from './CommentInfoType';
import {
    CommentInfoTypeFromJSON,
    CommentInfoTypeFromJSONTyped,
    CommentInfoTypeToJSON,
} from './CommentInfoType';
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
 * @interface ChangeHotelNotesRequest
 */
export interface ChangeHotelNotesRequest {
    /**
     * List of Notes of the hotel.
     * @type {Array<CommentInfoType>}
     * @memberof ChangeHotelNotesRequest
     */
    hotelNotes?: Array<CommentInfoType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeHotelNotesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeHotelNotesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeHotelNotesRequest interface.
 */
export function instanceOfChangeHotelNotesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeHotelNotesRequestFromJSON(json: any): ChangeHotelNotesRequest {
    return ChangeHotelNotesRequestFromJSONTyped(json, false);
}

export function ChangeHotelNotesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeHotelNotesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelNotes': !exists(json, 'hotelNotes') ? undefined : ((json['hotelNotes'] as Array<any>).map(CommentInfoTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeHotelNotesRequestToJSON(value?: ChangeHotelNotesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelNotes': value.hotelNotes === undefined ? undefined : ((value.hotelNotes as Array<any>).map(CommentInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

