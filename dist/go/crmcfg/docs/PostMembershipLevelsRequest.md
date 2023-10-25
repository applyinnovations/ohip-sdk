# PostMembershipLevelsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipLevels** | Pointer to [**[]MembershipLevelType**](MembershipLevelType.md) | Collection of membership levels | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMembershipLevelsRequest

`func NewPostMembershipLevelsRequest() *PostMembershipLevelsRequest`

NewPostMembershipLevelsRequest instantiates a new PostMembershipLevelsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipLevelsRequestWithDefaults

`func NewPostMembershipLevelsRequestWithDefaults() *PostMembershipLevelsRequest`

NewPostMembershipLevelsRequestWithDefaults instantiates a new PostMembershipLevelsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMembershipLevelsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipLevelsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipLevelsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipLevelsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipLevels

`func (o *PostMembershipLevelsRequest) GetMembershipLevels() []MembershipLevelType`

GetMembershipLevels returns the MembershipLevels field if non-nil, zero value otherwise.

### GetMembershipLevelsOk

`func (o *PostMembershipLevelsRequest) GetMembershipLevelsOk() (*[]MembershipLevelType, bool)`

GetMembershipLevelsOk returns a tuple with the MembershipLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevels

`func (o *PostMembershipLevelsRequest) SetMembershipLevels(v []MembershipLevelType)`

SetMembershipLevels sets MembershipLevels field to given value.

### HasMembershipLevels

`func (o *PostMembershipLevelsRequest) HasMembershipLevels() bool`

HasMembershipLevels returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipLevelsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipLevelsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipLevelsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipLevelsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


