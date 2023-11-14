/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AttachmentsType } from './AttachmentsType';
import {
    AttachmentsTypeFromJSON,
    AttachmentsTypeFromJSONTyped,
    AttachmentsTypeToJSON,
} from './AttachmentsType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object with the details of the attachments of a profile.
 * @export
 * @interface ProfileAttachments
 */
export interface ProfileAttachments {
    /**
     * 
     * @type {Links}
     * @memberof ProfileAttachments
     */
    links?: Links;
    /**
     * 
     * @type {AttachmentsType}
     * @memberof ProfileAttachments
     */
    profileAttachments?: AttachmentsType;
    /**
     * 
     * @type {WarningsType}
     * @memberof ProfileAttachments
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ProfileAttachments interface.
 */
export function instanceOfProfileAttachments(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileAttachmentsFromJSON(json: any): ProfileAttachments {
    return ProfileAttachmentsFromJSONTyped(json, false);
}

export function ProfileAttachmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileAttachments {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'profileAttachments': !exists(json, 'profileAttachments') ? undefined : AttachmentsTypeFromJSON(json['profileAttachments']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ProfileAttachmentsToJSON(value?: ProfileAttachments | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'profileAttachments': AttachmentsTypeToJSON(value.profileAttachments),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
