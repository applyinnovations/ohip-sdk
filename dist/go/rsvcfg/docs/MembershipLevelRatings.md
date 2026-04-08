# MembershipLevelRatings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipLevelRatingsInfo** | Pointer to [**[]MembershipLevelRatingInfoType**](MembershipLevelRatingInfoType.md) | Collection of membership levels and their ratings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipLevelRatings

`func NewMembershipLevelRatings() *MembershipLevelRatings`

NewMembershipLevelRatings instantiates a new MembershipLevelRatings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipLevelRatingsWithDefaults

`func NewMembershipLevelRatingsWithDefaults() *MembershipLevelRatings`

NewMembershipLevelRatingsWithDefaults instantiates a new MembershipLevelRatings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipLevelRatingsInfo

`func (o *MembershipLevelRatings) GetMembershipLevelRatingsInfo() []MembershipLevelRatingInfoType`

GetMembershipLevelRatingsInfo returns the MembershipLevelRatingsInfo field if non-nil, zero value otherwise.

### GetMembershipLevelRatingsInfoOk

`func (o *MembershipLevelRatings) GetMembershipLevelRatingsInfoOk() (*[]MembershipLevelRatingInfoType, bool)`

GetMembershipLevelRatingsInfoOk returns a tuple with the MembershipLevelRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevelRatingsInfo

`func (o *MembershipLevelRatings) SetMembershipLevelRatingsInfo(v []MembershipLevelRatingInfoType)`

SetMembershipLevelRatingsInfo sets MembershipLevelRatingsInfo field to given value.

### HasMembershipLevelRatingsInfo

`func (o *MembershipLevelRatings) HasMembershipLevelRatingsInfo() bool`

HasMembershipLevelRatingsInfo returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipLevelRatings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipLevelRatings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipLevelRatings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipLevelRatings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipLevelRatings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipLevelRatings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipLevelRatings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipLevelRatings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


