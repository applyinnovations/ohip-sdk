# ProfileEnrollmentTypeProfileMemberships

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileMembership** | Pointer to [**[]ProfileMembershipType**](ProfileMembershipType.md) | Collection of Detailed information on memberships for the customer. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

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

### GetAllRowsFetched

`func (o *ProfileEnrollmentTypeProfileMemberships) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *ProfileEnrollmentTypeProfileMemberships) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *ProfileEnrollmentTypeProfileMemberships) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *ProfileEnrollmentTypeProfileMemberships) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileEnrollmentTypeProfileMemberships) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileEnrollmentTypeProfileMemberships) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileEnrollmentTypeProfileMemberships) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileEnrollmentTypeProfileMemberships) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


