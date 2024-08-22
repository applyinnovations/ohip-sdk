/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the NoteTypeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &NoteTypeType{}

// NoteTypeType Note Types Information Type.
type NoteTypeType struct {
	// Notes Group of the Note Types code.
	NoteGroup *string `json:"noteGroup,omitempty"`
	// Code of the Note Types.
	Code *string `json:"code,omitempty"`
	// Description of the Note Types Code.
	Description *string `json:"description,omitempty"`
	NotificationAreas []string `json:"notificationAreas,omitempty"`
	// Display Sequence.
	DisplaySequence *float32 `json:"displaySequence,omitempty"`
	// Indicates if the Note Types Code is inactive.
	Inactive *bool `json:"inactive,omitempty"`
	// Indicates if the Note Types Code is internal.
	Internal *bool `json:"internal,omitempty"`
	// Indicates if the Note Types Code is override internal.
	OverrideInternal *bool `json:"overrideInternal,omitempty"`
	// Indicates if the Note Types Code is default.
	DefaultNoteType *bool `json:"defaultNoteType,omitempty"`
	// Indicates if the Note Types Code has department notes.
	DepartmentNotes *bool `json:"departmentNotes,omitempty"`
	// Indicates if the Note Types Code is globally allowed.
	GlobalAllowed *bool `json:"globalAllowed,omitempty"`
	// List of HotelCode and Code combinations.
	Departments []GenericHotelCodeCodeType `json:"departments,omitempty"`
	// Indicates if the Note Types Code has at least one default text defined.
	DefaultText *bool `json:"defaultText,omitempty"`
	// Default Note Text if Note Type has default note.
	DefaultNoteText *string `json:"defaultNoteText,omitempty"`
	// Collection of individual Default Note Text details.
	PropertyDefaultNoteTexts []DefaultNoteTextDetailType `json:"propertyDefaultNoteTexts,omitempty"`
}

// NewNoteTypeType instantiates a new NoteTypeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewNoteTypeType() *NoteTypeType {
	this := NoteTypeType{}
	return &this
}

// NewNoteTypeTypeWithDefaults instantiates a new NoteTypeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewNoteTypeTypeWithDefaults() *NoteTypeType {
	this := NoteTypeType{}
	return &this
}

// GetNoteGroup returns the NoteGroup field value if set, zero value otherwise.
func (o *NoteTypeType) GetNoteGroup() string {
	if o == nil || IsNil(o.NoteGroup) {
		var ret string
		return ret
	}
	return *o.NoteGroup
}

// GetNoteGroupOk returns a tuple with the NoteGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetNoteGroupOk() (*string, bool) {
	if o == nil || IsNil(o.NoteGroup) {
		return nil, false
	}
	return o.NoteGroup, true
}

// HasNoteGroup returns a boolean if a field has been set.
func (o *NoteTypeType) HasNoteGroup() bool {
	if o != nil && !IsNil(o.NoteGroup) {
		return true
	}

	return false
}

// SetNoteGroup gets a reference to the given string and assigns it to the NoteGroup field.
func (o *NoteTypeType) SetNoteGroup(v string) {
	o.NoteGroup = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *NoteTypeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *NoteTypeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *NoteTypeType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *NoteTypeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *NoteTypeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *NoteTypeType) SetDescription(v string) {
	o.Description = &v
}

// GetNotificationAreas returns the NotificationAreas field value if set, zero value otherwise.
func (o *NoteTypeType) GetNotificationAreas() []string {
	if o == nil || IsNil(o.NotificationAreas) {
		var ret []string
		return ret
	}
	return o.NotificationAreas
}

// GetNotificationAreasOk returns a tuple with the NotificationAreas field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetNotificationAreasOk() ([]string, bool) {
	if o == nil || IsNil(o.NotificationAreas) {
		return nil, false
	}
	return o.NotificationAreas, true
}

// HasNotificationAreas returns a boolean if a field has been set.
func (o *NoteTypeType) HasNotificationAreas() bool {
	if o != nil && !IsNil(o.NotificationAreas) {
		return true
	}

	return false
}

// SetNotificationAreas gets a reference to the given []string and assigns it to the NotificationAreas field.
func (o *NoteTypeType) SetNotificationAreas(v []string) {
	o.NotificationAreas = v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *NoteTypeType) GetDisplaySequence() float32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret float32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetDisplaySequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *NoteTypeType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given float32 and assigns it to the DisplaySequence field.
func (o *NoteTypeType) SetDisplaySequence(v float32) {
	o.DisplaySequence = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *NoteTypeType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *NoteTypeType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *NoteTypeType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetInternal returns the Internal field value if set, zero value otherwise.
func (o *NoteTypeType) GetInternal() bool {
	if o == nil || IsNil(o.Internal) {
		var ret bool
		return ret
	}
	return *o.Internal
}

// GetInternalOk returns a tuple with the Internal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetInternalOk() (*bool, bool) {
	if o == nil || IsNil(o.Internal) {
		return nil, false
	}
	return o.Internal, true
}

// HasInternal returns a boolean if a field has been set.
func (o *NoteTypeType) HasInternal() bool {
	if o != nil && !IsNil(o.Internal) {
		return true
	}

	return false
}

// SetInternal gets a reference to the given bool and assigns it to the Internal field.
func (o *NoteTypeType) SetInternal(v bool) {
	o.Internal = &v
}

// GetOverrideInternal returns the OverrideInternal field value if set, zero value otherwise.
func (o *NoteTypeType) GetOverrideInternal() bool {
	if o == nil || IsNil(o.OverrideInternal) {
		var ret bool
		return ret
	}
	return *o.OverrideInternal
}

// GetOverrideInternalOk returns a tuple with the OverrideInternal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetOverrideInternalOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideInternal) {
		return nil, false
	}
	return o.OverrideInternal, true
}

// HasOverrideInternal returns a boolean if a field has been set.
func (o *NoteTypeType) HasOverrideInternal() bool {
	if o != nil && !IsNil(o.OverrideInternal) {
		return true
	}

	return false
}

// SetOverrideInternal gets a reference to the given bool and assigns it to the OverrideInternal field.
func (o *NoteTypeType) SetOverrideInternal(v bool) {
	o.OverrideInternal = &v
}

// GetDefaultNoteType returns the DefaultNoteType field value if set, zero value otherwise.
func (o *NoteTypeType) GetDefaultNoteType() bool {
	if o == nil || IsNil(o.DefaultNoteType) {
		var ret bool
		return ret
	}
	return *o.DefaultNoteType
}

// GetDefaultNoteTypeOk returns a tuple with the DefaultNoteType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetDefaultNoteTypeOk() (*bool, bool) {
	if o == nil || IsNil(o.DefaultNoteType) {
		return nil, false
	}
	return o.DefaultNoteType, true
}

// HasDefaultNoteType returns a boolean if a field has been set.
func (o *NoteTypeType) HasDefaultNoteType() bool {
	if o != nil && !IsNil(o.DefaultNoteType) {
		return true
	}

	return false
}

// SetDefaultNoteType gets a reference to the given bool and assigns it to the DefaultNoteType field.
func (o *NoteTypeType) SetDefaultNoteType(v bool) {
	o.DefaultNoteType = &v
}

// GetDepartmentNotes returns the DepartmentNotes field value if set, zero value otherwise.
func (o *NoteTypeType) GetDepartmentNotes() bool {
	if o == nil || IsNil(o.DepartmentNotes) {
		var ret bool
		return ret
	}
	return *o.DepartmentNotes
}

// GetDepartmentNotesOk returns a tuple with the DepartmentNotes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetDepartmentNotesOk() (*bool, bool) {
	if o == nil || IsNil(o.DepartmentNotes) {
		return nil, false
	}
	return o.DepartmentNotes, true
}

// HasDepartmentNotes returns a boolean if a field has been set.
func (o *NoteTypeType) HasDepartmentNotes() bool {
	if o != nil && !IsNil(o.DepartmentNotes) {
		return true
	}

	return false
}

// SetDepartmentNotes gets a reference to the given bool and assigns it to the DepartmentNotes field.
func (o *NoteTypeType) SetDepartmentNotes(v bool) {
	o.DepartmentNotes = &v
}

// GetGlobalAllowed returns the GlobalAllowed field value if set, zero value otherwise.
func (o *NoteTypeType) GetGlobalAllowed() bool {
	if o == nil || IsNil(o.GlobalAllowed) {
		var ret bool
		return ret
	}
	return *o.GlobalAllowed
}

// GetGlobalAllowedOk returns a tuple with the GlobalAllowed field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetGlobalAllowedOk() (*bool, bool) {
	if o == nil || IsNil(o.GlobalAllowed) {
		return nil, false
	}
	return o.GlobalAllowed, true
}

// HasGlobalAllowed returns a boolean if a field has been set.
func (o *NoteTypeType) HasGlobalAllowed() bool {
	if o != nil && !IsNil(o.GlobalAllowed) {
		return true
	}

	return false
}

// SetGlobalAllowed gets a reference to the given bool and assigns it to the GlobalAllowed field.
func (o *NoteTypeType) SetGlobalAllowed(v bool) {
	o.GlobalAllowed = &v
}

// GetDepartments returns the Departments field value if set, zero value otherwise.
func (o *NoteTypeType) GetDepartments() []GenericHotelCodeCodeType {
	if o == nil || IsNil(o.Departments) {
		var ret []GenericHotelCodeCodeType
		return ret
	}
	return o.Departments
}

// GetDepartmentsOk returns a tuple with the Departments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetDepartmentsOk() ([]GenericHotelCodeCodeType, bool) {
	if o == nil || IsNil(o.Departments) {
		return nil, false
	}
	return o.Departments, true
}

// HasDepartments returns a boolean if a field has been set.
func (o *NoteTypeType) HasDepartments() bool {
	if o != nil && !IsNil(o.Departments) {
		return true
	}

	return false
}

// SetDepartments gets a reference to the given []GenericHotelCodeCodeType and assigns it to the Departments field.
func (o *NoteTypeType) SetDepartments(v []GenericHotelCodeCodeType) {
	o.Departments = v
}

// GetDefaultText returns the DefaultText field value if set, zero value otherwise.
func (o *NoteTypeType) GetDefaultText() bool {
	if o == nil || IsNil(o.DefaultText) {
		var ret bool
		return ret
	}
	return *o.DefaultText
}

// GetDefaultTextOk returns a tuple with the DefaultText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetDefaultTextOk() (*bool, bool) {
	if o == nil || IsNil(o.DefaultText) {
		return nil, false
	}
	return o.DefaultText, true
}

// HasDefaultText returns a boolean if a field has been set.
func (o *NoteTypeType) HasDefaultText() bool {
	if o != nil && !IsNil(o.DefaultText) {
		return true
	}

	return false
}

// SetDefaultText gets a reference to the given bool and assigns it to the DefaultText field.
func (o *NoteTypeType) SetDefaultText(v bool) {
	o.DefaultText = &v
}

// GetDefaultNoteText returns the DefaultNoteText field value if set, zero value otherwise.
func (o *NoteTypeType) GetDefaultNoteText() string {
	if o == nil || IsNil(o.DefaultNoteText) {
		var ret string
		return ret
	}
	return *o.DefaultNoteText
}

// GetDefaultNoteTextOk returns a tuple with the DefaultNoteText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetDefaultNoteTextOk() (*string, bool) {
	if o == nil || IsNil(o.DefaultNoteText) {
		return nil, false
	}
	return o.DefaultNoteText, true
}

// HasDefaultNoteText returns a boolean if a field has been set.
func (o *NoteTypeType) HasDefaultNoteText() bool {
	if o != nil && !IsNil(o.DefaultNoteText) {
		return true
	}

	return false
}

// SetDefaultNoteText gets a reference to the given string and assigns it to the DefaultNoteText field.
func (o *NoteTypeType) SetDefaultNoteText(v string) {
	o.DefaultNoteText = &v
}

// GetPropertyDefaultNoteTexts returns the PropertyDefaultNoteTexts field value if set, zero value otherwise.
func (o *NoteTypeType) GetPropertyDefaultNoteTexts() []DefaultNoteTextDetailType {
	if o == nil || IsNil(o.PropertyDefaultNoteTexts) {
		var ret []DefaultNoteTextDetailType
		return ret
	}
	return o.PropertyDefaultNoteTexts
}

// GetPropertyDefaultNoteTextsOk returns a tuple with the PropertyDefaultNoteTexts field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *NoteTypeType) GetPropertyDefaultNoteTextsOk() ([]DefaultNoteTextDetailType, bool) {
	if o == nil || IsNil(o.PropertyDefaultNoteTexts) {
		return nil, false
	}
	return o.PropertyDefaultNoteTexts, true
}

// HasPropertyDefaultNoteTexts returns a boolean if a field has been set.
func (o *NoteTypeType) HasPropertyDefaultNoteTexts() bool {
	if o != nil && !IsNil(o.PropertyDefaultNoteTexts) {
		return true
	}

	return false
}

// SetPropertyDefaultNoteTexts gets a reference to the given []DefaultNoteTextDetailType and assigns it to the PropertyDefaultNoteTexts field.
func (o *NoteTypeType) SetPropertyDefaultNoteTexts(v []DefaultNoteTextDetailType) {
	o.PropertyDefaultNoteTexts = v
}

func (o NoteTypeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o NoteTypeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.NoteGroup) {
		toSerialize["noteGroup"] = o.NoteGroup
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.NotificationAreas) {
		toSerialize["notificationAreas"] = o.NotificationAreas
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Internal) {
		toSerialize["internal"] = o.Internal
	}
	if !IsNil(o.OverrideInternal) {
		toSerialize["overrideInternal"] = o.OverrideInternal
	}
	if !IsNil(o.DefaultNoteType) {
		toSerialize["defaultNoteType"] = o.DefaultNoteType
	}
	if !IsNil(o.DepartmentNotes) {
		toSerialize["departmentNotes"] = o.DepartmentNotes
	}
	if !IsNil(o.GlobalAllowed) {
		toSerialize["globalAllowed"] = o.GlobalAllowed
	}
	if !IsNil(o.Departments) {
		toSerialize["departments"] = o.Departments
	}
	if !IsNil(o.DefaultText) {
		toSerialize["defaultText"] = o.DefaultText
	}
	if !IsNil(o.DefaultNoteText) {
		toSerialize["defaultNoteText"] = o.DefaultNoteText
	}
	if !IsNil(o.PropertyDefaultNoteTexts) {
		toSerialize["propertyDefaultNoteTexts"] = o.PropertyDefaultNoteTexts
	}
	return toSerialize, nil
}

type NullableNoteTypeType struct {
	value *NoteTypeType
	isSet bool
}

func (v NullableNoteTypeType) Get() *NoteTypeType {
	return v.value
}

func (v *NullableNoteTypeType) Set(val *NoteTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableNoteTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableNoteTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNoteTypeType(val *NoteTypeType) *NullableNoteTypeType {
	return &NullableNoteTypeType{value: val, isSet: true}
}

func (v NullableNoteTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNoteTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


