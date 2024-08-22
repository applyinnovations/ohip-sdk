# DistributionTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRates** | Pointer to [**[]DistributionTemplateChannelRateType**](DistributionTemplateChannelRateType.md) | Information about channel rate where distribution template will be distributed to. | [optional] 
**Code** | Pointer to **string** | Uniquely identifies the distribution template. | [optional] 
**Description** | Pointer to **string** | Description of the distribution template. | [optional] 
**DisplaySequence** | Pointer to **int32** | Display sequence of the distribution template. | [optional] 
**Inactive** | Pointer to **bool** | Flag that indicates whether distribution template is inactive or not. | [optional] 
**NegotiatedRate** | Pointer to **bool** | Overrides availability of configuring negotiated rates given Channel is flagged as negotiated. | [optional] 
**Type** | Pointer to **string** | Classification or grouping of the distribution template. | [optional] 

## Methods

### NewDistributionTemplateType

`func NewDistributionTemplateType() *DistributionTemplateType`

NewDistributionTemplateType instantiates a new DistributionTemplateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistributionTemplateTypeWithDefaults

`func NewDistributionTemplateTypeWithDefaults() *DistributionTemplateType`

NewDistributionTemplateTypeWithDefaults instantiates a new DistributionTemplateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRates

`func (o *DistributionTemplateType) GetChannelRates() []DistributionTemplateChannelRateType`

GetChannelRates returns the ChannelRates field if non-nil, zero value otherwise.

### GetChannelRatesOk

`func (o *DistributionTemplateType) GetChannelRatesOk() (*[]DistributionTemplateChannelRateType, bool)`

GetChannelRatesOk returns a tuple with the ChannelRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRates

`func (o *DistributionTemplateType) SetChannelRates(v []DistributionTemplateChannelRateType)`

SetChannelRates sets ChannelRates field to given value.

### HasChannelRates

`func (o *DistributionTemplateType) HasChannelRates() bool`

HasChannelRates returns a boolean if a field has been set.

### GetCode

`func (o *DistributionTemplateType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *DistributionTemplateType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *DistributionTemplateType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *DistributionTemplateType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *DistributionTemplateType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DistributionTemplateType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DistributionTemplateType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DistributionTemplateType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *DistributionTemplateType) GetDisplaySequence() int32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *DistributionTemplateType) GetDisplaySequenceOk() (*int32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *DistributionTemplateType) SetDisplaySequence(v int32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *DistributionTemplateType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetInactive

`func (o *DistributionTemplateType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *DistributionTemplateType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *DistributionTemplateType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *DistributionTemplateType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetNegotiatedRate

`func (o *DistributionTemplateType) GetNegotiatedRate() bool`

GetNegotiatedRate returns the NegotiatedRate field if non-nil, zero value otherwise.

### GetNegotiatedRateOk

`func (o *DistributionTemplateType) GetNegotiatedRateOk() (*bool, bool)`

GetNegotiatedRateOk returns a tuple with the NegotiatedRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegotiatedRate

`func (o *DistributionTemplateType) SetNegotiatedRate(v bool)`

SetNegotiatedRate sets NegotiatedRate field to given value.

### HasNegotiatedRate

`func (o *DistributionTemplateType) HasNegotiatedRate() bool`

HasNegotiatedRate returns a boolean if a field has been set.

### GetType

`func (o *DistributionTemplateType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DistributionTemplateType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DistributionTemplateType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DistributionTemplateType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


