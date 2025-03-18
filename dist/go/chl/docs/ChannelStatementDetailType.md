# ChannelStatementDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Sequence identifies contract element per contract. | [optional] 
**FeeType** | Pointer to [**ContractFeeTypeType**](ContractFeeTypeType.md) |  | [optional] 
**BookingChannelType** | Pointer to **string** | Holds channel type of the contract element. | [optional] 
**BookingChannelCode** | Pointer to **string** | Holds channel of the contract element. | [optional] 
**ContractPricing** | Pointer to [**ContractPricingType**](ContractPricingType.md) |  | [optional] 
**ContractRangeInformation** | Pointer to [**ContractRangeInformationType**](ContractRangeInformationType.md) |  | [optional] 
**Frequency** | Pointer to [**ContractPriceFrequencyType**](ContractPriceFrequencyType.md) |  | [optional] 
**Note** | Pointer to **string** | Holds Note for the contract element. | [optional] 
**StatementId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Holds the property for the statement detail. | [optional] 
**OldHotelCode** | Pointer to **string** | Holds the value of property that user changed from to find and update. | [optional] 
**Quantity** | Pointer to **int32** | Number of Units (transactions, rooms or properties). | [optional] 
**RoutingAccount** | Pointer to **string** | Holds Routing account. If no value is provided, it will be defaulted to * | [optional] 
**ContractAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**InvoiceAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**OrderByList** | Pointer to [**[]OrderByListTypeInner**](OrderByListTypeInner.md) |  | [optional] 

## Methods

### NewChannelStatementDetailType

`func NewChannelStatementDetailType() *ChannelStatementDetailType`

NewChannelStatementDetailType instantiates a new ChannelStatementDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelStatementDetailTypeWithDefaults

`func NewChannelStatementDetailTypeWithDefaults() *ChannelStatementDetailType`

NewChannelStatementDetailTypeWithDefaults instantiates a new ChannelStatementDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContractId

`func (o *ChannelStatementDetailType) GetContractId() UniqueIDType`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *ChannelStatementDetailType) GetContractIdOk() (*UniqueIDType, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *ChannelStatementDetailType) SetContractId(v UniqueIDType)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *ChannelStatementDetailType) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetSequence

`func (o *ChannelStatementDetailType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ChannelStatementDetailType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ChannelStatementDetailType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ChannelStatementDetailType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetFeeType

`func (o *ChannelStatementDetailType) GetFeeType() ContractFeeTypeType`

GetFeeType returns the FeeType field if non-nil, zero value otherwise.

### GetFeeTypeOk

`func (o *ChannelStatementDetailType) GetFeeTypeOk() (*ContractFeeTypeType, bool)`

GetFeeTypeOk returns a tuple with the FeeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeType

`func (o *ChannelStatementDetailType) SetFeeType(v ContractFeeTypeType)`

SetFeeType sets FeeType field to given value.

### HasFeeType

`func (o *ChannelStatementDetailType) HasFeeType() bool`

HasFeeType returns a boolean if a field has been set.

### GetBookingChannelType

`func (o *ChannelStatementDetailType) GetBookingChannelType() string`

GetBookingChannelType returns the BookingChannelType field if non-nil, zero value otherwise.

### GetBookingChannelTypeOk

`func (o *ChannelStatementDetailType) GetBookingChannelTypeOk() (*string, bool)`

GetBookingChannelTypeOk returns a tuple with the BookingChannelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelType

`func (o *ChannelStatementDetailType) SetBookingChannelType(v string)`

SetBookingChannelType sets BookingChannelType field to given value.

### HasBookingChannelType

`func (o *ChannelStatementDetailType) HasBookingChannelType() bool`

HasBookingChannelType returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *ChannelStatementDetailType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelStatementDetailType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelStatementDetailType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelStatementDetailType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetContractPricing

`func (o *ChannelStatementDetailType) GetContractPricing() ContractPricingType`

GetContractPricing returns the ContractPricing field if non-nil, zero value otherwise.

### GetContractPricingOk

`func (o *ChannelStatementDetailType) GetContractPricingOk() (*ContractPricingType, bool)`

GetContractPricingOk returns a tuple with the ContractPricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractPricing

`func (o *ChannelStatementDetailType) SetContractPricing(v ContractPricingType)`

SetContractPricing sets ContractPricing field to given value.

### HasContractPricing

`func (o *ChannelStatementDetailType) HasContractPricing() bool`

HasContractPricing returns a boolean if a field has been set.

### GetContractRangeInformation

`func (o *ChannelStatementDetailType) GetContractRangeInformation() ContractRangeInformationType`

GetContractRangeInformation returns the ContractRangeInformation field if non-nil, zero value otherwise.

### GetContractRangeInformationOk

`func (o *ChannelStatementDetailType) GetContractRangeInformationOk() (*ContractRangeInformationType, bool)`

GetContractRangeInformationOk returns a tuple with the ContractRangeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractRangeInformation

`func (o *ChannelStatementDetailType) SetContractRangeInformation(v ContractRangeInformationType)`

SetContractRangeInformation sets ContractRangeInformation field to given value.

### HasContractRangeInformation

`func (o *ChannelStatementDetailType) HasContractRangeInformation() bool`

HasContractRangeInformation returns a boolean if a field has been set.

### GetFrequency

`func (o *ChannelStatementDetailType) GetFrequency() ContractPriceFrequencyType`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *ChannelStatementDetailType) GetFrequencyOk() (*ContractPriceFrequencyType, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *ChannelStatementDetailType) SetFrequency(v ContractPriceFrequencyType)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *ChannelStatementDetailType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.

### GetNote

`func (o *ChannelStatementDetailType) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *ChannelStatementDetailType) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *ChannelStatementDetailType) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *ChannelStatementDetailType) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetStatementId

`func (o *ChannelStatementDetailType) GetStatementId() UniqueIDType`

GetStatementId returns the StatementId field if non-nil, zero value otherwise.

### GetStatementIdOk

`func (o *ChannelStatementDetailType) GetStatementIdOk() (*UniqueIDType, bool)`

GetStatementIdOk returns a tuple with the StatementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementId

`func (o *ChannelStatementDetailType) SetStatementId(v UniqueIDType)`

SetStatementId sets StatementId field to given value.

### HasStatementId

`func (o *ChannelStatementDetailType) HasStatementId() bool`

HasStatementId returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelStatementDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelStatementDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelStatementDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelStatementDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetOldHotelCode

`func (o *ChannelStatementDetailType) GetOldHotelCode() string`

GetOldHotelCode returns the OldHotelCode field if non-nil, zero value otherwise.

### GetOldHotelCodeOk

`func (o *ChannelStatementDetailType) GetOldHotelCodeOk() (*string, bool)`

GetOldHotelCodeOk returns a tuple with the OldHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldHotelCode

`func (o *ChannelStatementDetailType) SetOldHotelCode(v string)`

SetOldHotelCode sets OldHotelCode field to given value.

### HasOldHotelCode

`func (o *ChannelStatementDetailType) HasOldHotelCode() bool`

HasOldHotelCode returns a boolean if a field has been set.

### GetQuantity

`func (o *ChannelStatementDetailType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ChannelStatementDetailType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ChannelStatementDetailType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ChannelStatementDetailType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRoutingAccount

`func (o *ChannelStatementDetailType) GetRoutingAccount() string`

GetRoutingAccount returns the RoutingAccount field if non-nil, zero value otherwise.

### GetRoutingAccountOk

`func (o *ChannelStatementDetailType) GetRoutingAccountOk() (*string, bool)`

GetRoutingAccountOk returns a tuple with the RoutingAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingAccount

`func (o *ChannelStatementDetailType) SetRoutingAccount(v string)`

SetRoutingAccount sets RoutingAccount field to given value.

### HasRoutingAccount

`func (o *ChannelStatementDetailType) HasRoutingAccount() bool`

HasRoutingAccount returns a boolean if a field has been set.

### GetContractAmount

`func (o *ChannelStatementDetailType) GetContractAmount() CurrencyAmountType`

GetContractAmount returns the ContractAmount field if non-nil, zero value otherwise.

### GetContractAmountOk

`func (o *ChannelStatementDetailType) GetContractAmountOk() (*CurrencyAmountType, bool)`

GetContractAmountOk returns a tuple with the ContractAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractAmount

`func (o *ChannelStatementDetailType) SetContractAmount(v CurrencyAmountType)`

SetContractAmount sets ContractAmount field to given value.

### HasContractAmount

`func (o *ChannelStatementDetailType) HasContractAmount() bool`

HasContractAmount returns a boolean if a field has been set.

### GetInvoiceAmount

`func (o *ChannelStatementDetailType) GetInvoiceAmount() CurrencyAmountType`

GetInvoiceAmount returns the InvoiceAmount field if non-nil, zero value otherwise.

### GetInvoiceAmountOk

`func (o *ChannelStatementDetailType) GetInvoiceAmountOk() (*CurrencyAmountType, bool)`

GetInvoiceAmountOk returns a tuple with the InvoiceAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceAmount

`func (o *ChannelStatementDetailType) SetInvoiceAmount(v CurrencyAmountType)`

SetInvoiceAmount sets InvoiceAmount field to given value.

### HasInvoiceAmount

`func (o *ChannelStatementDetailType) HasInvoiceAmount() bool`

HasInvoiceAmount returns a boolean if a field has been set.

### GetOrderByList

`func (o *ChannelStatementDetailType) GetOrderByList() []OrderByListTypeInner`

GetOrderByList returns the OrderByList field if non-nil, zero value otherwise.

### GetOrderByListOk

`func (o *ChannelStatementDetailType) GetOrderByListOk() (*[]OrderByListTypeInner, bool)`

GetOrderByListOk returns a tuple with the OrderByList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderByList

`func (o *ChannelStatementDetailType) SetOrderByList(v []OrderByListTypeInner)`

SetOrderByList sets OrderByList field to given value.

### HasOrderByList

`func (o *ChannelStatementDetailType) HasOrderByList() bool`

HasOrderByList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


