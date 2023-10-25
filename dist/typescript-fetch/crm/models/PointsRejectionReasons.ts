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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { PointsRejectionReasonsType } from './PointsRejectionReasonsType';
import {
    PointsRejectionReasonsTypeFromJSON,
    PointsRejectionReasonsTypeFromJSONTyped,
    PointsRejectionReasonsTypeToJSON,
} from './PointsRejectionReasonsType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching member transactions points rejection reasons information.
 * @export
 * @interface PointsRejectionReasons
 */
export interface PointsRejectionReasons {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PointsRejectionReasons
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {PointsRejectionReasonsType}
     * @memberof PointsRejectionReasons
     */
    pointsRejectionReason?: PointsRejectionReasonsType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PointsRejectionReasons
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PointsRejectionReasons interface.
 */
export function instanceOfPointsRejectionReasons(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PointsRejectionReasonsFromJSON(json: any): PointsRejectionReasons {
    return PointsRejectionReasonsFromJSONTyped(json, false);
}

export function PointsRejectionReasonsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointsRejectionReasons {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'pointsRejectionReason': !exists(json, 'pointsRejectionReason') ? undefined : PointsRejectionReasonsTypeFromJSON(json['pointsRejectionReason']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PointsRejectionReasonsToJSON(value?: PointsRejectionReasons | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'pointsRejectionReason': PointsRejectionReasonsTypeToJSON(value.pointsRejectionReason),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

