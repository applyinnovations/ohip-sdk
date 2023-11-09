# ProfileTypeProfileMemberships

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileMembership** | Pointer to [**[]ProfileMembershipType**](ProfileMembershipType.md) | Collection of Detailed information on memberships for the customer. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileTypeProfileMemberships

`func NewProfileTypeProfileMemberships() *ProfileTypeProfileMemberships`

NewProfileTypeProfileMemberships instantiates a new ProfileTypeProfileMemberships object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypeProfileMembershipsWithDefaults

`func NewProfileTypeProfileMembershipsWithDefaults() *ProfileTypeProfileMemberships`

NewProfileTypeProfileMembershipsWithDefaults instantiates a new ProfileTypeProfileMemberships object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileMembership

`func (o *ProfileTypeProfileMemberships) GetProfileMembership() []ProfileMembershipType`

GetProfileMembership returns the ProfileMembership field if non-nil, zero value otherwise.

### GetProfileMembershipOk

`func (o *ProfileTypeProfileMemberships) GetProfileMembershipOk() (*[]ProfileMembershipType, bool)`

GetProfileMembershipOk returns a tuple with the ProfileMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMembership

`func (o *ProfileTypeProfileMemberships) SetProfileMembership(v []ProfileMembershipType)`

SetProfileMembership sets ProfileMembership field to given value.

### HasProfileMembership

`func (o *ProfileTypeProfileMemberships) HasProfileMembership() bool`

HasProfileMembership returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileTypeProfileMemberships) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileTypeProfileMemberships) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileTypeProfileMemberships) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileTypeProfileMemberships) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


