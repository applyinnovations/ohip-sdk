/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the CateringMultiChoiceMenuType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringMultiChoiceMenuType{}

// CateringMultiChoiceMenuType struct for CateringMultiChoiceMenuType
type CateringMultiChoiceMenuType struct {
	// This type holds choice count of the Menu.
	ChoiceCount *int32 `json:"choiceCount,omitempty"`
	// This type holds Courses are defined for Menu.
	Course *string `json:"course,omitempty"`
	CourseDescription *TranslationTextType100 `json:"courseDescription,omitempty"`
	// This attributes identifies the courseldd.
	CourseId *int32 `json:"courseId,omitempty"`
	CourseName *TranslationTextType20 `json:"courseName,omitempty"`
}

// NewCateringMultiChoiceMenuType instantiates a new CateringMultiChoiceMenuType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringMultiChoiceMenuType() *CateringMultiChoiceMenuType {
	this := CateringMultiChoiceMenuType{}
	return &this
}

// NewCateringMultiChoiceMenuTypeWithDefaults instantiates a new CateringMultiChoiceMenuType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringMultiChoiceMenuTypeWithDefaults() *CateringMultiChoiceMenuType {
	this := CateringMultiChoiceMenuType{}
	return &this
}

// GetChoiceCount returns the ChoiceCount field value if set, zero value otherwise.
func (o *CateringMultiChoiceMenuType) GetChoiceCount() int32 {
	if o == nil || IsNil(o.ChoiceCount) {
		var ret int32
		return ret
	}
	return *o.ChoiceCount
}

// GetChoiceCountOk returns a tuple with the ChoiceCount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringMultiChoiceMenuType) GetChoiceCountOk() (*int32, bool) {
	if o == nil || IsNil(o.ChoiceCount) {
		return nil, false
	}
	return o.ChoiceCount, true
}

// HasChoiceCount returns a boolean if a field has been set.
func (o *CateringMultiChoiceMenuType) HasChoiceCount() bool {
	if o != nil && !IsNil(o.ChoiceCount) {
		return true
	}

	return false
}

// SetChoiceCount gets a reference to the given int32 and assigns it to the ChoiceCount field.
func (o *CateringMultiChoiceMenuType) SetChoiceCount(v int32) {
	o.ChoiceCount = &v
}

// GetCourse returns the Course field value if set, zero value otherwise.
func (o *CateringMultiChoiceMenuType) GetCourse() string {
	if o == nil || IsNil(o.Course) {
		var ret string
		return ret
	}
	return *o.Course
}

// GetCourseOk returns a tuple with the Course field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringMultiChoiceMenuType) GetCourseOk() (*string, bool) {
	if o == nil || IsNil(o.Course) {
		return nil, false
	}
	return o.Course, true
}

// HasCourse returns a boolean if a field has been set.
func (o *CateringMultiChoiceMenuType) HasCourse() bool {
	if o != nil && !IsNil(o.Course) {
		return true
	}

	return false
}

// SetCourse gets a reference to the given string and assigns it to the Course field.
func (o *CateringMultiChoiceMenuType) SetCourse(v string) {
	o.Course = &v
}

// GetCourseDescription returns the CourseDescription field value if set, zero value otherwise.
func (o *CateringMultiChoiceMenuType) GetCourseDescription() TranslationTextType100 {
	if o == nil || IsNil(o.CourseDescription) {
		var ret TranslationTextType100
		return ret
	}
	return *o.CourseDescription
}

// GetCourseDescriptionOk returns a tuple with the CourseDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringMultiChoiceMenuType) GetCourseDescriptionOk() (*TranslationTextType100, bool) {
	if o == nil || IsNil(o.CourseDescription) {
		return nil, false
	}
	return o.CourseDescription, true
}

// HasCourseDescription returns a boolean if a field has been set.
func (o *CateringMultiChoiceMenuType) HasCourseDescription() bool {
	if o != nil && !IsNil(o.CourseDescription) {
		return true
	}

	return false
}

// SetCourseDescription gets a reference to the given TranslationTextType100 and assigns it to the CourseDescription field.
func (o *CateringMultiChoiceMenuType) SetCourseDescription(v TranslationTextType100) {
	o.CourseDescription = &v
}

// GetCourseId returns the CourseId field value if set, zero value otherwise.
func (o *CateringMultiChoiceMenuType) GetCourseId() int32 {
	if o == nil || IsNil(o.CourseId) {
		var ret int32
		return ret
	}
	return *o.CourseId
}

// GetCourseIdOk returns a tuple with the CourseId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringMultiChoiceMenuType) GetCourseIdOk() (*int32, bool) {
	if o == nil || IsNil(o.CourseId) {
		return nil, false
	}
	return o.CourseId, true
}

// HasCourseId returns a boolean if a field has been set.
func (o *CateringMultiChoiceMenuType) HasCourseId() bool {
	if o != nil && !IsNil(o.CourseId) {
		return true
	}

	return false
}

// SetCourseId gets a reference to the given int32 and assigns it to the CourseId field.
func (o *CateringMultiChoiceMenuType) SetCourseId(v int32) {
	o.CourseId = &v
}

// GetCourseName returns the CourseName field value if set, zero value otherwise.
func (o *CateringMultiChoiceMenuType) GetCourseName() TranslationTextType20 {
	if o == nil || IsNil(o.CourseName) {
		var ret TranslationTextType20
		return ret
	}
	return *o.CourseName
}

// GetCourseNameOk returns a tuple with the CourseName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringMultiChoiceMenuType) GetCourseNameOk() (*TranslationTextType20, bool) {
	if o == nil || IsNil(o.CourseName) {
		return nil, false
	}
	return o.CourseName, true
}

// HasCourseName returns a boolean if a field has been set.
func (o *CateringMultiChoiceMenuType) HasCourseName() bool {
	if o != nil && !IsNil(o.CourseName) {
		return true
	}

	return false
}

// SetCourseName gets a reference to the given TranslationTextType20 and assigns it to the CourseName field.
func (o *CateringMultiChoiceMenuType) SetCourseName(v TranslationTextType20) {
	o.CourseName = &v
}

func (o CateringMultiChoiceMenuType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringMultiChoiceMenuType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChoiceCount) {
		toSerialize["choiceCount"] = o.ChoiceCount
	}
	if !IsNil(o.Course) {
		toSerialize["course"] = o.Course
	}
	if !IsNil(o.CourseDescription) {
		toSerialize["courseDescription"] = o.CourseDescription
	}
	if !IsNil(o.CourseId) {
		toSerialize["courseId"] = o.CourseId
	}
	if !IsNil(o.CourseName) {
		toSerialize["courseName"] = o.CourseName
	}
	return toSerialize, nil
}

type NullableCateringMultiChoiceMenuType struct {
	value *CateringMultiChoiceMenuType
	isSet bool
}

func (v NullableCateringMultiChoiceMenuType) Get() *CateringMultiChoiceMenuType {
	return v.value
}

func (v *NullableCateringMultiChoiceMenuType) Set(val *CateringMultiChoiceMenuType) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringMultiChoiceMenuType) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringMultiChoiceMenuType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringMultiChoiceMenuType(val *CateringMultiChoiceMenuType) *NullableCateringMultiChoiceMenuType {
	return &NullableCateringMultiChoiceMenuType{value: val, isSet: true}
}

func (v NullableCateringMultiChoiceMenuType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringMultiChoiceMenuType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


