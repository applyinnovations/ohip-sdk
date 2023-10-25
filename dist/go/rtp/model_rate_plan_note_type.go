/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RatePlanNoteType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanNoteType{}

// RatePlanNoteType Details of the Rate Plan Approval Note
type RatePlanNoteType struct {
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Note Text
	Note *string `json:"note,omitempty"`
	NoteId *UniqueIDType `json:"noteId,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
}

// NewRatePlanNoteType instantiates a new RatePlanNoteType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanNoteType() *RatePlanNoteType {
	this := RatePlanNoteType{}
	return &this
}

// NewRatePlanNoteTypeWithDefaults instantiates a new RatePlanNoteType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanNoteTypeWithDefaults() *RatePlanNoteType {
	this := RatePlanNoteType{}
	return &this
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *RatePlanNoteType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanNoteType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *RatePlanNoteType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *RatePlanNoteType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *RatePlanNoteType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanNoteType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *RatePlanNoteType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *RatePlanNoteType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *RatePlanNoteType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanNoteType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *RatePlanNoteType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *RatePlanNoteType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *RatePlanNoteType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanNoteType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *RatePlanNoteType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *RatePlanNoteType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetNote returns the Note field value if set, zero value otherwise.
func (o *RatePlanNoteType) GetNote() string {
	if o == nil || IsNil(o.Note) {
		var ret string
		return ret
	}
	return *o.Note
}

// GetNoteOk returns a tuple with the Note field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanNoteType) GetNoteOk() (*string, bool) {
	if o == nil || IsNil(o.Note) {
		return nil, false
	}
	return o.Note, true
}

// HasNote returns a boolean if a field has been set.
func (o *RatePlanNoteType) HasNote() bool {
	if o != nil && !IsNil(o.Note) {
		return true
	}

	return false
}

// SetNote gets a reference to the given string and assigns it to the Note field.
func (o *RatePlanNoteType) SetNote(v string) {
	o.Note = &v
}

// GetNoteId returns the NoteId field value if set, zero value otherwise.
func (o *RatePlanNoteType) GetNoteId() UniqueIDType {
	if o == nil || IsNil(o.NoteId) {
		var ret UniqueIDType
		return ret
	}
	return *o.NoteId
}

// GetNoteIdOk returns a tuple with the NoteId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanNoteType) GetNoteIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.NoteId) {
		return nil, false
	}
	return o.NoteId, true
}

// HasNoteId returns a boolean if a field has been set.
func (o *RatePlanNoteType) HasNoteId() bool {
	if o != nil && !IsNil(o.NoteId) {
		return true
	}

	return false
}

// SetNoteId gets a reference to the given UniqueIDType and assigns it to the NoteId field.
func (o *RatePlanNoteType) SetNoteId(v UniqueIDType) {
	o.NoteId = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *RatePlanNoteType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanNoteType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *RatePlanNoteType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *RatePlanNoteType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

func (o RatePlanNoteType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanNoteType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.Note) {
		toSerialize["note"] = o.Note
	}
	if !IsNil(o.NoteId) {
		toSerialize["noteId"] = o.NoteId
	}
	if !IsNil(o.PurgeDate) {
		toSerialize["purgeDate"] = o.PurgeDate
	}
	return toSerialize, nil
}

type NullableRatePlanNoteType struct {
	value *RatePlanNoteType
	isSet bool
}

func (v NullableRatePlanNoteType) Get() *RatePlanNoteType {
	return v.value
}

func (v *NullableRatePlanNoteType) Set(val *RatePlanNoteType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanNoteType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanNoteType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanNoteType(val *RatePlanNoteType) *NullableRatePlanNoteType {
	return &NullableRatePlanNoteType{value: val, isSet: true}
}

func (v NullableRatePlanNoteType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanNoteType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


