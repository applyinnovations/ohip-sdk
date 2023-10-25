# PutCollectingAgentTaxesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CollectingAgentTaxes** | Pointer to [**CollectingAgentTaxesType**](CollectingAgentTaxesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutCollectingAgentTaxesRequest

`func NewPutCollectingAgentTaxesRequest() *PutCollectingAgentTaxesRequest`

NewPutCollectingAgentTaxesRequest instantiates a new PutCollectingAgentTaxesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCollectingAgentTaxesRequestWithDefaults

`func NewPutCollectingAgentTaxesRequestWithDefaults() *PutCollectingAgentTaxesRequest`

NewPutCollectingAgentTaxesRequestWithDefaults instantiates a new PutCollectingAgentTaxesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCollectingAgentTaxes

`func (o *PutCollectingAgentTaxesRequest) GetCollectingAgentTaxes() CollectingAgentTaxesType`

GetCollectingAgentTaxes returns the CollectingAgentTaxes field if non-nil, zero value otherwise.

### GetCollectingAgentTaxesOk

`func (o *PutCollectingAgentTaxesRequest) GetCollectingAgentTaxesOk() (*CollectingAgentTaxesType, bool)`

GetCollectingAgentTaxesOk returns a tuple with the CollectingAgentTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectingAgentTaxes

`func (o *PutCollectingAgentTaxesRequest) SetCollectingAgentTaxes(v CollectingAgentTaxesType)`

SetCollectingAgentTaxes sets CollectingAgentTaxes field to given value.

### HasCollectingAgentTaxes

`func (o *PutCollectingAgentTaxesRequest) HasCollectingAgentTaxes() bool`

HasCollectingAgentTaxes returns a boolean if a field has been set.

### GetLinks

`func (o *PutCollectingAgentTaxesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCollectingAgentTaxesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCollectingAgentTaxesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCollectingAgentTaxesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCollectingAgentTaxesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCollectingAgentTaxesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCollectingAgentTaxesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCollectingAgentTaxesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


