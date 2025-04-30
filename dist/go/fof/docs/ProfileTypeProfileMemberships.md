# ProfileTypeProfileMemberships

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileMembership** | Pointer to [**[]ProfileMembershipType**](ProfileMembershipType.md) | Collection of Detailed information on memberships for the customer. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

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

### GetHasMore

`func (o *ProfileTypeProfileMemberships) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileTypeProfileMemberships) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileTypeProfileMemberships) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileTypeProfileMemberships) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileTypeProfileMemberships) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileTypeProfileMemberships) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileTypeProfileMemberships) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileTypeProfileMemberships) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *ProfileTypeProfileMemberships) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileTypeProfileMemberships) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileTypeProfileMemberships) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileTypeProfileMemberships) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


