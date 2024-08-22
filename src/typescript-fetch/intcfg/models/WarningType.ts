/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Used when a message has been successfully processed to report any warnings or business errors that occurred.
 * @export
 * @interface WarningType
 */
export interface WarningType {
    /**
     * Property Value
     * @type {string}
     * @memberof WarningType
     */
    value?: string;
    /**
     * An abbreviated version of the error in textual format.
     * @type {string}
     * @memberof WarningType
     */
    shortText?: string;
    /**
     * If present, this refers to a table of coded values exchanged between applications to identify errors or warnings.
     * @type {string}
     * @memberof WarningType
     */
    code?: string;
    /**
     * If present, this URL refers to an online description of the error that occurred.
     * @type {string}
     * @memberof WarningType
     */
    docURL?: string;
    /**
     * If present, recommended values are those enumerated in the ErrorRS, (NotProcessed Incomplete Complete Unknown) however, the data type is designated as string data, recognizing that trading partners may identify additional status conditions not included in the enumeration.
     * @type {string}
     * @memberof WarningType
     */
    status?: string;
    /**
     * If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type=ReqFieldMissing].
     * @type {string}
     * @memberof WarningType
     */
    tag?: string;
    /**
     * If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction.
     * @type {string}
     * @memberof WarningType
     */
    recordId?: string;
    /**
     * The Warning element MUST contain the Type attribute that uses a recommended set of values to indicate the warning type. The validating XSD can expect to accept values that it has NOT been explicitly coded for and process them by using Type ="Unknown".
     * @type {string}
     * @memberof WarningType
     */
    type?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof WarningType
     */
    language?: string;
    /**
     * Reference Place Holder used as an index for this warning.
     * @type {string}
     * @memberof WarningType
     */
    rph?: string;
}

/**
 * Check if a given object implements the WarningType interface.
 */
export function instanceOfWarningType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WarningTypeFromJSON(json: any): WarningType {
    return WarningTypeFromJSONTyped(json, false);
}

export function WarningTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WarningType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'shortText': !exists(json, 'shortText') ? undefined : json['shortText'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'docURL': !exists(json, 'docURL') ? undefined : json['docURL'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'recordId': !exists(json, 'recordId') ? undefined : json['recordId'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'rph': !exists(json, 'rph') ? undefined : json['rph'],
    };
}

export function WarningTypeToJSON(value?: WarningType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'shortText': value.shortText,
        'code': value.code,
        'docURL': value.docURL,
        'status': value.status,
        'tag': value.tag,
        'recordId': value.recordId,
        'type': value.type,
        'language': value.language,
        'rph': value.rph,
    };
}

