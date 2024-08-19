/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the Alerts type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Alerts{}

// Alerts Response with the fetched alerts, includes global alerts, notes and undelivered guest messages.
type Alerts struct {
	// List of alerts.
	Alerts []AlertType `json:"alerts,omitempty"`
	// List of Notes for the Guest related to the reservation.
	Comments []CommentInfoType `json:"comments,omitempty"`
	// Holds the Message Information
	GuestMessages []ResvGuestMessageType `json:"guestMessages,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAlerts instantiates a new Alerts object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAlerts() *Alerts {
	this := Alerts{}
	return &this
}

// NewAlertsWithDefaults instantiates a new Alerts object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAlertsWithDefaults() *Alerts {
	this := Alerts{}
	return &this
}

// GetAlerts returns the Alerts field value if set, zero value otherwise.
func (o *Alerts) GetAlerts() []AlertType {
	if o == nil || IsNil(o.Alerts) {
		var ret []AlertType
		return ret
	}
	return o.Alerts
}

// GetAlertsOk returns a tuple with the Alerts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Alerts) GetAlertsOk() ([]AlertType, bool) {
	if o == nil || IsNil(o.Alerts) {
		return nil, false
	}
	return o.Alerts, true
}

// HasAlerts returns a boolean if a field has been set.
func (o *Alerts) HasAlerts() bool {
	if o != nil && !IsNil(o.Alerts) {
		return true
	}

	return false
}

// SetAlerts gets a reference to the given []AlertType and assigns it to the Alerts field.
func (o *Alerts) SetAlerts(v []AlertType) {
	o.Alerts = v
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *Alerts) GetComments() []CommentInfoType {
	if o == nil || IsNil(o.Comments) {
		var ret []CommentInfoType
		return ret
	}
	return o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Alerts) GetCommentsOk() ([]CommentInfoType, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *Alerts) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given []CommentInfoType and assigns it to the Comments field.
func (o *Alerts) SetComments(v []CommentInfoType) {
	o.Comments = v
}

// GetGuestMessages returns the GuestMessages field value if set, zero value otherwise.
func (o *Alerts) GetGuestMessages() []ResvGuestMessageType {
	if o == nil || IsNil(o.GuestMessages) {
		var ret []ResvGuestMessageType
		return ret
	}
	return o.GuestMessages
}

// GetGuestMessagesOk returns a tuple with the GuestMessages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Alerts) GetGuestMessagesOk() ([]ResvGuestMessageType, bool) {
	if o == nil || IsNil(o.GuestMessages) {
		return nil, false
	}
	return o.GuestMessages, true
}

// HasGuestMessages returns a boolean if a field has been set.
func (o *Alerts) HasGuestMessages() bool {
	if o != nil && !IsNil(o.GuestMessages) {
		return true
	}

	return false
}

// SetGuestMessages gets a reference to the given []ResvGuestMessageType and assigns it to the GuestMessages field.
func (o *Alerts) SetGuestMessages(v []ResvGuestMessageType) {
	o.GuestMessages = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *Alerts) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Alerts) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *Alerts) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *Alerts) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *Alerts) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Alerts) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *Alerts) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *Alerts) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o Alerts) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Alerts) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Alerts) {
		toSerialize["alerts"] = o.Alerts
	}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.GuestMessages) {
		toSerialize["guestMessages"] = o.GuestMessages
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAlerts struct {
	value *Alerts
	isSet bool
}

func (v NullableAlerts) Get() *Alerts {
	return v.value
}

func (v *NullableAlerts) Set(val *Alerts) {
	v.value = val
	v.isSet = true
}

func (v NullableAlerts) IsSet() bool {
	return v.isSet
}

func (v *NullableAlerts) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAlerts(val *Alerts) *NullableAlerts {
	return &NullableAlerts{value: val, isSet: true}
}

func (v NullableAlerts) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAlerts) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


