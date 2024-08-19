# ProfileEnrollmentTypeProfileMemberships

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**ProfileMembership** | Pointer to [**[]ProfileMembershipType**](ProfileMembershipType.md) | Collection of Detailed information on memberships for the customer. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileEnrollmentTypeProfileMemberships

`func NewProfileEnrollmentTypeProfileMemberships() *ProfileEnrollmentTypeProfileMemberships`

NewProfileEnrollmentTypeProfileMemberships instantiates a new ProfileEnrollmentTypeProfileMemberships object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileEnrollmentTypeProfileMembershipsWithDefaults

`func NewProfileEnrollmentTypeProfileMembershipsWithDefaults() *ProfileEnrollmentTypeProfileMemberships`

NewProfileEnrollmentTypeProfileMembershipsWithDefaults instantiates a new ProfileEnrollmentTypeProfileMemberships object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *ProfileEnrollmentTypeProfileMemberships) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ProfileEnrollmentTypeProfileMemberships) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ProfileEnrollmentTypeProfileMemberships) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *ProfileEnrollmentTypeProfileMemberships) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *ProfileEnrollmentTypeProfileMemberships) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *ProfileEnrollmentTypeProfileMemberships) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *ProfileEnrollmentTypeProfileMemberships) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *ProfileEnrollmentTypeProfileMemberships) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetProfileMembership

`func (o *ProfileEnrollmentTypeProfileMemberships) GetProfileMembership() []ProfileMembershipType`

GetProfileMembership returns the ProfileMembership field if non-nil, zero value otherwise.

### GetProfileMembershipOk

`func (o *ProfileEnrollmentTypeProfileMemberships) GetProfileMembershipOk() (*[]ProfileMembershipType, bool)`

GetProfileMembershipOk returns a tuple with the ProfileMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMembership

`func (o *ProfileEnrollmentTypeProfileMemberships) SetProfileMembership(v []ProfileMembershipType)`

SetProfileMembership sets ProfileMembership field to given value.

### HasProfileMembership

`func (o *ProfileEnrollmentTypeProfileMemberships) HasProfileMembership() bool`

HasProfileMembership returns a boolean if a field has been set.

### GetTotalResults

`func (o *ProfileEnrollmentTypeProfileMemberships) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *ProfileEnrollmentTypeProfileMemberships) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *ProfileEnrollmentTypeProfileMemberships) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *ProfileEnrollmentTypeProfileMemberships) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


