# ProfileMembershipStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipStatistics** | Pointer to [**MembershipStatisticsType**](MembershipStatisticsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileMembershipStatistics

`func NewProfileMembershipStatistics() *ProfileMembershipStatistics`

NewProfileMembershipStatistics instantiates a new ProfileMembershipStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileMembershipStatisticsWithDefaults

`func NewProfileMembershipStatisticsWithDefaults() *ProfileMembershipStatistics`

NewProfileMembershipStatisticsWithDefaults instantiates a new ProfileMembershipStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ProfileMembershipStatistics) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileMembershipStatistics) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileMembershipStatistics) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileMembershipStatistics) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipStatistics

`func (o *ProfileMembershipStatistics) GetMembershipStatistics() MembershipStatisticsType`

GetMembershipStatistics returns the MembershipStatistics field if non-nil, zero value otherwise.

### GetMembershipStatisticsOk

`func (o *ProfileMembershipStatistics) GetMembershipStatisticsOk() (*MembershipStatisticsType, bool)`

GetMembershipStatisticsOk returns a tuple with the MembershipStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipStatistics

`func (o *ProfileMembershipStatistics) SetMembershipStatistics(v MembershipStatisticsType)`

SetMembershipStatistics sets MembershipStatistics field to given value.

### HasMembershipStatistics

`func (o *ProfileMembershipStatistics) HasMembershipStatistics() bool`

HasMembershipStatistics returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileMembershipStatistics) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileMembershipStatistics) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileMembershipStatistics) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileMembershipStatistics) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


