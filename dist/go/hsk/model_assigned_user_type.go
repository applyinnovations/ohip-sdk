/*
OPERA Cloud Housekeeping Service API

APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hsk

import (
	"encoding/json"
)

// checks if the AssignedUserType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AssignedUserType{}

// AssignedUserType This contains assignment information for the maintenance request.
type AssignedUserType struct {
	AssignedByUser *UniqueIDType `json:"assignedByUser,omitempty"`
	// Name of user who assigned this maintenance request.
	AssignedByUserName *string `json:"assignedByUserName,omitempty"`
	// Date when this task was assigned.
	AssignedDate *string `json:"assignedDate,omitempty"`
	AssignedToUser *UniqueIDType `json:"assignedToUser,omitempty"`
	// Name of user to whom this maintenance request has been assigned.
	AssignedToUserName *string `json:"assignedToUserName,omitempty"`
	// Date when this task is due.
	ExpectedByDate *string `json:"expectedByDate,omitempty"`
}

// NewAssignedUserType instantiates a new AssignedUserType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssignedUserType() *AssignedUserType {
	this := AssignedUserType{}
	return &this
}

// NewAssignedUserTypeWithDefaults instantiates a new AssignedUserType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssignedUserTypeWithDefaults() *AssignedUserType {
	this := AssignedUserType{}
	return &this
}

// GetAssignedByUser returns the AssignedByUser field value if set, zero value otherwise.
func (o *AssignedUserType) GetAssignedByUser() UniqueIDType {
	if o == nil || IsNil(o.AssignedByUser) {
		var ret UniqueIDType
		return ret
	}
	return *o.AssignedByUser
}

// GetAssignedByUserOk returns a tuple with the AssignedByUser field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssignedUserType) GetAssignedByUserOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AssignedByUser) {
		return nil, false
	}
	return o.AssignedByUser, true
}

// HasAssignedByUser returns a boolean if a field has been set.
func (o *AssignedUserType) HasAssignedByUser() bool {
	if o != nil && !IsNil(o.AssignedByUser) {
		return true
	}

	return false
}

// SetAssignedByUser gets a reference to the given UniqueIDType and assigns it to the AssignedByUser field.
func (o *AssignedUserType) SetAssignedByUser(v UniqueIDType) {
	o.AssignedByUser = &v
}

// GetAssignedByUserName returns the AssignedByUserName field value if set, zero value otherwise.
func (o *AssignedUserType) GetAssignedByUserName() string {
	if o == nil || IsNil(o.AssignedByUserName) {
		var ret string
		return ret
	}
	return *o.AssignedByUserName
}

// GetAssignedByUserNameOk returns a tuple with the AssignedByUserName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssignedUserType) GetAssignedByUserNameOk() (*string, bool) {
	if o == nil || IsNil(o.AssignedByUserName) {
		return nil, false
	}
	return o.AssignedByUserName, true
}

// HasAssignedByUserName returns a boolean if a field has been set.
func (o *AssignedUserType) HasAssignedByUserName() bool {
	if o != nil && !IsNil(o.AssignedByUserName) {
		return true
	}

	return false
}

// SetAssignedByUserName gets a reference to the given string and assigns it to the AssignedByUserName field.
func (o *AssignedUserType) SetAssignedByUserName(v string) {
	o.AssignedByUserName = &v
}

// GetAssignedDate returns the AssignedDate field value if set, zero value otherwise.
func (o *AssignedUserType) GetAssignedDate() string {
	if o == nil || IsNil(o.AssignedDate) {
		var ret string
		return ret
	}
	return *o.AssignedDate
}

// GetAssignedDateOk returns a tuple with the AssignedDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssignedUserType) GetAssignedDateOk() (*string, bool) {
	if o == nil || IsNil(o.AssignedDate) {
		return nil, false
	}
	return o.AssignedDate, true
}

// HasAssignedDate returns a boolean if a field has been set.
func (o *AssignedUserType) HasAssignedDate() bool {
	if o != nil && !IsNil(o.AssignedDate) {
		return true
	}

	return false
}

// SetAssignedDate gets a reference to the given string and assigns it to the AssignedDate field.
func (o *AssignedUserType) SetAssignedDate(v string) {
	o.AssignedDate = &v
}

// GetAssignedToUser returns the AssignedToUser field value if set, zero value otherwise.
func (o *AssignedUserType) GetAssignedToUser() UniqueIDType {
	if o == nil || IsNil(o.AssignedToUser) {
		var ret UniqueIDType
		return ret
	}
	return *o.AssignedToUser
}

// GetAssignedToUserOk returns a tuple with the AssignedToUser field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssignedUserType) GetAssignedToUserOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.AssignedToUser) {
		return nil, false
	}
	return o.AssignedToUser, true
}

// HasAssignedToUser returns a boolean if a field has been set.
func (o *AssignedUserType) HasAssignedToUser() bool {
	if o != nil && !IsNil(o.AssignedToUser) {
		return true
	}

	return false
}

// SetAssignedToUser gets a reference to the given UniqueIDType and assigns it to the AssignedToUser field.
func (o *AssignedUserType) SetAssignedToUser(v UniqueIDType) {
	o.AssignedToUser = &v
}

// GetAssignedToUserName returns the AssignedToUserName field value if set, zero value otherwise.
func (o *AssignedUserType) GetAssignedToUserName() string {
	if o == nil || IsNil(o.AssignedToUserName) {
		var ret string
		return ret
	}
	return *o.AssignedToUserName
}

// GetAssignedToUserNameOk returns a tuple with the AssignedToUserName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssignedUserType) GetAssignedToUserNameOk() (*string, bool) {
	if o == nil || IsNil(o.AssignedToUserName) {
		return nil, false
	}
	return o.AssignedToUserName, true
}

// HasAssignedToUserName returns a boolean if a field has been set.
func (o *AssignedUserType) HasAssignedToUserName() bool {
	if o != nil && !IsNil(o.AssignedToUserName) {
		return true
	}

	return false
}

// SetAssignedToUserName gets a reference to the given string and assigns it to the AssignedToUserName field.
func (o *AssignedUserType) SetAssignedToUserName(v string) {
	o.AssignedToUserName = &v
}

// GetExpectedByDate returns the ExpectedByDate field value if set, zero value otherwise.
func (o *AssignedUserType) GetExpectedByDate() string {
	if o == nil || IsNil(o.ExpectedByDate) {
		var ret string
		return ret
	}
	return *o.ExpectedByDate
}

// GetExpectedByDateOk returns a tuple with the ExpectedByDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssignedUserType) GetExpectedByDateOk() (*string, bool) {
	if o == nil || IsNil(o.ExpectedByDate) {
		return nil, false
	}
	return o.ExpectedByDate, true
}

// HasExpectedByDate returns a boolean if a field has been set.
func (o *AssignedUserType) HasExpectedByDate() bool {
	if o != nil && !IsNil(o.ExpectedByDate) {
		return true
	}

	return false
}

// SetExpectedByDate gets a reference to the given string and assigns it to the ExpectedByDate field.
func (o *AssignedUserType) SetExpectedByDate(v string) {
	o.ExpectedByDate = &v
}

func (o AssignedUserType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AssignedUserType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AssignedByUser) {
		toSerialize["assignedByUser"] = o.AssignedByUser
	}
	if !IsNil(o.AssignedByUserName) {
		toSerialize["assignedByUserName"] = o.AssignedByUserName
	}
	if !IsNil(o.AssignedDate) {
		toSerialize["assignedDate"] = o.AssignedDate
	}
	if !IsNil(o.AssignedToUser) {
		toSerialize["assignedToUser"] = o.AssignedToUser
	}
	if !IsNil(o.AssignedToUserName) {
		toSerialize["assignedToUserName"] = o.AssignedToUserName
	}
	if !IsNil(o.ExpectedByDate) {
		toSerialize["expectedByDate"] = o.ExpectedByDate
	}
	return toSerialize, nil
}

type NullableAssignedUserType struct {
	value *AssignedUserType
	isSet bool
}

func (v NullableAssignedUserType) Get() *AssignedUserType {
	return v.value
}

func (v *NullableAssignedUserType) Set(val *AssignedUserType) {
	v.value = val
	v.isSet = true
}

func (v NullableAssignedUserType) IsSet() bool {
	return v.isSet
}

func (v *NullableAssignedUserType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssignedUserType(val *AssignedUserType) *NullableAssignedUserType {
	return &NullableAssignedUserType{value: val, isSet: true}
}

func (v NullableAssignedUserType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssignedUserType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


