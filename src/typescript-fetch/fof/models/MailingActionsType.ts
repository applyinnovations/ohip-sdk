/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * Defines mailing action list for the profile.
 * @export
 * @interface MailingActionsType
 */
export interface MailingActionsType {
    /**
     * When true indicates that profile has subscribed to the mailing list.
     * @type {boolean}
     * @memberof MailingActionsType
     */
    active?: boolean;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof MailingActionsType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof MailingActionsType
     */
    hasMore?: boolean;
    /**
     * Defines mailing action code and description.
     * @type {Array<CodeDescriptionType>}
     * @memberof MailingActionsType
     */
    mailingAction?: Array<CodeDescriptionType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof MailingActionsType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the MailingActionsType interface.
 */
export function instanceOfMailingActionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MailingActionsTypeFromJSON(json: any): MailingActionsType {
    return MailingActionsTypeFromJSONTyped(json, false);
}

export function MailingActionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MailingActionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'mailingAction': !exists(json, 'mailingAction') ? undefined : ((json['mailingAction'] as Array<any>).map(CodeDescriptionTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function MailingActionsTypeToJSON(value?: MailingActionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'count': value.count,
        'hasMore': value.hasMore,
        'mailingAction': value.mailingAction === undefined ? undefined : ((value.mailingAction as Array<any>).map(CodeDescriptionTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
