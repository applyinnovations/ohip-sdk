# PostSourcesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Sources** | Pointer to [**[]SourceType**](SourceType.md) | List of Sources. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostSourcesRequest

`func NewPostSourcesRequest() *PostSourcesRequest`

NewPostSourcesRequest instantiates a new PostSourcesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostSourcesRequestWithDefaults

`func NewPostSourcesRequestWithDefaults() *PostSourcesRequest`

NewPostSourcesRequestWithDefaults instantiates a new PostSourcesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostSourcesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostSourcesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostSourcesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostSourcesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSources

`func (o *PostSourcesRequest) GetSources() []SourceType`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *PostSourcesRequest) GetSourcesOk() (*[]SourceType, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *PostSourcesRequest) SetSources(v []SourceType)`

SetSources sets Sources field to given value.

### HasSources

`func (o *PostSourcesRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetWarnings

`func (o *PostSourcesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostSourcesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostSourcesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostSourcesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


