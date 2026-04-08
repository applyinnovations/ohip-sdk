# StatementDetailsStatisticType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Holds the property for the statement detail statistic By resort. | [optional] 
**BookingChannelCode** | Pointer to **string** | Holds channel of the statement details statistic By Channel. | [optional] 
**BookingChannelType** | Pointer to **string** | Holds channel type of the statement details statistic By Channel Type. | [optional] 
**FeeType** | Pointer to [**ContractFeeTypeType**](ContractFeeTypeType.md) |  | [optional] 
**ContractAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**InvoiceAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**DetailsCount** | Pointer to **int32** | Channel billing statement details record count grouped by Resort/Channel/Channel Type/Fee Type. | [optional] 

## Methods

### NewStatementDetailsStatisticType

`func NewStatementDetailsStatisticType() *StatementDetailsStatisticType`

NewStatementDetailsStatisticType instantiates a new StatementDetailsStatisticType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatementDetailsStatisticTypeWithDefaults

`func NewStatementDetailsStatisticTypeWithDefaults() *StatementDetailsStatisticType`

NewStatementDetailsStatisticTypeWithDefaults instantiates a new StatementDetailsStatisticType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *StatementDetailsStatisticType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StatementDetailsStatisticType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StatementDetailsStatisticType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StatementDetailsStatisticType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *StatementDetailsStatisticType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *StatementDetailsStatisticType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *StatementDetailsStatisticType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *StatementDetailsStatisticType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetBookingChannelType

`func (o *StatementDetailsStatisticType) GetBookingChannelType() string`

GetBookingChannelType returns the BookingChannelType field if non-nil, zero value otherwise.

### GetBookingChannelTypeOk

`func (o *StatementDetailsStatisticType) GetBookingChannelTypeOk() (*string, bool)`

GetBookingChannelTypeOk returns a tuple with the BookingChannelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelType

`func (o *StatementDetailsStatisticType) SetBookingChannelType(v string)`

SetBookingChannelType sets BookingChannelType field to given value.

### HasBookingChannelType

`func (o *StatementDetailsStatisticType) HasBookingChannelType() bool`

HasBookingChannelType returns a boolean if a field has been set.

### GetFeeType

`func (o *StatementDetailsStatisticType) GetFeeType() ContractFeeTypeType`

GetFeeType returns the FeeType field if non-nil, zero value otherwise.

### GetFeeTypeOk

`func (o *StatementDetailsStatisticType) GetFeeTypeOk() (*ContractFeeTypeType, bool)`

GetFeeTypeOk returns a tuple with the FeeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeType

`func (o *StatementDetailsStatisticType) SetFeeType(v ContractFeeTypeType)`

SetFeeType sets FeeType field to given value.

### HasFeeType

`func (o *StatementDetailsStatisticType) HasFeeType() bool`

HasFeeType returns a boolean if a field has been set.

### GetContractAmount

`func (o *StatementDetailsStatisticType) GetContractAmount() CurrencyAmountType`

GetContractAmount returns the ContractAmount field if non-nil, zero value otherwise.

### GetContractAmountOk

`func (o *StatementDetailsStatisticType) GetContractAmountOk() (*CurrencyAmountType, bool)`

GetContractAmountOk returns a tuple with the ContractAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractAmount

`func (o *StatementDetailsStatisticType) SetContractAmount(v CurrencyAmountType)`

SetContractAmount sets ContractAmount field to given value.

### HasContractAmount

`func (o *StatementDetailsStatisticType) HasContractAmount() bool`

HasContractAmount returns a boolean if a field has been set.

### GetInvoiceAmount

`func (o *StatementDetailsStatisticType) GetInvoiceAmount() CurrencyAmountType`

GetInvoiceAmount returns the InvoiceAmount field if non-nil, zero value otherwise.

### GetInvoiceAmountOk

`func (o *StatementDetailsStatisticType) GetInvoiceAmountOk() (*CurrencyAmountType, bool)`

GetInvoiceAmountOk returns a tuple with the InvoiceAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceAmount

`func (o *StatementDetailsStatisticType) SetInvoiceAmount(v CurrencyAmountType)`

SetInvoiceAmount sets InvoiceAmount field to given value.

### HasInvoiceAmount

`func (o *StatementDetailsStatisticType) HasInvoiceAmount() bool`

HasInvoiceAmount returns a boolean if a field has been set.

### GetDetailsCount

`func (o *StatementDetailsStatisticType) GetDetailsCount() int32`

GetDetailsCount returns the DetailsCount field if non-nil, zero value otherwise.

### GetDetailsCountOk

`func (o *StatementDetailsStatisticType) GetDetailsCountOk() (*int32, bool)`

GetDetailsCountOk returns a tuple with the DetailsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailsCount

`func (o *StatementDetailsStatisticType) SetDetailsCount(v int32)`

SetDetailsCount sets DetailsCount field to given value.

### HasDetailsCount

`func (o *StatementDetailsStatisticType) HasDetailsCount() bool`

HasDetailsCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


