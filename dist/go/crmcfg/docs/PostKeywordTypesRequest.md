# PostKeywordTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeywordTypes** | Pointer to [**[]KeywordTypeType**](KeywordTypeType.md) | List of Keyword Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostKeywordTypesRequest

`func NewPostKeywordTypesRequest() *PostKeywordTypesRequest`

NewPostKeywordTypesRequest instantiates a new PostKeywordTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostKeywordTypesRequestWithDefaults

`func NewPostKeywordTypesRequestWithDefaults() *PostKeywordTypesRequest`

NewPostKeywordTypesRequestWithDefaults instantiates a new PostKeywordTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeywordTypes

`func (o *PostKeywordTypesRequest) GetKeywordTypes() []KeywordTypeType`

GetKeywordTypes returns the KeywordTypes field if non-nil, zero value otherwise.

### GetKeywordTypesOk

`func (o *PostKeywordTypesRequest) GetKeywordTypesOk() (*[]KeywordTypeType, bool)`

GetKeywordTypesOk returns a tuple with the KeywordTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywordTypes

`func (o *PostKeywordTypesRequest) SetKeywordTypes(v []KeywordTypeType)`

SetKeywordTypes sets KeywordTypes field to given value.

### HasKeywordTypes

`func (o *PostKeywordTypesRequest) HasKeywordTypes() bool`

HasKeywordTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostKeywordTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostKeywordTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostKeywordTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostKeywordTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostKeywordTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostKeywordTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostKeywordTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostKeywordTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


