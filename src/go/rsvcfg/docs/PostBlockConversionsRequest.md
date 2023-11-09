# PostBlockConversionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockConversions** | Pointer to [**BlockConversionsType**](BlockConversionsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostBlockConversionsRequest

`func NewPostBlockConversionsRequest() *PostBlockConversionsRequest`

NewPostBlockConversionsRequest instantiates a new PostBlockConversionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBlockConversionsRequestWithDefaults

`func NewPostBlockConversionsRequestWithDefaults() *PostBlockConversionsRequest`

NewPostBlockConversionsRequestWithDefaults instantiates a new PostBlockConversionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockConversions

`func (o *PostBlockConversionsRequest) GetBlockConversions() BlockConversionsType`

GetBlockConversions returns the BlockConversions field if non-nil, zero value otherwise.

### GetBlockConversionsOk

`func (o *PostBlockConversionsRequest) GetBlockConversionsOk() (*BlockConversionsType, bool)`

GetBlockConversionsOk returns a tuple with the BlockConversions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockConversions

`func (o *PostBlockConversionsRequest) SetBlockConversions(v BlockConversionsType)`

SetBlockConversions sets BlockConversions field to given value.

### HasBlockConversions

`func (o *PostBlockConversionsRequest) HasBlockConversions() bool`

HasBlockConversions returns a boolean if a field has been set.

### GetLinks

`func (o *PostBlockConversionsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBlockConversionsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBlockConversionsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBlockConversionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBlockConversionsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBlockConversionsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBlockConversionsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBlockConversionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


