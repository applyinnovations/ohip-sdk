/*
OPERA Cloud Leisure Management API

APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package lms

import (
	"encoding/json"
)

// checks if the ActivityListInner type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ActivityListInner{}

// ActivityListInner Represents a single instance of a scheduled activity.
type ActivityListInner struct {
	// Unique Id that references an object uniquely in the system.
	ActivityIds []UniqueIDType `json:"activityIds,omitempty"`
	Amount *CurrencyAmountType `json:"amount,omitempty"`
	Deposit *ActivityListInnerDeposit `json:"deposit,omitempty"`
	// Description of the activity
	Description []string `json:"description,omitempty"`
	Duration *DateTimeSpanType `json:"duration,omitempty"`
	// Vendor extensions to the activity record.
	Extensions []string `json:"extensions,omitempty"`
	// Any Block code associated with the activity if its a Group booking.
	GroupCode *string `json:"groupCode,omitempty"`
	// The Date by which the activity is deemed Cancelled/Deleted.
	InactiveDate *string `json:"inactiveDate,omitempty"`
	// When true indicates that activity link only needs to be inserted or deleted for this record.
	Link *bool `json:"link,omitempty"`
	// The Location where the activity takes place. Eg: Salon
	Location *string `json:"location,omitempty"`
	// Name of the people for whom the activity is scheduled. Can be more than one but should be equal to the number of persons
	Name []string `json:"name,omitempty"`
	// Any additional notes or comments regarding the scheduled activity.
	Note []string `json:"note,omitempty"`
	// The total number of the people for whom the activity is scheduled. Can be more than one but should be equal to the number of persons
	NumberOfPersons *int32 `json:"numberOfPersons,omitempty"`
	// The names of the participants.
	Participants []PersonNameType `json:"participants,omitempty"`
	// Activity reservation status. Typical examples are RESERVED, BOOKED, CANCELLED, and TENTATIVE.
	Status *string `json:"status,omitempty"`
	// Activity reservation status description. Typical examples are RESERVED, BOOKED, CANCELLED, and TENTATIVE.
	StatusDescription *string `json:"statusDescription,omitempty"`
	TimeSpan *DateTimeSpanType `json:"timeSpan,omitempty"`
	// The Type of the activity. Eg: SPA, Golf etc.
	Type *string `json:"type,omitempty"`
	// The URL link to launch the Activity Reservation System to view or edit full details of this activity.
	URLLink *string `json:"uRLLink,omitempty"`
}

// NewActivityListInner instantiates a new ActivityListInner object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActivityListInner() *ActivityListInner {
	this := ActivityListInner{}
	return &this
}

// NewActivityListInnerWithDefaults instantiates a new ActivityListInner object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActivityListInnerWithDefaults() *ActivityListInner {
	this := ActivityListInner{}
	return &this
}

// GetActivityIds returns the ActivityIds field value if set, zero value otherwise.
func (o *ActivityListInner) GetActivityIds() []UniqueIDType {
	if o == nil || IsNil(o.ActivityIds) {
		var ret []UniqueIDType
		return ret
	}
	return o.ActivityIds
}

// GetActivityIdsOk returns a tuple with the ActivityIds field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetActivityIdsOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ActivityIds) {
		return nil, false
	}
	return o.ActivityIds, true
}

// HasActivityIds returns a boolean if a field has been set.
func (o *ActivityListInner) HasActivityIds() bool {
	if o != nil && !IsNil(o.ActivityIds) {
		return true
	}

	return false
}

// SetActivityIds gets a reference to the given []UniqueIDType and assigns it to the ActivityIds field.
func (o *ActivityListInner) SetActivityIds(v []UniqueIDType) {
	o.ActivityIds = v
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *ActivityListInner) GetAmount() CurrencyAmountType {
	if o == nil || IsNil(o.Amount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *ActivityListInner) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given CurrencyAmountType and assigns it to the Amount field.
func (o *ActivityListInner) SetAmount(v CurrencyAmountType) {
	o.Amount = &v
}

// GetDeposit returns the Deposit field value if set, zero value otherwise.
func (o *ActivityListInner) GetDeposit() ActivityListInnerDeposit {
	if o == nil || IsNil(o.Deposit) {
		var ret ActivityListInnerDeposit
		return ret
	}
	return *o.Deposit
}

// GetDepositOk returns a tuple with the Deposit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetDepositOk() (*ActivityListInnerDeposit, bool) {
	if o == nil || IsNil(o.Deposit) {
		return nil, false
	}
	return o.Deposit, true
}

// HasDeposit returns a boolean if a field has been set.
func (o *ActivityListInner) HasDeposit() bool {
	if o != nil && !IsNil(o.Deposit) {
		return true
	}

	return false
}

// SetDeposit gets a reference to the given ActivityListInnerDeposit and assigns it to the Deposit field.
func (o *ActivityListInner) SetDeposit(v ActivityListInnerDeposit) {
	o.Deposit = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ActivityListInner) GetDescription() []string {
	if o == nil || IsNil(o.Description) {
		var ret []string
		return ret
	}
	return o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetDescriptionOk() ([]string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ActivityListInner) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given []string and assigns it to the Description field.
func (o *ActivityListInner) SetDescription(v []string) {
	o.Description = v
}

// GetDuration returns the Duration field value if set, zero value otherwise.
func (o *ActivityListInner) GetDuration() DateTimeSpanType {
	if o == nil || IsNil(o.Duration) {
		var ret DateTimeSpanType
		return ret
	}
	return *o.Duration
}

// GetDurationOk returns a tuple with the Duration field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetDurationOk() (*DateTimeSpanType, bool) {
	if o == nil || IsNil(o.Duration) {
		return nil, false
	}
	return o.Duration, true
}

// HasDuration returns a boolean if a field has been set.
func (o *ActivityListInner) HasDuration() bool {
	if o != nil && !IsNil(o.Duration) {
		return true
	}

	return false
}

// SetDuration gets a reference to the given DateTimeSpanType and assigns it to the Duration field.
func (o *ActivityListInner) SetDuration(v DateTimeSpanType) {
	o.Duration = &v
}

// GetExtensions returns the Extensions field value if set, zero value otherwise.
func (o *ActivityListInner) GetExtensions() []string {
	if o == nil || IsNil(o.Extensions) {
		var ret []string
		return ret
	}
	return o.Extensions
}

// GetExtensionsOk returns a tuple with the Extensions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetExtensionsOk() ([]string, bool) {
	if o == nil || IsNil(o.Extensions) {
		return nil, false
	}
	return o.Extensions, true
}

// HasExtensions returns a boolean if a field has been set.
func (o *ActivityListInner) HasExtensions() bool {
	if o != nil && !IsNil(o.Extensions) {
		return true
	}

	return false
}

// SetExtensions gets a reference to the given []string and assigns it to the Extensions field.
func (o *ActivityListInner) SetExtensions(v []string) {
	o.Extensions = v
}

// GetGroupCode returns the GroupCode field value if set, zero value otherwise.
func (o *ActivityListInner) GetGroupCode() string {
	if o == nil || IsNil(o.GroupCode) {
		var ret string
		return ret
	}
	return *o.GroupCode
}

// GetGroupCodeOk returns a tuple with the GroupCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetGroupCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GroupCode) {
		return nil, false
	}
	return o.GroupCode, true
}

// HasGroupCode returns a boolean if a field has been set.
func (o *ActivityListInner) HasGroupCode() bool {
	if o != nil && !IsNil(o.GroupCode) {
		return true
	}

	return false
}

// SetGroupCode gets a reference to the given string and assigns it to the GroupCode field.
func (o *ActivityListInner) SetGroupCode(v string) {
	o.GroupCode = &v
}

// GetInactiveDate returns the InactiveDate field value if set, zero value otherwise.
func (o *ActivityListInner) GetInactiveDate() string {
	if o == nil || IsNil(o.InactiveDate) {
		var ret string
		return ret
	}
	return *o.InactiveDate
}

// GetInactiveDateOk returns a tuple with the InactiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetInactiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.InactiveDate) {
		return nil, false
	}
	return o.InactiveDate, true
}

// HasInactiveDate returns a boolean if a field has been set.
func (o *ActivityListInner) HasInactiveDate() bool {
	if o != nil && !IsNil(o.InactiveDate) {
		return true
	}

	return false
}

// SetInactiveDate gets a reference to the given string and assigns it to the InactiveDate field.
func (o *ActivityListInner) SetInactiveDate(v string) {
	o.InactiveDate = &v
}

// GetLink returns the Link field value if set, zero value otherwise.
func (o *ActivityListInner) GetLink() bool {
	if o == nil || IsNil(o.Link) {
		var ret bool
		return ret
	}
	return *o.Link
}

// GetLinkOk returns a tuple with the Link field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetLinkOk() (*bool, bool) {
	if o == nil || IsNil(o.Link) {
		return nil, false
	}
	return o.Link, true
}

// HasLink returns a boolean if a field has been set.
func (o *ActivityListInner) HasLink() bool {
	if o != nil && !IsNil(o.Link) {
		return true
	}

	return false
}

// SetLink gets a reference to the given bool and assigns it to the Link field.
func (o *ActivityListInner) SetLink(v bool) {
	o.Link = &v
}

// GetLocation returns the Location field value if set, zero value otherwise.
func (o *ActivityListInner) GetLocation() string {
	if o == nil || IsNil(o.Location) {
		var ret string
		return ret
	}
	return *o.Location
}

// GetLocationOk returns a tuple with the Location field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetLocationOk() (*string, bool) {
	if o == nil || IsNil(o.Location) {
		return nil, false
	}
	return o.Location, true
}

// HasLocation returns a boolean if a field has been set.
func (o *ActivityListInner) HasLocation() bool {
	if o != nil && !IsNil(o.Location) {
		return true
	}

	return false
}

// SetLocation gets a reference to the given string and assigns it to the Location field.
func (o *ActivityListInner) SetLocation(v string) {
	o.Location = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ActivityListInner) GetName() []string {
	if o == nil || IsNil(o.Name) {
		var ret []string
		return ret
	}
	return o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetNameOk() ([]string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ActivityListInner) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given []string and assigns it to the Name field.
func (o *ActivityListInner) SetName(v []string) {
	o.Name = v
}

// GetNote returns the Note field value if set, zero value otherwise.
func (o *ActivityListInner) GetNote() []string {
	if o == nil || IsNil(o.Note) {
		var ret []string
		return ret
	}
	return o.Note
}

// GetNoteOk returns a tuple with the Note field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetNoteOk() ([]string, bool) {
	if o == nil || IsNil(o.Note) {
		return nil, false
	}
	return o.Note, true
}

// HasNote returns a boolean if a field has been set.
func (o *ActivityListInner) HasNote() bool {
	if o != nil && !IsNil(o.Note) {
		return true
	}

	return false
}

// SetNote gets a reference to the given []string and assigns it to the Note field.
func (o *ActivityListInner) SetNote(v []string) {
	o.Note = v
}

// GetNumberOfPersons returns the NumberOfPersons field value if set, zero value otherwise.
func (o *ActivityListInner) GetNumberOfPersons() int32 {
	if o == nil || IsNil(o.NumberOfPersons) {
		var ret int32
		return ret
	}
	return *o.NumberOfPersons
}

// GetNumberOfPersonsOk returns a tuple with the NumberOfPersons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetNumberOfPersonsOk() (*int32, bool) {
	if o == nil || IsNil(o.NumberOfPersons) {
		return nil, false
	}
	return o.NumberOfPersons, true
}

// HasNumberOfPersons returns a boolean if a field has been set.
func (o *ActivityListInner) HasNumberOfPersons() bool {
	if o != nil && !IsNil(o.NumberOfPersons) {
		return true
	}

	return false
}

// SetNumberOfPersons gets a reference to the given int32 and assigns it to the NumberOfPersons field.
func (o *ActivityListInner) SetNumberOfPersons(v int32) {
	o.NumberOfPersons = &v
}

// GetParticipants returns the Participants field value if set, zero value otherwise.
func (o *ActivityListInner) GetParticipants() []PersonNameType {
	if o == nil || IsNil(o.Participants) {
		var ret []PersonNameType
		return ret
	}
	return o.Participants
}

// GetParticipantsOk returns a tuple with the Participants field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetParticipantsOk() ([]PersonNameType, bool) {
	if o == nil || IsNil(o.Participants) {
		return nil, false
	}
	return o.Participants, true
}

// HasParticipants returns a boolean if a field has been set.
func (o *ActivityListInner) HasParticipants() bool {
	if o != nil && !IsNil(o.Participants) {
		return true
	}

	return false
}

// SetParticipants gets a reference to the given []PersonNameType and assigns it to the Participants field.
func (o *ActivityListInner) SetParticipants(v []PersonNameType) {
	o.Participants = v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *ActivityListInner) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *ActivityListInner) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *ActivityListInner) SetStatus(v string) {
	o.Status = &v
}

// GetStatusDescription returns the StatusDescription field value if set, zero value otherwise.
func (o *ActivityListInner) GetStatusDescription() string {
	if o == nil || IsNil(o.StatusDescription) {
		var ret string
		return ret
	}
	return *o.StatusDescription
}

// GetStatusDescriptionOk returns a tuple with the StatusDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetStatusDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.StatusDescription) {
		return nil, false
	}
	return o.StatusDescription, true
}

// HasStatusDescription returns a boolean if a field has been set.
func (o *ActivityListInner) HasStatusDescription() bool {
	if o != nil && !IsNil(o.StatusDescription) {
		return true
	}

	return false
}

// SetStatusDescription gets a reference to the given string and assigns it to the StatusDescription field.
func (o *ActivityListInner) SetStatusDescription(v string) {
	o.StatusDescription = &v
}

// GetTimeSpan returns the TimeSpan field value if set, zero value otherwise.
func (o *ActivityListInner) GetTimeSpan() DateTimeSpanType {
	if o == nil || IsNil(o.TimeSpan) {
		var ret DateTimeSpanType
		return ret
	}
	return *o.TimeSpan
}

// GetTimeSpanOk returns a tuple with the TimeSpan field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetTimeSpanOk() (*DateTimeSpanType, bool) {
	if o == nil || IsNil(o.TimeSpan) {
		return nil, false
	}
	return o.TimeSpan, true
}

// HasTimeSpan returns a boolean if a field has been set.
func (o *ActivityListInner) HasTimeSpan() bool {
	if o != nil && !IsNil(o.TimeSpan) {
		return true
	}

	return false
}

// SetTimeSpan gets a reference to the given DateTimeSpanType and assigns it to the TimeSpan field.
func (o *ActivityListInner) SetTimeSpan(v DateTimeSpanType) {
	o.TimeSpan = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ActivityListInner) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ActivityListInner) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ActivityListInner) SetType(v string) {
	o.Type = &v
}

// GetURLLink returns the URLLink field value if set, zero value otherwise.
func (o *ActivityListInner) GetURLLink() string {
	if o == nil || IsNil(o.URLLink) {
		var ret string
		return ret
	}
	return *o.URLLink
}

// GetURLLinkOk returns a tuple with the URLLink field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityListInner) GetURLLinkOk() (*string, bool) {
	if o == nil || IsNil(o.URLLink) {
		return nil, false
	}
	return o.URLLink, true
}

// HasURLLink returns a boolean if a field has been set.
func (o *ActivityListInner) HasURLLink() bool {
	if o != nil && !IsNil(o.URLLink) {
		return true
	}

	return false
}

// SetURLLink gets a reference to the given string and assigns it to the URLLink field.
func (o *ActivityListInner) SetURLLink(v string) {
	o.URLLink = &v
}

func (o ActivityListInner) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ActivityListInner) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivityIds) {
		toSerialize["activityIds"] = o.ActivityIds
	}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.Deposit) {
		toSerialize["deposit"] = o.Deposit
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Duration) {
		toSerialize["duration"] = o.Duration
	}
	if !IsNil(o.Extensions) {
		toSerialize["extensions"] = o.Extensions
	}
	if !IsNil(o.GroupCode) {
		toSerialize["groupCode"] = o.GroupCode
	}
	if !IsNil(o.InactiveDate) {
		toSerialize["inactiveDate"] = o.InactiveDate
	}
	if !IsNil(o.Link) {
		toSerialize["link"] = o.Link
	}
	if !IsNil(o.Location) {
		toSerialize["location"] = o.Location
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.Note) {
		toSerialize["note"] = o.Note
	}
	if !IsNil(o.NumberOfPersons) {
		toSerialize["numberOfPersons"] = o.NumberOfPersons
	}
	if !IsNil(o.Participants) {
		toSerialize["participants"] = o.Participants
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	if !IsNil(o.StatusDescription) {
		toSerialize["statusDescription"] = o.StatusDescription
	}
	if !IsNil(o.TimeSpan) {
		toSerialize["timeSpan"] = o.TimeSpan
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.URLLink) {
		toSerialize["uRLLink"] = o.URLLink
	}
	return toSerialize, nil
}

type NullableActivityListInner struct {
	value *ActivityListInner
	isSet bool
}

func (v NullableActivityListInner) Get() *ActivityListInner {
	return v.value
}

func (v *NullableActivityListInner) Set(val *ActivityListInner) {
	v.value = val
	v.isSet = true
}

func (v NullableActivityListInner) IsSet() bool {
	return v.isSet
}

func (v *NullableActivityListInner) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivityListInner(val *ActivityListInner) *NullableActivityListInner {
	return &NullableActivityListInner{value: val, isSet: true}
}

func (v NullableActivityListInner) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivityListInner) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


