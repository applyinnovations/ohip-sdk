# DeleteAutoAttachElementsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoAttachRules** | Pointer to [**AutoAttachElementsConfigType**](AutoAttachElementsConfigType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDeleteAutoAttachElementsRequest

`func NewDeleteAutoAttachElementsRequest() *DeleteAutoAttachElementsRequest`

NewDeleteAutoAttachElementsRequest instantiates a new DeleteAutoAttachElementsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteAutoAttachElementsRequestWithDefaults

`func NewDeleteAutoAttachElementsRequestWithDefaults() *DeleteAutoAttachElementsRequest`

NewDeleteAutoAttachElementsRequestWithDefaults instantiates a new DeleteAutoAttachElementsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoAttachRules

`func (o *DeleteAutoAttachElementsRequest) GetAutoAttachRules() AutoAttachElementsConfigType`

GetAutoAttachRules returns the AutoAttachRules field if non-nil, zero value otherwise.

### GetAutoAttachRulesOk

`func (o *DeleteAutoAttachElementsRequest) GetAutoAttachRulesOk() (*AutoAttachElementsConfigType, bool)`

GetAutoAttachRulesOk returns a tuple with the AutoAttachRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoAttachRules

`func (o *DeleteAutoAttachElementsRequest) SetAutoAttachRules(v AutoAttachElementsConfigType)`

SetAutoAttachRules sets AutoAttachRules field to given value.

### HasAutoAttachRules

`func (o *DeleteAutoAttachElementsRequest) HasAutoAttachRules() bool`

HasAutoAttachRules returns a boolean if a field has been set.

### GetLinks

`func (o *DeleteAutoAttachElementsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DeleteAutoAttachElementsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DeleteAutoAttachElementsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DeleteAutoAttachElementsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DeleteAutoAttachElementsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DeleteAutoAttachElementsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DeleteAutoAttachElementsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DeleteAutoAttachElementsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


