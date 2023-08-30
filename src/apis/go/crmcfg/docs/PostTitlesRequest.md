# PostTitlesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Titles** | Pointer to [**[]TitleType**](TitleType.md) | List of Titles. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTitlesRequest

`func NewPostTitlesRequest() *PostTitlesRequest`

NewPostTitlesRequest instantiates a new PostTitlesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTitlesRequestWithDefaults

`func NewPostTitlesRequestWithDefaults() *PostTitlesRequest`

NewPostTitlesRequestWithDefaults instantiates a new PostTitlesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitles

`func (o *PostTitlesRequest) GetTitles() []TitleType`

GetTitles returns the Titles field if non-nil, zero value otherwise.

### GetTitlesOk

`func (o *PostTitlesRequest) GetTitlesOk() (*[]TitleType, bool)`

GetTitlesOk returns a tuple with the Titles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitles

`func (o *PostTitlesRequest) SetTitles(v []TitleType)`

SetTitles sets Titles field to given value.

### HasTitles

`func (o *PostTitlesRequest) HasTitles() bool`

HasTitles returns a boolean if a field has been set.

### GetLinks

`func (o *PostTitlesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTitlesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTitlesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTitlesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTitlesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTitlesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTitlesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTitlesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


