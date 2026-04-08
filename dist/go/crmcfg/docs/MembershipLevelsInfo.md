# MembershipLevelsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipLevels** | Pointer to [**[]MembershipLevelType**](MembershipLevelType.md) | Collection of membership levels | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipLevelsInfo

`func NewMembershipLevelsInfo() *MembershipLevelsInfo`

NewMembershipLevelsInfo instantiates a new MembershipLevelsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipLevelsInfoWithDefaults

`func NewMembershipLevelsInfoWithDefaults() *MembershipLevelsInfo`

NewMembershipLevelsInfoWithDefaults instantiates a new MembershipLevelsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipLevels

`func (o *MembershipLevelsInfo) GetMembershipLevels() []MembershipLevelType`

GetMembershipLevels returns the MembershipLevels field if non-nil, zero value otherwise.

### GetMembershipLevelsOk

`func (o *MembershipLevelsInfo) GetMembershipLevelsOk() (*[]MembershipLevelType, bool)`

GetMembershipLevelsOk returns a tuple with the MembershipLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevels

`func (o *MembershipLevelsInfo) SetMembershipLevels(v []MembershipLevelType)`

SetMembershipLevels sets MembershipLevels field to given value.

### HasMembershipLevels

`func (o *MembershipLevelsInfo) HasMembershipLevels() bool`

HasMembershipLevels returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipLevelsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipLevelsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipLevelsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipLevelsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipLevelsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipLevelsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipLevelsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipLevelsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


