# PutSourcesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Sources** | Pointer to [**SourcesType**](SourcesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutSourcesRequest

`func NewPutSourcesRequest() *PutSourcesRequest`

NewPutSourcesRequest instantiates a new PutSourcesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutSourcesRequestWithDefaults

`func NewPutSourcesRequestWithDefaults() *PutSourcesRequest`

NewPutSourcesRequestWithDefaults instantiates a new PutSourcesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutSourcesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutSourcesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutSourcesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutSourcesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSources

`func (o *PutSourcesRequest) GetSources() SourcesType`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *PutSourcesRequest) GetSourcesOk() (*SourcesType, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *PutSourcesRequest) SetSources(v SourcesType)`

SetSources sets Sources field to given value.

### HasSources

`func (o *PutSourcesRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetWarnings

`func (o *PutSourcesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutSourcesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutSourcesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutSourcesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


