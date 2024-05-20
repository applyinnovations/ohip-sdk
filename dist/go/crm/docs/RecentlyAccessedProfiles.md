# RecentlyAccessedProfiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Profiles** | Pointer to [**[]RecentlyAccessedProfileType**](RecentlyAccessedProfileType.md) | List of recently accessed profiles. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRecentlyAccessedProfiles

`func NewRecentlyAccessedProfiles() *RecentlyAccessedProfiles`

NewRecentlyAccessedProfiles instantiates a new RecentlyAccessedProfiles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecentlyAccessedProfilesWithDefaults

`func NewRecentlyAccessedProfilesWithDefaults() *RecentlyAccessedProfiles`

NewRecentlyAccessedProfilesWithDefaults instantiates a new RecentlyAccessedProfiles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RecentlyAccessedProfiles) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RecentlyAccessedProfiles) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RecentlyAccessedProfiles) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RecentlyAccessedProfiles) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfiles

`func (o *RecentlyAccessedProfiles) GetProfiles() []RecentlyAccessedProfileType`

GetProfiles returns the Profiles field if non-nil, zero value otherwise.

### GetProfilesOk

`func (o *RecentlyAccessedProfiles) GetProfilesOk() (*[]RecentlyAccessedProfileType, bool)`

GetProfilesOk returns a tuple with the Profiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfiles

`func (o *RecentlyAccessedProfiles) SetProfiles(v []RecentlyAccessedProfileType)`

SetProfiles sets Profiles field to given value.

### HasProfiles

`func (o *RecentlyAccessedProfiles) HasProfiles() bool`

HasProfiles returns a boolean if a field has been set.

### GetWarnings

`func (o *RecentlyAccessedProfiles) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RecentlyAccessedProfiles) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RecentlyAccessedProfiles) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RecentlyAccessedProfiles) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


