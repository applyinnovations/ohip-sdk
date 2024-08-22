/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockAccessExclusionMessageType } from './BlockAccessExclusionMessageType';
import {
    BlockAccessExclusionMessageTypeFromJSON,
    BlockAccessExclusionMessageTypeFromJSONTyped,
    BlockAccessExclusionMessageTypeToJSON,
} from './BlockAccessExclusionMessageType';
import type { BlockAccessExclusionType } from './BlockAccessExclusionType';
import {
    BlockAccessExclusionTypeFromJSON,
    BlockAccessExclusionTypeFromJSONTyped,
    BlockAccessExclusionTypeToJSON,
} from './BlockAccessExclusionType';

/**
 * Access Exclusion information indicating the actions allowed under a HUB or hotel for which the access exclusion is set.
 * @export
 * @interface BlockAccessExclusionsType
 */
export interface BlockAccessExclusionsType {
    /**
     * 
     * @type {BlockAccessExclusionMessageType}
     * @memberof BlockAccessExclusionsType
     */
    accessExclusionMessage?: BlockAccessExclusionMessageType;
    /**
     * 
     * @type {Array<BlockAccessExclusionType>}
     * @memberof BlockAccessExclusionsType
     */
    blockAccessExclusion?: Array<BlockAccessExclusionType>;
    /**
     * Hotel code to which the block belongs to.
     * @type {string}
     * @memberof BlockAccessExclusionsType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof BlockAccessExclusionsType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof BlockAccessExclusionsType
     */
    idContext?: string;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof BlockAccessExclusionsType
     */
    instance?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof BlockAccessExclusionsType
     */
    type?: string;
}

/**
 * Check if a given object implements the BlockAccessExclusionsType interface.
 */
export function instanceOfBlockAccessExclusionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockAccessExclusionsTypeFromJSON(json: any): BlockAccessExclusionsType {
    return BlockAccessExclusionsTypeFromJSONTyped(json, false);
}

export function BlockAccessExclusionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockAccessExclusionsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessExclusionMessage': !exists(json, 'accessExclusionMessage') ? undefined : BlockAccessExclusionMessageTypeFromJSON(json['accessExclusionMessage']),
        'blockAccessExclusion': !exists(json, 'blockAccessExclusion') ? undefined : ((json['blockAccessExclusion'] as Array<any>).map(BlockAccessExclusionTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'idContext': !exists(json, 'idContext') ? undefined : json['idContext'],
        'instance': !exists(json, 'instance') ? undefined : json['instance'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function BlockAccessExclusionsTypeToJSON(value?: BlockAccessExclusionsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessExclusionMessage': BlockAccessExclusionMessageTypeToJSON(value.accessExclusionMessage),
        'blockAccessExclusion': value.blockAccessExclusion === undefined ? undefined : ((value.blockAccessExclusion as Array<any>).map(BlockAccessExclusionTypeToJSON)),
        'hotelId': value.hotelId,
        'id': value.id,
        'idContext': value.idContext,
        'instance': value.instance,
        'type': value.type,
    };
}

