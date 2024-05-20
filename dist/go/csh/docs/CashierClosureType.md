# CashierClosureType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierInfo** | Pointer to [**CashierClosureNoType**](CashierClosureNoType.md) |  | [optional] 
**HotelCurrencyAmountList** | Pointer to [**[]HotelCashierClosureCurrencyAmountType**](HotelCashierClosureCurrencyAmountType.md) | Currency Hotels Amounts for Cashier Shift. | [optional] 
**SummaryCurrencyAmountList** | Pointer to [**[]CashierClosureCurrencyAmountType**](CashierClosureCurrencyAmountType.md) | Currency Total Amounts for Cashier Shift. | [optional] 

## Methods

### NewCashierClosureType

`func NewCashierClosureType() *CashierClosureType`

NewCashierClosureType instantiates a new CashierClosureType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierClosureTypeWithDefaults

`func NewCashierClosureTypeWithDefaults() *CashierClosureType`

NewCashierClosureTypeWithDefaults instantiates a new CashierClosureType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierInfo

`func (o *CashierClosureType) GetCashierInfo() CashierClosureNoType`

GetCashierInfo returns the CashierInfo field if non-nil, zero value otherwise.

### GetCashierInfoOk

`func (o *CashierClosureType) GetCashierInfoOk() (*CashierClosureNoType, bool)`

GetCashierInfoOk returns a tuple with the CashierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierInfo

`func (o *CashierClosureType) SetCashierInfo(v CashierClosureNoType)`

SetCashierInfo sets CashierInfo field to given value.

### HasCashierInfo

`func (o *CashierClosureType) HasCashierInfo() bool`

HasCashierInfo returns a boolean if a field has been set.

### GetHotelCurrencyAmountList

`func (o *CashierClosureType) GetHotelCurrencyAmountList() []HotelCashierClosureCurrencyAmountType`

GetHotelCurrencyAmountList returns the HotelCurrencyAmountList field if non-nil, zero value otherwise.

### GetHotelCurrencyAmountListOk

`func (o *CashierClosureType) GetHotelCurrencyAmountListOk() (*[]HotelCashierClosureCurrencyAmountType, bool)`

GetHotelCurrencyAmountListOk returns a tuple with the HotelCurrencyAmountList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCurrencyAmountList

`func (o *CashierClosureType) SetHotelCurrencyAmountList(v []HotelCashierClosureCurrencyAmountType)`

SetHotelCurrencyAmountList sets HotelCurrencyAmountList field to given value.

### HasHotelCurrencyAmountList

`func (o *CashierClosureType) HasHotelCurrencyAmountList() bool`

HasHotelCurrencyAmountList returns a boolean if a field has been set.

### GetSummaryCurrencyAmountList

`func (o *CashierClosureType) GetSummaryCurrencyAmountList() []CashierClosureCurrencyAmountType`

GetSummaryCurrencyAmountList returns the SummaryCurrencyAmountList field if non-nil, zero value otherwise.

### GetSummaryCurrencyAmountListOk

`func (o *CashierClosureType) GetSummaryCurrencyAmountListOk() (*[]CashierClosureCurrencyAmountType, bool)`

GetSummaryCurrencyAmountListOk returns a tuple with the SummaryCurrencyAmountList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaryCurrencyAmountList

`func (o *CashierClosureType) SetSummaryCurrencyAmountList(v []CashierClosureCurrencyAmountType)`

SetSummaryCurrencyAmountList sets SummaryCurrencyAmountList field to given value.

### HasSummaryCurrencyAmountList

`func (o *CashierClosureType) HasSummaryCurrencyAmountList() bool`

HasSummaryCurrencyAmountList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


