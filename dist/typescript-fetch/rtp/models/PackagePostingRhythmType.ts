/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PackagePostingRhythmTypeCertainNightsOfTheWeek } from './PackagePostingRhythmTypeCertainNightsOfTheWeek';
import {
    PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSON,
    PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSONTyped,
    PackagePostingRhythmTypeCertainNightsOfTheWeekToJSON,
} from './PackagePostingRhythmTypeCertainNightsOfTheWeek';
import type { PackagePostingRhythmTypeCustomNightSchedule } from './PackagePostingRhythmTypeCustomNightSchedule';
import {
    PackagePostingRhythmTypeCustomNightScheduleFromJSON,
    PackagePostingRhythmTypeCustomNightScheduleFromJSONTyped,
    PackagePostingRhythmTypeCustomNightScheduleToJSON,
} from './PackagePostingRhythmTypeCustomNightSchedule';
import type { PackagePostingRhythmTypeCustomStaySchedule } from './PackagePostingRhythmTypeCustomStaySchedule';
import {
    PackagePostingRhythmTypeCustomStayScheduleFromJSON,
    PackagePostingRhythmTypeCustomStayScheduleFromJSONTyped,
    PackagePostingRhythmTypeCustomStayScheduleToJSON,
} from './PackagePostingRhythmTypeCustomStaySchedule';
import type { PackagePostingRhythmTypeEveryXNightsStartingNightY } from './PackagePostingRhythmTypeEveryXNightsStartingNightY';
import {
    PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSON,
    PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSONTyped,
    PackagePostingRhythmTypeEveryXNightsStartingNightYToJSON,
} from './PackagePostingRhythmTypeEveryXNightsStartingNightY';
import type { PostingRhythmType } from './PostingRhythmType';
import {
    PostingRhythmTypeFromJSON,
    PostingRhythmTypeFromJSONTyped,
    PostingRhythmTypeToJSON,
} from './PostingRhythmType';

/**
 * Package Posting rhythm type.
 * @export
 * @interface PackagePostingRhythmType
 */
export interface PackagePostingRhythmType {
    /**
     * 
     * @type {PackagePostingRhythmTypeCertainNightsOfTheWeek}
     * @memberof PackagePostingRhythmType
     */
    certainNightsOfTheWeek?: PackagePostingRhythmTypeCertainNightsOfTheWeek;
    /**
     * 
     * @type {PackagePostingRhythmTypeCustomNightSchedule}
     * @memberof PackagePostingRhythmType
     */
    customNightSchedule?: PackagePostingRhythmTypeCustomNightSchedule;
    /**
     * 
     * @type {PackagePostingRhythmTypeCustomStaySchedule}
     * @memberof PackagePostingRhythmType
     */
    customStaySchedule?: PackagePostingRhythmTypeCustomStaySchedule;
    /**
     * 
     * @type {PackagePostingRhythmTypeEveryXNightsStartingNightY}
     * @memberof PackagePostingRhythmType
     */
    everyXNightsStartingNightY?: PackagePostingRhythmTypeEveryXNightsStartingNightY;
    /**
     * 
     * @type {PostingRhythmType}
     * @memberof PackagePostingRhythmType
     */
    type?: PostingRhythmType;
}

/**
 * Check if a given object implements the PackagePostingRhythmType interface.
 */
export function instanceOfPackagePostingRhythmType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackagePostingRhythmTypeFromJSON(json: any): PackagePostingRhythmType {
    return PackagePostingRhythmTypeFromJSONTyped(json, false);
}

export function PackagePostingRhythmTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagePostingRhythmType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'certainNightsOfTheWeek': !exists(json, 'certainNightsOfTheWeek') ? undefined : PackagePostingRhythmTypeCertainNightsOfTheWeekFromJSON(json['certainNightsOfTheWeek']),
        'customNightSchedule': !exists(json, 'customNightSchedule') ? undefined : PackagePostingRhythmTypeCustomNightScheduleFromJSON(json['customNightSchedule']),
        'customStaySchedule': !exists(json, 'customStaySchedule') ? undefined : PackagePostingRhythmTypeCustomStayScheduleFromJSON(json['customStaySchedule']),
        'everyXNightsStartingNightY': !exists(json, 'everyXNightsStartingNightY') ? undefined : PackagePostingRhythmTypeEveryXNightsStartingNightYFromJSON(json['everyXNightsStartingNightY']),
        'type': !exists(json, 'type') ? undefined : PostingRhythmTypeFromJSON(json['type']),
    };
}

export function PackagePostingRhythmTypeToJSON(value?: PackagePostingRhythmType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'certainNightsOfTheWeek': PackagePostingRhythmTypeCertainNightsOfTheWeekToJSON(value.certainNightsOfTheWeek),
        'customNightSchedule': PackagePostingRhythmTypeCustomNightScheduleToJSON(value.customNightSchedule),
        'customStaySchedule': PackagePostingRhythmTypeCustomStayScheduleToJSON(value.customStaySchedule),
        'everyXNightsStartingNightY': PackagePostingRhythmTypeEveryXNightsStartingNightYToJSON(value.everyXNightsStartingNightY),
        'type': PostingRhythmTypeToJSON(value.type),
    };
}

