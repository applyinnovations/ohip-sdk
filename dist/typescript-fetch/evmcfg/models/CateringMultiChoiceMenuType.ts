/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TranslationTextType100 } from './TranslationTextType100';
import {
    TranslationTextType100FromJSON,
    TranslationTextType100FromJSONTyped,
    TranslationTextType100ToJSON,
} from './TranslationTextType100';
import type { TranslationTextType20 } from './TranslationTextType20';
import {
    TranslationTextType20FromJSON,
    TranslationTextType20FromJSONTyped,
    TranslationTextType20ToJSON,
} from './TranslationTextType20';

/**
 * 
 * @export
 * @interface CateringMultiChoiceMenuType
 */
export interface CateringMultiChoiceMenuType {
    /**
     * This type holds choice count of the Menu.
     * @type {number}
     * @memberof CateringMultiChoiceMenuType
     */
    choiceCount?: number;
    /**
     * This type holds Courses are defined for Menu.
     * @type {string}
     * @memberof CateringMultiChoiceMenuType
     */
    course?: string;
    /**
     * 
     * @type {TranslationTextType100}
     * @memberof CateringMultiChoiceMenuType
     */
    courseDescription?: TranslationTextType100;
    /**
     * This attributes identifies the courseldd.
     * @type {number}
     * @memberof CateringMultiChoiceMenuType
     */
    courseId?: number;
    /**
     * 
     * @type {TranslationTextType20}
     * @memberof CateringMultiChoiceMenuType
     */
    courseName?: TranslationTextType20;
}

/**
 * Check if a given object implements the CateringMultiChoiceMenuType interface.
 */
export function instanceOfCateringMultiChoiceMenuType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringMultiChoiceMenuTypeFromJSON(json: any): CateringMultiChoiceMenuType {
    return CateringMultiChoiceMenuTypeFromJSONTyped(json, false);
}

export function CateringMultiChoiceMenuTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMultiChoiceMenuType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'choiceCount': !exists(json, 'choiceCount') ? undefined : json['choiceCount'],
        'course': !exists(json, 'course') ? undefined : json['course'],
        'courseDescription': !exists(json, 'courseDescription') ? undefined : TranslationTextType100FromJSON(json['courseDescription']),
        'courseId': !exists(json, 'courseId') ? undefined : json['courseId'],
        'courseName': !exists(json, 'courseName') ? undefined : TranslationTextType20FromJSON(json['courseName']),
    };
}

export function CateringMultiChoiceMenuTypeToJSON(value?: CateringMultiChoiceMenuType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'choiceCount': value.choiceCount,
        'course': value.course,
        'courseDescription': TranslationTextType100ToJSON(value.courseDescription),
        'courseId': value.courseId,
        'courseName': TranslationTextType20ToJSON(value.courseName),
    };
}

