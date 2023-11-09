# ChangedMembership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ProfileMemberships** | Pointer to [**[]ProfileMembershipType**](ProfileMembershipType.md) | Detailed information of membership related to the profile | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangedMembership

`func NewChangedMembership() *ChangedMembership`

NewChangedMembership instantiates a new ChangedMembership object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangedMembershipWithDefaults

`func NewChangedMembershipWithDefaults() *ChangedMembership`

NewChangedMembershipWithDefaults instantiates a new ChangedMembership object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangedMembership) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangedMembership) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangedMembership) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangedMembership) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileMemberships

`func (o *ChangedMembership) GetProfileMemberships() []ProfileMembershipType`

GetProfileMemberships returns the ProfileMemberships field if non-nil, zero value otherwise.

### GetProfileMembershipsOk

`func (o *ChangedMembership) GetProfileMembershipsOk() (*[]ProfileMembershipType, bool)`

GetProfileMembershipsOk returns a tuple with the ProfileMemberships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileMemberships

`func (o *ChangedMembership) SetProfileMemberships(v []ProfileMembershipType)`

SetProfileMemberships sets ProfileMemberships field to given value.

### HasProfileMemberships

`func (o *ChangedMembership) HasProfileMemberships() bool`

HasProfileMemberships returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangedMembership) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangedMembership) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangedMembership) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangedMembership) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


