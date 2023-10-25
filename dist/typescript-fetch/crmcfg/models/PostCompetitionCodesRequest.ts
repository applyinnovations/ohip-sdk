/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CompetitionCodeType } from './CompetitionCodeType';
import {
    CompetitionCodeTypeFromJSON,
    CompetitionCodeTypeFromJSONTyped,
    CompetitionCodeTypeToJSON,
} from './CompetitionCodeType';
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
 * @interface PostCompetitionCodesRequest
 */
export interface PostCompetitionCodesRequest {
    /**
     * List of Competition Codes.
     * @type {Array<CompetitionCodeType>}
     * @memberof PostCompetitionCodesRequest
     */
    competitionCodes?: Array<CompetitionCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostCompetitionCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostCompetitionCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostCompetitionCodesRequest interface.
 */
export function instanceOfPostCompetitionCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostCompetitionCodesRequestFromJSON(json: any): PostCompetitionCodesRequest {
    return PostCompetitionCodesRequestFromJSONTyped(json, false);
}

export function PostCompetitionCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCompetitionCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'competitionCodes': !exists(json, 'competitionCodes') ? undefined : ((json['competitionCodes'] as Array<any>).map(CompetitionCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostCompetitionCodesRequestToJSON(value?: PostCompetitionCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'competitionCodes': value.competitionCodes === undefined ? undefined : ((value.competitionCodes as Array<any>).map(CompetitionCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

