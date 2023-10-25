/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ARAccountCommentCriteriaType } from './ARAccountCommentCriteriaType';
import {
    ARAccountCommentCriteriaTypeFromJSON,
    ARAccountCommentCriteriaTypeFromJSONTyped,
    ARAccountCommentCriteriaTypeToJSON,
} from './ARAccountCommentCriteriaType';
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
 * Request to create a Comment for an Account.
 * @export
 * @interface AccountComment
 */
export interface AccountComment {
    /**
     * 
     * @type {ARAccountCommentCriteriaType}
     * @memberof AccountComment
     */
    commentInfo?: ARAccountCommentCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AccountComment
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AccountComment
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AccountComment interface.
 */
export function instanceOfAccountComment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountCommentFromJSON(json: any): AccountComment {
    return AccountCommentFromJSONTyped(json, false);
}

export function AccountCommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountComment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commentInfo': !exists(json, 'commentInfo') ? undefined : ARAccountCommentCriteriaTypeFromJSON(json['commentInfo']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AccountCommentToJSON(value?: AccountComment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commentInfo': ARAccountCommentCriteriaTypeToJSON(value.commentInfo),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

