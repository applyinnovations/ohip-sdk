/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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

/**
 * List of Notes for the customer.
 * @export
 * @interface ProfileTypeComments
 */
export interface ProfileTypeComments {
    /**
     * Collection of Detailed information on comments for the customer.
     * @type {Array<CommentInfoType>}
     * @memberof ProfileTypeComments
     */
    commentInfo?: Array<CommentInfoType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileTypeComments
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeComments
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeComments
     */
    count?: number;
}

/**
 * Check if a given object implements the ProfileTypeComments interface.
 */
export function instanceOfProfileTypeComments(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileTypeCommentsFromJSON(json: any): ProfileTypeComments {
    return ProfileTypeCommentsFromJSONTyped(json, false);
}

export function ProfileTypeCommentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeComments {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commentInfo': !exists(json, 'commentInfo') ? undefined : ((json['commentInfo'] as Array<any>).map(CommentInfoTypeFromJSON)),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function ProfileTypeCommentsToJSON(value?: ProfileTypeComments | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commentInfo': value.commentInfo === undefined ? undefined : ((value.commentInfo as Array<any>).map(CommentInfoTypeToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}

