# CompanyProfileTypeProfileMemberships

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**ProfileMembership** | Pointer to [**[]ProfileMembershipType**](ProfileMembershipType.md) | Collection of Detailed information on memberships for the customer. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewCompanyProfileTypeProfileMemberships

`func NewCompanyProfileTypeProfileMemberships() *CompanyProfileTypeProfileMemberships`

NewCompanyProfileTypeProfileMemberships instantiates a new CompanyProfileTypeProfileMemberships object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompanyProfileTypeProfileMembershipsWithDefaults

`func NewCompanyProfileTypeProfileMembershipsWithDefaults() *CompanyProfileTypeProfileMemberships`

NewCompanyProfileTypeProfileMembershipsWithDefaults instantiates a new CompanyProfileTypeProfileMemberships object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *CompanyProfileTypeProfileMemberships) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CompanyProfileTypeProfileMemberships) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CompanyProfileTypeProfileMemberships) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CompanyProfileTypeProfileMemberships) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetProfileMembership

`func (o *CompanyProfileTypeProfileMemberships) GetProfileMembership() []ProfileMembershipType`

GetProfileMembership returns the ProfileMembership field if non-nil, zero value otherwise.

### GetProfileMembershipOk

`func (o *CompanyProfileTypeProfileMemberships) GetProfileMembershipOk() (*[]ProfileMembershipType, bool)`

GetProfileMembershipOk returns a tuple with the ProfileMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMembership

`func (o *CompanyProfileTypeProfileMemberships) SetProfileMembership(v []ProfileMembershipType)`

SetProfileMembership sets ProfileMembership field to given value.

### HasProfileMembership

`func (o *CompanyProfileTypeProfileMemberships) HasProfileMembership() bool`

HasProfileMembership returns a boolean if a field has been set.

### GetTotalResults

`func (o *CompanyProfileTypeProfileMemberships) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CompanyProfileTypeProfileMemberships) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CompanyProfileTypeProfileMemberships) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CompanyProfileTypeProfileMemberships) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


