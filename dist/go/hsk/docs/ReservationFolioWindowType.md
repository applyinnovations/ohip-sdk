# ReservationFolioWindowType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PaymentMethod** | Pointer to **string** | Payment Method Type | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 

## Methods

### NewReservationFolioWindowType

`func NewReservationFolioWindowType() *ReservationFolioWindowType`

NewReservationFolioWindowType instantiates a new ReservationFolioWindowType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationFolioWindowTypeWithDefaults

`func NewReservationFolioWindowTypeWithDefaults() *ReservationFolioWindowType`

NewReservationFolioWindowTypeWithDefaults instantiates a new ReservationFolioWindowType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayeeInfo

`func (o *ReservationFolioWindowType) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *ReservationFolioWindowType) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *ReservationFolioWindowType) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *ReservationFolioWindowType) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetBalance

`func (o *ReservationFolioWindowType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ReservationFolioWindowType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ReservationFolioWindowType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ReservationFolioWindowType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *ReservationFolioWindowType) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *ReservationFolioWindowType) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *ReservationFolioWindowType) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *ReservationFolioWindowType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *ReservationFolioWindowType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *ReservationFolioWindowType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *ReservationFolioWindowType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *ReservationFolioWindowType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


