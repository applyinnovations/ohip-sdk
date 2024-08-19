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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { UserDefinedFieldGroupType } from './UserDefinedFieldGroupType';
import {
    UserDefinedFieldGroupTypeFromJSON,
    UserDefinedFieldGroupTypeFromJSONTyped,
    UserDefinedFieldGroupTypeToJSON,
} from './UserDefinedFieldGroupType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching User Defined Field Groups.
 * @export
 * @interface UserDefinedFieldGroupsDetails
 */
export interface UserDefinedFieldGroupsDetails {
    /**
     * A recurring element that identifies the User Defined Field Group.
     * @type {Array<UserDefinedFieldGroupType>}
     * @memberof UserDefinedFieldGroupsDetails
     */
    userDefinedFieldGroups?: Array<UserDefinedFieldGroupType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof UserDefinedFieldGroupsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof UserDefinedFieldGroupsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the UserDefinedFieldGroupsDetails interface.
 */
export function instanceOfUserDefinedFieldGroupsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserDefinedFieldGroupsDetailsFromJSON(json: any): UserDefinedFieldGroupsDetails {
    return UserDefinedFieldGroupsDetailsFromJSONTyped(json, false);
}

export function UserDefinedFieldGroupsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDefinedFieldGroupsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userDefinedFieldGroups': !exists(json, 'userDefinedFieldGroups') ? undefined : ((json['userDefinedFieldGroups'] as Array<any>).map(UserDefinedFieldGroupTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function UserDefinedFieldGroupsDetailsToJSON(value?: UserDefinedFieldGroupsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userDefinedFieldGroups': value.userDefinedFieldGroups === undefined ? undefined : ((value.userDefinedFieldGroups as Array<any>).map(UserDefinedFieldGroupTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

