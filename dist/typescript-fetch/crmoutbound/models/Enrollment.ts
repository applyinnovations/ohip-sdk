/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
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
import type { ProfileEnrollmentType } from './ProfileEnrollmentType';
import {
    ProfileEnrollmentTypeFromJSON,
    ProfileEnrollmentTypeFromJSONTyped,
    ProfileEnrollmentTypeToJSON,
} from './ProfileEnrollmentType';

/**
 * Response object for fetching profile enrollment from external system.
 * @export
 * @interface Enrollment
 */
export interface Enrollment {
    /**
     * 
     * @type {ProfileEnrollmentType}
     * @memberof Enrollment
     */
    enrollmentInfo?: ProfileEnrollmentType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof Enrollment
     */
    links?: Array<InstanceLink>;
}

/**
 * Check if a given object implements the Enrollment interface.
 */
export function instanceOfEnrollment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EnrollmentFromJSON(json: any): Enrollment {
    return EnrollmentFromJSONTyped(json, false);
}

export function EnrollmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Enrollment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enrollmentInfo': !exists(json, 'enrollmentInfo') ? undefined : ProfileEnrollmentTypeFromJSON(json['enrollmentInfo']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
    };
}

export function EnrollmentToJSON(value?: Enrollment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enrollmentInfo': ProfileEnrollmentTypeToJSON(value.enrollmentInfo),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
    };
}

