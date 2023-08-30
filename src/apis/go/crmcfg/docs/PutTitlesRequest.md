# PutTitlesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Titles** | Pointer to [**[]TitleType**](TitleType.md) | List of Titles. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTitlesRequest

`func NewPutTitlesRequest() *PutTitlesRequest`

NewPutTitlesRequest instantiates a new PutTitlesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTitlesRequestWithDefaults

`func NewPutTitlesRequestWithDefaults() *PutTitlesRequest`

NewPutTitlesRequestWithDefaults instantiates a new PutTitlesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitles

`func (o *PutTitlesRequest) GetTitles() []TitleType`

GetTitles returns the Titles field if non-nil, zero value otherwise.

### GetTitlesOk

`func (o *PutTitlesRequest) GetTitlesOk() (*[]TitleType, bool)`

GetTitlesOk returns a tuple with the Titles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitles

`func (o *PutTitlesRequest) SetTitles(v []TitleType)`

SetTitles sets Titles field to given value.

### HasTitles

`func (o *PutTitlesRequest) HasTitles() bool`

HasTitles returns a boolean if a field has been set.

### GetLinks

`func (o *PutTitlesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTitlesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTitlesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTitlesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTitlesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTitlesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTitlesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTitlesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


