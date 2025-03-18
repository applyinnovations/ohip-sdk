# StayProfilesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Primary** | Pointer to **bool** | Checks if the profile is primary. | [optional] 
**NameId** | Pointer to **float32** | Specifies the unique id that is assigned to a profile. | [optional] 
**PmsNameId** | Pointer to **string** | Specifies the pms id that is assigned to a profile. | [optional] 
**ProfileRole** | **string** | Describes the role associated with the profile. | 

## Methods

### NewStayProfilesType

`func NewStayProfilesType(profileRole string, ) *StayProfilesType`

NewStayProfilesType instantiates a new StayProfilesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayProfilesTypeWithDefaults

`func NewStayProfilesTypeWithDefaults() *StayProfilesType`

NewStayProfilesTypeWithDefaults instantiates a new StayProfilesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimary

`func (o *StayProfilesType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *StayProfilesType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *StayProfilesType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *StayProfilesType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetNameId

`func (o *StayProfilesType) GetNameId() float32`

GetNameId returns the NameId field if non-nil, zero value otherwise.

### GetNameIdOk

`func (o *StayProfilesType) GetNameIdOk() (*float32, bool)`

GetNameIdOk returns a tuple with the NameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameId

`func (o *StayProfilesType) SetNameId(v float32)`

SetNameId sets NameId field to given value.

### HasNameId

`func (o *StayProfilesType) HasNameId() bool`

HasNameId returns a boolean if a field has been set.

### GetPmsNameId

`func (o *StayProfilesType) GetPmsNameId() string`

GetPmsNameId returns the PmsNameId field if non-nil, zero value otherwise.

### GetPmsNameIdOk

`func (o *StayProfilesType) GetPmsNameIdOk() (*string, bool)`

GetPmsNameIdOk returns a tuple with the PmsNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPmsNameId

`func (o *StayProfilesType) SetPmsNameId(v string)`

SetPmsNameId sets PmsNameId field to given value.

### HasPmsNameId

`func (o *StayProfilesType) HasPmsNameId() bool`

HasPmsNameId returns a boolean if a field has been set.

### GetProfileRole

`func (o *StayProfilesType) GetProfileRole() string`

GetProfileRole returns the ProfileRole field if non-nil, zero value otherwise.

### GetProfileRoleOk

`func (o *StayProfilesType) GetProfileRoleOk() (*string, bool)`

GetProfileRoleOk returns a tuple with the ProfileRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileRole

`func (o *StayProfilesType) SetProfileRole(v string)`

SetProfileRole sets ProfileRole field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


