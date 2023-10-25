# PostMembershipFolioTextsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipFolioTexts** | Pointer to [**[]MembershipFolioTextsType**](MembershipFolioTextsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMembershipFolioTextsRequest

`func NewPostMembershipFolioTextsRequest() *PostMembershipFolioTextsRequest`

NewPostMembershipFolioTextsRequest instantiates a new PostMembershipFolioTextsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMembershipFolioTextsRequestWithDefaults

`func NewPostMembershipFolioTextsRequestWithDefaults() *PostMembershipFolioTextsRequest`

NewPostMembershipFolioTextsRequestWithDefaults instantiates a new PostMembershipFolioTextsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMembershipFolioTextsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMembershipFolioTextsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMembershipFolioTextsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMembershipFolioTextsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipFolioTexts

`func (o *PostMembershipFolioTextsRequest) GetMembershipFolioTexts() []MembershipFolioTextsType`

GetMembershipFolioTexts returns the MembershipFolioTexts field if non-nil, zero value otherwise.

### GetMembershipFolioTextsOk

`func (o *PostMembershipFolioTextsRequest) GetMembershipFolioTextsOk() (*[]MembershipFolioTextsType, bool)`

GetMembershipFolioTextsOk returns a tuple with the MembershipFolioTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipFolioTexts

`func (o *PostMembershipFolioTextsRequest) SetMembershipFolioTexts(v []MembershipFolioTextsType)`

SetMembershipFolioTexts sets MembershipFolioTexts field to given value.

### HasMembershipFolioTexts

`func (o *PostMembershipFolioTextsRequest) HasMembershipFolioTexts() bool`

HasMembershipFolioTexts returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMembershipFolioTextsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMembershipFolioTextsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMembershipFolioTextsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMembershipFolioTextsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


