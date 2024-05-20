# CCSurchargeAmountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the payment is being posted. | [optional] 
**PaymentMethod** | Pointer to [**CashieringPaymentMethodType**](CashieringPaymentMethodType.md) |  | [optional] 
**SurchargeAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**SurchargeInfo** | Pointer to [**CCSurchargeInfoType**](CCSurchargeInfoType.md) |  | [optional] 

## Methods

### NewCCSurchargeAmountType

`func NewCCSurchargeAmountType() *CCSurchargeAmountType`

NewCCSurchargeAmountType instantiates a new CCSurchargeAmountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCSurchargeAmountTypeWithDefaults

`func NewCCSurchargeAmountTypeWithDefaults() *CCSurchargeAmountType`

NewCCSurchargeAmountTypeWithDefaults instantiates a new CCSurchargeAmountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CCSurchargeAmountType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CCSurchargeAmountType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CCSurchargeAmountType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CCSurchargeAmountType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *CCSurchargeAmountType) GetPaymentMethod() CashieringPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *CCSurchargeAmountType) GetPaymentMethodOk() (*CashieringPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *CCSurchargeAmountType) SetPaymentMethod(v CashieringPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *CCSurchargeAmountType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetSurchargeAmount

`func (o *CCSurchargeAmountType) GetSurchargeAmount() CurrencyAmountType`

GetSurchargeAmount returns the SurchargeAmount field if non-nil, zero value otherwise.

### GetSurchargeAmountOk

`func (o *CCSurchargeAmountType) GetSurchargeAmountOk() (*CurrencyAmountType, bool)`

GetSurchargeAmountOk returns a tuple with the SurchargeAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurchargeAmount

`func (o *CCSurchargeAmountType) SetSurchargeAmount(v CurrencyAmountType)`

SetSurchargeAmount sets SurchargeAmount field to given value.

### HasSurchargeAmount

`func (o *CCSurchargeAmountType) HasSurchargeAmount() bool`

HasSurchargeAmount returns a boolean if a field has been set.

### GetSurchargeInfo

`func (o *CCSurchargeAmountType) GetSurchargeInfo() CCSurchargeInfoType`

GetSurchargeInfo returns the SurchargeInfo field if non-nil, zero value otherwise.

### GetSurchargeInfoOk

`func (o *CCSurchargeAmountType) GetSurchargeInfoOk() (*CCSurchargeInfoType, bool)`

GetSurchargeInfoOk returns a tuple with the SurchargeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurchargeInfo

`func (o *CCSurchargeAmountType) SetSurchargeInfo(v CCSurchargeInfoType)`

SetSurchargeInfo sets SurchargeInfo field to given value.

### HasSurchargeInfo

`func (o *CCSurchargeAmountType) HasSurchargeInfo() bool`

HasSurchargeInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


