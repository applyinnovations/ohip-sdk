# ProfilesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**ProfileInfo** | Pointer to [**[]ProfilesTypeProfileInfoInner**](ProfilesTypeProfileInfoInner.md) | A collection of Profiles or Unique IDs of Profiles. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfilesType

`func NewProfilesType() *ProfilesType`

NewProfilesType instantiates a new ProfilesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfilesTypeWithDefaults

`func NewProfilesTypeWithDefaults() *ProfilesType`

NewProfilesTypeWithDefaults instantiates a new ProfilesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *ProfilesType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfilesType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfilesType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfilesType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetProfileInfo

`func (o *ProfilesType) GetProfileInfo() []ProfilesTypeProfileInfoInner`

GetProfileInfo returns the ProfileInfo field if non-nil, zero value otherwise.

### GetProfileInfoOk

`func (o *ProfilesType) GetProfileInfoOk() (*[]ProfilesTypeProfileInfoInner, bool)`

GetProfileInfoOk returns a tuple with the ProfileInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileInfo

`func (o *ProfilesType) SetProfileInfo(v []ProfilesTypeProfileInfoInner)`

SetProfileInfo sets ProfileInfo field to given value.

### HasProfileInfo

`func (o *ProfilesType) HasProfileInfo() bool`

HasProfileInfo returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfilesType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfilesType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfilesType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfilesType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


