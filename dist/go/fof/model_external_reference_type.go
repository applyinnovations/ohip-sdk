/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ExternalReferenceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExternalReferenceType{}

// ExternalReferenceType This type contains unique information of external reference.
type ExternalReferenceType struct {
	// Unique ID of external reference.
	Id *string `json:"id,omitempty"`
	// ID context for external reference.
	IdContext *string `json:"idContext,omitempty"`
	// ID extension for external reference.
	IdExtension *int32 `json:"idExtension,omitempty"`
}

// NewExternalReferenceType instantiates a new ExternalReferenceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExternalReferenceType() *ExternalReferenceType {
	this := ExternalReferenceType{}
	return &this
}

// NewExternalReferenceTypeWithDefaults instantiates a new ExternalReferenceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExternalReferenceTypeWithDefaults() *ExternalReferenceType {
	this := ExternalReferenceType{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ExternalReferenceType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExternalReferenceType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ExternalReferenceType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ExternalReferenceType) SetId(v string) {
	o.Id = &v
}

// GetIdContext returns the IdContext field value if set, zero value otherwise.
func (o *ExternalReferenceType) GetIdContext() string {
	if o == nil || IsNil(o.IdContext) {
		var ret string
		return ret
	}
	return *o.IdContext
}

// GetIdContextOk returns a tuple with the IdContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExternalReferenceType) GetIdContextOk() (*string, bool) {
	if o == nil || IsNil(o.IdContext) {
		return nil, false
	}
	return o.IdContext, true
}

// HasIdContext returns a boolean if a field has been set.
func (o *ExternalReferenceType) HasIdContext() bool {
	if o != nil && !IsNil(o.IdContext) {
		return true
	}

	return false
}

// SetIdContext gets a reference to the given string and assigns it to the IdContext field.
func (o *ExternalReferenceType) SetIdContext(v string) {
	o.IdContext = &v
}

// GetIdExtension returns the IdExtension field value if set, zero value otherwise.
func (o *ExternalReferenceType) GetIdExtension() int32 {
	if o == nil || IsNil(o.IdExtension) {
		var ret int32
		return ret
	}
	return *o.IdExtension
}

// GetIdExtensionOk returns a tuple with the IdExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExternalReferenceType) GetIdExtensionOk() (*int32, bool) {
	if o == nil || IsNil(o.IdExtension) {
		return nil, false
	}
	return o.IdExtension, true
}

// HasIdExtension returns a boolean if a field has been set.
func (o *ExternalReferenceType) HasIdExtension() bool {
	if o != nil && !IsNil(o.IdExtension) {
		return true
	}

	return false
}

// SetIdExtension gets a reference to the given int32 and assigns it to the IdExtension field.
func (o *ExternalReferenceType) SetIdExtension(v int32) {
	o.IdExtension = &v
}

func (o ExternalReferenceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExternalReferenceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.IdContext) {
		toSerialize["idContext"] = o.IdContext
	}
	if !IsNil(o.IdExtension) {
		toSerialize["idExtension"] = o.IdExtension
	}
	return toSerialize, nil
}

type NullableExternalReferenceType struct {
	value *ExternalReferenceType
	isSet bool
}

func (v NullableExternalReferenceType) Get() *ExternalReferenceType {
	return v.value
}

func (v *NullableExternalReferenceType) Set(val *ExternalReferenceType) {
	v.value = val
	v.isSet = true
}

func (v NullableExternalReferenceType) IsSet() bool {
	return v.isSet
}

func (v *NullableExternalReferenceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExternalReferenceType(val *ExternalReferenceType) *NullableExternalReferenceType {
	return &NullableExternalReferenceType{value: val, isSet: true}
}

func (v NullableExternalReferenceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExternalReferenceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


