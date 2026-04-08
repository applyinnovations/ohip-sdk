# CollectingAgentTaxesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CollectingAgentTax** | Pointer to [**[]CollectingAgentTaxType**](CollectingAgentTaxType.md) | It represent Agent Tax details. | [optional] 
**OverrideCollectingAgentTaxes** | Pointer to **bool** | Flag that indicates if Collecting Agent Taxes check should be skipped when given Tax code already exist. | [optional] 

## Methods

### NewCollectingAgentTaxesType

`func NewCollectingAgentTaxesType() *CollectingAgentTaxesType`

NewCollectingAgentTaxesType instantiates a new CollectingAgentTaxesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCollectingAgentTaxesTypeWithDefaults

`func NewCollectingAgentTaxesTypeWithDefaults() *CollectingAgentTaxesType`

NewCollectingAgentTaxesTypeWithDefaults instantiates a new CollectingAgentTaxesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCollectingAgentTax

`func (o *CollectingAgentTaxesType) GetCollectingAgentTax() []CollectingAgentTaxType`

GetCollectingAgentTax returns the CollectingAgentTax field if non-nil, zero value otherwise.

### GetCollectingAgentTaxOk

`func (o *CollectingAgentTaxesType) GetCollectingAgentTaxOk() (*[]CollectingAgentTaxType, bool)`

GetCollectingAgentTaxOk returns a tuple with the CollectingAgentTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCollectingAgentTax

`func (o *CollectingAgentTaxesType) SetCollectingAgentTax(v []CollectingAgentTaxType)`

SetCollectingAgentTax sets CollectingAgentTax field to given value.

### HasCollectingAgentTax

`func (o *CollectingAgentTaxesType) HasCollectingAgentTax() bool`

HasCollectingAgentTax returns a boolean if a field has been set.

### GetOverrideCollectingAgentTaxes

`func (o *CollectingAgentTaxesType) GetOverrideCollectingAgentTaxes() bool`

GetOverrideCollectingAgentTaxes returns the OverrideCollectingAgentTaxes field if non-nil, zero value otherwise.

### GetOverrideCollectingAgentTaxesOk

`func (o *CollectingAgentTaxesType) GetOverrideCollectingAgentTaxesOk() (*bool, bool)`

GetOverrideCollectingAgentTaxesOk returns a tuple with the OverrideCollectingAgentTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideCollectingAgentTaxes

`func (o *CollectingAgentTaxesType) SetOverrideCollectingAgentTaxes(v bool)`

SetOverrideCollectingAgentTaxes sets OverrideCollectingAgentTaxes field to given value.

### HasOverrideCollectingAgentTaxes

`func (o *CollectingAgentTaxesType) HasOverrideCollectingAgentTaxes() bool`

HasOverrideCollectingAgentTaxes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


