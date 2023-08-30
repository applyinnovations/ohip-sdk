# PostMembershipStatusCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipStatusCodes** | Pointer to [**[]MembershipStatusCodeType**](MembershipStatusCodeType.md) | List of Membership Status Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMembershipStatusCodesRequest

`func NewPostMembershipStatusCodesRequest() *PostMembershipStatusCodesRequest`

NewPostMembershipStatusCodesRequest instantiates a new PostMembershipStatusCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipStatusCodesRequestWithDefaults

`func NewPostMembershipStatusCodesRequestWithDefaults() *PostMembershipStatusCodesRequest`

NewPostMembershipStatusCodesRequestWithDefaults instantiates a new PostMembershipStatusCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipStatusCodes

`func (o *PostMembershipStatusCodesRequest) GetMembershipStatusCodes() []MembershipStatusCodeType`

GetMembershipStatusCodes returns the MembershipStatusCodes field if non-nil, zero value otherwise.

### GetMembershipStatusCodesOk

`func (o *PostMembershipStatusCodesRequest) GetMembershipStatusCodesOk() (*[]MembershipStatusCodeType, bool)`

GetMembershipStatusCodesOk returns a tuple with the MembershipStatusCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipStatusCodes

`func (o *PostMembershipStatusCodesRequest) SetMembershipStatusCodes(v []MembershipStatusCodeType)`

SetMembershipStatusCodes sets MembershipStatusCodes field to given value.

### HasMembershipStatusCodes

`func (o *PostMembershipStatusCodesRequest) HasMembershipStatusCodes() bool`

HasMembershipStatusCodes returns a boolean if a field has been set.

### GetLinks

`func (o *PostMembershipStatusCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipStatusCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipStatusCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipStatusCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipStatusCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipStatusCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipStatusCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipStatusCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


