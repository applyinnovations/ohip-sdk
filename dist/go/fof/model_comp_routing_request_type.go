/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the CompRoutingRequestType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompRoutingRequestType{}

// CompRoutingRequestType Type for the details of a Comp Routing Request
type CompRoutingRequestType struct {
	Comments *string `json:"comments,omitempty"`
	DeclinedBy *UserInfoType `json:"declinedBy,omitempty"`
	RequestedBy *UserInfoType `json:"requestedBy,omitempty"`
	Status *CompRoutingStatusType `json:"status,omitempty"`
}

// NewCompRoutingRequestType instantiates a new CompRoutingRequestType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompRoutingRequestType() *CompRoutingRequestType {
	this := CompRoutingRequestType{}
	return &this
}

// NewCompRoutingRequestTypeWithDefaults instantiates a new CompRoutingRequestType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompRoutingRequestTypeWithDefaults() *CompRoutingRequestType {
	this := CompRoutingRequestType{}
	return &this
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *CompRoutingRequestType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompRoutingRequestType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *CompRoutingRequestType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *CompRoutingRequestType) SetComments(v string) {
	o.Comments = &v
}

// GetDeclinedBy returns the DeclinedBy field value if set, zero value otherwise.
func (o *CompRoutingRequestType) GetDeclinedBy() UserInfoType {
	if o == nil || IsNil(o.DeclinedBy) {
		var ret UserInfoType
		return ret
	}
	return *o.DeclinedBy
}

// GetDeclinedByOk returns a tuple with the DeclinedBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompRoutingRequestType) GetDeclinedByOk() (*UserInfoType, bool) {
	if o == nil || IsNil(o.DeclinedBy) {
		return nil, false
	}
	return o.DeclinedBy, true
}

// HasDeclinedBy returns a boolean if a field has been set.
func (o *CompRoutingRequestType) HasDeclinedBy() bool {
	if o != nil && !IsNil(o.DeclinedBy) {
		return true
	}

	return false
}

// SetDeclinedBy gets a reference to the given UserInfoType and assigns it to the DeclinedBy field.
func (o *CompRoutingRequestType) SetDeclinedBy(v UserInfoType) {
	o.DeclinedBy = &v
}

// GetRequestedBy returns the RequestedBy field value if set, zero value otherwise.
func (o *CompRoutingRequestType) GetRequestedBy() UserInfoType {
	if o == nil || IsNil(o.RequestedBy) {
		var ret UserInfoType
		return ret
	}
	return *o.RequestedBy
}

// GetRequestedByOk returns a tuple with the RequestedBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompRoutingRequestType) GetRequestedByOk() (*UserInfoType, bool) {
	if o == nil || IsNil(o.RequestedBy) {
		return nil, false
	}
	return o.RequestedBy, true
}

// HasRequestedBy returns a boolean if a field has been set.
func (o *CompRoutingRequestType) HasRequestedBy() bool {
	if o != nil && !IsNil(o.RequestedBy) {
		return true
	}

	return false
}

// SetRequestedBy gets a reference to the given UserInfoType and assigns it to the RequestedBy field.
func (o *CompRoutingRequestType) SetRequestedBy(v UserInfoType) {
	o.RequestedBy = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *CompRoutingRequestType) GetStatus() CompRoutingStatusType {
	if o == nil || IsNil(o.Status) {
		var ret CompRoutingStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompRoutingRequestType) GetStatusOk() (*CompRoutingStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *CompRoutingRequestType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given CompRoutingStatusType and assigns it to the Status field.
func (o *CompRoutingRequestType) SetStatus(v CompRoutingStatusType) {
	o.Status = &v
}

func (o CompRoutingRequestType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompRoutingRequestType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.DeclinedBy) {
		toSerialize["declinedBy"] = o.DeclinedBy
	}
	if !IsNil(o.RequestedBy) {
		toSerialize["requestedBy"] = o.RequestedBy
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableCompRoutingRequestType struct {
	value *CompRoutingRequestType
	isSet bool
}

func (v NullableCompRoutingRequestType) Get() *CompRoutingRequestType {
	return v.value
}

func (v *NullableCompRoutingRequestType) Set(val *CompRoutingRequestType) {
	v.value = val
	v.isSet = true
}

func (v NullableCompRoutingRequestType) IsSet() bool {
	return v.isSet
}

func (v *NullableCompRoutingRequestType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompRoutingRequestType(val *CompRoutingRequestType) *NullableCompRoutingRequestType {
	return &NullableCompRoutingRequestType{value: val, isSet: true}
}

func (v NullableCompRoutingRequestType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompRoutingRequestType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

