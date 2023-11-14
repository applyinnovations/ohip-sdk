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
import type { ProfileTypeEmails } from './ProfileTypeEmails';
import {
    ProfileTypeEmailsFromJSON,
    ProfileTypeEmailsFromJSONTyped,
    ProfileTypeEmailsToJSON,
} from './ProfileTypeEmails';
import type { ProfileTypeTelephones } from './ProfileTypeTelephones';
import {
    ProfileTypeTelephonesFromJSON,
    ProfileTypeTelephonesFromJSONTyped,
    ProfileTypeTelephonesToJSON,
} from './ProfileTypeTelephones';

/**
 * Communication details for a reservation.
 * @export
 * @interface ResCommunicationType
 */
export interface ResCommunicationType {
    /**
     * 
     * @type {ProfileTypeEmails}
     * @memberof ResCommunicationType
     */
    emails?: ProfileTypeEmails;
    /**
     * 
     * @type {ProfileTypeTelephones}
     * @memberof ResCommunicationType
     */
    telephones?: ProfileTypeTelephones;
}

/**
 * Check if a given object implements the ResCommunicationType interface.
 */
export function instanceOfResCommunicationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResCommunicationTypeFromJSON(json: any): ResCommunicationType {
    return ResCommunicationTypeFromJSONTyped(json, false);
}

export function ResCommunicationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResCommunicationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emails': !exists(json, 'emails') ? undefined : ProfileTypeEmailsFromJSON(json['emails']),
        'telephones': !exists(json, 'telephones') ? undefined : ProfileTypeTelephonesFromJSON(json['telephones']),
    };
}

export function ResCommunicationTypeToJSON(value?: ResCommunicationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emails': ProfileTypeEmailsToJSON(value.emails),
        'telephones': ProfileTypeTelephonesToJSON(value.telephones),
    };
}
