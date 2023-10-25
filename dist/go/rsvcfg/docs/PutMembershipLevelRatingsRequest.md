# PutMembershipLevelRatingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipLevelRatingsInfo** | Pointer to [**[]MembershipLevelRatingInfoType**](MembershipLevelRatingInfoType.md) | Collection of membership levels and their ratings. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutMembershipLevelRatingsRequest

`func NewPutMembershipLevelRatingsRequest() *PutMembershipLevelRatingsRequest`

NewPutMembershipLevelRatingsRequest instantiates a new PutMembershipLevelRatingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutMembershipLevelRatingsRequestWithDefaults

`func NewPutMembershipLevelRatingsRequestWithDefaults() *PutMembershipLevelRatingsRequest`

NewPutMembershipLevelRatingsRequestWithDefaults instantiates a new PutMembershipLevelRatingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutMembershipLevelRatingsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutMembershipLevelRatingsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutMembershipLevelRatingsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutMembershipLevelRatingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipLevelRatingsInfo

`func (o *PutMembershipLevelRatingsRequest) GetMembershipLevelRatingsInfo() []MembershipLevelRatingInfoType`

GetMembershipLevelRatingsInfo returns the MembershipLevelRatingsInfo field if non-nil, zero value otherwise.

### GetMembershipLevelRatingsInfoOk

`func (o *PutMembershipLevelRatingsRequest) GetMembershipLevelRatingsInfoOk() (*[]MembershipLevelRatingInfoType, bool)`

GetMembershipLevelRatingsInfoOk returns a tuple with the MembershipLevelRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevelRatingsInfo

`func (o *PutMembershipLevelRatingsRequest) SetMembershipLevelRatingsInfo(v []MembershipLevelRatingInfoType)`

SetMembershipLevelRatingsInfo sets MembershipLevelRatingsInfo field to given value.

### HasMembershipLevelRatingsInfo

`func (o *PutMembershipLevelRatingsRequest) HasMembershipLevelRatingsInfo() bool`

HasMembershipLevelRatingsInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PutMembershipLevelRatingsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutMembershipLevelRatingsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutMembershipLevelRatingsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutMembershipLevelRatingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


