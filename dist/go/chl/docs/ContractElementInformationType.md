# ContractElementInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelCode** | Pointer to **string** | Holds channel of the contract element. | [optional] 
**BookingChannelType** | Pointer to **string** | Holds channel type of the contract element. | [optional] 
**ContractId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ContractPricing** | Pointer to [**ContractPricingType**](ContractPricingType.md) |  | [optional] 
**ContractRangeInformation** | Pointer to [**ContractRangeInformationType**](ContractRangeInformationType.md) |  | [optional] 
**FeeType** | Pointer to [**ContractFeeTypeType**](ContractFeeTypeType.md) |  | [optional] 
**Frequency** | Pointer to [**ContractPriceFrequencyType**](ContractPriceFrequencyType.md) |  | [optional] 
**Note** | Pointer to **string** | Holds Note for the contract element. | [optional] 
**Sequence** | Pointer to **int32** | Sequence identifies contract element per contract. | [optional] 

## Methods

### NewContractElementInformationType

`func NewContractElementInformationType() *ContractElementInformationType`

NewContractElementInformationType instantiates a new ContractElementInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContractElementInformationTypeWithDefaults

`func NewContractElementInformationTypeWithDefaults() *ContractElementInformationType`

NewContractElementInformationTypeWithDefaults instantiates a new ContractElementInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelCode

`func (o *ContractElementInformationType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ContractElementInformationType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ContractElementInformationType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ContractElementInformationType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetBookingChannelType

`func (o *ContractElementInformationType) GetBookingChannelType() string`

GetBookingChannelType returns the BookingChannelType field if non-nil, zero value otherwise.

### GetBookingChannelTypeOk

`func (o *ContractElementInformationType) GetBookingChannelTypeOk() (*string, bool)`

GetBookingChannelTypeOk returns a tuple with the BookingChannelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelType

`func (o *ContractElementInformationType) SetBookingChannelType(v string)`

SetBookingChannelType sets BookingChannelType field to given value.

### HasBookingChannelType

`func (o *ContractElementInformationType) HasBookingChannelType() bool`

HasBookingChannelType returns a boolean if a field has been set.

### GetContractId

`func (o *ContractElementInformationType) GetContractId() UniqueIDType`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *ContractElementInformationType) GetContractIdOk() (*UniqueIDType, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *ContractElementInformationType) SetContractId(v UniqueIDType)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *ContractElementInformationType) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetContractPricing

`func (o *ContractElementInformationType) GetContractPricing() ContractPricingType`

GetContractPricing returns the ContractPricing field if non-nil, zero value otherwise.

### GetContractPricingOk

`func (o *ContractElementInformationType) GetContractPricingOk() (*ContractPricingType, bool)`

GetContractPricingOk returns a tuple with the ContractPricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractPricing

`func (o *ContractElementInformationType) SetContractPricing(v ContractPricingType)`

SetContractPricing sets ContractPricing field to given value.

### HasContractPricing

`func (o *ContractElementInformationType) HasContractPricing() bool`

HasContractPricing returns a boolean if a field has been set.

### GetContractRangeInformation

`func (o *ContractElementInformationType) GetContractRangeInformation() ContractRangeInformationType`

GetContractRangeInformation returns the ContractRangeInformation field if non-nil, zero value otherwise.

### GetContractRangeInformationOk

`func (o *ContractElementInformationType) GetContractRangeInformationOk() (*ContractRangeInformationType, bool)`

GetContractRangeInformationOk returns a tuple with the ContractRangeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractRangeInformation

`func (o *ContractElementInformationType) SetContractRangeInformation(v ContractRangeInformationType)`

SetContractRangeInformation sets ContractRangeInformation field to given value.

### HasContractRangeInformation

`func (o *ContractElementInformationType) HasContractRangeInformation() bool`

HasContractRangeInformation returns a boolean if a field has been set.

### GetFeeType

`func (o *ContractElementInformationType) GetFeeType() ContractFeeTypeType`

GetFeeType returns the FeeType field if non-nil, zero value otherwise.

### GetFeeTypeOk

`func (o *ContractElementInformationType) GetFeeTypeOk() (*ContractFeeTypeType, bool)`

GetFeeTypeOk returns a tuple with the FeeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeType

`func (o *ContractElementInformationType) SetFeeType(v ContractFeeTypeType)`

SetFeeType sets FeeType field to given value.

### HasFeeType

`func (o *ContractElementInformationType) HasFeeType() bool`

HasFeeType returns a boolean if a field has been set.

### GetFrequency

`func (o *ContractElementInformationType) GetFrequency() ContractPriceFrequencyType`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *ContractElementInformationType) GetFrequencyOk() (*ContractPriceFrequencyType, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *ContractElementInformationType) SetFrequency(v ContractPriceFrequencyType)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *ContractElementInformationType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.

### GetNote

`func (o *ContractElementInformationType) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *ContractElementInformationType) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *ContractElementInformationType) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *ContractElementInformationType) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetSequence

`func (o *ContractElementInformationType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ContractElementInformationType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ContractElementInformationType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ContractElementInformationType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


