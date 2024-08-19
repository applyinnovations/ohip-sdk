/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockProfilesType } from './BlockProfilesType';
import {
    BlockProfilesTypeFromJSON,
    BlockProfilesTypeFromJSONTyped,
    BlockProfilesTypeToJSON,
} from './BlockProfilesType';
import type { ImageSetType } from './ImageSetType';
import {
    ImageSetTypeFromJSON,
    ImageSetTypeFromJSONTyped,
    ImageSetTypeToJSON,
} from './ImageSetType';

/**
 * Primary account and contact for the block.
 * @export
 * @interface BlockDetailsTypePrimaryProfiles
 */
export interface BlockDetailsTypePrimaryProfiles {
    /**
     * 
     * @type {BlockProfilesType}
     * @memberof BlockDetailsTypePrimaryProfiles
     */
    account?: BlockProfilesType;
    /**
     * 
     * @type {BlockProfilesType}
     * @memberof BlockDetailsTypePrimaryProfiles
     */
    contact?: BlockProfilesType;
    /**
     * 
     * @type {ImageSetType}
     * @memberof BlockDetailsTypePrimaryProfiles
     */
    image?: ImageSetType;
}

/**
 * Check if a given object implements the BlockDetailsTypePrimaryProfiles interface.
 */
export function instanceOfBlockDetailsTypePrimaryProfiles(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockDetailsTypePrimaryProfilesFromJSON(json: any): BlockDetailsTypePrimaryProfiles {
    return BlockDetailsTypePrimaryProfilesFromJSONTyped(json, false);
}

export function BlockDetailsTypePrimaryProfilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockDetailsTypePrimaryProfiles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : BlockProfilesTypeFromJSON(json['account']),
        'contact': !exists(json, 'contact') ? undefined : BlockProfilesTypeFromJSON(json['contact']),
        'image': !exists(json, 'image') ? undefined : ImageSetTypeFromJSON(json['image']),
    };
}

export function BlockDetailsTypePrimaryProfilesToJSON(value?: BlockDetailsTypePrimaryProfiles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': BlockProfilesTypeToJSON(value.account),
        'contact': BlockProfilesTypeToJSON(value.contact),
        'image': ImageSetTypeToJSON(value.image),
    };
}

